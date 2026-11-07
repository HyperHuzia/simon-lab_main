// The organization's profiles outside the site (the YouTube channel, the LinkedIn page) and the search engines' tools:
// where they are, how they are set up, and their texts in every language. The copy is in src/content/profiles; this
// module fills it with what the site already holds (the applications' roles, the motto, the pages' addresses), so a
// change on the site reaches the profiles' texts too. `npm run profiles` writes the texts ready to paste into
// docs/profiles/ and checks them against the platforms' limits; `npm run social` draws the images. The site takes the
// profiles' addresses from here (sameAs in the homepage's JSON-LD).
// The imports carry their .ts extension so that Node loads this module without a bundler (scripts/*.mjs).
import { profiles as de } from '../content/profiles/de.ts';
import { profiles as en, shared } from '../content/profiles/en.ts';
import { profiles as pl } from '../content/profiles/pl.ts';
import type { FilmId, ProfilesCopy } from '../content/profiles/types.ts';
import { services as enServices } from '../content/services/en.ts';
import { path, type Lang } from '../i18n/config.ts';
import { t } from '../i18n/ui.ts';
import { STACK } from './apps.ts';

/** the site's address (astro.config.mjs) */
export const SITE = 'https://simon-lab.org';

/** Where the profiles are and how they are set up, as each platform's interface names it. */
export const PROFILES = {
  youtube: {
    url: 'https://www.youtube.com/@Simon-Lab-org',
    channelId: 'UCns-LaGt5WtDEX_dQG4TfvA',
    // YouTube Studio: Customization (name, handle, picture, banner, description and its translations, links), Settings
    // > Channel (country, keywords), Settings > Upload defaults
    settings: {
      name: 'Simon Lab',
      handle: '@Simon-Lab-org',
      country: 'Poland',
      links: [
        { title: 'simon-lab.org', url: SITE },
        { title: 'LinkedIn', url: 'https://www.linkedin.com/company/simon-lab-org/' },
      ],
      uploadDefaults: 'category Science & Technology, video language English, not made for kids',
      features:
        'standard. Clickable links in descriptions and custom thumbnails need the intermediate features (the owner verifies a phone number in Studio); until then the thumbnails are the logo frame picked from each film.',
    },
    playlist: 'Simon Lab: Bottom-up',
    films: {
      en: {
        id: 'ZyQvklua8tI',
        language: 'English',
        duration: '2:14',
        captions: 'English and German, the site’s public/media/film/film-en.vtt and film-de.vtt',
        // the chapters start where the scenes of the media repo's timeline start (scenes under 10 s merged)
        chapters: ['0:00', '0:33', '1:00', '1:28', '1:40', '1:55'],
      },
      pl: {
        id: '_thAoadoBa8',
        language: 'Polish',
        duration: '2:08',
        captions: 'Polish, the site’s public/media/film/film-pl.vtt',
        chapters: ['0:00', '0:32', '0:59', '1:24', '1:36', '1:49'],
      },
    },
    /** earlier uploads, set to private (deleting them is the owner's) */
    retired: ['-moJ-r4g1QM'],
  },
  linkedin: {
    url: 'https://www.linkedin.com/company/simon-lab-org/',
    // Page admin > Edit page; the values in quotes are the Polish interface's labels
    settings: {
      name: 'Simon Lab',
      website: `${SITE}/`,
      industry: 'Engineering Services ("Usługi inżynieryjne")',
      size: '0-1 employees',
      type: 'Self-owned ("Własna firma")',
      founded: 2026,
      location: 'Zabrze, the city only, as on the site',
      button: 'Visit website',
      languages: 'English (the default), Polish, German',
      services: {
        page: 'https://www.linkedin.com/services/page/6817433484702121a3',
        location: 'Zabrze, and remote',
        pricing: 'Contact for pricing',
        messages: 'always on while the services are published',
      },
    },
  },
  search: {
    google:
      'Search Console, domain property simon-lab.org; the sitemap https://simon-lab.org/sitemap-index.xml is submitted. A new page gets "Request indexing" in URL inspection.',
    bing: 'Bing Webmaster Tools, the site imported from Search Console with its sitemap. A new page goes through URL Submission.',
  },
} as const;

/** The platforms' limits the texts are checked against. */
export const LIMITS = {
  youtube: { channel: 1000, title: 100, description: 5000, tags: 500, keywords: 500 },
  linkedin: { tagline: 120, about: 2000, specialties: 20, services: 10, servicesDescription: 500, servicesMedia: 8 },
  article: { title: 150, seoTitle: 60, seoDescription: [140, 160], words: 1000, hashtags: 3 },
} as const;

/** the profiles' addresses, for sameAs */
export const SAME_AS = [PROFILES.youtube.url, PROFILES.linkedin.url];

const COPIES: Record<Lang, ProfilesCopy> = { en, pl, de };
const AND: Record<Lang, string> = { en: 'and', pl: 'i', de: 'und' };

