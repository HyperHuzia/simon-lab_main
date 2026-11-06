# Project as code (summary)

Summary of the illustrated article at https://simon-lab.org/knowledge/project-as-code/ (Polish: https://simon-lab.org/pl/knowledge/project-as-code/, German: https://simon-lab.org/de/knowledge/project-as-code/).

**Thesis:** a chemical plant project should read like a program, not a pile of documents. Keeping a team on one revision standard, with documentation that stays correct and consistent across disciplines, is the struggle of every head of a chemical engineering office: revisions drift, and that consistency is a job for a machine, because it needs machine precision. When the project itself is written as structured, versioned data and every document is generated from it, errors from retyping disappear, changes reach every document, and checks run whenever the model changes.

## 1. The broken chain
- A typical project moves through a chain of documents: grant proposal, process description, P&IDs, equipment lists, calculation sheets, cabinet registers, drawings, permit applications.
- Each is written by hand from the ones before it, so every copy is a chance for an error and revisions drift apart.

## 2. One source, many documents
- In Simon Lab the project is structured data, each element defined once in the application of its discipline: a line, for example, with its number, medium, nominal size, material, pipe class and the equipment it connects.
- Documents are rendered from the model: P&ID sheets, equipment data, piping isometrics, cabinet registers, structural drawings, the site plan. The platform has about 45 document profiles.
- The PDF documents are generated from the code for the review process. They are not the source of truth: they follow from it, and the source of truth is the code.

## 3. Every change is a revision
- A change is a new revision of the model, not a new copy of a file; each revision records what changed in the data and which documents it affects.
- A line resized from DN50 to DN65 reaches its P&ID sheet, the line register and the isometric, because all three are generated from it. The model also shows what follows: the pressure loss in the discharge line drops, the flowmeter is out of range and has to be selected again, and the pump stays in range, although a cheaper model would now do.

## 4. Checks run like tests
- The batch program of the demonstration unit runs on an emulated PLC; dosing is throttled near the 60 °C limit.
- Clash detection reports two envelope clashes in the demonstration project, shown as findings.

## 5. Open formats
- In: whatever the project already has: DXF and STEP drawings and models, IFC, point clouds (E57), PDF and Word documents, spreadsheets and data (XLSX, CSV, XML, JSON). The AI agent turns them into the form the project needs.
- Out: PDF document sets, IFC and 3D Tiles, XLSX and CSV registers.

## 6. The team
- Engineers still decide: they choose the process, size the machines and sign the drawings.
- What changes is the work around it: no retyping, no hunting for the current revision, cheap iterations when the scope or a regulation changes.

The demonstration project is anonymized. The code listing, the drawing of line L-104 and the revision log in the article are illustrations, not the platform's file formats or screens.
