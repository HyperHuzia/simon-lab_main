// The homepage copy in each language. Every src/content/home/<lang>.ts that exports `home` is picked up; a language
// without its own file falls back to English.
import type { HomeCopy } from '../content/home/types';
import type { Lang } from '../i18n/config';

const modules = import.meta.glob<{ home?: HomeCopy }>('../content/home/*.ts', { eager: true });
const COPIES = Object.values(modules).flatMap((m) => (m.home ? [m.home] : []));

export function homeFor(lang: Lang): HomeCopy {
  const copy = COPIES.find((c) => c.lang === lang) ?? COPIES.find((c) => c.lang === 'en');
  if (!copy) throw new Error('src/content/home/en.ts must export `home`');
  return copy;
}