/** one of the site's pages in a language, as a full address */
export const pageUrl = (route: string, lang: Lang) => `${SITE}${path(route, lang)}`;
export const filmUrl = (film: FilmId) => `https://youtu.be/${PROFILES.youtube.films[film].id}`;
/** the film a reader of a language watches */
export const filmFor = (lang: Lang): FilmId => (lang === 'pl' ? 'pl' : 'en');

/** a role inside a sentence: lower case, except an acronym ("P&ID") and German nouns (only an article is lowered) */
function inline(role: string, lang: Lang): string {
  if (lang === 'de') return role.replace(/^(Die|Der|Das|Ein|Eine) /, (article) => article.toLowerCase());
  return /^\p{Lu}[\p{Lu}&]/u.test(role) ? role : role[0].toLowerCase() + role.slice(1);
}

/** the applications bottom-up with their roles, as in a sentence */
function appsLine(lang: Lang): string {
  const items = STACK.map((a) => `${a.name} (${inline(a.copy[lang].role, lang)})`);
  return `${items.slice(0, -1).join(', ')} ${AND[lang]} ${items.at(-1)}`;
}

/** Fills the placeholders of src/content/profiles; one without a value here is an error. */
export function fill(text: string, at: { lang: Lang; other?: FilmId; source?: string; film?: FilmId }): string {
  const vars: Record<string, string | undefined> = {
    motto: t(at.lang)('site.motto'),
    apps: appsLine(at.lang),
    site: pageUrl('/', at.lang),
    beta: pageUrl('/beta/', at.lang),
    services: pageUrl('/services/', at.lang),
    other: at.other && filmUrl(at.other),
    source: at.source && pageUrl(at.source, at.lang),
    film: at.film && filmUrl(at.film),
  };
  return text.replace(/\{(\w+)\}/g, (match, key: string) => {
    const value = vars[key];
    if (value === undefined) throw new Error(`profiles: ${match} has no value in "${text.slice(0, 60)}…"`);
    return value;
  });
}

/** YouTube counts tags and keywords with their separators, and one with a space as if it were quoted */
export const tagLength = (tags: readonly string[]) =>
  tags.reduce((n, tag) => n + tag.length + (tag.includes(' ') ? 2 : 0), 0) + Math.max(0, tags.length - 1);

export const youtubeChannel = (lang: Lang) => COPIES[lang].youtube.channel.map((p) => fill(p, { lang })).join('\n\n');

/** A film's title and description in a language: its own, or the translation of its metadata; undefined if none. */
export function youtubeFilm(film: FilmId, lang: Lang): { title: string; description: string } | undefined {
  const copy = COPIES[lang].youtube.films[film];
  if (!copy) return undefined;
  const times = PROFILES.youtube.films[film].chapters;
  if (copy.chapters.titles.length !== times.length) {
    throw new Error(`profiles: ${lang} has ${copy.chapters.titles.length} chapter titles for the ${times.length} chapters of the ${film} film`);
  }
  const at = { lang, other: film === 'en' ? 'pl' : 'en' } as const;
  const chapters = [copy.chapters.heading, ...times.map((time, i) => `${time} ${copy.chapters.titles[i]}`)].join('\n');
  const description = [copy.lede, chapters, copy.notes, copy.company, copy.close.join('\n')].map((block) => fill(block, at)).join('\n\n');
  return { title: fill(copy.title, at), description };
}

/** a film's tags: the English ones, and those of the film's own language */
export const youtubeTags = (film: FilmId) => [...(en.youtube.tags ?? []), ...(film === 'en' ? [] : (COPIES[film].youtube.tags ?? []))];
export const youtubeKeywords = () => [...shared.youtube.keywords];

export const linkedinTagline = (lang: Lang) => fill(COPIES[lang].linkedin.tagline, { lang });
export const linkedinAbout = (lang: Lang) => COPIES[lang].linkedin.about.map((p) => fill(p, { lang })).join('\n\n');
export const linkedinSpecialties = () => [...shared.linkedin.specialties];
export const linkedinServices = () => ({ items: [...shared.linkedin.services.items], description: fill(shared.linkedin.services.description, { lang: 'en' }) });

/**
 * The samples of work in LinkedIn's Services section: a picture per discipline, named as on the services page (its
 * file comes from `npm run social`), then the film in English as a link.
 */
export function linkedinServicesMedia() {
  const pictures = shared.linkedin.services.media.map((m) => {
    const discipline = enServices.disciplines.items.find((d) => d.app === m.app);
    if (!discipline) throw new Error(`profiles: the services page has no discipline "${m.app}"`);
    return { file: `linkedin-service-${m.app}-1920.jpg`, image: m.image, title: discipline.name, description: [discipline.body, m.note].filter(Boolean).join(' ') };
  });
  const film = youtubeFilm('en', 'en')!;
  return { pictures, film: { url: filmUrl('en'), title: film.title } };
}

/** the line on the YouTube banner and the LinkedIn cover */
export const imageLine = () => shared.imageLine;
