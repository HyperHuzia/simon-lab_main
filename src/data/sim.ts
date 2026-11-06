// Build-time model of the batch chart beside the pv-sim clip. Reads processview/hud.json (published with the media,
// one entry per clip frame: clockS, step, level %, tempC, massKg, concPct) and reduces it to SVG paths for the three
// small multiples and a compact series for the playhead. Server-only (node:fs): import from .astro frontmatter.
import fs from 'node:fs';
import path from 'node:path';
import { data } from './media';

type Frame = { clockS: number; step: number; level: number; tempC: number; massKg: number; concPct?: number };

export type SimSeries = {
  /** frame position 0–1 (= clip time / clip duration) */
  t: number[];
  clock: number[];
  step: number[];
  /** °C × 10 */
  temp: number[];
  /** % × 10 */
  level: number[];
  /** kg */
  mass: number[];
};

export type SimModel = {
  frames: number;
  clockEnd: number;
  /** y domains of the three panels */
  domain: { temp: [number, number]; level: [number, number]; mass: [number, number] };
  /** temperature limit (°C) and its position in the temperature panel (0 = top, 100 = bottom) */
  limit: { value: number; y: number };
  paths: Record<'temp' | 'level' | 'mass', { line: string; area: string }>;
  /** where each phase starts on the clip (0–1) */
  phases: { filling: number; mixing: number; dosing: number; cooling: number };
  final: { tempMax: number; tempC: number; level: number; massKg: number; concPct: number; clockS: number };
  series: SimSeries;
};

const W = 1000;
const H = 100;
const LIMIT_C = 60;
/** the cooling phase chip lights when the batch reaches this temperature */
const COOLING_C = 50;
const DOMAIN = { temp: [10, 66] as [number, number], level: [0, 100] as [number, number], mass: [0, 6000] as [number, number] };

type Pt = [number, number];

/** Ramer–Douglas–Peucker: keeps the shape of a polyline with far fewer points. */
function simplify(points: Pt[], eps: number): Pt[] {
  if (points.length < 3) return points;
  const [a, b] = [points[0], points[points.length - 1]];
  let max = 0;
  let index = 0;
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const len = Math.hypot(dx, dy) || 1;
  for (let i = 1; i < points.length - 1; i++) {
    const d = Math.abs(dy * points[i][0] - dx * points[i][1] + b[0] * a[1] - b[1] * a[0]) / len;
    if (d > max) {
      max = d;
      index = i;
    }
  }
  if (max <= eps) return [a, b];
  return [...simplify(points.slice(0, index + 1), eps).slice(0, -1), ...simplify(points.slice(index), eps)];
}

const r1 = (v: number) => Math.round(v * 10) / 10;

function paths(frames: Frame[], pick: (f: Frame) => number, [lo, hi]: [number, number]) {
  const n = frames.length;
  const pts: Pt[] = frames.map((f, i) => [(i / (n - 1)) * W, H - ((pick(f) - lo) / (hi - lo)) * H]);
  const s = simplify(pts, 0.18);
  const line = `M${s.map(([x, y]) => `${r1(x)} ${r1(y)}`).join(' L')}`;
  return { line, area: `${line} L${W} ${H} L0 ${H} Z` };
}

function readFrames(): Frame[] | undefined {
  const src = (data('pv-hud') ?? data('processview/hud.json'))?.src;
  if (!src) return undefined;
  try {
    const file = path.join(process.cwd(), 'public', src.replace(/^\/+/, ''));
    const json = JSON.parse(fs.readFileSync(file, 'utf8')) as { frames?: Frame[] } | Frame[];
    const frames = Array.isArray(json) ? json : json.frames;
    return frames && frames.length > 2 ? frames : undefined;
  } catch {
    return undefined;
  }
}

export function simModel(): SimModel | undefined {
  const frames = readFrames();
  if (!frames) return undefined;
  const n = frames.length;
  const first = (test: (f: Frame) => boolean) => {
    const i = frames.findIndex(test);
    return i < 0 ? 1 : i / (n - 1);
  };
  // the agitator start (step 5) has no frame of its own in the time-lapse: mixing and dosing light together when
  // step 6 begins; the jacket is cooling during dosing, so cooling lights when the batch reaches 50 °C (~frame 170)
  const dosing = first((f) => f.step >= 6);
  const mixing = dosing;
  const cooling = first((f) => f.tempC >= COOLING_C);
  const last = frames[n - 1];

  const series: SimSeries = { t: [], clock: [], step: [], temp: [], level: [], mass: [] };
  const every = Math.max(1, Math.round(n / 140));
  frames.forEach((f, i) => {
    if (i % every && i !== n - 1) return;
    series.t.push(Math.round((i / (n - 1)) * 10000) / 10000);
    series.clock.push(Math.round(f.clockS));
    series.step.push(f.step);
    series.temp.push(Math.round(f.tempC * 10));
    series.level.push(Math.round(f.level * 10));
    series.mass.push(Math.round(f.massKg));
  });

  return {
    frames: n,
    clockEnd: last.clockS,
    domain: DOMAIN,
    limit: { value: LIMIT_C, y: r1(H - ((LIMIT_C - DOMAIN.temp[0]) / (DOMAIN.temp[1] - DOMAIN.temp[0])) * H) },
    paths: {
      temp: paths(frames, (f) => f.tempC, DOMAIN.temp),
      level: paths(frames, (f) => f.level, DOMAIN.level),
      mass: paths(frames, (f) => f.massKg, DOMAIN.mass),
    },
    phases: { filling: first((f) => f.step >= 2), mixing, dosing, cooling },
    final: {
      tempMax: Math.max(...frames.map((f) => f.tempC)),
      tempC: last.tempC,
      level: last.level,
      massKg: last.massKg,
      concPct: last.concPct ?? 30,
      clockS: last.clockS,
    },
    series,
  };
}
