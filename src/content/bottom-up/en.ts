import type { Article } from './types';

// English master copy. Claims follow the production's claims table (simon-lab-media/productions/
// 2026-11-bottom-up-naoh/claims.md): particle tracks are a visualization and the plant surroundings a generic model
// (said in the notes at the end, never presented otherwise), clashes are shown as detected (never as resolved),
// cabinet heat losses are a known lower bound.
export const article: Article = {
  lang: 'en',
  meta: {
    title: 'Bottom-up chemical engineering | Simon Lab',
    description:
      'Simon Lab is the production environment where your AI agent builds a complete plant project layer by layer, under engineering rules and on real compute.',
  },
  hero: {
    eyebrow: 'Simon Lab · the bottom-up method',
    title: 'Your AI agent does not need another chat window. It needs a plant to work in.',
    standfirst:
      'Simon Lab is the production environment in which an AI agent designs a complete chemical installation, from the physics of the process to the drawings a contractor can build from. Layer by layer, under rules that keep the work complete and in the right order.',
    read: 'Read the story',
    watch: 'Watch the 2-minute film',
    scrollHint: 'Scroll to build the plant',
  },
  chapters: [
    {
      id: 'environment',
      eyebrow: 'Chapter 1',
      title: 'From a chat to an environment',
      intro: [
        'Most engineers know AI as a chat window. Here is how a chat becomes an AI agent, what an AI agent does on a plant project without an environment, and what Simon Lab gives it.',
      ],
      steps: [
        {
          id: 'env-chat',
          stage: 'env-chat',
          kicker: 'Chat',
          title: 'A chat answers, one document at a time',
          body: [
            'Ask a chat to size a pump and it hands you the sizing documentation. Open a new chat to check the strength of the agitator shaft and you get another document, which knows nothing about the first. A third question, a third document.',
            'Every answer stands alone and has nothing in common with the one before. Matching the answers, checking them and carrying them into the project is still your job.',
          ],
        },
        {
          id: 'env-agent',
          stage: 'env-agent',
          kicker: 'Your AI agent',
          title: 'An AI agent is a chat that was given tools',
          body: [
            'The AI agent was built to answer exactly that problem. At its heart is the same chat, the intelligence. Around it, it gets tools, a plan, files and checks, and it works in a loop until the task is done.',
            'Codex, Claude Code, Grok Build and Google Antigravity are AI agents of this kind.',
          ],
        },
        {
          id: 'env-docs',
          stage: 'env-docs',
          kicker: 'Our experience',
          title: 'Let loose on a project, it fires documents',
          body: [
            'An AI agent works on files, the way a programmer works in a repository. Let loose on a plant project, it builds an environment of its own, but it does not know the right standard, and every topic starts from an empty folder. Then it fires like a machine gun: series after series of documents, and the series collide, because nobody defined the standards.',
            'The advanced tools do not exist. And when you started this weekend project, you did not think it would turn into a year of optimizing a CFD solver and rendering CAD geometry on a worn-out laptop.',
          ],
        },
        {
          id: 'env-build',
          stage: 'env-build',
          kicker: 'Simon Lab',
          title: 'Bring your own AI agent',
          body: [
            'Simon Lab lets you bring your own AI agent: BYOA (bring your own agent). Simon Lab gives it the environment: every part of the project has its place in a layer, and every layer is built on the one below. The AI agent starts with the specification in CapacityIndex and builds the process in ProcessView; when the process shows that the specification needs a change, it goes back, and both get a new revision.',
          ],
        },
        {
          id: 'env-release',
          stage: 'env-release',
          kicker: 'Iterations',
          title: 'Every revision tested, the project released together',
          body: [
            'A change in the process rebuilds what depends on it: the machine, the cabinet, the 3D model and the site. Every document is checked again on every revision. When all of it passes, the project moves from beta to version 1.0 in every application.',
            'Behind the layers are <strong>engineering applications</strong>, one per discipline, <strong>rules of good engineering practice</strong> written down as checks, and the <strong>compute</strong> that real verification needs (CFD, FEM, rendering), on our own machines.',
          ],
        },
      ],
    },
    {
      id: 'mirror',
      eyebrow: 'Chapter 2',
      title: 'The AI agent reads code, the engineer sees the plant',
      intro: [
        'The AI agent proposes, the engineer approves. The AI agent reads code and does not need a screen. The engineer needs to see the work to decide, and Simon Lab provides that interface: one model, shown to each of them in their own language.',
      ],
      steps: [
        {
          id: 'mirror-pv',
          stage: 'mirror-pv',
          kicker: 'ProcessView',
          title: 'A data structure, or a P&ID',
          body: [
            'To the AI agent, the process is structured data: every tank, nozzle, line and instrument an object with its connections. The engineer sees the same model as a P&ID.',
          ],
        },
        {
          id: 'mirror-ig',
          stage: 'mirror-ig',
          kicker: 'IonGrid',
          title: 'A netlist, or a cabinet',
          body: [
            'The AI agent does not need a render of the cabinet. It reads a netlist: devices, terminals, wires and signals. The engineer sees the cabinet in 3D, part by part, as it will be built.',
          ],
        },
        {
          id: 'mirror-pm',
          stage: 'mirror-pm',
          kicker: 'PlantMesh',
          title: 'Edges and coordinates, or the unit itself',
          body: [
            'In PlantMesh the AI agent works with the geometry, its edges and coordinates. The engineer sees the unit rendered, with its steel, its piping and the people who will operate it.',
          ],
        },
      ],
      outro: [
        'Iterations this fast let the engineer work with the project like modelling clay, without waiting weeks and asking for a new revision of the support structure. A direction can be seen before it is chosen, so the engineer knows whether it is worth taking.',
        'The engineer works more like an artisan than like a part of a corporate machine, free of the coordination between disciplines, and can design installations to be proud of: the speed of iteration brings a quality that until now was out of reach.',
      ],
    },
    {
      id: 'method',
      eyebrow: 'Chapter 3',
      title: 'Bottom-up: physics first, budget and timeline last',
      intro: [
        'Projects usually start from a budget and a timeline, set by someone who does not yet know the physics they depend on. Starting with the physics lowers the effort it takes to begin a project on the right foundation, instead of on a misguided customer assumption that began as an offer prepared in a few hours.',
        'Conventional projects are built top-down from documents, and every discipline patches what the previous one assumed. Bottom-up, nothing is drawn that has not been decided below it.',
      ],
      steps: [
        {
          id: 'method-laminate',
          stage: 'stack-laminate',
          kicker: 'One project',
          title: 'A project is a stack of decisions',
          body: [
            'Seen from outside, a plant project is one dense block of information. Inside, it has layers: what the plant must deliver, how the process runs, what the machines and cabinets are, how they fit together, where they stand.',
          ],
        },
        {
          id: 'method-layers',
          stage: 'stack-layers',
          kicker: 'Six layers',
          title: 'Each layer is an application',
          body: [
            '<strong>CapacityIndex</strong> holds scope, capacity and economics. <strong>ProcessView</strong> holds the process and its control. <strong>MechGraph</strong> and <strong>IonGrid</strong> design machines and control cabinets in parallel. <strong>PlantMesh</strong> assembles the unit in 3D. <strong>Architecture</strong> places it on its site.',
          ],
        },
        {
          id: 'method-flow',
          stage: 'stack-flow',
          kicker: 'Bottom-up',
          title: 'Every layer reads the one below',
          body: [
            'The AI agent works upwards. Each layer consumes what was decided underneath it and adds detail of its own, so a change to the specification travels up through the process, the machines and the drawings instead of being discovered on site.',
          ],
        },
        {
          id: 'method-input',
          stage: 'stack-in',
          kicker: 'Input',
          title: 'Documents are also an input',
          body: [
            'Whatever a project starts from goes into CapacityIndex: drawings in DXF, models in STEP, specifications in PDF and DOCX, data in XML. It takes in the mishmash and can hand one back, but inside, everything sits in the Simon Lab structure.',
          ],
        },
        {
          id: 'method-docs',
          stage: 'stack-docs',
          kicker: 'Last, not first',
          title: 'Documents are an output',
          body: [
            'Drawings, datasheets and reports are generated from the layers at the end, not typed in at the start. That is what makes them consistent: they are different views of the same decisions.',
          ],
        },
      ],
    },
    {
      id: 'capacityindex',
      layer: 'capacityindex',
      eyebrow: 'Layer 0 · CapacityIndex',
      title: 'Follow the demo project',
      intro: [
        'The rest of this page follows one real project through the stack: a caustic soda dissolution unit, anonymized, designed in the platform and shown with its actual screens and renders.',
        'The brief is the kind an engineer would get on a Monday morning: a plant already makes 5% lye; it needs 30% for a new line, dissolved from flakes delivered in 25\u00a0kg bags, in an existing stainless tank, in a free corner of the site.',
      ],
      steps: [
        {
          id: 'ci-prompt',
          stage: 'cli-prompt',
          kicker: 'The prompt',
          title: 'Plain language in, structure out',
          body: [
            'The engineer describes the process and its limits (batch size, the 60\u00a0°C ceiling in the tank, 40\u00a0°C at discharge) and asks for a bottom-up design that fits a spare area of the plant.',
          ],
        },
        {
          id: 'ci-spec',
          stage: 'cli-spec',
          kicker: 'Physics first',
          title: 'The specification every layer will read',
          body: [
            'The AI agent returns a design basis, not a drawing: 30% NaOH in 14.5\u00a0m³ batches; 220 bags, 5.5 tonnes of flakes per batch; chilled water at 7.5\u00a0°C in a half-pipe jacket; one batch per shift to cover 60\u00a0m³ a week. It also states the physics that will bound the design: dissolution is exothermic, so the dosing rate is limited by the cooling duty. And it lists the open points it cannot settle alone.',
            'Nothing goes further until the engineer approves the spec.',
          ],
          note: 'An example: every engineer sees the terminal or interface of their own AI agent. The numbers are the demonstration project’s design basis.',
        },
      ],
    },
    {
      id: 'processview',
      layer: 'processview',
      eyebrow: 'Layer 1 · ProcessView',
      title: 'A P&ID that runs',
      intro: [
        'With the specification approved, the AI agent builds the process in ProcessView, not as a picture of a P&ID, but as a model in which every element is an engineering object with a selection behind it.',
      ],
      steps: [
        {
          id: 'pv-build',
          stage: 'pv-build',
          kicker: 'Built element by element',
          title: 'Equipment, lines, valves, instruments',
          body: [
            'The AI agent places the equipment first (the tank, the bag-dump station, the elevator, the pump), then routes the lines between their nozzles, then adds the valves and instruments those lines need. Every kind of device has its class and type; a custom one is created by the AI agent on the spot.',
          ],
        },
        {
          id: 'pv-selection',
          stage: 'pv-selection',
          kicker: 'Full selection',
          title: 'Every element carries its decisions',
          body: [
            'Click any valve and its record opens: what it does, its states, the nozzles it connects, its parameters. Instruments carry their measuring principle and installation; lines carry material and pipe class. These are the guidelines mechanical design, instrumentation and control will read in the next layers.',
          ],
        },
        {
          id: 'pv-registers',
          stage: 'pv-registers',
          kicker: 'Registers, not lists',
          title: 'Materials, pipelines, instruments',
          body: [
            'The same model is also the register: materials with their sources, pipelines with their classes and diameters, every instrument with its loop. Nobody types these tables; they are the schematic, seen as data.',
          ],
        },
        {
          id: 'pv-sim',
          stage: 'pv-sim',
          kicker: 'Dynamic simulation',
          title: 'Proven before you buy a single pipe',
          body: [
            'Then the schematic runs. The 30% batch program fills the tank with lye, measures it, starts the agitator and doses the flakes bag by bag while the chilled-water jacket takes the heat of dissolution. Four hours and forty minutes of process, compressed into seconds.',
            'The temperature climbs to the 60\u00a0°C setpoint and holds there: the program holds the dosing back whenever the estimated worst-case temperature would cross it. This is the same interlock the real plant will run.',
          ],
        },
        {
          id: 'pv-plc',
          stage: 'pv-plc',
          kicker: 'Control',
          title: 'Ready-made programs on an emulated PLC',
          body: [
            'The batch sequence (reset, fill, measure, top up, start the agitator, dose, dissolve, sample) runs as a control program on an emulated PLC, with operator steps where the real operator will act. When the batch ends, 5.5 tonnes of NaOH have been dosed and the predicted product is 30%.',
          ],
        },
      ],
    },
    {
      id: 'mechgraph',
      layer: 'mechgraph',
      eyebrow: 'Layer 2 · MechGraph',
      title: 'The machine, from its own calculations',
      intro: [
        'The process now knows what the tank must do. MechGraph turns that into a machine: the existing stainless vessel, its half-pipe jacket, nozzles and platform, and a new agitator sized for the job.',
      ],
      steps: [
        {
          id: 'mg-model',
          stage: 'mg-turntable',
          kicker: 'Geometry as a program',
          title: 'Designed from inputs, not drawn',
          body: [
            'The vessel and agitator are generated from parameters. When the process changes a flow or a temperature, the model, the calculations and the drawings follow from the same source.',
          ],
        },
        {
          id: 'mg-mixing',
          stage: 'mg-section',
          kicker: 'Mixing',
          title: 'Power and solids suspension',
          body: [
            'Cut the vessel open and the design questions appear: how much power the impeller needs, and whether it keeps the flakes suspended until they dissolve instead of letting them settle on the bottom head, while the viscosity, temperature and density of the solution change dynamically.',
          ],
        },
        {
          id: 'mg-shaft',
          stage: 'mg-shaft',
          kicker: 'Mechanics',
          title: 'Shaft deflection, critical speed, strength',
          body: [
            'A long overhung shaft must not bend into the vessel wall or run near its critical speed; the shell and jacket must carry pressure and temperature to EN 13445. Each check is a calculation with its inputs on record.',
          ],
        },
        {
          id: 'mg-cfd',
          stage: 'mg-tracks',
          kicker: 'Flow',
          title: 'CFD and AI-assisted CFD',
          body: [
            'Flow is studied with CFD on our compute nodes. AI-assisted CFD (Walrus, Gemini) lets us verify cases faster and search for the optimal state. Here, flakes enter through the solids nozzle and are carried down by the circulation.',
          ],
        },
      ],
    },
    {
      id: 'iongrid',
      layer: 'iongrid',
      eyebrow: 'Layer 2 · IonGrid',
      title: 'In parallel: the control cabinet',
      intro: [
        'While the machine is designed, the control logic from ProcessView becomes hardware. IonGrid works on the same level of the stack as MechGraph: two tracks, one set of decisions underneath.',
      ],
      steps: [
        {
          id: 'ig-assembly',
          stage: 'ig-assembly',
          kicker: 'Catalogue components',
          title: 'A real cabinet, part by part',
          body: [
            'The cabinet is assembled from manufacturers’ models: enclosure and mounting plate, rails and ducts, three variable-speed drives for the process motors, power supplies, the controller with its I/O, terminals and wiring.',
          ],
        },
        {
          id: 'ig-heat',
          stage: 'ig-heat',
          kicker: 'Heat gains',
          title: 'What the balance runs on',
          body: [
            'Every device with a datasheet loss contributes to the cabinet’s heat-gain balance: at least 705\u00a0W known so far for this cabinet, most of it from the drives. Pneumatic control stays linked to the P&ID: the controller’s outputs drive the solenoid valves that move the process valves.',
          ],
        },
        {
          id: 'ig-register',
          stage: 'ig-register',
          kicker: 'Registers',
          title: 'Apparatus and I/O, generated with the cabinet',
          body: [
            'The apparatus register and the I/O list come out of the same model, signal by signal, ready for the electrician and for procurement.',
          ],
        },
      ],
    },
    {
      id: 'plantmesh',
      layer: 'plantmesh',
      eyebrow: 'Layer 3 · PlantMesh',
      title: 'Everything meets in one model',
      intro: [
        'The machine from MechGraph and the cabinet from IonGrid arrive in PlantMesh, where the unit is assembled with its steelwork, platforms, piping and the people who will operate it.',
      ],
      steps: [
        {
          id: 'pm-assembly',
          stage: 'pm-assembly',
          kicker: 'Assembly',
          title: 'Converging into a process unit',
          body: [
            'Columns and beams, the bag-dump deck, the bucket elevator, the pump and the piping are placed around the tank; the lines from the P&ID are drawn in 3D from nozzle to nozzle.',
          ],
        },
        {
          id: 'pm-iso',
          stage: 'pm-iso',
          kicker: 'Isometrics',
          title: 'A drawing for every line',
          body: [
            'Each line gets its isometric with a parts list: here, the pump’s discharge line next to its sheet.',
          ],
        },
        {
          id: 'pm-steel',
          stage: 'pm-steel',
          kicker: 'Steel',
          title: 'Structures with FEM, drawings from the model',
          body: [
            'The support structures are checked with FEM analysis before their drawings are issued: here, the tower the operator stands on, next to its assembly drawing.',
          ],
        },
        {
          id: 'pm-clash',
          stage: 'pm-clash',
          kicker: 'Clash detection',
          title: 'Found in the model, not on site',
          body: [
            'Automatic clash detection screens equipment, routes and structures against each other. In this unit it reports two findings: the envelope of the bucket elevator intersects its feed chute. That is exactly where such a finding belongs: on a screen, weeks before installation.',
          ],
        },
      ],
    },
    {
      id: 'architecture',
      layer: 'architecture',
      eyebrow: 'Layer 4 · Architecture',
      title: 'The unit in its plant',
      intro: [
        'The prompt asked for a spare area of the plant. Architecture is where the unit leaves its own model and joins the site: terrain from public geospatial data, the roads and buildings around it, foundations under the tank legs, the access for tankers.',
      ],
      steps: [
        {
          id: 'ar-site',
          stage: 'ar-site',
          kicker: 'Site',
          title: 'From the unit to the plant',
          body: [
            'The unit takes the free corner the prompt asked for, and the questions change: what stands next to it (the tank farm with its bund, the unloading bay, the halls), how tankers reach it, and where traffic and storage are allowed. Architecture answers them in the same model.',
          ],
        },
        {
          id: 'ar-plan',
          stage: 'ar-wipe',
          kicker: 'Site plan',
          title: 'The drawing is the model',
          body: [
            'Seen from above, the same model becomes the site plan, drawn by the platform’s own renderer (buildings, zones, underground networks, the object list and the title block), so the drawing and the 3D scene cannot drift apart.',
          ],
        },
      ],
    },
    {
      id: 'documents',
      eyebrow: 'Output',
      title: 'A verified design package',
      intro: [],
      steps: [
        {
          id: 'docs-stack',
          stage: 'docs-stack',
          kicker: 'Export',
          title: 'Construction-ready documentation',
          body: [
            'At the end, the layers are exported as documents: the P&ID, process and simulation reports, the mixer drawings, piping isometrics, structure and platform drawings, cabinet layouts and circuit diagrams, and the site plan. Each has its document number and revision, and each is a view of decisions made below it.',
            'From a tested process and a clash-checked 3D model.',
          ],
        },
      ],
    },
    {
      id: 'infrastructure',
      eyebrow: 'Under the hood',
      title: 'Rules, compute and an open architecture',
      intro: [
        'An environment is only as good as what it can verify. Behind the applications, Simon Lab runs the machinery that turns an AI agent’s proposal into a checked result.',
      ],
      steps: [
        {
          id: 'infra-rules',
          stage: 'infra-rules',
          kicker: 'Rules',
          title: 'Good practice, written down',
          body: [
            'The rules of good engineering practice are part of the environment, not of the prompt: what must exist before the next layer may start, what every element must carry, which checks must pass. They are what steer an AI agent towards a complete project in the right order.',
          ],
        },
        {
          id: 'infra-compute',
          stage: 'infra-compute',
          kicker: 'Compute',
          title: 'High-performance computing, included',
          body: [
            'CFD runs on dedicated compute nodes, FEM checks the structures, GPU rendering produces the visuals you have seen on this page, and AI-assisted CFD (Walrus, Gemini) speeds up the search through cases. Your AI agent does not need its own cluster.',
          ],
        },
        {
          id: 'infra-open',
          stage: 'infra-open',
          kicker: 'Coming soon',
          title: 'Open source',
          body: [
            'We are opening the architecture: the way layers, rules and applications fit together will be published as open source, so others can build on the bottom-up method and run it in their own environments.',
          ],
        },
      ],
    },
  ],
  closing: {
    eyebrow: 'Now in beta',
    title: 'Bottom-up chemical engineering, with trusted partners',
    body: [
      'Simon Lab is in beta with a small number of partners, one project at a time. If you are planning a unit, or building AI agents that should design one, we would like to hear from you.',
    ],
    filmTitle: 'The film',
    filmCaption: 'The same project in two minutes: from the specification to the site plan.',
    play: 'Play the film',
    cta: { beta: 'Join the beta', apps: 'Explore the applications' },
  },
  notes: [
    'The demonstration project is anonymized: names, numbers and locations of the client and the plant are not shown.',
    'Screens and renders come from the platform; the plant surroundings are a generic model; particle tracks are an illustrative visualization.',
    'Clash detection results are shown as reported by the model; the heat-gain figure is the known lower bound for the cabinet’s current revision.',
  ],
  labels: {
    agent: 'Your AI agent',
    chat: 'Chat',
    newChat: 'New chat',
    chatQ1: 'Size a pump for 12\u00a0m³/h.',
    chatA1: 'Here is the sizing documentation.',
    pdf1: 'pump-sizing.pdf',
    chatQ2: 'Check the strength of the agitator shaft.',
    chatA2: 'Here is the strength calculation.',
    pdf2: 'shaft-strength.pdf',
    chatQ3: 'Describe the dosing control.',
    chatA3: 'Here is the control description.',
    pdf3: 'dosing-control.pdf',
    aiAgent: 'AI agent',
    plan: 'Plan',
    use: 'Tools',
    files: 'Files',
    check: 'Check',
    rev: 'v0.{n}',
    beta: 'beta',
    release: 'v1.0',
    agentView: 'AI agent',
    engineerView: 'Engineer',
    excerpt: 'excerpt',
    formats: 'DXF · STEP · PDF · XML · DOCX',
    project: 'Chemical engineering project',
    environment: 'Simon Lab environment',
    tools: 'Engineering applications',
    rules: 'Rules of good practice',
    compute: 'Compute: CFD · FEM · rendering',
    layer: 'Layer',
    simClock: 'sim time',
    timelapse: '×60 · time-lapse',
    step: 'Step',
    level: 'Level',
    temp: 'Temperature',
    dosed: 'NaOH dosed',
    limit: '60\u00a0°C limit',
    batchDone: 'batch 30% ✓',
    filling: 'Filling',
    mixing: 'Mixing',
    dosing: 'Dosing',
    cooling: 'Cooling',
    plc: 'PLC · emulated',
    visualization: 'visualization',
    findings: '2 findings',
    knownLosses: 'known losses ≥ 705\u00a0W',
    s1: 'Operator batch reset',
    s2: 'Filling with lye',
    s3: 'Lye concentration measurement',
    s4: 'Compensating top-up and final measurement',
    s5: 'Agitator start',
    s6: 'Dosing NaOH from bags',
    s7: 'Dissolution and stabilization',
    s8: 'Lab sample',
  },
};
