import type { Lang } from '../../i18n/config';

// The team page (/team/): four members on equal terms, every one with the same fields (portrait, name, role, about,
// goal, motto) in the first person, then the home lab's card. Szymon's card has a goal and no motto (the
// owner's choice). The joke stays unexplained: no notes, disclaimers or asides about who is who. One file per language;
// Szymon's fields are the owner's words. A language without its own file shows the English copy (German, the owner's
// choice; see src/data/team.ts).
export type DrawnId = 'opus' | 'astra' | 'grok';
export type MemberId = 'szymon' | DrawnId;

export interface TeamMember {
  id: MemberId;
  name: string;
  role: string;
  about: string[];
  goal?: string[];
  /** Szymon's card has none: his goal says it (the owner's choice) */
  motto?: string[];
}

export interface TeamCopy {
  lang: Lang;
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lede: string };
  /** the field labels, the same for every member */
  fields: { about: string; goal: string; motto: string };
  members: TeamMember[];
  /** the home lab, a card of its own after the members, with its own fields */
  lab: {
    eyebrow: string;
    name: string;
    role: string;
    fields: { about: string; risk: string; why: string };
    about: string;
    risk: string;
    why: string;
  };
}
