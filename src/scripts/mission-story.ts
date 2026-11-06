// The iterations of the homepage's mission story (src/components/home/MissionStory.astro): rows of documents that the
// applications hand over one by one while zeros and ones travel on their common bus, the tests that blink over each
// row and mark the rejected documents, and the ping of the application that signals a change (CapacityIndex: the
// scope; Permit: the law).
//
// The scroll engine (scrolly.ts) only switches the stage's data-state; this script watches it:
//   · forward, with the stage in view: the step's timeline plays. iterate: rows 01–03 are built, the first one slowly,
//     then the bus speeds up to a plateau; validate: each row is tested; scope and law: a ping, a new row, its test,
//     until a row passes and the ping stops.
//   · a step the reader scrolls past before its timeline ends finishes four times faster, then the next one starts.
//   · back up, out of view, reduced motion or Save-Data (prefs.calm): the final picture of the state, at once.
// Nothing loops: bits flow only while rows are built, a ping only until its change has passed the tests. Only
// transform and opacity animate (Web Animations and the stage's CSS transitions); rows have fixed places, so the
// layout never moves. The clock, the catch-up and the final pictures are the shared player of timeline.ts.
import { playSteps, timeline } from './timeline';

/** what the iteration panel shows: rows built, rows tested, change marks (0 none, 1 scope, 2 scope and law) */
type Picture = { rows: number; checked: number; marks: number };

const ORDER = ['ms-idea', 'ms-classic', 'ms-chaos', 'ms-order', 'ms-iterate', 'ms-validate', 'ms-scope', 'ms-law'];
const PICTURE: Record<string, Picture> = {
  'ms-iterate': { rows: 3, checked: 0, marks: 0 },
  'ms-validate': { rows: 3, checked: 3, marks: 0 },
  'ms-scope': { rows: 5, checked: 5, marks: 1 },
  'ms-law': { rows: 7, checked: 7, marks: 2 },
};
const EMPTY: Picture = { rows: 0, checked: 0, marks: 0 };

/** how long each application takes to hand over its document (ms at pace 1), in the order of the column: CapacityIndex,
 * LabGate, ProcessView, MechGraph, IonGrid, PlantMesh, Architecture, Permit */
const HANDOVER = [420, 560, 700, 1050, 880, 1500, 1300, 1150];
/** per row: pace (× HANDOVER), spread of the handover times (± share) and the bus tempo over the row (0 slow, 1 plateau).
 * The first row is slow; the law's rows are slower again and uneven. */
const ROWS: { pace: number; spread: number; tempo: [number, number] }[] = [
  { pace: 2.3, spread: 0.25, tempo: [0, 0.35] },
  { pace: 1.2, spread: 0.25, tempo: [0.35, 0.8] },
  { pace: 0.8, spread: 0.25, tempo: [0.8, 1] },
  { pace: 0.9, spread: 0.3, tempo: [0.85, 0.85] },
  { pace: 0.8, spread: 0.3, tempo: [0.85, 0.85] },
  { pace: 1.3, spread: 0.6, tempo: [0.5, 0.5] },
  { pace: 1.15, spread: 0.6, tempo: [0.5, 0.5] },
];
const BITS = 18;

const lerp = (a: number, b: number, f: number) => a + (b - a) * f;
/** a fixed pseudo-random share in [0, 1) per row and application: the same rhythm on every visit */
const jitter = (r: number, k: number) => {
  const v = Math.sin((r + 1) * 12.9898 + (k + 1) * 78.233) * 43758.5453;
  return v - Math.floor(v);
};

