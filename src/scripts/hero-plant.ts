// The homepage's hero drawing (HeroPlant.astro) runs one batch, once per visit, after the page has loaded and when at
// least half of the drawing is in view:
//   1. filling: P-101 runs, the feed flows into the top head of R-101 (FT 12 m³/h), T-101 falls, R-101 fills
//   2. dissolving: the agitator turns, the temperature rises (TT 20 → 60 °C), the batch warms in colour
//   3. discharge: XV opens, the batch flows through the cooler E-101 into T-102 with cooling water on (TIC 40 °C)
//   4. documents: the code line of each working item has been lit; now the four documents light up in turn
//   5. slides from the film, painted on a canvas (a canvas is no LCP candidate, so a large picture shown late never
//      becomes the page's LCP): PlantMesh (its camera orbiting the assembled unit, from a muted clip that is never
//      in the DOM, or the still), MechGraph, IonGrid (the kit gives way to the cabinet), the documents landing
// Then the drawing comes back at rest, with the button that opens the film. The drawing leaving the view, the tab being
// hidden, reduced motion or Save-Data: the end state at once. Only transform and opacity animate (Web Animations),
// plus attributes the CSS turns into transitions and dashes (a registered custom property).
import { prefs } from './scrolly';
import { timeline } from './timeline';

type Srcs = Record<string, string>;
type Clip = { sources: { src: string; type: string }[] };
type Slide = { caption: string; video?: Clip; images?: (Srcs | undefined)[]; pages?: (Srcs | undefined)[] };
type Loaded = { caption: string; video: HTMLVideoElement | null; images: HTMLImageElement[]; pages: HTMLImageElement[] };

const SLIDE = 2800;
const FADE = 600;

/** the smallest rendition at least `px` wide (or the largest) */
const pick = (srcs: Srcs | undefined, px: number) => {
  if (!srcs) return undefined;
  const widths = Object.keys(srcs)
    .map(Number)
    .sort((a, b) => a - b);
  return srcs[widths.find((w) => w >= px) ?? widths[widths.length - 1]];
};

/** true when the browser draws the clip's transparency (Safari plays VP9 without its alpha plane) */
const transparent = (video: HTMLVideoElement) => {
  try {
    const probe = document.createElement('canvas');
    probe.width = 16;
    probe.height = 9;
    const c = probe.getContext('2d', { willReadFrequently: true });
    if (!c) return false;
    c.drawImage(video, 0, 0, 16, 9);
    return c.getImageData(0, 0, 1, 1).data[3] < 128; // the frame's corner is empty background
  } catch {
    return false;
  }
};

/** a muted clip ready to play from its start, or null (no sources, a decoding error, too slow, no transparency) */
const ready = (clip: Clip | undefined) =>
  new Promise<HTMLVideoElement | null>((done) => {
    if (!clip?.sources.length) return done(null);
    const video = document.createElement('video');
    video.muted = true;
    video.playsInline = true;
    video.preload = 'auto';
    const timer = window.setTimeout(() => done(null), 8000);
    const fail = () => (clearTimeout(timer), done(null));
    clip.sources.forEach((s, i) => {
      const source = document.createElement('source');
      source.src = s.src;
      source.type = s.type;
      // a source that cannot play reports on itself; after the last one nothing is left to try
      if (i === clip.sources.length - 1) source.addEventListener('error', fail, { once: true });
      video.append(source);
    });
    video.addEventListener('canplaythrough', () => (clearTimeout(timer), done(transparent(video) ? video : null)), { once: true });
    video.addEventListener('error', fail, { once: true });
    video.load();
  });

const decode = async (src: string | undefined) => {
  if (!src) return undefined;
  const img = new Image();
  img.decoding = 'async';
  img.src = src;
  try {
    await img.decode();
    return img;
  } catch {
    return undefined;
  }
};

