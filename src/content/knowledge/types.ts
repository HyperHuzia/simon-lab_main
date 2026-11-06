import type { Lang } from '../../i18n/config';

// The knowledge base: the illustrated articles and the ones still in preparation. One file per language; the list
// of entries, their routes and status live in src/data/knowledge.ts.
export type KnowledgeId = 'project-as-code' | 'bottom-up' | 'your-agent' | 'hardware';

export interface KnowledgeCopy {
  lang: Lang;
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lede: string };
  labels: {
    read: string;
    soon: string;
    /** reading time; {n} is replaced with the minutes */
    minutes: string;
    articles: string;
    preparing: string;
  };
  entries: Record<KnowledgeId, { title: string; standfirst: string }>;
}
