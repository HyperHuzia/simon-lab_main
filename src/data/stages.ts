// Which film material each stage state shows, and which stage component a chapter uses. The first id of a state is
// its main figure (also the static figure without JS); clips are marked so a placeholder shows a play glyph.
import type { Point } from './media';

export type StageMedia = { ids: string[]; clip?: boolean };

export const STAGE_MEDIA: Record<string, StageMedia> = {
  'pv-build': { ids: ['pv-build'], clip: true },
  'pv-selection': { ids: ['pv-infobox-nozzles'] },
  'pv-registers': { ids: ['pv-tab-materials', 'pv-tab-pipelines', 'pv-tab-instrumentation'] },
  'pv-sim': { ids: ['pv-sim'], clip: true },
  'pv-plc': { ids: ['pv-sim-final'] },
  'mg-turntable': { ids: ['mg-master'], clip: true },
  'mg-section': { ids: ['mg-section'] },
  'mg-shaft': { ids: ['mg-shaft'] },
  'mg-tracks': { ids: ['mg-tracks'] },
  'ig-assembly': { ids: ['ig-assembly'], clip: true },
  'ig-heat': { ids: ['ig-open'] },
  'ig-register': { ids: ['ig-register', 'ig-closed'] },
  'pm-assembly': { ids: ['pm-assembly'], clip: true },
  // the line and the tower lit violet over the same end pose, each beside its drawing
  'pm-iso': { ids: ['pm-final-line', 'doc-08', 'pm-final'] },
  'pm-steel': { ids: ['pm-final-steel', 'doc-11', 'pm-final'] },
  'pm-clash': { ids: ['pm-clash', 'pm-plate-collisions'] },
  'ar-site': { ids: ['ar-site'], clip: true },
  'ar-wipe': { ids: ['ar-pzt-sheet', 'ar-top-colour', 'ar-top-lineart', 'ar-pzt'] },
  'docs-stack': { ids: ['doc-17', 'doc-01', 'doc-06', 'doc-08', 'doc-15', 'doc-pzt'] },
  // the mirrors: what the AI agent reads (a text excerpt or the edges) beside what the engineer sees
  'mirror-pv': { ids: ['pv-mirror'] },
  'mirror-ig': { ids: ['ig-open'] },
  'mirror-pm': { ids: ['pm-final', 'pm-wire'] },
  // Project as code: the checks chapter shows the demonstration project's own results
  'pacm-sim': { ids: ['pv-sim-final'] },
  'pacm-clash': { ids: ['pm-clash'] },
};

/** The stage component a chapter uses, from its first step's state. */
export type StageKind = 'env' | 'mirror' | 'stack' | 'cli' | 'pv' | 'mg' | 'ig' | 'pm' | 'ar' | 'docs' | 'infra' | 'pac' | 'media';

const PREFIX: [string, StageKind][] = [
  ['env-', 'env'],
  ['mirror-', 'mirror'],
  ['stack-', 'stack'],
  ['cli-', 'cli'],
  ['pv-', 'pv'],
  ['mg-', 'mg'],
  ['ig-', 'ig'],
  ['pm-', 'pm'],
  ['ar-', 'ar'],
  ['docs-', 'docs'],
  ['infra-', 'infra'],
  ['pac-', 'pac'],
];

export function stageKind(state: string): StageKind {
  return PREFIX.find(([p]) => state.startsWith(p))?.[1] ?? 'media';
}

/** States that follow the scroll: a long step (210svh, its card sticky) whose progress the engine writes as --p and
 * sends as stage:progress (the site plan's wipe, the terminal typing, the documents falling). */
export const SCRUBBED = new Set(['ar-wipe', 'cli-prompt', 'cli-spec', 'docs-stack']);

/** A still scaled by s about (ox, oy) (fractions of its frame), as CSS transform-origin + scale renders it. */
export type Zoom = { s: number; ox: number; oy: number };

/** Where a point of the still lands in the frame once the still is zoomed. */
export const zoomPoint = (p: Point, z?: Zoom): Point => (z ? { x: z.ox + (p.x - z.ox) * z.s, y: z.oy + (p.y - z.oy) * z.s } : p);

/** CSS for a zoomed layer (custom properties read by the stage styles). */
export const zoomStyle = (z: Zoom) => `--zs:${z.s};--zo:${(z.ox * 100).toFixed(2)}% ${(z.oy * 100).toFixed(2)}%`;
