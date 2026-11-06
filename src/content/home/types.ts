import type { Lang } from '../../i18n/config';

// Homepage copy, one file per language. The motto (the mission heading, repeated in the footer) and the beta
// strings live in src/i18n/ui.ts; app names come from src/data/apps.ts.
// Copy rules: no em dashes, and in Polish and German no spaced en dash used as a dash.

/** The steps of the mission story, in reading order; each switches the story stage to `ms-<id>`. */
export type StoryStepId = 'idea' | 'classic' | 'chaos' | 'order' | 'iterate' | 'validate' | 'scope' | 'law';

/** The eight parts of a classic plant project in the story, each becoming one application of the platform. */
export type StoryNodeId = 'idea' | 'lab' | 'process' | 'calc' | 'control' | 'machine' | 'arch' | 'permit';

export interface HomeCopy {
  lang: Lang;
  meta: { title: string; description: string };
  /** the title on the left, one paragraph on the right, the drawing of a plant and its code below */
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
    /** the drawing's film button, the link under it, and the captions of its four slides (HeroPlant.astro) */
    film: string;
    filmLink: string;
    slides: [string, string, string, string];
  };
  mission: { eyebrow: string; body: string[]; close: string };
  story: {
    eyebrow: string;
    title: string;
    steps: { id: StoryStepId; title: string; body: string }[];
    /** labels drawn on the stage (it is decorative: the steps carry the story for assistive technology) */
    nodes: Record<StoryNodeId, string>;
    flags: { conflict: string; noPermit: string; emissions: string; capacity: string; missing: string };
    iteration: string;
    scope: string;
    law: string;
    /** the mission in one line, then what it gives the engineer */
    outro: [string, string];
  };
  /** project as code, the way into the knowledge base (`more` links it) */
  pac: { eyebrow: string; title: string; body: string[]; result: string; more: string };
  /** the sections below are short: each leads to its page in the header */
  apps: { eyebrow: string; title: string; lede: string; all: string };
  about: { eyebrow: string; title: string; body: string; team: string; roadmap: { body: string; link: string } };
  beta: { eyebrow: string; title: string; body: string; join: string };
}
