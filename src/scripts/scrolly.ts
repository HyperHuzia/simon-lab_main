// Scroll engine of the "Bottom-up" article: sticky stages with text beats scrolling over them.
//
// Markup
//   <section data-scrolly [data-progress="section" | "step"]>
//     <div data-stage data-state="first-state">…</div>    the sticky visual; CSS shows the layers of data-state
//     <div data-step data-state="first-state">…</div>     text beats in reading order (one per state change)
//   </section>
//   <div data-scrolly data-chapter-stage="processview" data-layer="processview">   the layer HUD follows the pinned
//                                                                                 stage of a layer chapter
//
// Behaviour
//   · active step = the last step whose top has passed the activation line: 62% of the small viewport height
//     (80% at ≤ 760px, where the stage sits on top of the screen). Before the first step the stage shows the
//     first state, idle (index -1, no enter event).
//   · on change: stage[data-state], stage[data-index], step[data-active], and data-on on the stage's [data-look]
//     layer for that state; then 'stage:leave' and 'stage:enter' (CustomEvent<StageDetail>) on the stage. Use
//     watch() to subscribe.
//   · --p (0–1) is written on the section only where data-progress asks for it: "section" = how far the pinned
//     section has travelled (hero delamination), "step" = how far the active step has travelled past the line (the
//     site plan's wipe, the terminal typing, the documents falling; 0 before the first step). With "step" the stage
//     also gets 'stage:progress' (CustomEvent<ProgressDetail>) whenever it changes, for scripts that follow it.
//     Everything else changes per state, through CSS transitions.
//   · sections are measured only while near the viewport (IntersectionObserver), in one requestAnimationFrame per
//     scroll burst (passive listeners); all reads happen before all writes.
//   · the viewport height comes from a fixed 100svh probe, so mobile URL bars do not shift the line.

export type StageDetail = {
  state: string;
  /** -1 = idle, before the first step */
  index: number;
  previous: string | null;
  /** 1 = scrolling down the story, -1 = back up (components jump to final states instead of replaying) */
  direction: 1 | -1;
  section: HTMLElement;
};

export type ChapterDetail = { id: string; layer: string | null };

/** 'stage:progress': how far the active step has travelled past the line (0–1), and which step it is */
export type ProgressDetail = { p: number; index: number };

type Section = {
  el: HTMLElement;
  stage: HTMLElement;
  steps: HTMLElement[];
  /** data-chapter-stage / data-layer: the chapter whose stage this is, for the layer HUD */
  chapter: string;
  layer: string | null;
  /** [data-look] layers of the stage; the one matching the state gets data-on */
  looks: HTMLElement[];
  progress: 'section' | 'step' | null;
  /** active step, -1 idle, -2 never measured */
  index: number;
  p: number;
  near: boolean;
  inview: boolean;
};

const LINE = 0.62;
const LINE_NARROW = 0.8;

const reducedMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
const narrowMQ = window.matchMedia('(max-width: 760px)');
const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;

/** Reader preferences: `calm` = reduced motion or Save-Data → no autoplay, final states. */
export const prefs = {
  get reduced() {
    return reducedMQ.matches;
  },
  saveData,
  get calm() {
    return reducedMQ.matches || saveData;
  },
};

const sections: Section[] = [];
let chapterNow: string | null = null;
let article: HTMLElement | null = null;
let bar: HTMLElement | null = null;
let barP = -1;
let vh = window.innerHeight;
let frame = 0;
let started = false;
let lastY = -1;

function emit(s: Section, type: 'stage:enter' | 'stage:leave', detail: StageDetail) {
  s.stage.dispatchEvent(new CustomEvent<StageDetail>(type, { detail }));
}

function setActive(s: Section, index: number, firstDirection: 1 | -1) {
  const prev = s.index;
  if (prev === index) return;
  const states = s.steps.map((st) => st.dataset.state ?? '');
  // first measurement of a section: the reader's scroll direction decides (on load: inside a section = already read)
  const direction: 1 | -1 = prev === -2 ? firstDirection : index > prev ? 1 : -1;
  const prevState = prev >= 0 ? states[prev] : null;
  const state = states[Math.max(0, index)] ?? s.stage.dataset.state ?? '';
  if (prev >= 0) emit(s, 'stage:leave', { state: prevState!, index: prev, previous: null, direction, section: s.el });
  s.index = index;
  s.stage.dataset.state = state;
  s.stage.dataset.index = String(index);
  s.steps.forEach((st, i) => st.toggleAttribute('data-active', i === index));
  s.looks.forEach((el) => el.toggleAttribute('data-on', el.dataset.look === state));
  if (index >= 0) emit(s, 'stage:enter', { state, index, previous: prevState, direction, section: s.el });
}

