# simon-lab.org: context for AI agents

This repository is the public website of Simon Lab: a static [Astro](https://astro.build) site in English, Polish and German, deployed to GitHub Pages. **The repository is public.** Everything committed here is published, whether or not it ends up on the domain.

## What the site says

Simon Lab does computational engineering for chemical projects. Its mission: coordinate complete chemical engineering projects on one open platform, with import and export of every kind of document. The problem it solves is the broken chain: process engineering still runs on static documents that cannot read each other, so every handoff introduces errors. The answer is project as code: the project defined once as structured, versioned data, documents generated from it, checks run on every change. Private beta with trusted partners; open source coming soon.

The landing page leads with the mission and the problem, for engineers who are not AI-native. Under the hero a drawing of a plant with its code runs one batch, as ProcessView shows one, then a few slides from the film, and ends on a button that opens the film. The workflow (project as code, the bottom-up method) lives in the knowledge base articles, never as the entry point; two more topics (your own AI agent on the platform, paying only for hardware) are drafts in the code, not published. The mission story says that the common language of a project is program code, the language AI agents work in; Simon Lab is one structure prepared for it, not a standard to sell. Every iteration is tested like software. Below the story, project as code is the way into the knowledge base; then only short sections, each leading to a page of the header (applications, team and roadmap, the beta page): no lists, cards or forms there. Contact is the footer's (`#contact` on every page).

The applications, bottom-up: CapacityIndex (0), ProcessView (1), MechGraph and IonGrid (2), PlantMesh (3), Architecture (4). LabelHash is a separate free tool. ScopeMatrix, LabGate, GrantKernel, Procurement and Permit are announced as coming soon.

## Layout

| Path | What it holds |
|---|---|
| `src/pages/` | Thin routes: `/`, `/pl/`, `/de/` × home, `knowledge/` (index, `bottom-up/`, `project-as-code/`), `apps/`, `apps/[app]/`, `roadmap/`, `team/`, `beta/` (joining by email), plus `404` |
| `src/views/` | One view per page type, rendered for a `lang` prop (`ArticleView` renders both knowledge base articles) |
| `src/content/home/` | Homepage copy: `types.ts` model, `en.ts` master copy, `pl.ts`, `de.ts` |
| `src/content/knowledge/` | Knowledge base cards and page copy, same pattern; the list of entries is `src/data/knowledge.ts` |
| `src/content/roadmap/`, `src/content/team/` | The roadmap (steps to the launch at ACHEMA 2027) and the team page (four members on equal terms: the owner and three AI models, the same fields for everyone, except that Szymon's card has a goal and no motto; then the home lab's card; German shows the English copy), same pattern |
| `src/content/bottom-up/`, `src/content/project-as-code/` | The scroll articles, one file per language; the shared model is `src/content/article-types.ts` |
| `src/data/apps.ts` | Applications: layer, status, colour, copy in EN/PL/DE |
| `src/data/media.ts` | Typed access to the media manifest, alt text and captions (`WORDS`), callout labels, app page media |
| `src/data/media.generated.json` | Generated media manifest. Do not edit by hand |
| `src/data/{article,stages,sim}.ts` | Article registry, stage states and the batch simulation data |
| `src/components/`, `src/components/article/`, `src/components/home/` | Site components: the stack of the applications (`StackExplorer`: a selector on `/apps/`, a navigator on the application pages), the applications' slides (`AppSlides`, CapacityIndex's drawings in `CapacitySlides`), the contact details (`ContactDetails`), the film template and window (`FilmVideo`, `FilmDialog`); article stages (`PacStage` draws "Project as code", `EnvDiagram` the Bottom-up article's first chapter, `MirrorStage` its second); the homepage's hero drawing (`HeroPlant`) and mission story; the knowledge base's thumbnails (`KnowledgeArt`) |
| `src/components/icons.ts`, `Icon.astro` | The Lucide icons the site uses (lucide-static, inlined at build time) |
| `src/scripts/` | Vanilla TypeScript: scroll engine (`scrolly.ts`), the shared clock and step player (`timeline.ts`), the mission story's iterations (`mission-story.ts`), the hero drawing's batch (`hero-plant.ts`), the applications' slides (`slides.ts`) and stack (`stack-explorer.ts`), article stages (the Bottom-up article's first chapter in `article/env.ts`, the revision log of "Project as code" in `article/pac.ts`), the film, lazy video |
| `src/i18n/` | Language config (`config.ts`) and UI strings (`ui.ts`, including `SHELL_KEYS` for the 404 page) |
| `src/styles/` | Design tokens (calm dark), global styles, homepage and article styles |
| `public/media/`, `public/og/` | Exported media and share images. Generated, see below |
| `public/` | `CNAME`, `robots.txt`, `llms.txt`, `site.md`, `roadmap.md`, `project-as-code.md`, `bottom-up.md`, `apps/*.md`, `licenses.txt`, redirects from old URLs, `brand/`, `assets/`, and the recruitment page `last-job-before-ai-takes-over/` (kept as is) |
| `scripts/check-copy.mjs` | The copy check over `dist/` (`npm run check:copy`) |

