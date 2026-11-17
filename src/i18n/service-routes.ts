import type { Lang } from './config';

export const SERVICE_IDS = ['process', 'automation', 'tanks'] as const;
export type ServiceId = (typeof SERVICE_IDS)[number];
export const SERVICE_SLUGS: Record<ServiceId, Record<Lang, string>> = {
  process: { en: 'process-engineering', pl: 'instalacje-procesowe', de: 'verfahrenstechnik' },
  automation: { en: 'automation', pl: 'automatyka', de: 'automatisierung' },
  tanks: { en: 'tanks-mixing', pl: 'zbiorniki-mieszalniki', de: 'behaelter-ruehrwerke' },
};

export const serviceRoute = (id: ServiceId) => `/services/${SERVICE_SLUGS[id].en}/`;
export function localizedServiceRoute(route: string, lang: Lang): string | undefined {
  const clean = route.replace(/^\/(pl|de)(?=\/)/, '');
  const id = SERVICE_IDS.find((key) => Object.values(SERVICE_SLUGS[key]).some((slug) => clean === `/services/${slug}/`));
  return id ? `${lang === 'en' ? '' : `/${lang}`}/services/${SERVICE_SLUGS[id][lang]}/` : undefined;
}
