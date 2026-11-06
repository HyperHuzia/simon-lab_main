// The services page in each language. Every src/content/services/<lang>.ts that exports `services` is picked up; a
// language without its own file falls back to English.
import type { ServicesCopy } from '../content/services/types';
import type { Lang } from '../i18n/config';

const modules = import.meta.glob<{ services?: ServicesCopy }>('../content/services/*.ts', { eager: true });
const COPIES = Object.values(modules).flatMap((m) => (m.services ? [m.services] : []));

export function servicesFor(lang: Lang): ServicesCopy {
  const copy = COPIES.find((c) => c.lang === lang) ?? COPIES.find((c) => c.lang === 'en');
  if (!copy) throw new Error('src/content/services/en.ts must export `services`');
  return copy;
}
