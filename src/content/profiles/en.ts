import type { ProfilesCopy, ProfilesShared } from './types';

// English master copy of the profiles. The channel and the films follow the homepage and the Bottom-up article;
// LinkedIn's About follows AGENTS.md "What the site says"; the services follow the services page (src/content/services).
// As on the site: the location is the city only, no email or phone, no GitHub until the platform is open source.
export const profiles: ProfilesCopy = {
  lang: 'en',
  youtube: {
    channel: [
      'Simon Lab does computational engineering for chemical projects. It coordinates complete chemical engineering projects on one open platform: process, machines, control cabinets, 3D assembly, site and permits, with import and export of every kind of document. The project is defined once, as structured and versioned data; the documents are generated from it, and every change is tested like software.',
      'The films on this channel show the platform’s applications, from CapacityIndex and ProcessView to MechGraph, IonGrid, PlantMesh and Architecture, and how a project is built bottom-up, layer by layer.',
      'Simon Lab also takes on engineering orders for chemical plants, a whole project or one discipline: {services}',
      'Private beta with trusted partners. {motto}',
      '{site}',
    ],
    films: {
      en: {
        title: 'Simon Lab · Bottom-up chemical engineering',
        lede: 'One chemical engineering project, followed layer by layer through the Simon Lab applications: the specification in CapacityIndex, the P&ID and the dynamic process simulation in ProcessView, the machine in MechGraph and the control cabinets in IonGrid, the unit assembled in 3D in PlantMesh and placed on its site in Architecture, and the export of construction-ready documentation.',
        chapters: {
          heading: 'Chapters',
          titles: [
            'The specification: CapacityIndex',
            'ProcessView: P&ID and process simulation',
            'MechGraph and IonGrid',
            'PlantMesh: the unit in 3D',
            'Architecture: the unit on its site',
            'Documents and the beta',
          ],
        },
        notes:
          'The project is an anonymized demonstration project: a caustic soda (NaOH) batch dissolution unit. Particle tracks in the CFD visuals are a visualization; clash detection results are shown as findings, not as resolved.',
        company:
          'Simon Lab coordinates complete chemical engineering projects on one open platform: process, machines, control cabinets, 3D assembly, site and permits, with import and export of every kind of document. Private beta with trusted partners.',
        close: ['Website: {site}', 'Engineering services: {services}', 'The beta: {beta}', 'Polish version: {other}', 'Captions: English, German.'],
      },
    },
    tags: [
      'chemical engineering',
      'process engineering',
      'plant design',
      'P&ID',
      'process simulation',
      'dynamic simulation',
      'PLC',
      'mixer design',
      'CFD',
      'FEM',
      'control cabinet',
      'piping isometrics',
      '3D plant design',
      'site plan',
      'OpenBIM',
      'project as code',
      'AI agent',
      'engineering documentation',
      'Simon Lab',
    ],
  },
  linkedin: {
    tagline: 'Computational engineering for chemical projects. One open platform, project as code.',
    about: [
      'Simon Lab does computational engineering for chemical projects. Its mission is to coordinate complete chemical engineering projects on one open platform: process, machines, control cabinets, 3D assembly, site and permits, with import and export of every kind of document.',
      'The problem it solves is the broken chain: process engineering still runs on static documents that cannot read each other, so every handoff introduces errors. The answer is project as code. The project is defined once, as structured and versioned data, in one application per discipline; documents are generated from that model, every change is a revision, and the model is checked against physics, limits and geometry whenever it changes. Engineers stay in charge of every decision.',
      'The applications, bottom-up: {apps}. Engineers bring their own AI agent (BYOA); Simon Lab gives it the CLI to see the project.',
      'Simon Lab also takes on engineering orders, a whole chemical engineering project or one discipline: process engineering and process automation, mechanical design, automation and power, 3D modeling, architecture and BIM. The work runs on the platform, so orders are delivered fast, and experienced engineers check every deliverable. Clients receive the documents together with the project as data, AI-native from the first revision: {services}',
      'Private beta with trusted partners; the launch is planned for ACHEMA 2027 in Frankfurt. Open source coming soon.',
      '{motto}',
    ],
  },
};

export const shared: ProfilesShared = {
  youtube: {
    keywords: [
      'chemical engineering',
      'process engineering',
      'plant design',
      'P&ID',
      'process simulation',
      'CFD',
      'FEM',
      'control cabinets',
      '3D plant design',
      'project as code',
      'AI agent',
      'engineering documentation',
      'Simon Lab',
      'inżynieria chemiczna',
      'Chemietechnik',
    ],
  },
  linkedin: {
    specialties: [
      'Chemical engineering',
      'Process engineering',
      'Plant design',
      'P&ID',
      'Process simulation',
      'Dynamic simulation',
      'Mechanical design',
      'CFD',
      'FEM',
      'Control cabinets',
      'PLC',
      'Piping isometrics',
      '3D plant design',
      'Site planning',
      'OpenBIM',
      'Engineering documentation',
      'Project as code',
      'AI agents',
      'Computational engineering',
      'Process automation',
    ],
    services: {
      // the closest entries of LinkedIn's own list of services, which has no chemical, process or BIM entries (in the
      // Polish interface: Projektowanie inżynierskie, Projektowanie 3D, Architektura)
      items: ['Engineering Design', '3D Design', 'Architecture'],
      description:
        'Engineering for chemical plants, a whole project or one discipline: process engineering and process automation, mechanical design with strength calculations (FEM) and flow simulations (CFD), automation and power, 3D modeling, architecture and BIM models. The project is built as code on the Simon Lab platform, so orders are delivered fast, and experienced engineers check every deliverable. Clients receive the documents and the project as data. {services}',
    },
  },
  imageLine: 'Computational engineering for chemical projects',
};