export function initMissionStory(root: ParentNode = document) {
  const stage = root.querySelector<HTMLElement>('[data-story]');
  if (!stage) return;
  const rows = [...stage.querySelectorAll<HTMLElement>('[data-row]')];
  const tiles = rows.map((row) => [...row.querySelectorAll<HTMLElement>('[data-tile]')]);
  const scans = rows.map((row) => row.querySelector<HTMLElement>('[data-scan]'));
  const marks = [...stage.querySelectorAll<HTMLElement>('[data-mark]')];
  const nodes = [...stage.querySelectorAll<HTMLElement>('[data-node]')];
  const nodeY = nodes.map((n) => parseFloat(n.style.getPropertyValue('--oy')) || 0);
  const flashes = nodes.map((n) => n.querySelector<HTMLElement>('[data-flash]'));
  const pings = { scope: stage.querySelector<HTMLElement>('[data-ping="scope"]'), law: stage.querySelector<HTMLElement>('[data-ping="law"]') };
  const bitsBox = stage.querySelector<HTMLElement>('[data-bits]');
  if (!bitsBox || rows.length !== ROWS.length) return;
  const pool = Array.from({ length: BITS }, () => {
    const el = document.createElement('span');
    el.className = 'ms-bit';
    bitsBox.append(el);
    return el;
  });
  const busy = new Set<HTMLElement>();

  const tl = timeline();
  const { clock, motion } = tl;

  // ── the bus: a bit travels between two applications; the time scales with the distance and the tempo
  const send = (from: number, to: number, tempo: number) => {
    const el = pool.find((b) => !busy.has(b));
    if (!el || from === to) return;
    busy.add(el);
    el.textContent = Math.random() < 0.5 ? '0' : '1';
    const h = bitsBox.clientHeight;
    const span = nodeY[nodeY.length - 1] - nodeY[0];
    const full = lerp(1800, 600, tempo);
    const a = motion(
      el,
      [
        { transform: `translate(-50%, -50%) translateY(${(nodeY[from] / 100) * h}px)`, opacity: 0 },
        { opacity: 1, offset: 0.15 },
        { opacity: 1, offset: 0.85 },
        { transform: `translate(-50%, -50%) translateY(${(nodeY[to] / 100) * h}px)`, opacity: 0 },
      ],
      { duration: Math.max(260, (full * Math.abs(nodeY[to] - nodeY[from])) / span), easing: 'linear' },
    );
    const free = () => busy.delete(el);
    a?.addEventListener('finish', free);
    a?.addEventListener('cancel', free);
  };
  const other = (k: number) => {
    const n = (k + 1 + Math.floor(Math.random() * (nodes.length - 1))) % nodes.length;
    return n;
  };
  /** traffic while a row is built: mostly from the source of the change, the rest between any two applications */
  let stopFlow = () => {};
  const flow = (source: number, tempo: [number, number], length: number) => {
    const start = clock.now;
    let next = 0;
    stopFlow();
    stopFlow = clock.every((dt) => {
      const f = Math.min(1, (clock.now - start) / length);
      const t = lerp(tempo[0], tempo[1], f);
      next -= dt;
      if (next > 0) return;
      next += lerp(320, 70, t);
      const from = Math.random() < 0.55 ? source : Math.floor(Math.random() * nodes.length);
      send(from, other(from), t);
    });
  };

  // ── one row: the applications hand over their documents, each in its own time
  const build = async (r: number, source: number) => {
    const spec = ROWS[r];
    rows[r].setAttribute('data-on', '');
    const times = HANDOVER.map((ms, k) => ms * spec.pace * (1 + spec.spread * (2 * jitter(r, k) - 1)));
    const length = Math.max(...times);
    flow(source, spec.tempo, length);
    let at = 0;
    for (const [time, k] of times.map((t, k) => [t, k] as const).sort((a, b) => a[0] - b[0])) {
      await clock.wait(time - at);
      at = time;
      tiles[r][k]?.setAttribute('data-on', '');
      motion(flashes[k], [{ opacity: 0 }, { opacity: 0.9, offset: 0.25 }, { opacity: 0 }], { duration: 600 });
      send(k, other(k), lerp(spec.tempo[0], spec.tempo[1], time / length));
    }
    stopFlow();
    await clock.wait(200);
  };

  // ── the test of a row: the frame blinks twice, then the results
  const test = async (r: number) => {
    motion(scans[r], [{ opacity: 0 }, { opacity: 1, offset: 0.2 }, { opacity: 0.15, offset: 0.45 }, { opacity: 1, offset: 0.7 }, { opacity: 0 }], {
      duration: 650,
    });
    await clock.wait(560);
    rows[r].setAttribute('data-checked', '');
    await clock.wait(380);
  };

  // ── a ping that repeats until its change has passed; stopping lets the running ring finish
  const ping = (kind: 'scope' | 'law') => {
    const a = motion(pings[kind], [{ transform: 'scale(1)', opacity: 0.9 }, { transform: 'scale(1.16, 1.7)', opacity: 0 }], {
      duration: 1200,
      iterations: Infinity,
      easing: 'cubic-bezier(0.33, 1, 0.68, 1)',
    });
    return () => a?.effect?.updateTiming({ iterations: Math.floor(Number(a.currentTime ?? 0) / 1200) + 1 });
  };

  const STEPS = {
    async 'ms-iterate'() {
      await clock.wait(850); // the column moves to the left first
      for (const r of [0, 1, 2]) await build(r, 0);
    },
    async 'ms-validate'() {
      await clock.wait(250);
      for (const r of [0, 1, 2]) await test(r);
    },
    async 'ms-scope'() {
      marks[0]?.setAttribute('data-on', '');
      const stop = ping('scope');
      await clock.wait(700);
      for (const r of [3, 4]) {
        await build(r, 0);
        await test(r);
      }
      stop();
    },
    async 'ms-law'() {
      marks[1]?.setAttribute('data-on', '');
      const stop = ping('law');
      await clock.wait(700);
      for (const r of [5, 6]) {
        await build(r, nodes.length - 1);
        await test(r);
      }
      stop();
    },
  };

  /** the final picture of a state, without motion */
  const show = (p: Picture) => {
    rows.forEach((row, r) => {
      row.toggleAttribute('data-on', r < p.rows);
      row.toggleAttribute('data-checked', r < p.checked);
      tiles[r].forEach((tile) => tile.toggleAttribute('data-on', r < p.rows));
    });
    marks.forEach((mark, i) => mark.toggleAttribute('data-on', i < p.marks));
  };

  playSteps(stage, tl, {
    order: ORDER,
    steps: STEPS,
    show: (state) => show(PICTURE[state] ?? EMPTY),
    stop: () => {
      stopFlow = () => {};
    },
  });
}
