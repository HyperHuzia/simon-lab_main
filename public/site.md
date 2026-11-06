# Simon Lab

Simon Lab does computational engineering for chemical projects. Its mission: coordinate complete chemical engineering projects on one open platform, with import and export of every kind of document.

The problem it addresses is the broken chain. Process engineering still runs on static documents: PDFs, spreadsheets that drift with every revision and drawings no system can read. Data created in one phase does not flow into the next, every handoff introduces errors and every project starts from scratch.

The answer is project as code: the project is defined once, as structured and versioned data, in one application per discipline. Documents are generated from that model, every change is a revision, and the model is checked against physics, limits and geometry whenever it changes. Engineers stay in charge of every decision; the platform keeps the project consistent, so iterations, scope changes and changes in regulations run through the whole project quickly.

Simon Lab runs a private beta with trusted partners; open source is coming soon. It also takes on engineering orders for chemical plants, a whole project or one discipline, built as code on the platform, delivered fast and checked by experienced engineers.

## Website
- Canonical URL: https://simon-lab.org/
- Languages: English (default), Polish (https://simon-lab.org/pl/), German (https://simon-lab.org/de/)
- Knowledge base: https://simon-lab.org/knowledge/
  - Project as code: https://simon-lab.org/knowledge/project-as-code/ (summary: https://simon-lab.org/project-as-code.md)
  - Bottom-up chemical engineering: https://simon-lab.org/knowledge/bottom-up/ (summary: https://simon-lab.org/bottom-up.md)
- Applications: https://simon-lab.org/apps/
- Engineering services: https://simon-lab.org/services/ (summary: https://simon-lab.org/services.md)
- Roadmap: https://simon-lab.org/roadmap/ (summary: https://simon-lab.org/roadmap.md)
- Team: https://simon-lab.org/team/
- Join the beta: https://simon-lab.org/beta/
- Contact: https://simon-lab.org/#contact

## The applications
Each application covers one discipline and exchanges data with the others; in the bottom-up order each reads the one below.

| Layer | Application | Role | Page |
|---|---|---|---|
| 0 | CapacityIndex | Scope, capacity and economics: the specification | https://simon-lab.org/apps/capacityindex/ |
| 1 | ProcessView | P&ID and dynamic process simulation | https://simon-lab.org/apps/processview/ |
| 2 | MechGraph | Machine design from dedicated calculations | https://simon-lab.org/apps/mechgraph/ |
| 2 | IonGrid | Control cabinets from catalogue components | https://simon-lab.org/apps/iongrid/ |
| 3 | PlantMesh | Process-unit assemblies in 3D | https://simon-lab.org/apps/plantmesh/ |
| 4 | Architecture | The unit in its site | https://simon-lab.org/apps/architecture/ |

### CapacityIndex
The investment-readiness cockpit and the project's versioned scope: capacity, economics, localization, permitting and risk become the specification every later layer builds on. The scope is never finished on day one (client decisions, CAPEX and OPEX change as the work is discovered), so every change becomes a new, traceable version that travels upwards through the project.

### ProcessView
A web P&ID with an embedded physics simulation. Every line, valve and instrument carries its full selection, and ready-made control programs run on an emulated PLC, so the process is tested before anything is bought.

### MechGraph
Code-first engineering studies for process equipment: mixing power and solids suspension, shaft deflection and critical speed, strength to EN 13445 and CFD, with reports and drawings generated from the same model.

### IonGrid
In parallel with the machines, the control logic becomes real cabinets assembled from manufacturers' catalogue models, with heat-loss data, pneumatic control and engineering registers.

### PlantMesh
The machines and cabinets meet in one model: piping isometrics, support structures with FEM analysis, service access and automatic clash detection.

### Architecture
Georeferenced OpenBIM: terrain from public geospatial data, roads and buildings, IFC and 3D tiles, all the way to the site plan.

## Tools
### LabelHash
A free tool for engineers: ISO 20560-compliant labels for pipelines, tanks, reactors and vessels, with GHS pictograms, colour bands and flow arrows, ready to print. Page: https://simon-lab.org/apps/labelhash/. The hosted tool is temporarily offline while the platform is rebuilt.

## Coming soon
- ScopeMatrix: a cockpit that tracks the progress of the whole undertaking
- LabGate: a register of laboratory procedures and quality control
- GrantKernel: funding applications and pitch decks from project data, transparent to funders and auditable by AI
- Procurement: communication with suppliers, emails, quotations, purchases and deliveries
- Permit: drafts of permit applications and legal documentation (environmental and building permits), the legal state and the schedule against administrative procedures

## Company details
- Name: Szymon Wojciechowski Simon-Lab
- Address: Zabrze, Poland
- VAT EU: PL6482629454
- NIP: 6482629454
- REGON: 544133932
- Contact page: https://simon-lab.org/#contact
