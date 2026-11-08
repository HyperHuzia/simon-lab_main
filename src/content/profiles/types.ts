import type { Lang } from '../../i18n/config';

// The copy of the organization's profiles outside the site: the YouTube channel and its films, the LinkedIn page and
// its articles. One file per language, like the pages' copy. src/data/profiles.ts adds what the site already holds
// and fills the placeholders: {motto} (src/i18n/ui.ts), {scope} (the scope of work: the applications' roles bottom-up
// from src/data/apps.ts, one per line as a list, without their names), {site}, {beta} and {services} (this language's
// pages), {other} (a film's version in the other
// language) and, in articles, {source} (the site's article) and {film} (the film in the article's language).
// `npm run profiles` writes the texts ready to paste into docs/profiles/.

/** The films on the channel, by the language they are spoken in. */
export type FilmId = 'en' | 'pl';

export interface FilmCopy {
  title: string;
  /** what the film shows, one paragraph */
  lede: string;
  /** the heading over the chapters and one title per chapter (the start times are in src/data/profiles.ts) */
  chapters: { heading: string; titles: string[] };
  /** the small print: the anonymized project, the visualizations, the findings */
  notes: string;
  /** the company in one paragraph */
  company: string;
  /** the closing lines: links and captions */
  close: string[];
}

export interface ProfilesCopy {
  lang: Lang;
  youtube: {
    /** the channel's description, as paragraphs (YouTube shows each viewer the version in their language) */
    channel: string[];
    /** titles and descriptions in this language: a film's own, or the translation of another film's metadata */
    films: Partial<Record<FilmId, FilmCopy>>;
    /** tags of the film spoken in this language, added to the English ones */
    tags?: string[];
  };
  linkedin: {
    /** up to 120 characters */
    tagline: string;
    /** About, as paragraphs (up to 2,000 characters in all) */
    about: string[];
  };
}

/** Copy the platforms keep once, not per language: written in English, the pages' default language. */
export interface ProfilesShared {
  youtube: {
    /** the channel's keywords (Settings, Channel, Basic info) */
    keywords: string[];
  };
  linkedin: {
    /** up to 20 */
    specialties: string[];
    /** the Services section: services picked from LinkedIn's list (up to 10), a description (up to 500 characters) and
     * up to 8 samples of work: one exported picture per discipline of the services page, with a note where it is needed */
    services: { items: string[]; description: string; media: { app: string; image: string; note?: string }[] };
  };
  /** the line on the YouTube banner and the LinkedIn cover */
  imageLine: string;
}

/**
 * A Google Ads search campaign's texts in one language (src/content/profiles/ads.<lang>.ts): ad groups, each with its own
 * responsive search ad (the shared headlines and descriptions plus its own), keywords and bids, and the assets of the
 * campaign. The ads lead to one of the site's pages with `?ref=<ref>`, which "Write to us" names in the email's subject,
 * so an inquiry from an ad can be told apart without a tag or a cookie. The budget and the account stay out of the
 * repository.
 */
export interface GoogleAdsCopy {
  lang: Lang;
  /** the page the ads lead to (a route), and the ref added to its address */
  page: string;
  ref: string;
  /** headlines and descriptions every group's ad carries */
  headlines: string[];
  descriptions: string[];
  groups: {
    name: string;
    /** the default maximum cost per click in the account's currency (manual CPC) */
    cpc: number;
    /** written in Google's notation: "phrase match" or [exact match] */
    keywords: string[];
    /** keywords with a bid of their own */
    bids?: Record<string, number>;
    /** the two parts of the display path after the domain */
    path: [string, string];
    headlines: string[];
    descriptions: string[];
  }[];
  sitelinks: { text: string; page: string; lines: [string, string] }[];
  callouts: string[];
  /** negative keywords for the whole campaign */
  negatives: string[];
}

/**
 * One block of a LinkedIn article, in the order of its editor: headings, paragraphs, lists, quotes, embedded links, and a
 * film uploaded to LinkedIn itself (Media, Video), which plays in the article instead of leading to YouTube.
 */
export type ArticleBlock = { h2: string } | { p: string } | { ul: string[] } | { ol: string[] } | { quote: string } | { embed: string } | { video: FilmId };

/** A LinkedIn article written from one of the site's articles (src/content/profiles/articles/<id>.<lang>.ts). */
export interface LinkedInArticle {
  id: string;
  lang: Lang;
  /** the site's article it is written from (its route), named at the end */
  source: string;
  /** a draft stays out of the public repository until the owner approves it */
  status: 'draft' | 'approved' | 'published';
  title: string;
  /** Manage, Settings: the title search engines show (up to 60 characters) and the description (140 to 160) */
  seo: { title: string; description: string };
  /** the cover (1920×1080), laid out like the site's share images: a short title, one of the site's exported
   * pictures (a document page is framed as a card) and a bar in a layer's colour (a token of src/styles/tokens.css) */
  cover: { title: string; image: string; card?: boolean; layer: string };
  blocks: ArticleBlock[];
  /** at most three */
  hashtags: string[];
}
