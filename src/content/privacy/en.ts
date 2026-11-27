import type { PrivacyCopy } from './types';

// English master copy of the privacy note. Facts behind it: the tag and the banner (src/components/Consent.astro), the
// films served from the site's own files (FilmVideo), the hosting (GitHub Pages behind the Cloudflare proxy, checked
// on 2026-11-27), the Polish rule on terminal equipment (art. 399 of the Electronic Communications Law of 12 July 2024,
// in force since 10 November 2024, which replaced art. 173 of the Telecommunications Law).
export const privacy: PrivacyCopy = {
  lang: 'en',
  meta: {
    title: 'Privacy | Simon Lab',
    description:
      'What simon-lab.org stores and sends: no cookies without consent, Google Ads conversion measurement only with consent, and email used to answer and to carry out orders.',
  },
  eyebrow: 'Privacy',
  title: 'Privacy note',
  lede: 'What this site stores and sends, and what happens to email sent to Simon Lab.',
  sections: [
    {
      title: 'Who is responsible',
      body: [
        'The controller of personal data is Szymon Wojciechowski Simon-Lab, Zabrze, Poland. The full address and the tax numbers are under {contact} at the foot of this page. Questions about personal data go to {email}.',
      ],
    },
    {
      title: 'Without consent',
      body: [
        'The site sets no cookies and sends nothing to Google. The films play from the site’s own files and load only after a click on play.',
        'Only the choice made in the cookie banner is kept, in the browser’s local storage (localStorage, key sl-consent), for 12 months; after that the banner asks again.',
      ],
    },
    {
      title: 'With consent: Google Ads',
      body: [
        'Google Ads, run by Google Ireland Limited, measures whether a visit from an ad ended in contact: a click on the email address or on a button that shows it, or copying the address. For this the site loads the Google tag, which sets cookies such as _gcl_au and _gcl_aw for up to 90 days and sends Google the ad’s click identifier, the page address and technical data of the browser, including the IP address. There is no remarketing and no analytics.',
        'Google may also process this data outside the European Economic Area, as its privacy policy describes (policies.google.com).',
        'The legal basis is consent: Article 6(1)(a) GDPR and Article 399 of the Polish Electronic Communications Law of 12 July 2024. Consent can be withdrawn at any time under “Cookie settings” at the foot of each page or with the button below; the measurement stops and the site removes its _gcl_ cookies. Withdrawal does not affect what was measured before.',
      ],
      settings: true,
    },
    {
      title: 'Email',
      body: [
        'Email sent to Simon Lab is used to answer it and to carry out orders: for an order or an inquiry about one under Article 6(1)(b) GDPR, for other messages on the basis of our legitimate interest in answering them (Article 6(1)(f) GDPR). It is kept while the matter needs it, and the documents of an order as long as tax law requires.',
      ],
    },
    {
      title: 'Hosting',
      body: [
        'The site is served by GitHub Pages (GitHub, Inc.) through Cloudflare (Cloudflare, Inc.). Both receive the IP address and the details of every request and keep them in server logs to deliver and protect the site (legitimate interest, Article 6(1)(f) GDPR).',
      ],
    },
    {
      title: 'Rights',
      body: [
        'Everyone whose data we process has the right of access, rectification, erasure, restriction of processing, data portability and objection, and may withdraw consent at any time. A complaint can be lodged with the President of the Personal Data Protection Office (Prezes UODO) in Warsaw.',
      ],
    },
  ],
  updated: 'Last updated: 27 November 2026',
};
