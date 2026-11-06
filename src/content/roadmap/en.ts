import type { RoadmapCopy } from './types';

// English master copy of the roadmap. Step 1 summarises the closed phases of the platform's own roadmap
// (docs/PROJECT_CONTROL_PLANE_ROADMAP.md in the platform repository) without internal names. The launch target is the
// owner's: the end of the beta, with the offer of the trusted partners, at ACHEMA 2027.
export const roadmap: RoadmapCopy = {
  lang: 'en',
  meta: {
    title: 'Roadmap | Simon Lab',
    description:
      'Where Simon Lab is today and the steps to a released product: application and infrastructure hardening, projects with trusted partners, broad tests, open source, and the launch with trusted partners at ACHEMA 2027.',
  },
  hero: {
    eyebrow: 'Roadmap',
    title: 'From private beta to a product',
    lede: 'Simon Lab is in a private beta. These are the steps between today and a released product, in the order we take them, and what each of them means for the partners who will work with us.',
    target: 'Target: launch and the end of the beta at ACHEMA 2027, Frankfurt, 14–18 June 2027',
  },
  goal: {
    eyebrow: 'What we are building toward',
    title: 'From one scope to an engineering package',
    lede: 'At launch, a structured project scope should be enough for the platform to produce:',
    points: [
      'the project structure, and a visual process model with its simulation',
      'vendor-neutral control structures, ready for PLC automation engineering',
      'a CAPEX model built on real procurement: suppliers, offers and budgets',
      'the engineering documentation, all from the same source of truth',
    ],
    promise:
      'Simon Lab does not replace engineering judgement. It gives engineers a machine-readable backbone for the project, so they can review, correct, simulate, price, document and automate faster.',
  },
  road: { eyebrow: 'Step by step', title: 'The road to the launch' },
  status: { now: 'Now', next: 'Next', planned: 'Planned', launch: 'ACHEMA 2027 · 14–18 June 2027', after: 'After launch' },
  steps: [
    {
      id: 'apps',
      status: 'now',
      title: 'Application hardening',
      body: ['The applications were built in fast, AI-assisted prototyping sprints. Now we are hardening them for real work:'],
      points: [
        'A current, supported technology stack in every application, with reproducible checks before each release.',
        'One identity for each project across all applications, and one session that follows the engineer between them.',
        'AI agents change a project only through typed, validated commands. Destructive changes need a person’s approval.',
        'Every action is recorded for audit, and the platform tests itself before results reach people.',
      ],
    },
    {
      id: 'infra',
      status: 'next',
      title: 'Infrastructure hardening',
      body: [
        'AI agents work on computers, and those computers need far more power than the computers in an engineering office: an AI agent works much faster than a person, and it runs specialised tools such as process simulation, strength calculations (FEM) and flow simulations (CFD).',
        'We are preparing that infrastructure for our trusted partners: compute, storage, backups and secure remote access.',
      ],
    },
    {
      id: 'calibration',
      status: 'planned',
      title: 'Calibration: projects with trusted partners',
      body: [
        'The first projects are delivered together with trusted partners as finished artefacts: PDF documentation, 3D models and results that fit their own workflows. Each one calibrates the platform against what their clients and engineers expect.',
      ],
    },
    {
      id: 'access',
      status: 'planned',
      title: 'Access for engineers',
      body: [
        'Trusted partners - individuals, engineering companies, universities. They are invited to test the platform on their own in the BYOA model (bring your own agent: each works with their own AI agent), through access to the Simon Lab CLI.',
      ],
    },
    {
      id: 'open',
      status: 'planned',
      title: 'Open source and the community',
      body: ['The battle-tested platform becomes open source, to invite broader engineering collaboration: engineers from around the world improve it with us and tell us where it falls short. Anyone who wants to can also fork it.'],
    },
    {
      id: 'clients',
      status: 'planned',
      title: 'Broader access and infrastructure scale-up',
      body: [
        'We release a tool for engineers who want to invite their team members, or their own client’s team, to work in the project. Their clients see the project carried out for them, and it stays transparent also for a client’s own AI agent.',
      ],
    },
    {
      id: 'scale',
      status: 'planned',
      title: 'Physical architecture and reliability',
      body: [
        'Carrying the platform for a wider group of clients takes serious compute. We build out the physical architecture behind it and work on reliability and uninterrupted access.',
      ],
    },
    {
      id: 'launch',
      status: 'launch',
      title: 'The offer with trusted partners, and the end of the beta',
      body: [
        'Simon Lab leaves the beta with an offer made together with trusted partners. They supervise the AI, validate the results and bring the engineering insight. The results are refined by people and visible to the client in the platform, or outside it through exports.',
        'The platform is open source, so projects move in and out easily: in the age of AI, program code is a language every AI agent understands. Nothing is gatekept. The data belongs to the user, and anyone can bring their own compute (BYOC) and host the platform on their own hardware.',
        'The network of trusted partners delivers fast proposals and designs of chemical installations. That is the product: the platform does not design plants on its own. It speeds the work up, while knowing which process is right, which solutions are good or bad, and what the client needs, stated or not, stays human work. The engineer leaves drafting and drudgery behind and takes on the role of an architect of chemical engineering.',
      ],
    },
    {
      id: 'provider',
      status: 'after',
      title: 'Infrastructure for the AI agent of choice',
      body: ['After the launch, Simon Lab as a company becomes an infrastructure provider: it delivers the compute that AI agents need to work in this environment, the only residual value in the age of AI.'],
    },
  ],
};