export function initHeroPlant(root: ParentNode = document) {
  const box = root.querySelector<HTMLElement>('[data-hero-plant]');
  if (!box || prefs.calm) return;
  const frame = box.querySelector<HTMLElement>('.hp-frame');
  const canvas = box.querySelector<HTMLCanvasElement>('[data-slides-canvas]');
  const caption = box.querySelector<HTMLElement>('[data-slide-caption]');
  const ctx = canvas?.getContext('2d');
  if (!frame || !canvas || !caption || !ctx) return;
  const q = <T extends Element = SVGElement>(sel: string) => [...box.querySelectorAll<T>(sel)];
  const level = Object.fromEntries(q<SVGGElement>('[data-level]').map((g) => [g.dataset.level!, g]));
  const stream = Object.fromEntries(q('[data-stream]').map((p) => [(p as SVGElement).dataset.stream!, p]));
  const read = Object.fromEntries(q<SVGTextElement>('[data-read]').map((t) => [t.dataset.read!, t]));
  const flows = (name: string) => q(`[data-flow="${name}"]`);
  const warm = box.querySelector('[data-warm]');
  const rotor = box.querySelector('[data-rotor]');
  const impeller = box.querySelector('[data-impeller]');
  const valves = q('[data-valve]');
  const lines = q('[data-line]');
  const docs = q('[data-doc]');
  let slides: Slide[] = [];
  try {
    slides = JSON.parse(box.dataset.slides ?? '[]') as Slide[];
  } catch {
    slides = [];
  }

  const tl = timeline();
  const { clock, motion } = tl;
  let started = false;
  let playing = false;

  const on = (els: (Element | null | undefined)[], value = true) => els.forEach((el) => el?.toggleAttribute('data-on', value));
  const hot = (items: number[]) => lines.forEach((el) => el.toggleAttribute('data-hot', items.includes(Number((el as SVGElement).dataset.line))));
  const fill = (name: string, from: number, to: number, ms: number) => {
    const g = level[name];
    if (!g) return;
    g.style.transform = `scaleY(${to})`;
    motion(g, [{ transform: `scaleY(${from})` }, { transform: `scaleY(${to})` }], { duration: ms, easing: 'cubic-bezier(0.45, 0, 0.55, 1)' });
  };
  /** a readout counting from one value to another, a few times a second */
  const count = (name: string, from: number, to: number, ms: number, unit: string) => {
    const el = read[name];
    if (!el) return;
    const start = clock.now;
    let next = 0;
    const stop = clock.every((dt) => {
      next -= dt;
      const f = Math.min(1, (clock.now - start) / ms);
      if (next <= 0 || f >= 1) {
        next = 200;
        el.textContent = `${Math.round(from + (to - from) * f)} ${unit}`;
      }
      if (f >= 1) stop();
    });
  };

  // ── the slides: a canvas over the frame, at the device's pixel density (at most 2)
  let loaded: Promise<Loaded[]> | null = null;
  const prepare = () => {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const w = frame.clientWidth * dpr;
    const h = frame.clientHeight * dpr;
    loaded ??= Promise.all(
      slides.map(async (s) => ({
        caption: s.caption,
        // the clip only in a frame wide enough to show it; a phone keeps the same picture, still
        video: frame.clientWidth >= 720 ? await ready(s.video) : null,
        images: (await Promise.all((s.images ?? []).map((src) => decode(pick(src, Math.min(w, h * 1.78)))))).filter((i): i is HTMLImageElement => !!i),
        pages: (await Promise.all((s.pages ?? []).map((src) => decode(pick(src, h * 1.1))))).filter((i): i is HTMLImageElement => !!i),
      })),
    ).then((list) => list.filter((s) => s.video || s.images.length || s.pages.length));
    return loaded;
  };

  /** how long a slide stays: a clip for its own length, a picture for SLIDE */
  const length = (s: Loaded) => (s.video && Number.isFinite(s.video.duration) ? Math.round(s.video.duration * 1000) : SLIDE);

  /** one slide at time t (ms): a clip plays (the camera's own move), pictures drift closer, the IonGrid kit gives way
   * to the cabinet (crossing over, never one on top of the other), pages land on a stack */
  const draw = (s: Loaded, t: number, alpha: number) => {
    const W = canvas.width;
    const H = canvas.height;
    ctx.globalAlpha = alpha;
    const zoom = 1 + 0.05 * Math.min(1, t / SLIDE);
    if (s.video) {
      const v = s.video;
      const scale = Math.min((H * 0.98) / v.videoHeight, (W * 0.9) / v.videoWidth);
      ctx.drawImage(v, (W - v.videoWidth * scale) / 2, (H - v.videoHeight * scale) / 2, v.videoWidth * scale, v.videoHeight * scale);
    } else if (s.images.length) {
      const mix = s.images.length === 1 ? 1 : Math.min(1, Math.max(0, (t - SLIDE * 0.42) / (SLIDE * 0.22)));
      s.images.forEach((img, k) => {
        // one picture, or two crossing over across the middle of the slide
        const a = s.images.length === 1 ? 1 : k === 0 ? 1 - mix : mix;
        if (a <= 0) return;
        const scale = Math.min((H * 0.98) / img.height, (W * 0.9) / img.width) * zoom;
        const dw = img.width * scale;
        const dh = img.height * scale;
        ctx.globalAlpha = alpha * a;
        ctx.drawImage(img, (W - dw) / 2, (H - dh) / 2, dw, dh);
      });
    } else {
      // pages, one after another, onto a slightly fanned stack
      s.pages.forEach((img, k) => {
        const at = k * 300;
        if (t < at) return;
        const f = Math.min(1, (t - at) / 420);
        const ease = 1 - (1 - f) ** 3;
        const ph = H * 0.74;
        const pw = (img.width / img.height) * ph;
        const x = W / 2 + (k - (s.pages.length - 1) / 2) * pw * 0.16;
        const y = H / 2 - (1 - ease) * H * 0.18;
        ctx.save();
        ctx.globalAlpha = alpha * ease;
        ctx.translate(x, y);
        ctx.rotate(((k - 2) * 3.2 * Math.PI) / 180);
        ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
        ctx.shadowBlur = H * 0.03;
        ctx.drawImage(img, -pw / 2, -ph / 2, pw, ph);
        ctx.restore();
      });
    }
    ctx.globalAlpha = 1;
  };

  const show = async (list: Loaded[]) => {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = Math.round(frame.clientWidth * dpr);
    canvas.height = Math.round(frame.clientHeight * dpr);
    box.setAttribute('data-slides-on', '');
    const lengths = list.map(length);
    const starts = lengths.map((_, i) => lengths.slice(0, i).reduce((a, b) => a + b, 0));
    const total = starts[starts.length - 1] + lengths[lengths.length - 1];
    const start = clock.now;
    let shown = -1;
    await new Promise<void>((done) => {
      const stop = clock.every(() => {
        const t = clock.now - start;
        let i = 0;
        while (i < list.length - 1 && t >= starts[i + 1]) i++;
        if (i !== shown) {
          shown = i;
          caption.textContent = list[i].caption;
          caption.setAttribute('data-on', '');
          const v = list[i].video;
          if (v) {
            v.currentTime = 0;
            void v.play().catch(() => undefined);
          }
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const local = t - starts[i];
        if (i > 0 && local < FADE) draw(list[i - 1], lengths[i - 1] + local, 1 - local / FADE);
        draw(list[i], local, i > 0 ? Math.min(1, local / FADE) : 1);
        if (t >= total) {
          stop();
          done();
        }
      });
    });
  };

  const finish = () => {
    if (!playing) return;
    playing = false;
    tl.stop();
    box.removeAttribute('data-playing');
    box.removeAttribute('data-slides-on');
    caption.removeAttribute('data-on');
    void loaded?.then((list) => list.forEach((s) => s.video?.pause()));
    on([...flows('feed'), ...flows('discharge'), ...flows('water'), stream.r101, stream.t102, rotor, impeller, ...valves, ...docs], false);
    hot([]);
  };

  const run = async () => {
    started = true;
    playing = true;
    box.setAttribute('data-playing', '');
    if (warm) (warm as SVGElement).style.opacity = '0';
    void prepare();
    await clock.wait(600);

    // 1. filling
    hot([0, 1, 2]);
    on([...flows('feed'), rotor, stream.r101]);
    fill('t101', 0.745, 0.49, 3300);
    fill('r101', 0, 0.62, 3300);
    count('lic', 62, 35, 3300, '%');
    if (read.ft) read.ft.textContent = '12 m³/h';
    await clock.wait(3400);
    on([...flows('feed'), rotor, stream.r101], false);
    if (read.ft) read.ft.textContent = '0 m³/h';

    // 2. dissolving
    hot([2]);
    on([impeller]);
    count('tt', 20, 60, 2400, '°C');
    if (warm) {
      (warm as SVGElement).style.opacity = '1';
      motion(warm, [{ opacity: 0 }, { opacity: 1 }], { duration: 2400 });
    }
    await clock.wait(2600);

    // 3. discharge through the cooler
    hot([2, 3, 4]);
    on([...valves, ...flows('discharge'), ...flows('water'), stream.t102]);
    fill('r101', 0.62, 0.04, 3300);
    fill('t102', 0.12, 0.62, 3300);
    await clock.wait(3400);
    on([impeller, ...valves, ...flows('discharge'), ...flows('water'), stream.t102], false);

    // 4. the documents
    hot([]);
    for (const d of docs) {
      d.setAttribute('data-on', '');
      await clock.wait(170);
    }
    await clock.wait(600);
    on(docs, false);

    // 5. the slides
    const list = await prepare();
    if (!playing) return;
    if (list.length) await show(list);
    finish();
  };

  const io = new IntersectionObserver(
    ([e]) => {
      if (!started && e.intersectionRatio >= 0.5) {
        void run();
      } else if (playing && !e.isIntersecting) {
        finish();
      }
    },
    { threshold: [0, 0.5] },
  );
  const begin = () => io.observe(box);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) finish();
  });
  if (document.readyState === 'complete') begin();
  else addEventListener('load', begin, { once: true });
}
