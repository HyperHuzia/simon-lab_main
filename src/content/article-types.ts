// Content model of the knowledge base's scroll articles (src/content/bottom-up, src/content/project-as-code). One
// file per language (en.ts, pl.ts, de.ts) fills it; the scrollytelling components render it. Body strings may
// contain inline HTML (<strong>, <em>, <a>, <sup>): the copy is ours, never user input.
import type { Lang } from '../i18n/config';

/** A text card that scrolls over the sticky stage; `stage` names the visual state it switches the stage to. */
export type Step = {
  id: string;
  stage: string;
  kicker?: string;
  title?: string;
  body: string[];
  /** a caveat shown under the card, e.g. what a visualization is and is not */
  note?: string;
};

export type Chapter = {
  /** URL anchor; layer chapters use the app id, so /apps/<id>/ can link to #<id> */
  id: string;
  /** app id whose layer colour and HUD position the chapter takes */
  layer?: string;
  eyebrow: string;
  title: string;
  /** prose before the sticky section */
  intro?: string[];
  steps: Step[];
  /** prose after the sticky section */
  outro?: string[];
};

export type Article = {
  lang: Lang;
  meta: { title: string; description: string };
  /** `watch` and `scrollHint` belong to the Bottom-up hero (film and delamination); other articles leave them out */
  hero: { eyebrow: string; title: string; standfirst: string; read: string; watch?: string; scrollHint?: string };
  chapters: Chapter[];
  closing: {
    eyebrow: string;
    title: string;
    body: string[];
    /** the film block (Bottom-up only); an article without a film closes with its text and the CTAs */
    filmTitle?: string;
    filmCaption?: string;
    play?: string;
    cta: { beta: string; apps: string };
  };
  /** small print at the very end: what is a demo, what is generic, what is research */
  notes: string[];
  /** labels used by the stage visuals (HUD, diagrams), per language */
  labels: Record<string, string>;
};
