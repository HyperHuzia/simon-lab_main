// Languages and localized paths. English lives at the root, Polish under /pl/, German under /de/
// (astro.config.mjs: i18n.routing.prefixDefaultLocale = false).
export const LANGS = ['en', 'pl', 'de'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'en';

export const LANG_LABEL: Record<Lang, string> = { en: 'English', pl: 'Polski', de: 'Deutsch' };
export const LANG_SHORT: Record<Lang, string> = { en: 'EN', pl: 'PL', de: 'DE' };
export const OG_LOCALE: Record<Lang, string> = { en: 'en_US', pl: 'pl_PL', de: 'de_DE' };

export const isLang = (value: string | undefined): value is Lang => LANGS.includes(value as Lang);

/** The language of a URL path: its first segment when that is a non-default locale. */
export function langFromPath(pathname: string): Lang {
  const first = pathname.split('/').filter(Boolean)[0];
  return isLang(first) && first !== DEFAULT_LANG ? first : DEFAULT_LANG;
}

/** A path inside the site for a language: `path('/apps/', 'pl')` → `/pl/apps/`. */
export function path(route: string, lang: Lang): string {
  const clean = route.startsWith('/') ? route : `/${route}`;
  if (lang === DEFAULT_LANG) return clean;
  return clean === '/' ? `/${lang}/` : `/${lang}${clean}`;
}

/** The same page in another language: strips the current locale prefix and applies the target one. */
export function switchLang(pathname: string, to: Lang): string {
  const segments = pathname.split('/').filter(Boolean);
  if (isLang(segments[0]) && segments[0] !== DEFAULT_LANG) segments.shift();
  const route = `/${segments.join('/')}${segments.length && pathname.endsWith('/') ? '/' : ''}`;
  return path(route === '//' ? '/' : route, to);
}
