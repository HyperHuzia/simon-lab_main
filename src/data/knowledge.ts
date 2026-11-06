// The knowledge base: which articles exist and where they live, in the order of the list. Copy per language from
// src/content/knowledge (a language without its own file falls back to English). Topics still being written stay
// here as drafts: their copy and thumbnails are kept, but nothing about them is published (no row, no link). To
// publish one, give it its route and remove `draft`.
import type { IconName } from '../components/icons';
import type { KnowledgeCopy, KnowledgeId } from '../content/knowledge/types';
import type { Lang } from '../i18n/config';

/** the thumbnail drawn for an entry (src/components/KnowledgeArt.astro) */
export type KnowledgeArtKind = 'pac' | 'bottom-up' | 'agent' | 'hardware';

export type KnowledgeEntry = {
  id: KnowledgeId;
  /** language-neutral route; null while the article is in preparation */
  route: string | null;
  /** not published yet: left out of the list */
  draft?: true;
  /** reading time in minutes */
  minutes?: number;
  art: KnowledgeArtKind;
  icon: IconName;
};

export const KNOWLEDGE: KnowledgeEntry[] = [
  { id: 'bottom-up', route: '/knowledge/bottom-up/', minutes: 16, art: 'bottom-up', icon: 'layers' },
  { id: 'project-as-code', route: '/knowledge/project-as-code/', minutes: 8, art: 'pac', icon: 'file-text' },
  { id: 'your-agent', route: null, art: 'agent', icon: 'bot', draft: true },
  { id: 'hardware', route: null, art: 'hardware', icon: 'server', draft: true },
];

/** the entries the knowledge base shows */
export const PUBLISHED = KNOWLEDGE.filter((entry) => !entry.draft);

const modules = import.meta.glob<{ knowledge?: KnowledgeCopy }>('../content/knowledge/*.ts', { eager: true });
const COPIES = Object.values(modules).flatMap((m) => (m.knowledge ? [m.knowledge] : []));

export function knowledgeFor(lang: Lang): KnowledgeCopy {
  const copy = COPIES.find((c) => c.lang === lang) ?? COPIES.find((c) => c.lang === 'en');
  if (!copy) throw new Error('src/content/knowledge/en.ts must export `knowledge`');
  return copy;
}