function update() {
  frame = 0;
  const line = vh * (narrowMQ.matches ? LINE_NARROW : LINE);
  const y = window.scrollY;
  const down: boolean | null = lastY < 0 ? null : y >= lastY;
  lastY = y;

  // reads (only sections near the viewport: far chapters may be skipped by content-visibility)
  const measured = sections
    .filter((s) => s.near)
    .map((s) => {
      const box = s.el.getBoundingClientRect();
      const tops = s.steps.map((st) => st.getBoundingClientRect());
      let index = -1;
      for (let i = 0; i < tops.length; i++) if (tops[i].top <= line) index = i;
      let p = s.p;
      if (s.progress === 'section') p = clamp(-box.top / Math.max(1, box.height - vh));
      else if (s.progress === 'step') p = index >= 0 ? clamp((line - tops[index].top) / Math.max(1, tops[index].height)) : 0;
      const inview = box.bottom > 0 && box.top < vh;
      const first: 1 | -1 = down === null ? (box.top < 0 ? -1 : 1) : down ? 1 : -1;
      return { s, index, p, inview, first, pinned: box.top <= line && box.bottom > line };
    });
  // the pinned stage under the reading line (only near sections can hold it: no reads in skipped chapters)
  const pinned = measured.find((m) => m.pinned && m.s.chapter)?.s;
  let pageP = barP;
  if (article && bar) {
    const r = article.getBoundingClientRect();
    pageP = clamp(-r.top / Math.max(1, r.height - vh));
  }

  // writes
  for (const { s, index, p, inview, first } of measured) {
    setActive(s, index, first);
    if (s.progress && Math.abs(p - s.p) > 0.0005) {
      s.p = p;
      s.el.style.setProperty('--p', p.toFixed(4));
      if (s.progress === 'step') s.stage.dispatchEvent(new CustomEvent<ProgressDetail>('stage:progress', { detail: { p, index } }));
    }
    if (inview !== s.inview) {
      s.inview = inview;
      s.stage.toggleAttribute('data-inview', inview);
    }
  }
  const id = pinned?.chapter ?? null;
  if (id !== chapterNow) {
    chapterNow = id;
    document.dispatchEvent(new CustomEvent<ChapterDetail>('scrolly:chapter', { detail: { id: id ?? '', layer: pinned?.layer ?? null } }));
  }
  if (bar && Math.abs(pageP - barP) > 0.0005) {
    barP = pageP;
    bar.style.transform = `scaleX(${pageP.toFixed(4)})`;
  }
}

const clamp = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

function schedule() {
  if (!frame) frame = requestAnimationFrame(update);
}

/** Subscribe to a stage's state changes. If the stage is already live, `enter` runs at once. */
export function watch(stage: HTMLElement, handlers: { enter?: (d: StageDetail) => void; leave?: (d: StageDetail) => void }) {
  if (handlers.enter) stage.addEventListener('stage:enter', (e) => handlers.enter!((e as CustomEvent<StageDetail>).detail));
  if (handlers.leave) stage.addEventListener('stage:leave', (e) => handlers.leave!((e as CustomEvent<StageDetail>).detail));
  const s = sections.find((x) => x.stage === stage);
  if (s && s.index >= 0 && handlers.enter) {
    handlers.enter({ state: stage.dataset.state ?? '', index: s.index, previous: null, direction: 1, section: s.el });
  }
}

/** The small-viewport height in px (stable while mobile browser bars move). */
export const viewportHeight = () => vh;

/** Start the engine: call once, after the stage components have subscribed. */
export function start(root: ParentNode = document) {
  if (started) return;
  started = true;
  article = root.querySelector<HTMLElement>('[data-article]');
  bar = document.querySelector<HTMLElement>('[data-progress-bar]');

  const probe = document.createElement('div');
  probe.setAttribute('aria-hidden', 'true');
  probe.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:100vh;height:100svh;visibility:hidden;pointer-events:none;';
  document.body.appendChild(probe);
  const measure = () => {
    vh = probe.getBoundingClientRect().height || window.innerHeight;
    schedule();
  };
  new ResizeObserver(measure).observe(probe);
  measure();

  const near = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        const s = sections.find((x) => x.el === e.target);
        if (!s) return;
        s.near = e.isIntersecting;
        if (!s.near && s.inview) {
          s.inview = false;
          s.stage.removeAttribute('data-inview');
        }
      });
      schedule();
    },
    { rootMargin: '10% 0px 10% 0px' },
  );

  root.querySelectorAll<HTMLElement>('[data-scrolly]').forEach((el) => {
    const stage = el.querySelector<HTMLElement>('[data-stage]');
    if (!stage) return;
    const mode = el.dataset.progress;
    sections.push({
      el,
      stage,
      steps: [...el.querySelectorAll<HTMLElement>('[data-step]')],
      chapter: el.dataset.chapterStage ?? '',
      layer: el.dataset.layer ?? null,
      looks: [...stage.querySelectorAll<HTMLElement>('[data-look]')],
      progress: mode === 'section' || mode === 'step' ? mode : null,
      index: -2,
      p: -1,
      near: false,
      inview: false,
    });
    near.observe(el);
  });

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  narrowMQ.addEventListener('change', schedule);
  schedule();
}
