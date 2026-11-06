import type { HomeCopy } from './types';

// English master copy. The mission, project-as-code and about texts are the previous site's, lightly edited; the
// motto (src/i18n/ui.ts) is kept as the owner decided. Product statements follow the claims table in simon-lab-media.
export const home: HomeCopy = {
  lang: 'en',
  meta: {
    title: 'Simon Lab | Computational engineering for chemical projects',
    description:
      'Simon Lab coordinates complete chemical engineering projects on one open platform: process, machines, control cabinets, 3D assembly, site and permits, with import and export of every kind of document.',
  },
  hero: {
    eyebrow: 'Chemical engineering',
    title: 'Computational engineering for chemical projects',
    lede: 'Simon Lab coordinates complete chemical engineering projects on one open platform, with import and export of every kind of document. From lab bench to repository, engineering data is structured as code: traceable, verifiable and machine-readable from day one.',
    film: 'Watch the film',
    filmLink: 'Watch the 2-minute film',
    slides: [
      'PlantMesh · the plant in 3D, clash-checked',
      'MechGraph · the machine, from its own calculations',
      'IonGrid · the control cabinet, part by part',
      'Documents · generated from the project',
    ],
  },
  mission: {
    eyebrow: 'The mission',
    body: [
      'The chemical industry is falling behind. Software, finance and manufacturing moved to computational workflows long ago, while process engineering is still trapped in static documents: PDFs that die on submission, spreadsheets that drift with every revision, drawings that no system can read.',
      'This is the broken chain. Data created in one phase cannot flow into the next. Every handoff introduces errors, and every project starts from scratch.',
    ],
    close: 'We are here to fix it.',
  },
  story: {
    eyebrow: 'How a plant project takes shape',
    title: 'From scattered documents to one coordinated project',
    steps: [
      {
        id: 'idea',
        title: 'It starts with an idea',
        body: 'A client needs a new installation: a capacity, a product, a site. At this point it is a conversation and a few numbers.',
      },
      {
        id: 'classic',
        title: 'Then the disciplines join in',
        body: 'Lab tests, process and capacity, calculations, control, machines, architecture, permits. Each discipline works in its own tools and documents and passes results on by email and PDF.',
      },
      {
        id: 'chaos',
        title: 'And the chain breaks',
        body: 'Data arrives incomplete. Some topics are dropped, others are ignored or in conflict. Capacity no longer matches the process, emissions exceed the limit, a permit is missing. Architecture designed without the permits works in a vacuum. One iteration takes months of coordination.',
      },
      {
        id: 'order',
        title: 'One language for the whole project',
        body: 'The common language is program code, the language AI agents work in. Whether it follows the Simon Lab structure or another one matters less: Simon Lab is simply a structure prepared for a plant project. In it, LabGate, CapacityIndex, ProcessView, MechGraph, IonGrid, PlantMesh, Architecture and Permit read and write the same project code. Nothing is retyped, nothing gets lost between teams.',
      },
      {
        id: 'iterate',
        title: 'Iterations become fast',
        body: 'The work is still iterative. But the applications now exchange data directly, so every iteration delivers the complete set of documents, and the next one comes sooner.',
      },
      {
        id: 'validate',
        title: 'Every iteration is tested',
        body: 'After each iteration the whole project is tested and validated: mathematical consistency, every document coherent with the others, the same quality standards that software is tested to. When the tests find errors, the next iteration follows, until the project passes flawlessly.',
      },
      {
        id: 'scope',
        title: 'A scope change is just the next iteration',
        body: 'When the client changes the scope, CapacityIndex signals it and nothing stops. The change enters at the start, and the next iterations carry it through every document and every test.',
      },
      {
        id: 'law',
        title: 'So is a change in the law',
        body: 'When a regulation changes, Permit flags it. The following iterations update everything that depends on it and are tested again, until the project is free of errors.',
      },
    ],
    nodes: {
      idea: 'Client’s idea',
      lab: 'Lab tests',
      process: 'Process and capacity',
      calc: 'Calculations',
      control: 'Control',
      machine: 'Machines and assembly',
      arch: 'Architecture',
      permit: 'Permits and emissions',
    },
    flags: {
      conflict: 'Conflict',
      noPermit: 'No permit',
      emissions: 'Emissions over limit',
      capacity: 'Capacity mismatch',
      missing: 'Missing data',
    },
    iteration: 'Iteration',
    scope: 'Scope change',
    law: 'Law change',
    outro: [
      'That is our mission: complete chemical engineering projects, coordinated on one open platform.',
      'So engineers can focus not on coordination, but on the parts of the plant that really matter.',
    ],
  },
  pac: {
    eyebrow: 'Knowledge base',
    title: 'When the project is code',
    body: [
      'Traditional chemical projects live in static documents. Grant proposals become PDFs, P&IDs become drawings, simulations become spreadsheets. Each handoff introduces drift, and the logic of the project ends up in formats no system can read.',
      'Project as code inverts this. We define the project in structured, version-controlled data from the grant phase onward. The mathematics are validated before the first funding request, and the process compiles into a working simulation before the first line is drawn.',
      'This is not AI generating your plant. It is engineering intent captured with enough rigour that computational tools, AI among them, can read it, check it and help: not because we have automated engineering, but because we have made it computational.',
    ],
    result: 'The result: projects that are computational-ready, auditable at every revision and traceable to every decision.',
    more: 'Open the knowledge base',
  },
  apps: {
    eyebrow: 'Applications',
    title: 'One platform, one application per discipline',
    lede: 'Each application covers one discipline of a plant project and exchanges data with the others. Documents are generated from the shared model.',
    all: 'All applications',
  },
  services: {
    body: 'Simon Lab also takes on engineering orders, a whole chemical plant project or one discipline of it: built as code on the platform, delivered fast and checked by experienced engineers.',
    link: 'Engineering services',
  },
  about: {
    eyebrow: 'Company',
    title: 'About us',
    body: 'Simon Lab delivers computational engineering for the chemical industry: process engineering expertise combined with code-native methods, so that projects are auditable, traceable and ready for the computational tools of today and tomorrow.',
    team: 'Meet the team',
    roadmap: { body: 'From the private beta to the launch with trusted partners at ACHEMA 2027.', link: 'See the roadmap' },
  },
  beta: {
    eyebrow: 'Private beta',
    title: 'Join the beta',
    body: 'We work with trusted partners: together we build prototype projects, evaluate the quality of the results and test new tools in chemical engineering.',
    join: 'Apply for the beta',
  },
};
