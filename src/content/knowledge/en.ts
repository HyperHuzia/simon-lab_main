import type { KnowledgeCopy } from './types';

export const knowledge: KnowledgeCopy = {
  lang: 'en',
  meta: {
    title: 'Knowledge base | Simon Lab',
    description:
      'Illustrated articles on the ideas behind Simon Lab: the bottom-up method and the project as code.',
  },
  hero: {
    eyebrow: 'Knowledge base',
    title: 'How Simon Lab works',
    lede: 'Illustrated articles for engineers who want to see the whole workflow: the ideas behind the platform, shown on a real demonstration project.',
  },
  labels: {
    read: 'Read the article',
    soon: 'In preparation',
    minutes: '{n}\u00a0min read',
    articles: 'Articles',
    preparing: 'In preparation',
  },
  entries: {
    'project-as-code': {
      title: 'Project as code',
      standfirst:
        'Why a chemical plant project works better as structured, versioned data than as a pile of documents, and what that changes for the people who design it.',
    },
    'bottom-up': {
      title: 'Bottom-up chemical engineering',
      standfirst:
        'A complete caustic soda preparation unit, built one layer at a time: specification, process, machines, control cabinets, 3D assembly, site and documents.',
    },
    'your-agent': {
      title: 'Your AI agent, our engineering practice',
      standfirst:
        'The AI agent is yours: Codex, Claude Code, Hermes Agent, OpenClaw, Grok, DeepSeek, dots or any other. Ours is good engineering practice written down for it: the order of work, a ticket system, completeness checks on every delivery, visibility for the people in charge and documentation anyone can verify. And the compute your AI agent needs.',
    },
    hardware: {
      title: 'You pay only for hardware',
      standfirst:
        'Our applications are going open source: use them for your own projects and modify them for non-commercial purposes. What we charge for is infrastructure: compute for process simulation, strength calculations (FEM) and flow simulations (CFD), storage and backups.',
    },
  },
};
