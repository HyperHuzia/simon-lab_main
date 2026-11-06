import type { Lang } from '../../i18n/config';

// The engineering services page (/services/): one file per language. Simon Lab takes on engineering orders for
// chemical plants; the disciplines follow the applications bottom-up, and each is linked to its application, whose
// name and role come from src/data/apps.ts. The slogan (hero.title) is the owner's, and the homepage's short section
// on the services repeats it.
export type DisciplineApp = 'processview' | 'mechgraph' | 'iongrid' | 'plantmesh' | 'architecture';

export interface ServicesCopy {
  lang: Lang;
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lede: string };
  disciplines: { eyebrow: string; title: string; items: { app: DisciplineApp; name: string; body: string }[] };
  /** why an order is delivered fast; `more` links the article "Project as code" */
  fast: { eyebrow: string; title: string; body: string[]; more: string };
  /** who checks the work */
  checked: { eyebrow: string; title: string; body: string[] };
  /** what the client receives: the documents and the project as data */
  delivery: { eyebrow: string; title: string; lede: string; points: string[] };
  /** orders by email, no form (MailtoButton) */
  order: { eyebrow: string; title: string; body: string; write: string };
}
