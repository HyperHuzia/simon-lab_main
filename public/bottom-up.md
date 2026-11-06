# Bottom-up chemical engineering (summary)

Summary of the illustrated story at https://simon-lab.org/knowledge/bottom-up/ (Polish: https://simon-lab.org/pl/knowledge/bottom-up/, German: https://simon-lab.org/de/knowledge/bottom-up/).

**Thesis:** your AI agent does not need another chat window. It needs a plant to work in. Simon Lab is the production environment in which an AI agent designs a complete chemical installation, from the physics of the process to the drawings a contractor can build from: layer by layer, under rules that keep the work complete and in the right order.

The example throughout is an anonymized demonstration project: a caustic soda (NaOH) batch dissolution unit. A plant already makes 5% lye and needs 30% for a new line, dissolved from flakes delivered in 25 kg bags, in an existing stainless tank, in a free corner of the site.

## 1. From a chat to an environment
- A chat answers one question at a time: each answer is a separate document that has nothing in common with the one before, and matching them is still the engineer's job.
- An AI agent is the same chat at its heart, given tools, a plan, files and checks, working in a loop until the task is done. Codex, Claude Code, Grok Build and Google Antigravity are AI agents of this kind.
- Our experience: let loose on a plant project without an environment, an AI agent builds its own, does not know the right standard, starts every topic from an empty folder and fires series of documents that collide.
- Simon Lab lets you bring your own AI agent: BYOA (bring your own agent). It gives the AI agent the environment: every part of the project has its place in a layer, every layer is built on the one below, every revision is tested, and a change in the process rebuilds what depends on it. When everything passes, the project moves from beta to version 1.0 in every application. Behind it: engineering applications, rules of good engineering practice written down as checks, and compute (CFD, FEM, rendering).

## 2. The AI agent reads code, the engineer sees the plant
- The AI agent proposes, the engineer approves. Simon Lab provides the interface the engineer needs to decide: one model, shown to each in their own language.
- ProcessView: the AI agent reads the process as structured data; the engineer sees the P&ID.
- IonGrid: the AI agent reads a netlist (devices, terminals, wires, signals); the engineer sees the cabinet in 3D.
- PlantMesh: the AI agent works with the geometry, its edges and coordinates; the engineer sees the rendered unit.
- Iterations this fast let the engineer work with the project like modelling clay, more like an artisan than a part of a corporate machine.

## 3. Bottom-up: physics first, budget and timeline last
- Projects usually start from a budget and a timeline set before the physics is known. Starting with the physics lowers the effort it takes to begin a project on the right foundation.
- A project is a stack of decisions. Each layer is an application, and every layer reads the one below.
- Documents are also an input: DXF, STEP, PDF, DOCX and XML go into CapacityIndex, where everything sits in the Simon Lab structure.
- Documents are an output, not the starting point.

## 4. Layer 0, CapacityIndex: follow the demo project
- The AI agent turns a plain-language brief into a structured specification that every later layer reads. The terminal shown is an example: every engineer sees the terminal or interface of their own AI agent.

## 5. Layer 1, ProcessView: a P&ID that runs
- The P&ID is built element by element: equipment, lines, valves, instruments. Every kind of device has its class and type; a custom one is created by the AI agent on the spot.
- Registers (materials, pipelines, instruments) come from the same model.
- A dynamic simulation of the batch proves the process before anything is bought: the temperature climbs to its 60 °C setpoint and holds there.
- Ready-made control programs run on an emulated PLC.

## 6. Layer 2, MechGraph: the machine, from its own calculations
- The geometry is generated from inputs, not drawn.
- Checks: mixing power and solids suspension while the viscosity, temperature and density of the solution change, shaft deflection, critical speed, and strength to EN 13445.
- Flow is studied with CFD on Simon Lab's compute nodes; AI-assisted CFD (Walrus, Gemini) verifies cases faster and searches for the optimal state.

## 7. Layer 2, IonGrid: in parallel, the control cabinet
- A real cabinet is assembled part by part from manufacturers' catalogue components.
- The heat-gain balance runs on datasheet losses: at least 705 W known so far for this cabinet.
- Pneumatic control stays linked to the P&ID: controller outputs drive the solenoid valves.
- The apparatus register and the I/O list are generated with the cabinet.

## 8. Layer 3, PlantMesh: everything meets in one model
- Machines and cabinets converge into one process-unit assembly.
- Each line gets its isometric with a parts list, and support structures are checked with FEM before their drawings are issued.
- Automatic clash detection reports two findings in this unit: the envelope of the bucket elevator intersects its feed chute. It is found in the model, not on site.

## 9. Layer 4, Architecture: the unit in its plant
- The unit takes its free corner of the site; Architecture answers what stands next to it, how tankers reach it and where traffic and storage are allowed, in the same model.
- The site plan is a view of the same model.

## 10. Output: the design package
- The layers are exported as documents, each with its document number and revision: the P&ID, process and simulation reports, mixer drawings, piping isometrics, structure and platform drawings, cabinet layouts and circuit diagrams, and the site plan.
- They come from a tested process and a clash-checked 3D model.

## 11. Under the hood: rules, compute and an open architecture
- The rules of good practice are checks between layers.
- Compute for CFD, FEM, rendering and AI-assisted CFD is included, so an AI agent does not need its own cluster.
- The architecture will be published; open source is coming soon.

## Notes
- The demonstration project is anonymized. The plant surroundings are a generic model; the particle tracks are a visualization.

## Now in beta
Simon Lab is in a private beta with a small number of trusted partners, one project at a time. Join the beta: https://simon-lab.org/beta/. A two-minute film of the same project is embedded at the end of the story.
