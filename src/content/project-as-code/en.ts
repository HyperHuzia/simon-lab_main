import type { Article } from '../article-types';

// English master copy of "Project as code" (knowledge base). It grows out of the previous site's mission and
// project-as-code texts. Product statements follow the claims table in simon-lab-media: about 45 document profiles;
// formats in, whatever a project has (the owner's statement: DXF, STEP, IFC, E57 point clouds, PDF, DOCX, XLSX, CSV,
// XML, JSON, which the AI agent turns into the form the project needs); formats out with evidence in the platform
// (PDF, IFC, 3D Tiles, XLSX, CSV); the batch sequence near the 60 °C limit; two clash findings, never "resolved".
// The code listing, the drawing of line L-104 and the revision log are illustrations: the notes at the end say so.
export const article: Article = {
  lang: 'en',
  meta: {
    title: 'Project as code | Simon Lab',
    description:
      'Why a chemical plant project works better as structured, versioned data than as a pile of documents: one model, documents generated from it, every change a revision, checks that run like tests.',
  },
  hero: {
    eyebrow: 'Knowledge base · Project as code',
    title: 'A plant project should read like a program, not a pile of documents',
    standfirst:
      'Every chemical plant project is thousands of decisions spread over PDFs, spreadsheets and drawings that cannot read each other. Keeping a team on one revision standard, with documentation that stays correct and consistent across disciplines, is the struggle of every head of a chemical engineering office. Revisions drift, and people did not evolve to police the consistency of documents: that is a job for a machine, because we expect machine precision.',
    read: 'Start reading',
  },
  chapters: [
    {
      id: 'broken-chain',
      eyebrow: '1 · The broken chain',
      title: 'Documents that cannot talk to each other',
      intro: [
        'A typical project moves through a chain of documents: a grant proposal, a process description, P&IDs, equipment lists, calculation sheets, cabinet registers, drawings and permit applications. Each one is written by hand from the ones before it.',
      ],
      steps: [
        {
          id: 'pac-chain',
          stage: 'pac-chain',
          title: 'One file feeds the next',
          body: [
            'Numbers leave the proposal as a PDF, are retyped into a spreadsheet, copied into a drawing and typed again into a permit application. Every copy is a chance for an error, and no system can follow the thread from one file to the next.',
          ],
        },
        {
          id: 'pac-drift',
          stage: 'pac-drift',
          title: 'And every revision drifts',
          body: [
            'When something changes, each document has to be updated by someone who notices. One sheet is at revision C, the drawing is still at A, the permit application somewhere in between. The logic of the project lives in people’s heads, not in the files.',
          ],
        },
      ],
    },
    {
      id: 'one-model',
      eyebrow: '2 · One model',
      title: 'One source, many documents',
      intro: [
        'In Simon Lab the project is not a folder of files. It is structured data: equipment with its parameters, lines with materials and pipe classes, instruments, control logic, cabinets, steel structures and the site, each defined once, in the application of its discipline.',
      ],
      steps: [
        {
          id: 'pac-model',
          stage: 'pac-model',
          title: 'Defined once',
          body: [
            'A line is defined once: its number, medium, nominal size, material and pipe class, and the equipment it connects. The P&ID sheet, the line register and the piping isometric all read that one definition.',
          ],
        },
        {
          id: 'pac-fanout',
          stage: 'pac-fanout',
          title: 'Documents are generated',
          body: [
            'Documents are rendered from the model, not drawn beside it: P&ID sheets, equipment data, piping isometrics, cabinet registers, structural drawings and the site plan. The platform has about 45 document profiles today.',
          ],
        },
        {
          id: 'pac-pages',
          stage: 'pac-pages',
          title: 'Pages for review',
          body: [
            'The PDF documents are generated from the code for the review process. They are not the source of truth: they follow from it, and the source of truth is the code.',
          ],
        },
      ],
    },
    {
      id: 'revisions',
      eyebrow: '3 · Revisions',
      title: 'Every change is a revision',
      intro: [
        'Because the project is data, a change is not a new copy of a file. It is a new revision of the model, and its effect can be followed through everything that depends on it.',
      ],
      steps: [
        {
          id: 'pac-rev',
          stage: 'pac-rev',
          title: 'A history of decisions',
          body: [
            'The model keeps its revisions. Each one records a change to the data itself: a cabinet added, a sequence tuned, a line resized. The question in a review is no longer “which file is current?” but “what changed, and why?”.',
          ],
        },
        {
          id: 'pac-diff',
          stage: 'pac-diff',
          title: 'One change, every document',
          body: [
            'When the nominal size of one line increases, the change reaches its P&ID sheet, the line register and the isometric, because all three are generated from that line. The model also shows what follows: the pressure loss in the discharge line drops, the flowmeter is now out of range for the pipe and has to be selected again, and the pump stays in range, although a cheaper model would now do. Nothing waits for someone to notice.',
          ],
        },
      ],
    },
    {
      id: 'checks',
      eyebrow: '4 · Checks',
      title: 'Checks run like tests',
      intro: [
        'In software, every change runs the tests. A project defined as data works the same way: the model is checked against physics, limits and geometry whenever it changes.',
      ],
      steps: [
        {
          id: 'pacm-sim',
          stage: 'pacm-sim',
          title: 'The process runs before it is built',
          body: [
            'The batch program of the demonstration unit runs on an emulated PLC in the dynamic simulation. Dosing is throttled to keep the solution near its 60\u00a0°C limit, and the operator steps are proven before anything is ordered.',
          ],
        },
        {
          id: 'pacm-clash',
          stage: 'pacm-clash',
          title: 'The 3D model is checked for clashes',
          body: [
            'Clash detection runs over the assembled unit. In the demonstration project it reports two envelope clashes, shown here as findings for the designer to resolve.',
          ],
        },
      ],
    },
    {
      id: 'open-formats',
      eyebrow: '5 · Open formats',
      title: 'Import and export, in the formats you already use',
      intro: [
        'An open platform has to meet the rest of the industry where it is. Data comes in from the files partners already have and leaves as the documents they expect.',
      ],
      steps: [
        {
          id: 'pac-formats',
          stage: 'pac-formats',
          title: 'In and out',
          body: [
            'In: whatever the project already has, from DXF and STEP drawings and models, IFC and point clouds (E57) to PDF and Word documents, spreadsheets and data (XLSX, CSV, XML, JSON). The AI agent turns them into the form the project needs. Out: PDF document sets, IFC and 3D Tiles for the site model, XLSX and CSV registers. A partner who does not use Simon Lab still receives standard files.',
          ],
        },
      ],
    },
    {
      id: 'the-team',
      eyebrow: '6 · The team',
      title: 'What changes for the people who design the plant',
      steps: [
        {
          id: 'pac-iterate',
          stage: 'pac-iterate',
          title: 'Engineers decide, the model keeps the project consistent',
          body: [
            'Nothing here replaces engineering judgement. The engineer still chooses the process, sizes the machines and signs the drawings. What changes is the work around it: no retyping, no hunting for the current revision, no change that silently misses a document.',
          ],
        },
        {
          id: 'pac-scope',
          stage: 'pac-scope',
          title: 'Iterations become cheap',
          body: [
            'When the scope or a regulation changes, the next iteration runs through the whole project at once. That is what we mean by project as code: not AI generating the plant, but engineering made computational.',
          ],
        },
      ],
    },
  ],
  closing: {
    eyebrow: 'Private beta',
    title: 'Run your next project as code',
    body: ['We work with trusted partners, one project at a time. Tell us about yours.'],
    cta: { beta: 'Join the beta', apps: 'Explore the applications' },
  },
  notes: [
    'The demonstration project is anonymized. Its pages and screens are the platform’s own output.',
    'The code listing, the drawing of line L-104 and the revision log illustrate the idea; they are not the platform’s file formats or screens.',
    'Clash detection shows findings; the designer resolves them.',
  ],
  labels: {
    'pac.grant': 'Grant proposal',
    'pac.process': 'Process description',
    'pac.pid': 'P&ID',
    'pac.list': 'Equipment list',
    'pac.permit': 'Permit application',
    'pac.pdf': 'PDF',
    'pac.dwg': 'Drawing',
    'pac.xls': 'Spreadsheet',
    'pac.doc': 'Document',
    'pac.retyped': 'Retyped by hand',
    'pac.rev': 'Rev.',
    'pac.model': 'Project model',
    'pac.doc.pid': 'P&ID sheet',
    'pac.doc.lines': 'Line register',
    'pac.doc.iso': 'Piping isometric',
    'pac.doc.equip': 'Equipment data',
    'pac.doc.cab': 'Cabinet register',
    'pac.doc.site': 'Site plan',
    'pac.eq.pump': 'Pump',
    'pac.eq.ft': 'Flowmeter',
    'pac.eq.valve': 'Valve',
    'pac.eq.tank': 'Tank',
    'pac.pid.alt': 'Line L-104, DN50, pipe class B1: from pump P-101 through flowmeter FT-104 and valve HV-104 to tank B-101',
    'pac.log': 'Revision log',
    'pac.r10': 'Process basis set',
    'pac.r11': 'Equipment list issued',
    'pac.r12': 'Cabinet C-101 added',
    'pac.r13': 'Dosing sequence tuned',
    'pac.r14': 'Line L-104 resized',
    'pac.current': 'current',
    'pac.regenerated': 'Generated again',
    'pac.change': 'Change',
    'pac.affected': 'Affected documents',
    'pac.doc.io': 'I/O list',
    'pac.doc.plc': 'PLC program',
    'pac.doc.seq': 'Sequence description',
    'pac.doc.sim': 'Simulation report',
    'pac.fx.loss': 'Pressure loss in L-104: lower',
    'pac.fx.ft': 'FT-104: out of range, to be selected again',
    'pac.fx.pump': 'P-101: in range, a cheaper model would do',
    'pac.agent': 'AI agent',
    'pac.in': 'In',
    'pac.out': 'Out',
    'pac.iteration': 'Iteration',
    'pac.scope': 'Scope change',
  },
};
