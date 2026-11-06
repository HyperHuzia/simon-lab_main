// The roadmap in each language. Every src/content/roadmap/<lang>.ts that exports `roadmap` is picked up; a language
// without its own file falls back to English.
import type { RoadmapCopy } from '../content/roadmap/types';
import type { Lang } from '../i18n/config';

const modules = import.meta.glob<{ roadmap?: RoadmapCopy }>('../content/roadmap/*.ts', { eager: true });
const COPIES = Object.values(modules).flatMap((m) => (m.roadmap ? [m.roadmap] : []));

export function roadmapFor(lang: Lang): RoadmapCopy {
  const copy = COPIES.find((c) => c.lang === lang) ?? COPIES.find((c) => c.lang === 'en');
  if (!copy) throw new Error('src/content/roadmap/en.ts must export `roadmap`');
  return copy;
}
