import type { Lang } from '../../i18n/config';

// The privacy note (/privacy/): one file per language, the same facts in each. A paragraph may hold two placeholders,
// filled by src/views/Privacy.astro: {contact} (a link to the footer's contact details, labelled as the header's
// "Contact") and {email} (the info mailbox, assembled in the browser from MAILBOX in src/config.ts, never written into
// the HTML as an address). The section marked `settings` ends with the button that opens the cookie banner again.
export interface PrivacyCopy {
  lang: Lang;
  meta: { title: string; description: string };
  eyebrow: string;
  title: string;
  lede: string;
  sections: { title: string; body: string[]; settings?: boolean }[];
  updated: string;
}
