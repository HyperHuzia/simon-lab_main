// The application suite. Layer order is the bottom-up order of the method (and of the film); the wording follows the
// claims table of the "Bottom-Up" production: what runs today, what is a prototype, what is still coming.
import type { Lang } from '../i18n/config';

export type AppStatus = 'beta' | 'tool' | 'soon';

export type AppCopy = {
  /** one-line role in the stack */
  role: string;
  /** card description */
  summary: string;
  /** app page: what it does, as paragraphs */
  body?: string[];
  /** app page: capability bullets */
  points?: string[];
};

export type App = {
  id: string;
  name: string;
  status: AppStatus;
  /** CSS custom property of the layer colour */
  color: string;
  /** position in the bottom-up stack (0 = first layer); null for tools and upcoming apps */
  layer: number | null;
  /** has its own page under /apps/<id>/ */
  page: boolean;
  copy: Record<Lang, AppCopy>;
};

export const APPS: App[] = [
  {
    id: 'capacityindex',
    name: 'CapacityIndex',
    status: 'beta',
    color: 'var(--l-capacity)',
    layer: 0,
    page: true,
    copy: {
      en: {
        role: 'Scope, capacity and economics',
        summary: 'The investment-readiness cockpit and the project’s versioned scope. Capacity, economics, localization, permitting and risk become the specification every later layer builds on, and every change to it becomes a new version.',
        body: [
          'Every plant project begins with questions that are not yet engineering: how much, where, at what cost, under which permits. CapacityIndex turns them into a structured specification covering capacity, scope, economics, localization, permitting and risk, with a business-plan export.',
          'In the bottom-up method this is layer zero, and it is never finished on day one. What the client expects is not always possible, and not always the right assumption. At this stage the conversation with the client never stops: changes to CAPEX and OPEX are decided together with the technical decisions they affect.',
          'Scope evolution is one of the most frustrating parts of an engineer’s work, especially in an industry as tightly coordinated as chemical engineering. It is also unavoidable: much of the work is discovered on the job. So CapacityIndex keeps the scope as a versioned specification. It starts broad and, iteration by iteration, collects the details that describe the business and technical culture of running the plant. Every version stays traceable, and every change travels upwards through the project instead of being patched downstream.',
        ],
        points: [
          'Capacity and scope definition',
          'Scope versions: what changed, and why',
          'Economics: CAPEX, OPEX and the business-plan export',
          'Staffing and shift model',
          'Localization and permitting inputs',
          'Risk register',
          'Specification handed to ProcessView',
        ],
      },
      pl: {
        role: 'Zakres, wydajność i ekonomia',
        summary: 'Kokpit gotowości inwestycyjnej i wersjonowany zakres projektu. Wydajność, ekonomia, lokalizacja, pozwolenia i ryzyko stają się specyfikacją, na której opiera się każda kolejna warstwa, a każda jej zmiana staje się nową wersją.',
        body: [
          'Każdy projekt instalacji zaczyna się od pytań, które nie są jeszcze inżynierią: ile, gdzie, za ile i na jakich pozwoleniach. CapacityIndex zamienia je w uporządkowaną specyfikację obejmującą wydajność, zakres, ekonomię, lokalizację, pozwolenia i ryzyko, z eksportem biznesplanu.',
          'W metodzie bottom-up to warstwa zero i nigdy nie jest skończona pierwszego dnia. To, czego oczekuje klient, nie zawsze jest możliwe ani nie zawsze jest właściwym założeniem. Na tym etapie rozmowa z klientem trwa bez przerwy: o zmianach w CAPEX i OPEX decyduje się razem z decyzjami technicznymi, na które wpływają.',
          'Ewolucja zakresu to jeden z najbardziej frustrujących elementów pracy inżyniera, zwłaszcza w branży tak mocno skoordynowanej jak inżynieria chemiczna. Jest też nieunikniona: dużą część pracy odkrywa się dopiero w trakcie. Dlatego CapacityIndex prowadzi zakres jako specyfikację wersjonowaną. Zaczyna szeroko i z każdą iteracją zbiera szczegóły opisujące kulturę biznesową i techniczną pracy instalacji. Każda wersja pozostaje identyfikowalna, a każda zmiana idzie w górę przez cały projekt, zamiast być łatana na końcu.',
        ],
        points: [
          'Definicja wydajności i zakresu',
          'Wersje zakresu: co się zmieniło i dlaczego',
          'Ekonomia: CAPEX, OPEX i eksport biznesplanu',
          'Kadry i model zmianowy',
          'Dane do lokalizacji i pozwoleń',
          'Rejestr ryzyk',
          'Specyfikacja przekazywana do ProcessView',
        ],
      },
      de: {
        role: 'Umfang, Kapazität und Wirtschaftlichkeit',
        summary: 'Das Cockpit für die Investitionsreife und der versionierte Umfang des Projekts. Kapazität, Wirtschaftlichkeit, Standort, Genehmigungen und Risiken werden zur Spezifikation, auf der jede weitere Ebene aufbaut, und jede Änderung daran wird zu einer neuen Version.',
        body: [
          'Jedes Anlagenprojekt beginnt mit Fragen, die noch kein Engineering sind: wie viel, wo, zu welchen Kosten, mit welchen Genehmigungen. CapacityIndex macht daraus eine strukturierte Spezifikation, die Kapazität, Umfang, Wirtschaftlichkeit, Standort, Genehmigungen und Risiken abdeckt, samt Businessplan-Export.',
          'In der Bottom-up-Methode ist das die Ebene null, und sie ist am ersten Tag nie fertig. Was der Kunde erwartet, ist nicht immer möglich und nicht immer die richtige Annahme. In dieser Phase reißt das Gespräch mit dem Kunden nie ab: Änderungen an CAPEX und OPEX werden zusammen mit den technischen Entscheidungen getroffen, die sie betreffen.',
          'Die Entwicklung des Umfangs gehört zu den frustrierendsten Seiten der Ingenieurarbeit, besonders in einer so eng abgestimmten Branche wie der Verfahrenstechnik. Sie ist zugleich unvermeidlich: Ein großer Teil der Arbeit zeigt sich erst unterwegs. Deshalb führt CapacityIndex den Umfang als versionierte Spezifikation. Sie beginnt breit und sammelt mit jeder Iteration die Details, die die geschäftliche und technische Kultur des Anlagenbetriebs beschreiben. Jede Version bleibt nachvollziehbar, und jede Änderung wandert nach oben durch das Projekt, statt am Ende geflickt zu werden.',
        ],
        points: [
          'Festlegung von Kapazität und Umfang',
          'Versionen des Umfangs: was sich geändert hat und warum',
          'Wirtschaftlichkeit: CAPEX, OPEX und Businessplan-Export',
          'Personal und Schichtmodell',
          'Standort- und Genehmigungsdaten',
          'Risikoregister',
          'Spezifikation als Übergabe an ProcessView',
        ],
      },
    },
  },
  {
    id: 'processview',
    name: 'ProcessView',
    status: 'beta',
    color: 'var(--l-processview)',
    layer: 1,
    page: true,
    copy: {
      en: {
        role: 'P&ID and dynamic process simulation',
        summary: 'A web P&ID with an embedded physics simulation. Every line, valve and instrument carries its full selection, and ready-made control programs run on an emulated PLC, so the process is tested before anything is bought.',
        body: [
          'ProcessView is where the process becomes a schematic that can be executed. You place equipment, route lines and add valves and instruments; each element carries its selection (materials, pipe classes, nozzles, parameters) and the guidelines that mechanical design, instrumentation and control will need.',
          'The same schematic runs as a dynamic simulation: filling, mixing, dosing, cooling. Batch programs run on an emulated PLC with the real interlocks, so the sequence, the limits and the operator steps are proven before the first pipe is ordered.',
        ],
        points: ['Interactive P&ID with full element selection', 'Materials, pipe classes, nozzles, parameters', 'Dynamic process simulation', 'Batch programs on an emulated PLC', 'Guidelines for mechanical design, instrumentation and control', 'Print-ready P&ID sheets'],
      },
      pl: {
        role: 'P&ID i dynamiczna symulacja procesu',
        summary: 'P&ID w przeglądarce z wbudowaną symulacją fizyki. Każdy rurociąg, zawór i przyrząd niesie pełny dobór, a gotowe programy sterowania pracują na emulowanym sterowniku PLC. Proces jest sprawdzony, zanim cokolwiek kupisz.',
        body: [
          'W ProcessView proces staje się schematem, który da się uruchomić. Stawiasz urządzenia, prowadzisz rurociągi, dodajesz zawory i przyrządy; każdy element niesie swój dobór (materiały, klasy rurociągów, króćce, parametry) oraz wytyczne potrzebne mechanice, AKPiA i sterowaniu.',
          'Ten sam schemat działa jako dynamiczna symulacja: napełnianie, mieszanie, dozowanie, chłodzenie. Programy szarżowe pracują na emulowanym sterowniku PLC z prawdziwymi blokadami, więc sekwencja, limity i kroki operatora są sprawdzone, zanim zamówisz pierwszą rurę.',
        ],
        points: ['Interaktywny P&ID z pełnym doborem elementów', 'Materiały, klasy rurociągów, króćce, parametry', 'Dynamiczna symulacja procesu', 'Programy szarżowe na emulowanym PLC', 'Wytyczne dla mechaniki, AKPiA i sterowania', 'Arkusze P&ID gotowe do druku'],
      },
      de: {
        role: 'R&I-Fließbild und dynamische Prozesssimulation',
        summary: 'Ein R&I-Fließbild im Browser mit eingebetteter Physiksimulation. Jede Leitung, jedes Ventil und jedes Instrument trägt seine vollständige Auslegung, und fertige Steuerprogramme laufen auf einer emulierten SPS. So ist der Prozess geprüft, bevor etwas gekauft wird.',
        body: [
          'In ProcessView wird der Prozess zu einem Fließbild, das sich ausführen lässt. Sie platzieren Apparate, verlegen Leitungen und ergänzen Armaturen und Instrumente; jedes Element trägt seine Auslegung (Werkstoffe, Rohrklassen, Stutzen, Parameter) und die Vorgaben für Konstruktion, MSR-Technik und Steuerung.',
          'Dasselbe Fließbild läuft als dynamische Simulation: Befüllen, Mischen, Dosieren, Kühlen. Chargenprogramme laufen auf einer emulierten SPS mit den echten Verriegelungen; Ablauf, Grenzwerte und Bedienschritte sind geprüft, bevor das erste Rohr bestellt wird.',
        ],
        points: ['Interaktives R&I-Fließbild mit vollständiger Auslegung', 'Werkstoffe, Rohrklassen, Stutzen, Parameter', 'Dynamische Prozesssimulation', 'Chargenprogramme auf einer emulierten SPS', 'Vorgaben für Konstruktion, MSR-Technik und Steuerung', 'Druckfertige R&I-Blätter'],
      },
    },
  },
  {
    id: 'mechgraph',
    name: 'MechGraph',
    status: 'beta',
    color: 'var(--l-mechgraph)',
    layer: 2,
    page: true,
    copy: {
      en: {
        role: 'Machine design from dedicated calculations',
        summary: 'Code-first engineering studies for process equipment: mixing power and solids suspension, shaft deflection and critical speed, strength and CFD. Reports and drawings are generated from the same model.',
        body: [
          'The parameters of the process flow into MechGraph, where each machine is designed from calculations that belong to it: mixing power and solids suspension, shaft deflection and critical speed, pressure-equipment strength, and CFD studies of the flow.',
          'The geometry is a program, not a drawing. When an input changes, the calculations, the 3D model, the reports and the drawings follow from one source, with every revision traceable.',
        ],
        points: ['Mixing power and solids suspension', 'Shaft deflection and critical speed', 'Pressure-equipment strength (EN 13445)', 'CFD studies, including AI-assisted CFD (Walrus, Gemini)', 'CAD as a program: model, drawings, reports'],
      },
      pl: {
        role: 'Konstrukcja maszyny z dedykowanych obliczeń',
        summary: 'Studia inżynierskie urządzeń procesowych w kodzie: moc mieszania i zawieszanie cząstek, ugięcie wału i prędkość krytyczna, wytrzymałość i CFD. Raporty i rysunki powstają z tego samego modelu.',
        body: [
          'Parametry procesu trafiają do MechGraph, gdzie każda maszyna powstaje z obliczeń, które do niej należą: moc mieszania i zawieszanie cząstek, ugięcie wału i prędkość krytyczna, wytrzymałość urządzeń ciśnieniowych i symulacje CFD przepływu.',
          'Geometria jest programem, a nie rysunkiem. Gdy zmienia się dana wejściowa, obliczenia, model 3D, raporty i rysunki wynikają z jednego źródła, a każda rewizja jest identyfikowalna.',
        ],
        points: ['Moc mieszania i zawieszanie cząstek', 'Ugięcie wału i prędkość krytyczna', 'Wytrzymałość urządzeń ciśnieniowych (EN 13445)', 'Symulacje CFD, w tym AI-assisted CFD (Walrus, Gemini)', 'CAD jako program: model, rysunki, raporty'],
      },
      de: {
        role: 'Maschinenkonstruktion aus eigenen Berechnungen',
        summary: 'Engineering-Studien für Prozessapparate als Code: Rührleistung und Feststoffsuspension, Wellendurchbiegung und kritische Drehzahl, Festigkeit und CFD. Berichte und Zeichnungen entstehen aus demselben Modell.',
        body: [
          'Die Prozessparameter fließen in MechGraph, wo jede Maschine aus den Berechnungen entsteht, die zu ihr gehören: Rührleistung und Feststoffsuspension, Wellendurchbiegung und kritische Drehzahl, Festigkeit von Druckgeräten und CFD-Studien der Strömung.',
          'Die Geometrie ist ein Programm, keine Zeichnung. Ändert sich eine Eingabe, folgen Berechnungen, 3D-Modell, Berichte und Zeichnungen aus einer Quelle, und jede Revision bleibt nachvollziehbar.',
        ],
        points: ['Rührleistung und Feststoffsuspension', 'Wellendurchbiegung und kritische Drehzahl', 'Festigkeit von Druckgeräten (EN 13445)', 'CFD-Studien, auch KI-gestützte CFD (Walrus, Gemini)', 'CAD als Programm: Modell, Zeichnungen, Berichte'],
      },
    },
  },
  {
    id: 'iongrid',
    name: 'IonGrid',
    status: 'beta',
    color: 'var(--l-iongrid)',
    layer: 2,
    page: true,
    copy: {
      en: {
        role: 'Control cabinets from catalogue components',
        summary: 'In parallel with the machines, the control logic becomes real cabinets assembled from manufacturers’ catalogue models, with heat-loss data, pneumatic control and engineering registers.',
        body: [
          'IonGrid takes the control logic defined upstream (drives, interlocks, signals) and lays it out as real cabinets assembled from manufacturers’ CAD models: enclosure, mounting plate, rails, drives, power supplies, controller and I/O.',
          'The registers are generated with the cabinet: apparatus and I/O lists, wiring, and the heat-loss inputs a thermal balance needs. Pneumatic control and solenoid valves stay linked to the instruments they serve on the P&ID.',
        ],
        points: ['Cabinets from manufacturers’ CAD models', 'Apparatus and I/O registers', 'Wiring and terminal rows', 'Heat-loss data for the thermal balance', 'Pneumatic control linked to the P&ID'],
      },
      pl: {
        role: 'Szafy sterownicze z katalogowych podzespołów',
        summary: 'Równolegle z maszynami logika sterowania zamienia się w realne szafy z katalogowych modeli producentów, wraz z danymi strat ciepła, sterowaniem pneumatycznym i rejestrami inżynierskimi.',
        body: [
          'IonGrid bierze logikę sterowania zdefiniowaną niżej (napędy, blokady, sygnały) i rozkłada ją na realne szafy złożone z modeli CAD producentów: obudowa, płyta montażowa, szyny, napędy, zasilacze, sterownik i I/O.',
          'Rejestry powstają razem z szafą: listy aparatów i I/O, okablowanie oraz dane strat ciepła potrzebne do bilansu cieplnego. Sterowanie pneumatyczne i elektrozawory pozostają powiązane z przyrządami, które obsługują na schemacie P&ID.',
        ],
        points: ['Szafy z modeli CAD producentów', 'Rejestry aparatów i I/O', 'Okablowanie i listwy zaciskowe', 'Dane strat ciepła do bilansu cieplnego', 'Sterowanie pneumatyczne powiązane z P&ID'],
      },
      de: {
        role: 'Schaltschränke aus Katalogkomponenten',
        summary: 'Parallel zu den Maschinen wird die Steuerungslogik zu echten Schaltschränken aus den Katalogmodellen der Hersteller, samt Verlustleistungsdaten, pneumatischer Steuerung und Engineering-Registern.',
        body: [
          'IonGrid nimmt die zuvor definierte Steuerungslogik (Antriebe, Verriegelungen, Signale) und setzt sie in echte Schaltschränke aus CAD-Modellen der Hersteller um: Gehäuse, Montageplatte, Schienen, Antriebe, Netzteile, Steuerung und E/A.',
          'Die Register entstehen mit dem Schrank: Geräte- und E/A-Listen, Verdrahtung und die Verlustleistungsdaten für die Wärmebilanz. Pneumatische Steuerung und Magnetventile bleiben mit den Instrumenten im R&I-Fließbild verknüpft, die sie bedienen.',
        ],
        points: ['Schränke aus Hersteller-CAD-Modellen', 'Geräte- und E/A-Register', 'Verdrahtung und Klemmenreihen', 'Verlustleistungsdaten für die Wärmebilanz', 'Pneumatische Steuerung verknüpft mit dem R&I'],
      },
    },
  },
  {
    id: 'plantmesh',
    name: 'PlantMesh',
    status: 'beta',
    color: 'var(--l-plantmesh)',
    layer: 3,
    page: true,
    copy: {
      en: {
        role: 'Process-unit assemblies in 3D',
        summary: 'The machines and cabinets meet in one model: piping isometrics, support structures with FEM analysis, service access and automatic clash detection.',
        body: [
          'PlantMesh assembles the unit from the layers below it: the machines from MechGraph, the cabinets from IonGrid, the lines and instruments from ProcessView. Steel structures, platforms and access are added around them.',
          'The model is checked as it grows: piping isometrics are generated per line, support structures are analysed with FEM, service zones are kept clear, and clash detection reports what still collides before anything is built.',
        ],
        points: ['Unit assembly from upstream layers', 'Piping isometrics', 'Support structures with FEM analysis', 'Service access zones', 'Automatic clash detection'],
      },
      pl: {
        role: 'Złożenia węzłów technologicznych w 3D',
        summary: 'Maszyny i szafy spotykają się w jednym modelu: izometrie rurociągów, konstrukcje wsporcze z analizą MES, dostęp serwisowy i automatyczna detekcja kolizji.',
        body: [
          'PlantMesh składa węzeł z warstw poniżej: maszyny z MechGraph, szafy z IonGrid, rurociągi i przyrządy z ProcessView. Wokół nich powstają konstrukcje stalowe, podesty i dojścia.',
          'Model jest sprawdzany w miarę wzrostu: izometrie powstają dla każdej linii, konstrukcje wsporcze przechodzą analizę MES, strefy serwisowe pozostają wolne, a detekcja kolizji pokazuje, co jeszcze koliduje, zanim cokolwiek zostanie zbudowane.',
        ],
        points: ['Złożenie węzła z warstw poniżej', 'Izometrie rurociągów', 'Konstrukcje wsporcze z analizą MES', 'Strefy dostępu serwisowego', 'Automatyczna detekcja kolizji'],
      },
      de: {
        role: 'Baugruppen von Prozessanlagen in 3D',
        summary: 'Maschinen und Schränke treffen sich in einem Modell: Rohrleitungsisometrien, Stahlbau mit FEM-Analyse, Wartungszugänge und automatische Kollisionsprüfung.',
        body: [
          'PlantMesh baut die Anlage aus den Ebenen darunter zusammen: die Maschinen aus MechGraph, die Schränke aus IonGrid, die Leitungen und Instrumente aus ProcessView. Darum entstehen Stahlbau, Bühnen und Zugänge.',
          'Das Modell wird geprüft, während es wächst: Isometrien entstehen je Leitung, Tragkonstruktionen werden mit FEM berechnet, Wartungsbereiche bleiben frei, und die Kollisionsprüfung zeigt schon vor dem Bau, was noch kollidiert.',
        ],
        points: ['Anlagenbaugruppe aus den vorgelagerten Ebenen', 'Rohrleitungsisometrien', 'Stahlbau mit FEM-Analyse', 'Wartungs- und Zugangsbereiche', 'Automatische Kollisionsprüfung'],
      },
    },
  },
  {
    id: 'architecture',
    name: 'Architecture',
    status: 'beta',
    color: 'var(--l-architecture)',
    layer: 4,
    page: true,
    copy: {
      en: {
        role: 'The unit in its site',
        summary: 'Georeferenced OpenBIM: terrain from public geospatial data, roads and buildings, IFC and 3D tiles, all the way to the site plan.',
        body: [
          'Architecture places the unit in the plant that will host it. Terrain comes from public geospatial data, existing roads and buildings are modelled around it, and the result is exchanged as IFC and 3D tiles.',
          'The site plan is drawn by the platform’s own renderer from the same model, with hatched traffic and storage zones and the underground networks, so the drawing and the 3D scene cannot drift apart.',
        ],
        points: ['Terrain from public geospatial data', 'Roads, buildings and zones', 'OpenBIM: IFC and 3D tiles', 'Site plan from the model'],
      },
      pl: {
        role: 'Węzeł w swoim zakładzie',
        summary: 'Georeferencyjny OpenBIM: teren z publicznych danych geoprzestrzennych, drogi i budynki, IFC i 3D tiles, aż po plan zagospodarowania terenu.',
        body: [
          'Architecture osadza węzeł w zakładzie, który go przyjmie. Teren pochodzi z publicznych danych geoprzestrzennych, istniejące drogi i budynki są modelowane wokół, a wynik wymieniany jako IFC i 3D tiles.',
          'Plan zagospodarowania terenu rysuje własny renderer platformy z tego samego modelu, z kreskowanymi strefami ruchu i składowania oraz sieciami podziemnymi. Dzięki temu rysunek i scena 3D nie mogą się rozjechać.',
        ],
        points: ['Teren z publicznych danych geoprzestrzennych', 'Drogi, budynki i strefy', 'OpenBIM: IFC i 3D tiles', 'Plan zagospodarowania z modelu'],
      },
      de: {
        role: 'Die Anlage an ihrem Standort',
        summary: 'Georeferenziertes OpenBIM: Gelände aus öffentlichen Geodaten, Straßen und Gebäude, IFC und 3D Tiles, bis hin zum Lageplan.',
        body: [
          'Architecture setzt die Anlage in das Werk, das sie aufnehmen wird. Das Gelände stammt aus öffentlichen Geodaten, bestehende Straßen und Gebäude werden darum modelliert, und das Ergebnis wird als IFC und 3D Tiles ausgetauscht.',
          'Den Lageplan zeichnet der plattformeigene Renderer aus demselben Modell, mit schraffierten Verkehrs- und Lagerflächen und den unterirdischen Netzen. Zeichnung und 3D-Szene können deshalb nicht auseinanderlaufen.',
        ],
        points: ['Gelände aus öffentlichen Geodaten', 'Straßen, Gebäude und Zonen', 'OpenBIM: IFC und 3D Tiles', 'Lageplan aus dem Modell'],
      },
    },
  },
  {
    id: 'labelhash',
    name: 'LabelHash',
    status: 'tool',
    color: 'var(--l-processview)',
    layer: null,
    page: true,
    copy: {
      en: {
        role: 'ISO 20560 pipeline labels',
        summary: 'A free tool for engineers: ISO 20560-compliant labels for pipelines, tanks, reactors and vessels, with GHS pictograms, colour bands and flow arrows, ready to print.',
        points: ['ISO 20560 compliance', 'Medium database with colour coding', 'GHS pictograms and hazard bands', 'Flow direction arrows', 'Live preview with rulers', 'Print-ready export'],
      },
      pl: {
        role: 'Oznakowanie rurociągów wg ISO 20560',
        summary: 'Darmowe narzędzie dla inżynierów: etykiety zgodne z ISO 20560 dla rurociągów, zbiorników, reaktorów i aparatów, z piktogramami GHS, pasami barwnymi i strzałkami kierunku przepływu, gotowe do druku.',
        points: ['Zgodność z ISO 20560', 'Baza mediów z kodowaniem barwnym', 'Piktogramy GHS i pasy zagrożeń', 'Strzałki kierunku przepływu', 'Podgląd na żywo z linijkami', 'Eksport gotowy do druku'],
      },
      de: {
        role: 'Rohrleitungskennzeichnung nach ISO 20560',
        summary: 'Ein kostenloses Tool für Ingenieure: Etiketten nach ISO 20560 für Rohrleitungen, Tanks, Reaktoren und Behälter, mit GHS-Piktogrammen, Farbbändern und Fließrichtungspfeilen, druckfertig.',
        points: ['Konform mit ISO 20560', 'Mediendatenbank mit Farbkennzeichnung', 'GHS-Piktogramme und Gefahrenbänder', 'Fließrichtungspfeile', 'Live-Vorschau mit Linealen', 'Druckfertiger Export'],
      },
    },
  },
  {
    id: 'scopematrix',
    name: 'ScopeMatrix',
    status: 'soon',
    color: 'var(--l-soon)',
    layer: null,
    page: false,
    copy: {
      en: { role: 'Project progress', summary: 'A cockpit that tracks the progress of the whole undertaking.' },
      pl: { role: 'Postęp realizacji', summary: 'Kokpit śledzenia postępu realizacji całego przedsięwzięcia.' },
      de: { role: 'Projektfortschritt', summary: 'Ein Cockpit, das den Fortschritt des gesamten Vorhabens verfolgt.' },
    },
  },
  {
    id: 'labgate',
    name: 'LabGate',
    status: 'soon',
    color: 'var(--l-soon)',
    layer: null,
    page: false,
    copy: {
      en: { role: 'Laboratory procedures', summary: 'A register of laboratory procedures and quality control.' },
      pl: { role: 'Procedury laboratoryjne', summary: 'Spis procedur laboratoryjnych i kontroli jakości.' },
      de: { role: 'Laborverfahren', summary: 'Ein Verzeichnis der Laborverfahren und Qualitätskontrollen.' },
    },
  },
  {
    id: 'grantkernel',
    name: 'GrantKernel',
    status: 'soon',
    color: 'var(--l-soon)',
    layer: null,
    page: false,
    copy: {
      en: { role: 'Funding applications and pitch decks', summary: 'A builder of funding applications and pitch decks, fed by the project’s data: built on well-designed foundations, transparent to funders and auditable by AI.' },
      pl: { role: 'Wnioski o dofinansowanie i pitch decki', summary: 'Kreator wniosków o dofinansowanie i pitch decków zasilany danymi projektu: oparty na dobrze zaprojektowanych podstawach, przejrzysty dla finansujących i audytowalny przez AI.' },
      de: { role: 'Förderanträge und Pitch-Decks', summary: 'Ein Baukasten für Förderanträge und Pitch-Decks, gespeist aus den Projektdaten: auf gut ausgearbeiteten Grundlagen, transparent für Geldgeber und durch KI prüfbar.' },
    },
  },
  {
    id: 'procurement',
    name: 'Procurement',
    status: 'soon',
    color: 'var(--l-soon)',
    layer: null,
    page: false,
    copy: {
      en: { role: 'Supplier communication and purchasing', summary: 'Automates communication with suppliers: prepares the emails and tracks quotations, purchases and deliveries.' },
      pl: { role: 'Komunikacja z dostawcami i zakupy', summary: 'Automatyzuje komunikację z dostawcami: przygotowuje e-maile i śledzi proces ofertowania, zakupów i dostaw.' },
      de: { role: 'Lieferantenkommunikation und Einkauf', summary: 'Automatisiert die Kommunikation mit Lieferanten: bereitet die E-Mails vor und verfolgt Angebote, Bestellungen und Lieferungen.' },
    },
  },
  {
    id: 'permit',
    name: 'Permit',
    status: 'soon',
    color: 'var(--l-soon)',
    layer: null,
    page: false,
    copy: {
      en: { role: 'Permits and legal documentation', summary: 'Drafts permit applications and legal documentation such as environmental and building permits (drafts, not filings), tracks the legal state and its impact on the project, and keeps the schedule in line with administrative procedures.' },
      pl: { role: 'Pozwolenia i dokumentacja prawna', summary: 'Przygotowuje projekty wniosków o pozwolenia i dokumentacji prawnej, takiej jak pozwolenia środowiskowe i na budowę (projekty do sprawdzenia, nie gotowe do złożenia), śledzi stan prawny i jego wpływ na projekt oraz nadzoruje harmonogram względem procedur administracyjnych.' },
      de: { role: 'Genehmigungen und Rechtsdokumentation', summary: 'Erstellt Entwürfe von Genehmigungsanträgen und Rechtsdokumentation wie Umwelt- und Baugenehmigungen (Entwürfe, keine Einreichungen), verfolgt die Rechtslage und ihre Auswirkungen auf das Projekt und hält den Zeitplan an den Verwaltungsverfahren ausgerichtet.' },
    },
  },
];

export const STACK = APPS.filter((a) => a.layer !== null).sort((a, b) => (a.layer ?? 0) - (b.layer ?? 0));
export const appById = (id: string) => APPS.find((a) => a.id === id);
