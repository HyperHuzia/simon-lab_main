// The slides of an application (AppSlides.astro). A set plays once through each time it comes into view: every few
// seconds the next slide, decoded beforehand, fades in (a picture drifts closer, a drawing builds up); the last slide
// stays until the set leaves the view, and next time it starts over. A mouse over the set or the focus inside holds it.
// On the applications index the explorer shows one set at a time (showSlides / hideSlides) and a set shown again
// starts over. Calm readers (reduced motion, Save-Data): the first slide, no zoom, no autoplay.
import { prefs } from './scrolly';

type Show = {
  root: HTMLElement;
  slides: HTMLElement[];
  ms: number;
  index: number;
  /** idle: not started (or shown again); playing: on its way through; done: played through */
  phase: 'idle' | 'playing' | 'done';
  active: boolean;
  visible: boolean;
  held: boolean;
  running: boolean;
  timer: number;
  /** when the current slide's time last resumed, and how much of it is left */
  since: number;
  left: number;
};

const shows = new Map<HTMLElement, Show>();

/** the slide's picture, from its data-srcset / data-src, decoded (resolves on failure too) */
function load(slide: HTMLElement | undefined): Promise<void> {
  const img = slide?.querySelector('img');
  if (!slide || !img) return Promise.resolve();
  slide.querySelectorAll<HTMLElement>('[data-srcset]').forEach((n) => {
    n.setAttribute('srcset', n.dataset.srcset ?? '');
    n.removeAttribute('data-srcset');
  });
  if (img.dataset.src) {
    img.src = img.dataset.src;
    img.removeAttribute('data-src');
  }
  return img.decode().catch(() => undefined);
}

/** a drawing builds up again each time it comes on; a picture drifts closer (not for calm readers) */
function replay(slide: HTMLElement) {
  const drawing = slide.querySelector('.cs') !== null;
  const attr = drawing ? 'data-build' : 'data-zoom';
  if (!drawing && prefs.calm) return;
  slide.removeAttribute(attr);
  void slide.offsetWidth;
  slide.setAttribute(attr, '');
}

function show(s: Show, i: number) {
  s.index = i;
  s.slides.forEach((el, k) => {
    el.toggleAttribute('data-on', k === i);
    if (k === i) el.removeAttribute('aria-hidden');
    else el.setAttribute('aria-hidden', 'true');
  });
  replay(s.slides[i]);
  void load(s.slides[i + 1]);
}

async function go(s: Show, i: number) {
  await load(s.slides[i]);
  show(s, i);
}

/** start, pause or resume the show from its state: it runs while shown, in view and not held */
function sync(s: Show) {
  if (s.phase === 'idle' && s.active && s.visible && !prefs.calm) {
    s.phase = 'playing';
    s.left = s.ms;
    s.root.setAttribute('data-playing', '');
    replay(s.slides[s.index]);
    void load(s.slides[s.index + 1]);
  }
  const run = s.phase === 'playing' && s.active && s.visible && !s.held;
  s.root.toggleAttribute('data-held', s.phase === 'playing' && !run);
  if (run && !s.running) {
    s.running = true;
    s.since = performance.now();
    s.timer = window.setTimeout(() => void advance(s), s.left);
  } else if (!run && s.running) {
    s.running = false;
    clearTimeout(s.timer);
    s.left = Math.max(0, s.left - (performance.now() - s.since));
  }
}

async function advance(s: Show) {
  s.running = false;
  const next = s.index + 1;
  if (next >= s.slides.length) return end(s);
  await go(s, next);
  if (s.phase !== 'playing') return;
  s.left = s.ms;
  sync(s);
}

function end(s: Show) {
  s.phase = 'done';
  s.running = false;
  clearTimeout(s.timer);
  s.root.removeAttribute('data-playing');
  s.root.removeAttribute('data-held');
}

/** the explorer selects the set's application: it starts over */
export function showSlides(root: HTMLElement) {
  const s = shows.get(root);
  if (!s) return;
  end(s);
  s.phase = 'idle';
  s.active = true;
  void go(s, 0).then(() => sync(s));
}

/** the explorer selects another application: the set stops where it is */
export function hideSlides(root: HTMLElement) {
  const s = shows.get(root);
  if (!s) return;
  s.active = false;
  end(s);
  s.phase = 'idle';
}

export function initSlides(root: ParentNode = document) {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        const s = shows.get(e.target as HTMLElement);
        if (!s) return;
        s.visible = e.isIntersecting;
        // out of view, a set goes back to its first slide and plays again next time
        if (!s.visible && s.phase !== 'idle') {
          end(s);
          s.phase = 'idle';
          show(s, 0);
        }
        sync(s);
      }),
    { threshold: 0.35 },
  );
  root.querySelectorAll<HTMLElement>('[data-slides]').forEach((el) => {
    const card = el.closest<HTMLElement>('[data-card]');
    const s: Show = {
      root: el,
      slides: [...el.querySelectorAll<HTMLElement>('[data-slide]')],
      ms: Number(el.dataset.ms) || 4500,
      index: 0,
      phase: 'idle',
      active: !card || card.hasAttribute('data-on'),
      visible: false,
      held: false,
      running: false,
      timer: 0,
      since: 0,
      left: 0,
    };
    shows.set(el, s);
    el.addEventListener('pointerenter', (e) => {
      if (e.pointerType !== 'mouse') return;
      s.held = true;
      sync(s);
    });
    el.addEventListener('pointerleave', (e) => {
      if (e.pointerType !== 'mouse') return;
      s.held = el.contains(document.activeElement);
      sync(s);
    });
    el.addEventListener('focusin', () => {
      s.held = true;
      sync(s);
    });
    el.addEventListener('focusout', (e) => {
      if (el.contains(e.relatedTarget as Node | null)) return;
      s.held = el.matches(':hover');
      sync(s);
    });
    if (s.active && el.hasAttribute('data-lazy')) void load(s.slides[0]);
    io.observe(el);
  });
}
