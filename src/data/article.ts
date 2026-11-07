// The knowledge base's scroll articles in each language. Every src/content/<article>/<lang>.ts that exports `article`
// is picked up; a language without its own file falls back to English (and the article element then carries
// lang="en").
import type { Article, Chapter } from '../content/article-types';
import { LAYERS, type LayerDef } from './stack-drawing';
import { SCRUBBED } from './stages';
import type { Lang } from '../i18n/config';

export type ArticleId = 'bottom-up' | 'project-as-code';

type Modules = Record<string, { article?: Article }>;
const SOURCES: Record<ArticleId, Modules> = {
  'bottom-up': import.meta.glob<{ article?: Article }>('../content/bottom-up/*.ts', { eager: true }),
  'project-as-code': import.meta.glob<{ article?: Article }>('../content/project-as-code/*.ts', { eager: true }),
};

export function articleFor(lang: Lang, id: ArticleId = 'bottom-up'): Article {
  const articles = Object.values(SOURCES[id]).flatMap((m) => (m.article ? [m.article] : []));
  const own = articles.find((a) => a.lang === lang);
  const en = articles.find((a) => a.lang === 'en');
  if (!own && !en) throw new Error(`src/content/${id}/en.ts must export \`article\``);
  return (own ?? en)!;
}

export { LAYERS, type LayerDef };

export const layerById = (id: string | undefined) => LAYERS.find((l) => l.id === id);

/** Rough rendered height of a chapter (svh), so content-visibility can reserve space before it renders. */
export function chapterHeight(chapter: Chapter): number {
  const beats = chapter.steps.reduce((h, s) => h + (SCRUBBED.has(s.stage) ? 210 : 110), 0);
  return 90 + beats + (chapter.outro?.length ? 40 : 0);
}
