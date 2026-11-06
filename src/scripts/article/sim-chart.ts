// The batch chart beside the pv-sim clip (SimChart.astro). The playhead follows the clip: --t = currentTime /
// duration (one entry of hud.json per clip frame), read each frame while the clip plays. Without the clip (not
// exported yet, Save-Data) a timer plays the same 12.7 s. Hovering the plots inspects any moment.

type Series = {
  t: number[];
  clock: number[];
  step: number[];
  temp: number[];
  level: number[];
  mass: number[];
  steps: Record<string, string>;
};

export type SimChart = {
  /** run with the clip (or the timer); direction -1 shows the end at once */
  start(video: HTMLVideoElement | null, direction: 1 | -1, calm: boolean): void;
  /** jump to the end of the batch */
  finish(): void;
  stop(): void;
};

const DOMAIN = { temp: [10, 66], level: [0, 100], mass: [0, 6000] } as const;
const FALLBACK_S = 12.7;

export function createSimChart(root: HTMLElement | null): SimChart | null {
  const json = root?.querySelector('script[data-sim-series]');
  if (!root || !json?.textContent) return null;
  const s = JSON.parse(json.textContent) as Series;
  const lang = document.documentElement.lang || 'en';
  const f1 = new Intl.NumberFormat(lang, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  const f0 = new Intl.NumberFormat(lang, { maximumFractionDigits: 0 });
  const q = (sel: string) => root.querySelector<HTMLElement>(sel)!;
  const clockEl = q('[data-clock]');
  const stepN = q('[data-step-n]');
  const stepName = q('[data-step-name]');
  // the server-rendered "Step …" (an ellipsis = no value yet, as in SimChart.astro) minus its placeholder
  const stepLabel = (stepN.textContent ?? '').replace(/[…–—\s]+$/, '');
  const vals = { temp: q('[data-val="temp"]'), level: q('[data-val="level"]'), mass: q('[data-val="mass"]') };
  const dots = { temp: q('[data-dot="temp"]'), level: q('[data-dot="level"]'), mass: q('[data-dot="mass"]') };
  const phases = [...root.querySelectorAll<HTMLElement>('[data-phase]')].map((el) => ({ el, at: Number(el.dataset.at ?? 1) }));
  const plots = q('[data-plots]');

  let raf = 0;
  let t = 0;
  let inspecting = false;
  const last: Record<string, string> = {};
  const write = (el: HTMLElement, key: string, value: string) => {
    if (last[key] !== value) {
      last[key] = value;
      el.textContent = value;
    }
  };

  function sample(at: number) {
    const ts = s.t;
    let hi = ts.findIndex((v) => v >= at);
    if (hi < 0) hi = ts.length - 1;
    const lo = Math.max(0, hi - 1);
    const span = ts[hi] - ts[lo] || 1;
    const k = Math.min(1, Math.max(0, (at - ts[lo]) / span));
    const lerp = (a: number[]) => a[lo] + (a[hi] - a[lo]) * k;
    return {
      clock: lerp(s.clock),
      step: k < 0.5 ? s.step[lo] : s.step[hi],
      temp: lerp(s.temp) / 10,
      level: lerp(s.level) / 10,
      mass: lerp(s.mass),
    };
  }

  const y = (v: number, [lo, hi]: readonly [number, number]) => (100 - ((v - lo) / (hi - lo)) * 100).toFixed(2);
  const hms = (sec: number) =>
    [Math.floor(sec / 3600), Math.floor((sec % 3600) / 60), Math.floor(sec % 60)].map((v) => String(v).padStart(2, '0')).join(':');

  function show(at: number) {
    const v = sample(at);
    write(clockEl, 'clock', hms(v.clock));
    write(stepN, 'stepN', v.step ? `${stepLabel} ${v.step}` : `${stepLabel} …`);
    write(stepName, 'stepName', v.step ? (s.steps[v.step] ?? '') : '');
    write(vals.temp, 'temp', `${f1.format(v.temp)} °C`);
    write(vals.level, 'level', `${f0.format(v.level)} %`);
    write(vals.mass, 'mass', `${f1.format(v.mass / 1000)} t`);
    dots.temp.style.setProperty('--y', y(v.temp, DOMAIN.temp));
    dots.level.style.setProperty('--y', y(v.level, DOMAIN.level));
    dots.mass.style.setProperty('--y', y(v.mass, DOMAIN.mass));
  }

  function render(at: number) {
    t = Math.min(1, Math.max(0, at));
    root!.style.setProperty('--t', t.toFixed(4));
    let now: HTMLElement | null = null;
    for (const p of phases) {
      const on = t >= p.at - 0.0005;
      p.el.toggleAttribute('data-on', on);
      if (on) now = p.el;
    }
    phases.forEach((p) => p.el.toggleAttribute('data-now', p.el === now && t < 0.999));
    root!.toggleAttribute('data-done', t >= 0.999);
    if (!inspecting) show(t);
  }

  function stop() {
    cancelAnimationFrame(raf);
    raf = 0;
  }

  function follow(video: HTMLVideoElement) {
    const tick = () => {
      const d = video.duration;
      if (d && Number.isFinite(d)) render(video.ended ? 1 : video.currentTime / d);
      if (!video.ended) raf = requestAnimationFrame(tick);
    };
    stop();
    raf = requestAnimationFrame(tick);
  }

  function timer() {
    const t0 = performance.now();
    const tick = (now: number) => {
      const at = (now - t0) / (FALLBACK_S * 1000);
      render(at);
      if (at < 1) raf = requestAnimationFrame(tick);
    };
    stop();
    raf = requestAnimationFrame(tick);
  }

  // inspect any moment by hovering a plot (mouse and pen; touch keeps the playhead). The three plots share the time
  // axis, so one position marks the same moment in all of them.
  let hovered: HTMLElement | null = null;
  let box: DOMRect | null = null;
  plots.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch') return;
    const plot = (e.target as Element).closest<HTMLElement>('[data-plot]');
    if (!plot) return;
    if (plot !== hovered) {
      hovered = plot;
      box = plot.getBoundingClientRect();
    }
    const h = Math.min(1, Math.max(0, (e.clientX - box!.left) / box!.width));
    inspecting = true;
    root.setAttribute('data-inspect', '');
    root.style.setProperty('--h', h.toFixed(4));
    show(h);
  });
  plots.addEventListener('pointerleave', () => {
    hovered = null;
    box = null;
    inspecting = false;
    root.removeAttribute('data-inspect');
    show(t);
  });

  render(0);

  return {
    start(video, direction, calm) {
      if (calm || direction < 0) {
        stop();
        render(1);
        return;
      }
      if (video?.dataset.loaded) {
        render(0);
        follow(video);
        video.addEventListener('playing', () => follow(video), { once: true });
      } else {
        timer();
      }
    },
    finish() {
      stop();
      render(1);
    },
    stop,
  };
}
