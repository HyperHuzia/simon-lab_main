import type { ServicesCopy } from './types';

// English master copy of the services page. The slogan and the claims are the owner's (2026-11-06): orders for a whole
// project or one discipline, delivered fast, checked by experienced engineers, the client receives the documents and
// the project as data. The output formats are those of "Project as code" (AGENTS.md, content rules).
export const services: ServicesCopy = {
  lang: 'en',
  meta: {
    title: 'Engineering services | Simon Lab',
    description:
      'Engineering orders for chemical plants, a whole project or one discipline, from the P&ID to the BIM model: built as code, delivered fast, checked by experienced engineers.',
  },
  hero: {
    eyebrow: 'Engineering services',
    title: 'Make your plant AI-native, fast.',
    lede: 'Simon Lab takes on engineering orders for chemical plants: a whole project or one discipline of it. The work runs on the Simon Lab platform, so the documents come out of one model quickly, and experienced engineers check every one of them before it leaves.',
  },
  disciplines: {
    eyebrow: 'Disciplines',
    title: 'From the P&ID to the BIM model',
    items: [
      {
        app: 'processview',
        name: 'Process engineering and process automation',
        body: 'P&ID, dynamic process simulation and control programs, tested on an emulated PLC before anything is bought.',
      },
      {
        app: 'mechgraph',
        name: 'Mechanical design',
        body: 'Machines and vessels from dedicated calculations: mixing, shafts, strength calculations (FEM) and flow simulations (CFD), with drawings and reports from the same model.',
      },
      {
        app: 'iongrid',
        name: 'Automation and power',
        body: 'Control cabinets and their power supply, built from manufacturers’ catalogue components, with heat-loss data and engineering registers.',
      },
      {
        app: 'plantmesh',
        name: '3D modeling',
        body: 'The unit assembled in 3D: piping isometrics, support structures, service access and clash detection.',
      },
      {
        app: 'architecture',
        name: 'Architecture and BIM',
        body: 'The unit in its building and on its site: architectural arrangement and georeferenced OpenBIM models, up to the site plan.',
      },
    ],
  },
  fast: {
    eyebrow: 'Delivery',
    title: 'Fast, because the project is code',
    body: [
      'The project is defined once, as structured and versioned data. Drawings, lists and calculations are generated from that model, so a change reaches every document in the same revision instead of travelling from one handoff to the next.',
      'After every iteration the model is checked against physics, limits and geometry, the way software is tested. AI agents take over the coordination and the repetitive work between the documents.',
    ],
    more: 'Project as code, in the knowledge base',
  },
  checked: {
    eyebrow: 'Quality',
    title: 'Checked by experienced engineers',
    body: [
      'Engineers make the decisions: the scope, the process, the selection of every machine and component. Every deliverable is checked by an experienced engineer before it goes to the client.',
    ],
  },
  delivery: {
    eyebrow: 'What the client receives',
    title: 'The documents, and the project as data',
    lede: 'The documents contractors and authorities work with, and the model they come from, in open formats:',
    points: [
      'drawings and reports as PDF',
      'models as IFC and 3D Tiles',
      'lists and registers as XLSX and CSV',
      'the project itself as structured data, ready for the next revision and for AI agents',
    ],
  },
  order: {
    eyebrow: 'Orders',
    title: 'Orders by email',
    body: 'A short description is enough to start: the plant or the part of it, the disciplines and the deadline. We reply with a proposal for the scope and the timeline.',
    write: 'Write to us',
  },
};
