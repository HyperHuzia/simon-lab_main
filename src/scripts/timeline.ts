// Shared time for the site's scripted motion: a virtual clock that can run faster, a register of the Web Animations it
// started (they follow the clock's rate and stop with it), and a player for scroll stages whose steps have timelines
// (the homepage's mission story, the Bottom-up article's environment chapter):
//   · forward, with the stage in view: the timeline of each step plays in turn; a step the reader scrolls past before
//     its timeline ends finishes four times faster, then the next one starts;
//   · back up, out of view, reduced motion or Save-Data (prefs.calm): the final picture of the state, at once.
// The scroll engine (scrolly.ts) only writes the stage's data-state, data-index and data-inview; the player watches
// them. Before the reader reaches the first step (data-index -1) the state is '' (nothing has played yet), and so it
// is while the engine has not measured the stage; a first measurement inside the steps (a reload or a jump into the
// middle) shows the final picture at once, as already read, like the engine itself treats it.
import { prefs } from './scrolly';

export const CATCH_UP = 4;

/** Time for the timelines: advances with the frames at `rate`, so a step can be finished faster. */
export class Clock {
  now = 0;
  rate = 1;
  private last = 0;
  private frame = 0;
  private waits: { at: number; done: () => void }[] = [];
  private tickers = new Set<(dt: number) => void>();

  wait(ms: number) {
    return new Promise<void>((done) => {
      this.waits.push({ at: this.now + ms, done });
      this.run();
    });
  }

  every(fn: (dt: number) => void) {
    this.tickers.add(fn);
    this.run();
    return () => this.tickers.delete(fn);
  }

  /** drop every pending wait (their timelines never resume) */
  reset() {
    cancelAnimationFrame(this.frame);
    this.frame = 0;
    this.waits = [];
    this.tickers.clear();
  }

  private run() {
    if (this.frame) return;
    this.last = performance.now();
    this.frame = requestAnimationFrame(this.tick);
  }

  private tick = (t: number) => {
    const dt = Math.min(64, t - this.last) * this.rate;
    this.last = t;
    this.now += dt;
    this.tickers.forEach((fn) => fn(dt));
    const due = this.waits.filter((w) => w.at <= this.now);
    this.waits = this.waits.filter((w) => w.at > this.now);
    due.forEach((w) => w.done());
    this.frame = this.waits.length || this.tickers.size ? requestAnimationFrame(this.tick) : 0;
  };
}

export type Motion = (el: Element | null | undefined, keyframes: Keyframe[], options: KeyframeAnimationOptions) => Animation | null;

/** A clock with the animations started on it: they run at its rate and are cancelled with it. */
export function timeline() {
  const clock = new Clock();
  const running = new Set<Animation>();
  const motion: Motion = (el, keyframes, options) => {
    if (!el) return null;
    const a = el.animate(keyframes, options);
    a.playbackRate = clock.rate;
    running.add(a);
    const done = () => running.delete(a);
    a.addEventListener('finish', done);
    a.addEventListener('cancel', done);
    return a;
  };
  return {
    clock,
    motion,
    rate(rate: number) {
      clock.rate = rate;
      running.forEach((a) => a.updatePlaybackRate(rate));
    },
    /** drop everything: pending waits never resume, running animations are cancelled */
    stop() {
      clock.reset();
      running.forEach((a) => a.cancel());
    },
  };
}

export type Timeline = ReturnType<typeof timeline>;

type Steps = {
  /** the stage's states in reading order */
  order: string[];
  /** the timeline of each state that has one */
  steps: Partial<Record<string, () => Promise<void>>>;
  /** the final picture of a state ('' = before the first step), without motion */
  show: (state: string) => void;
  /** extra cleanup when the timelines are dropped */
  stop?: () => void;
};

export function playSteps(stage: HTMLElement, t: Timeline, { order, steps, show, stop }: Steps) {
  // the engine measures only stages near the viewport: until it has (no data-index yet) nothing has played
  let measured = stage.dataset.index !== undefined;
  const current = () => (!measured || stage.dataset.index === '-1' ? '' : (stage.dataset.state ?? ''));
  let state = current();
  let queue: string[] = [];
  let playing = false;
  let generation = 0;

  const settle = () => {
    generation++;
    playing = false;
    queue = [];
    t.stop();
    stop?.();
    show(state);
  };

  const play = async () => {
    playing = true;
    const g = generation;
    while (queue.length && g === generation) {
      const step = queue.shift()!;
      t.rate(queue.length ? CATCH_UP : 1);
      await steps[step]!();
      if (g !== generation) return;
      show(step);
    }
    if (g === generation) playing = false;
  };

  const change = (from: string, to: string) => {
    const a = order.indexOf(from);
    const b = order.indexOf(to);
    if (b <= a || !stage.hasAttribute('data-inview') || prefs.calm) return settle();
    for (const s of order.slice(a + 1, b + 1)) if (steps[s]) queue.push(s);
    // a step still playing when the reader moves on finishes faster
    if (playing) t.rate(queue.length ? CATCH_UP : 1);
    else play();
  };

  new MutationObserver(() => {
    if (!measured && stage.dataset.index !== undefined) {
      // the first measurement sets the picture: empty before the first step; inside the steps (a reload or a jump
      // into the middle) the final one, as already read
      measured = true;
      state = current();
      settle();
      return;
    }
    const next = current();
    if (next !== state) {
      const prev = state;
      state = next;
      change(prev, next);
    } else if (!stage.hasAttribute('data-inview') && (playing || queue.length)) {
      settle();
    }
  }).observe(stage, { attributes: true, attributeFilter: ['data-state', 'data-index', 'data-inview'] });
}
