import type { Lang } from '../../i18n/config';

// The public roadmap (/roadmap/): one file per language. Steps run in order from today to the launch at ACHEMA 2027
// and beyond; the view gives each step its icon by id (src/views/Roadmap.astro).
export type RoadmapStatus = 'now' | 'next' | 'planned' | 'launch' | 'after';
export type RoadmapStepId = 'apps' | 'infra' | 'calibration' | 'access' | 'open' | 'clients' | 'scale' | 'launch' | 'provider';

export interface RoadmapCopy {
  lang: Lang;
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lede: string; target: string };
  goal: { eyebrow: string; title: string; lede: string; points: string[]; promise: string };
  road: { eyebrow: string; title: string };
  status: Record<RoadmapStatus, string>;
  steps: { id: RoadmapStepId; status: RoadmapStatus; title: string; body: string[]; points?: string[] }[];
}