## Languages

- English is the default at `/`, Polish at `/pl/`, German at `/de/`. Every page exists in all three, with hreflang alternates and a language menu.
- English is the master copy. Polish is written natively; German is translated from English (a native review is still open).
- A change to the English copy goes into Polish and German in the same commit. The translations keep the same facts, numbers, tags, list lengths and keys, and nothing stays in English on a Polish or German page except names, formats, code, the CapacityIndex terminal (English in every language, as in the film) and the German team page. All of it was checked field by field on 2026-11-05.
- German says KI wherever English says AI ("KI-Agent", "KI-gestützte CFD (Walrus, Gemini)", "KI-nativ"); trusted partners are "Partner unseres Vertrauens" in German prose and "Trusted Partners" on the roadmap (Polish: "zaufani partnerzy" in prose, "Trusted Partners" on the roadmap).
- New UI strings go to `src/i18n/ui.ts` in all three languages; page copy goes into the content modules. Header and footer strings carry `data-ui` keys listed in `SHELL_KEYS`, so the 404 page can swap them.
- Old `?lang=pl|de` links redirect to the language routes (inline script in `src/layouts/Base.astro`).

## Copy and style rules (the owner's)

- No em dashes (—) in any copy. In Polish and German no spaced en dash used as a dash either; write a comma, colon, parentheses or a new sentence. An en dash stays only in number ranges (98–100).
- Application names are one word: CapacityIndex, ProcessView, MechGraph, IonGrid, PlantMesh, LabGate, LabelHash.
- Every agent in the copy is an AI agent (EN "AI agent", PL "agent AI", DE "KI-Agent"), in titles, labels and text, for engineers who are not AI-native; a repeat in the same paragraph may be a pronoun. Exceptions: the product name Hermes Agent, the CLI labels of the terminal mock-up, the film's captions.
- Layers are numbered 0–4 everywhere (CapacityIndex is layer 0), also in the terminal mock-up and the application pages' layer navigation.
- Engineers bring their own AI agent: "BYOA (bring your own agent)"; Simon Lab gives that AI agent the CLI to see the project, it never manages agents (no "managed AI agents"). Hosting on one's own hardware is "bring your own compute (BYOC)". Simulations are written "process simulation, strength calculations (FEM) and flow simulations (CFD)"; AI-assisted CFD is written "AI-assisted CFD (Walrus, Gemini)" (German: "KI-gestützte CFD (Walrus, Gemini)"), without boasting.
- Say what Simon Lab is, never what it is not ("not another AI agent", "not another harness"). The word "harness" is not used: readers who know only a chat would not follow it.
- A number and its unit keep the SI space ("60 °C", "25 kg", "14.5 m³"; only angles go without one), written as a no-break space (`\u00a0` in the content modules) so it never breaks across lines.
- Jokes stay unexplained. The team page presents its four members as equals, in the first person, with no notes, disclaimers or asides about who is who. The home lab closes the list as a card in the same style (a small photo, About, Risk, Why). The fields are About me, Goal and Motto, one row each, parted by a faint horizontal line (no accent line). Szymon's card carries his full name, About me in one paragraph and a Goal with no Motto row (the owner's choice). The German team page shows the English copy, marked `lang="en"` (the owner's choice: personal texts and jokes stay as written); it is the one German page in English apart from the terminal.
- Calm and engineer-first: a dark look without glows, gradients or looping animation. The exceptions are the owner's, and all of them play once, stop on their own and stay off under reduced motion or Save-Data:
  - the mission story: zeros and ones on the applications' bus and an application's ping, only while their step plays;
  - the homepage's hero drawing: one batch, then the film's slides, once per visit;
  - the applications' slides: one pass each time they come into view, no switcher;
  - the stack: hovering only rings a slab with a still outline; the selected slab has a strong white edge and a soft gloss crossing its surface every few seconds;
  - the Bottom-up article's first chapter, once per step: three chat dialogs whose PDFs drift off, the AI agent built round the chat, its machine-gun series of documents colliding, the Simon Lab environment built version by version (v0.1, v0.2, as in code) up to v1.0 (quick, without flashes: only movement and opacity, each iteration well over half a second);
  - the article's mirrors: the halves of a pair unfold from the mirror line;
  - the article's CapacityIndex terminal and its falling documents follow the scroll both ways; the ProcessView registers switch once, like tabs;
  - "Project as code": a cursor opens two versions of the revision log, then a change creates the next version with what follows from it; the input formats fall into a loose pile once, the model takes them, the outputs leave in a column.
  Colour marks lines, dots and small labels. The same visual vocabulary (document tiles, Lucide icons, layer colours) across pages instead of new effects.
- `npm run check:copy` must pass before anything is shown or published.

## Media: only through the gated export

Images, clips, films, captions and share images come from the private media repository (`simon-lab-media`) through `tools/web-export.mjs`. It exports only an allowlisted selection, runs OCR and a denylist over every frame and file name, and only then copies into `public/media`, `public/og` and `src/data/media.generated.json`. The export also applies the copy rules to the film captions.

- Never add screenshots or renders here by hand. Change the selection in the media repo and re-export.
- Photos of people and rooms go through the media repo's `tools/team-intake.mjs` first: cropped, labels, logos and screens covered, no metadata.
- Never commit client names, project numbers, personal data or internal file paths, in text or in images.
- Before publishing, run the denylist over the built `dist/` (the check lives in the media repo).

## Content rules

The articles and the app pages follow the production's claims table (in the media repo):

- CFD particle tracks are a visualization and the plant surroundings a generic model. The notes at the end of the Bottom-up article say so; the chapters carry no extra note (the owner's decision), and the copy never calls the tracks a CFD result or the surroundings real.
- Clash detection is shown as findings, never as resolved.
- Cabinet heat losses are a known lower bound ("at least 705 W").
- Cable routes are mentioned, not shown.
- The demonstration project is anonymized.
- AI-assisted CFD (Walrus, Gemini) is the owner's statement, and so are the formats CapacityIndex takes in (DXF, STEP, PDF, XML, DOCX).
- What the AI agent reads in the article's mirrors are excerpts of the demonstration project's own data (the export's `texts`, written by the media repo's `tools/agent-views.mjs`: element ids, terminals and wires only, gated like every other export).
- "Project as code" takes in whatever a project already has (DXF, STEP, IFC, E57 point clouds, PDF, DOCX, XLSX, CSV, XML, JSON: the owner's statement; the AI agent turns them into the form the project needs) and gives out PDF, IFC, 3D Tiles, XLSX and CSV. Its code listing, the drawing of line L-104 and the revision log are examples: the notes at the end of the article say so, the steps carry no notes of their own.

## Commands

```bash
npm ci              # install (Node >= 22.23.4; CI uses Node 24)
npm run dev         # dev server
npm run check       # astro check (types, templates)
npm run build       # static build into dist/
npm run check:copy  # copy rules over dist/ (after a build)
npm run preview     # serve dist/
```

## Implementation notes

- **Scroll stages** (articles and the homepage's mission story):
  - A sticky stage with text steps. `scrolly.ts` sets the active step and a scroll progress `--p`: the Bottom-up hero's delamination (the section) and the long steps that follow the scroll (`SCRUBBED` in `src/data/stages.ts`: the site plan's wipe, the CapacityIndex terminal, the falling documents), which also send `stage:progress` for their scripts.
  - Under `prefers-reduced-motion` or Save-Data the page switches to `data-calm` (states without motion, posters instead of autoplay).
  - Without JavaScript every step shows a static figure; the mission story shows its final state.
  - The mission story's iteration panel (rows of documents, test results, change marks), the bits on its bus and the pings, and the timelines of the article's first chapter (`src/scripts/article/env.ts`: the three dialogs, the AI agent's build-up, the machine gun, the environment's revisions and release) run on the shared step player of `src/scripts/timeline.ts`, and so does the revision log of "Project as code" (`src/scripts/article/pac.ts`: rows that an opening version moves glide to their place, FLIP, so only transform, opacity and a clip animate): a step that the reader scrolls past finishes four times faster before the next one starts; scrolling back, leaving the view or `data-calm` shows the final picture of the state at once. A stage the engine has not measured yet counts as not played, and a first measurement inside its steps (a reload, a jump into the middle) shows the final picture at once, as already read. The chapter's chat waits until the stage has reached its place under the header.
  - "Project as code" (`PacStage`): line L-104 is defined in a listing and drawn as a P&ID excerpt (pump, flowmeter, valve, tank), then the documents generated from the model fill a 2 × 3 grid, then three real pages fan out for review; its formats fall into their pile in CSS, once the step is reached (`data-index` leaves -1); static figures get the final pictures through `fixed`.
  - The article's second chapter (`MirrorStage`) sets what the AI agent reads beside what the engineer sees: the ProcessView loop as data beside its P&ID, the cabinet's netlist beside the cabinet, the unit's edges beside its render (`pm-wire`, the same camera as `pm-final`).
- **The hero drawing** (`HeroPlant`, `src/scripts/hero-plant.ts`): the batch starts after `load` when half of the drawing is in view; the film's slides are painted on a `<canvas>`, which is no LCP candidate, so a large picture shown late never becomes the page's LCP. The PlantMesh slide plays the orbit clip (`pm-orbit`, its WebM is VP9 with alpha) only where the browser draws its transparency; elsewhere it shows the still (`pm-final`). Leaving the view or hiding the tab ends it at once; calm readers and no-JS readers see the end state (the drawing and the film button).
- **The applications' slides** (`AppSlides`, `APP_SLIDES` in `src/data/media.ts`): three per application (CapacityIndex: its AI agent terminal and three drawings), real screens first, no switcher and no caption under the frame (pictures keep their alt text; CapacityIndex's drawings carry a small "Illustration" tag in the frame's corner); on `/apps/` a set loads only when its application is selected; on an application page the slides sit beside "What it does", the first loads with the page and the gallery leaves out what the slides show. MechGraph and IonGrid open on their dark canvas with the right panel open.
- **Application pages:** the stack as a navigator on the left, the same size as on `/apps/` (the stack's named grid areas exist only in select mode: in navigate mode they would open an empty column and halve it), the name and summary beside it; then the slides beside "What it does", then "Project responsibilities" one per line; then "From the demo project": every tile the size of the slides (16:9, two columns as wide as `.split`'s), screens and renders filling it, documents and sheets whole in it.
- **The film window** (`FilmDialog`): nothing but the film, 16:9, as large as the screen allows without scrolling, a close button in its corner; the homepage's hero and the Bottom-up article's "Watch the film" open it (without JavaScript the links lead to the film at the end of the article).
- **Performance:**
  - Media load lazily, and at most two videos decode at once.
  - Animate only `transform`, `opacity`, `clip-path` and CSS variables.
  - Use either `translate` or `transform` in one CSS rule, not both: the CSS minifier drops `translate` when a rule also has a static `transform`.
  - Fonts: `Base.astro` preloads the two text fonts (Polish pages also their Polish subsets) and `fonts.css` gives them Arial fallbacks with matched metrics, so the swap does not move the page. JetBrains Mono (labels and codes) is added by an inline script in `Base.astro` once the page has loaded and its largest text is painted, so it never competes with the text fonts; until then the labels use the system monospace, which is just as wide (0.6 em). The article's terminal loads it with `fonts-mono.css`. After upgrading a `@fontsource-variable` package, re-run `scripts/subset-fonts.py`, build, and paste the output of `scripts/font-fallbacks.py` into `fonts.css`.
- **No forms.** `/beta/` asks for an email: "Write to us" assembles the mailbox in the browser (`MAILBOX` in `src/config.ts`), opens a `mailto:` message with the page's title as its subject and shows the address beside the button; without JavaScript it leads to the footer's details (`#contact`). The site collects nothing, sets no cookies and runs no analytics; keep it that way.
- **Header and footer:** the header's tabs are Mission, Applications, Knowledge base, Roadmap, Team, Contact and Join the beta, then the language menu; "Join the beta" is an ordinary tab like the others, leading to `/beta/`, with no buttons beside it. "Contact" leads to the footer's details (`#contact` on the same page). "Sign in" is off while the platform is rebuilt: `SIGN_IN = false` in `src/config.ts` keeps its links to `PLATFORM_URL` in the code (the header and the footer's Company column); set it to `true` to bring them back. The footer's line is the motto, one sentence a line (`site.motto`, also the mission heading). The contact details (address in two lines, broken before the postal code, the info mailbox, phone) keep their place in the footer: their labels stay visible and a greyed "Show contact details" box covers only the column of values (`ContactDetails`), so a click does not move the footer; they are assembled at runtime from character codes (`MAILBOX` and `CONTACT` in `src/config.ts`); do not write the address, the email address or the phone number into the HTML as plain text. The full address is shown only there, on a click; the JSON-LD, `llms.txt` and `site.md` say only "Zabrze, Poland". The tax numbers have copy buttons that copy only the number.
- **Knowledge base:** `src/data/knowledge.ts` lists the articles in order; an entry with `draft: true` keeps its copy and thumbnail in the code but is not published. The Bottom-up thumbnail (`StackThumb`) draws the index's stack in its own proportions, the layers named beside it.
- **Brand files:** `scripts/make-icons.mjs` writes the favicons (the SL mark without a background) and the apple-touch-icon (on its dark tile: iOS fills transparency with black); `scripts/make-logos.mjs` writes the header's logo (the lettering enlarged to the menu's size) and the footer's slate logo. Both derive from `public/brand/logo-neon.svg`, which stays the organization logo.
- **Third-party licences:** fonts (OFL) and Lucide icons (ISC) are listed in `public/licenses.txt`; update it when adding a font or an icon set.

## Deployment

`.github/workflows/static.yml` builds the site and publishes **only `dist/`** to GitHub Pages on every push to `main`. A push to `main` is a production release. Internal files (`AGENTS.md`, `docs/`, `.factory/`) stay in the repository and off the domain. The domain is `simon-lab.org` (`public/CNAME`).

## Related repositories

- **simon-lab-media** (private): film and media production, the claims table, and the gated web export.
- **Simon Lab platform** (private): the applications. It is being rebuilt; the hosted app subdomains are offline, so the site links none of them (the sign-in link waits behind `SIGN_IN`).
