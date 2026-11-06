// The team page in each language. Every src/content/team/<lang>.ts that exports `team` is picked up; a language
// without its own file falls back to English.
import type { TeamCopy } from '../content/team/types';
import type { Lang } from '../i18n/config';

const modules = import.meta.glob<{ team?: TeamCopy }>('../content/team/*.ts', { eager: true });
const COPIES = Object.values(modules).flatMap((m) => (m.team ? [m.team] : []));

export function teamFor(lang: Lang): TeamCopy {
  const copy = COPIES.find((c) => c.lang === lang) ?? COPIES.find((c) => c.lang === 'en');
  if (!copy) throw new Error('src/content/team/en.ts must export `team`');
  return copy;
}
