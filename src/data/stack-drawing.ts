// The stack of the applications as an iso drawing: the slabs of the applications index (StackExplorer) in the same
// projection and proportions (30 × 18 plates, 5.2 apart, MechGraph and IonGrid as halves 1.1 apart, rounded corners, an
// underside in a dark tone of each layer's colour). The knowledge base's thumbnail (StackThumb) draws it, and so do the
// profiles' images (scripts/social-assets.mjs). Its import carries .ts, so Node loads this module without a bundler.
import { STACK } from './apps.ts';

/** The six live layers, bottom-up, with their colours; MechGraph and IonGrid share level 3 as two halves. */
export type LayerDef = { id: string; name: string; level: number; span: 'full' | 'left' | 'right'; color: string };

export const LAYERS: LayerDef[] = STACK.map((app) => ({
  id: app.id,
  name: app.name,
  level: (app.layer ?? 0) + 1,
  span: app.id === 'mechgraph' ? 'left' : app.id === 'iongrid' ? 'right' : 'full',
  color: app.color,
}));

// orthographic iso projection, as the big stack: rotateZ(-38°), then rotateX(58°)
const RZ = (-38 * Math.PI) / 180;
const RX = (58 * Math.PI) / 180;
const project = (x: number, y: number, z: number): [number, number] => {
  const xr = x * Math.cos(RZ) - y * Math.sin(RZ);
  const yr = x * Math.sin(RZ) + y * Math.cos(RZ);
  return [xr, yr * Math.cos(RX) - z * Math.sin(RX)];
};
const W = 30;
const D = 18;
const GAP = 5.2;
const HALF = 0.55;
const RADIUS = 1.15;
const THICK = 0.4;

/** a rounded rectangle in the plate's plane, as points (corner arcs in 5 steps) */
const outline = (x0: number, x1: number, z: number) => {
  const corners: [number, number, number][] = [
    [x1 - RADIUS, -D / 2 + RADIUS, -90],
    [x1 - RADIUS, D / 2 - RADIUS, 0],
    [x0 + RADIUS, D / 2 - RADIUS, 90],
    [x0 + RADIUS, -D / 2 + RADIUS, 180],
  ];
  return corners.flatMap(([cx, cy, from]) =>
    Array.from({ length: 6 }, (_, k) => {
      const a = ((from + k * 18) * Math.PI) / 180;
      return project(cx + RADIUS * Math.cos(a), cy + RADIUS * Math.sin(a), z);
    }),
  );
};
const path = (pts: [number, number][]) => `M${pts.map(([x, y]) => `${x.toFixed(2)} ${y.toFixed(2)}`).join('L')}Z`;

/** the plates bottom-up: the top face and the underside as SVG paths */
export const STACK_PLATES = LAYERS.map((l) => {
  const x0 = l.span === 'right' ? HALF : -W / 2;
  const x1 = l.span === 'left' ? -HALF : W / 2;
  const z = (l.level - 1) * GAP;
  return { ...l, top: path(outline(x0, x1, z)), under: path(outline(x0, x1, z - THICK)) };
});

/** one row per level, at the height of the plate's centre: the names in the order of the stack */
export const STACK_LEVELS = [1, 2, 3, 4, 5].map((lv) => ({
  lv,
  y: project(0, 0, (lv - 1) * GAP)[1],
  name: `${lv - 1} ${LAYERS.filter((l) => l.level === lv)
    .map((l) => l.name)
    .join(' · ')}`,
}));

const all = STACK_PLATES.flatMap((p) => p.top.match(/-?\d+\.\d+/g)!.map(Number));
const xs = all.filter((_, i) => i % 2 === 0);
const ys = all.filter((_, i) => i % 2 === 1);
/** the drawing's extent in its own units, the plates' thickness included */
export const STACK_BOX = { minX: Math.min(...xs), maxX: Math.max(...xs), minY: Math.min(...ys), maxY: Math.max(...ys) + THICK + 1 };
