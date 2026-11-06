// Web media: technical data (files, sizes, formats) comes from media.generated.json, written by
// simon-lab-media/tools/web-export.mjs from reviewed, OCR-gated film material only. Words (alt text, captions) live
// here, per language, so the export never carries copy and the site never carries source paths.
import type { Lang } from '../i18n/config';
import generated from './media.generated.json';

export type ImageSource = { w: number; src: string };
/** A point on a still or clip, normalized to its frame (0–1 from the top-left corner). */
export type Point = { x: number; y: number };
type RawPoint = [number, number] | { x: number; y: number };

export type ImageItem = {
  kind: 'image';
  width: number;
  height: number;
  avif: ImageSource[];
  webp: ImageSource[];
  /** dominant background colour, for the placeholder behind the image */
  bg?: string;
  /** cut out on a transparent background (renders of the machines, the cabinet, the unit) */
  alpha?: boolean;
  /** named points of interest (callout targets), normalized */
  anchors?: Record<string, RawPoint>;
  /** registered set (same size and framing), e.g. the Architecture wipe: colour, line art, site plan */
  set?: string;
  /** a single file in place of the AVIF/WebP renditions (site assets that predate the export, e.g. LabelHash) */
  src?: string;
};
export type VideoItem = {
  kind: 'video';
  width: number;
  height: number;
  duration: number;
  sources: { src: string; type: string }[];
  poster: ImageItem;
  anchors?: Record<string, RawPoint>;
  /** the WebM keeps the frames' transparency (VP9 alpha); the MP4 is composited onto the background */
  alpha?: boolean;
};
export type MediaItem = ImageItem | VideoItem;

/** A caption track of a film (WebVTT). */
export type FilmTrack = { lang: string; src: string; label?: string };
/** A narrated film (click-to-load in the article's closing block): the 720p share copy, captions as WebVTT. */
export type FilmItem = {
  id: string;
  /** narration language */
  lang?: string;
  width: number;
  height: number;
  duration?: number;
  sources: { src: string; type: string }[];
  poster?: ImageItem;
  tracks: FilmTrack[];
};

/** A data file published with the media, e.g. the per-frame HUD of a clip (one entry per clip frame). */
export type DataItem = { src: string; clip?: string; fps?: number; frames?: number; fields?: string[] };

type RawFilm = Partial<VideoItem> & {
  lang?: string;
  captions?: FilmTrack[];
  tracks?: FilmTrack[] | Record<string, string | { src: string; label?: string }>;
};

type Manifest = {
  version?: number;
  items?: Record<string, MediaItem>;
  /** anchors per still, when an export keeps them beside the items (web-export puts them on the item) */
  anchors?: Record<string, Record<string, RawPoint>>;
  /** data files by id (e.g. "pv-hud" → /media/processview/hud.json) */
  data?: Record<string, DataItem | string>;
  films?: Record<string, RawFilm>;
  /** short excerpts shown as text, by id (what an AI agent reads: the article's mirrors) */
  texts?: Record<string, string>;
  /** link-preview images (1200 × 630) */
  og?: Record<string, { src: string }>;
};

const MANIFEST = generated as Manifest;
const ITEMS: Record<string, MediaItem> = MANIFEST.items ?? {};

export type Words = { alt: string; caption?: string };
export type Localized = Record<Lang, Words>;

const doc = (en: string, pl: string, de: string): Localized => ({
  en: { alt: `A page of the design package: ${en}.`, caption: en },
  pl: { alt: `Strona pakietu projektowego: ${pl}.`, caption: pl },
  de: { alt: `Eine Seite des Planungspakets: ${de}.`, caption: de },
});

/** Alt text and captions. A media id without words here is a build error in Figure (see `words()`). */
export const WORDS: Record<string, Localized> = {
  // ProcessView (layer 1)
  'pv-build': {
    en: { alt: 'ProcessView draws the P&ID of the caustic soda dissolution unit element by element: the equipment first, then the lines between their nozzles, then the valves and instruments.', caption: 'The P&ID, built element by element' },
    pl: { alt: 'ProcessView rysuje P&ID węzła rozpuszczania sody kaustycznej element po elemencie: najpierw urządzenia, potem rurociągi między ich króćcami, na końcu zawory i przyrządy.', caption: 'P&ID budowany element po elemencie' },
    de: { alt: 'ProcessView zeichnet das R&I-Fließbild der Natronlauge-Löseanlage Element für Element: zuerst die Apparate, dann die Leitungen zwischen ihren Stutzen, dann Armaturen und Instrumente.', caption: 'Das R&I-Fließbild, Element für Element' },
  },
  'pv-sim': {
    en: { alt: 'Time-lapse of the dynamic simulation in ProcessView: the 30% batch program fills the tank with lye, starts the agitator and doses the flakes while the temperature rises to the 60\u00a0°C limit and holds there.', caption: 'Dynamic simulation of the 30% batch, time-lapse' },
    pl: { alt: 'Przyspieszony zapis symulacji dynamicznej w ProcessView: program szarży 30% napełnia zbiornik ługiem, uruchamia mieszadło i dozuje płatki, a temperatura rośnie do limitu 60\u00a0°C i tam się utrzymuje.', caption: 'Symulacja dynamiczna szarży 30%, przyspieszona' },
    de: { alt: 'Zeitraffer der dynamischen Simulation in ProcessView: Das 30-%-Chargenprogramm befüllt den Behälter mit Lauge, startet das Rührwerk und dosiert die Schuppen, während die Temperatur bis zum Grenzwert von 60\u00a0°C steigt und dort bleibt.', caption: 'Dynamische Simulation der 30-%-Charge im Zeitraffer' },
  },
  'pv-sim-canvas': {
    en: { alt: 'Time-lapse of the dynamic simulation in ProcessView, on the P&ID itself: the 30% batch fills the tank with lye, the agitator runs and the flakes are dosed while the temperature rises to the 60\u00a0°C limit and holds there.', caption: 'Dynamic simulation of the 30% batch, time-lapse' },
    pl: { alt: 'Przyspieszony zapis symulacji dynamicznej w ProcessView, na samym P&ID: szarża 30% napełnia zbiornik ługiem, pracuje mieszadło i dozowane są płatki, a temperatura rośnie do limitu 60\u00a0°C i tam się utrzymuje.', caption: 'Symulacja dynamiczna szarży 30%, przyspieszona' },
    de: { alt: 'Zeitraffer der dynamischen Simulation in ProcessView, direkt auf dem R&I-Fließbild: Die 30-%-Charge füllt den Behälter mit Lauge, das Rührwerk läuft und die Schuppen werden dosiert, während die Temperatur bis zum Grenzwert von 60\u00a0°C steigt und dort bleibt.', caption: 'Dynamische Simulation der 30-%-Charge im Zeitraffer' },
  },
  'pv-infobox-nozzles': {
    en: { alt: 'ProcessView with a valve selected: its InfoBox lists the control description, the states and the NOZZLES section with the nozzles it connects.', caption: 'A valve’s record: control, states, nozzles, parameters' },
    pl: { alt: 'ProcessView z zaznaczonym zaworem: jego InfoBox pokazuje opis sterowania, stany i sekcję NOZZLES z króćcami, które łączy.', caption: 'Karta zaworu: sterowanie, stany, króćce, parametry' },
    de: { alt: 'ProcessView mit einer ausgewählten Armatur: Ihre InfoBox zeigt die Steuerungsbeschreibung, die Zustände und den Abschnitt NOZZLES mit den verbundenen Stutzen.', caption: 'Der Datensatz einer Armatur: Steuerung, Zustände, Stutzen, Parameter' },
  },
  'pv-infobox-pressure': {
    en: { alt: 'ProcessView with a pressure instrument selected: its InfoBox shows the measuring principle and the installation.', caption: 'An instrument’s record: measuring principle and installation' },
    pl: { alt: 'ProcessView z zaznaczonym przyrządem do pomiaru ciśnienia: jego InfoBox pokazuje zasadę pomiaru i sposób montażu.', caption: 'Karta przyrządu: zasada pomiaru i montaż' },
    de: { alt: 'ProcessView mit einem ausgewählten Druckmessgerät: Seine InfoBox zeigt das Messprinzip und den Einbau.', caption: 'Der Datensatz eines Instruments: Messprinzip und Einbau' },
  },
  'pv-tab-materials': {
    en: { alt: 'The Materials register in ProcessView: the media of the unit with their sources, beside the P&ID.', caption: 'Materials register' },
    pl: { alt: 'Rejestr materiałów w ProcessView: media węzła wraz z ich źródłami, obok schematu P&ID.', caption: 'Rejestr materiałów' },
    de: { alt: 'Das Stoffregister in ProcessView: die Medien der Anlage mit ihren Quellen, neben dem R&I-Fließbild.', caption: 'Stoffregister' },
  },
  'pv-tab-pipelines': {
    en: { alt: 'The Pipelines register in ProcessView: every line of the unit with its pipe class and nominal diameter.', caption: 'Pipelines register' },
    pl: { alt: 'Rejestr rurociągów w ProcessView: każda linia węzła z klasą rurociągu i średnicą nominalną.', caption: 'Rejestr rurociągów' },
    de: { alt: 'Das Rohrleitungsregister in ProcessView: jede Leitung der Anlage mit Rohrklasse und Nennweite.', caption: 'Rohrleitungsregister' },
  },
  'pv-tab-instrumentation': {
    en: { alt: 'The Instrumentation register in ProcessView: every instrument tag of the unit with its function.', caption: 'Instrumentation register' },
    pl: { alt: 'Rejestr AKPiA w ProcessView: każdy przyrząd węzła z oznaczeniem i funkcją.', caption: 'Rejestr AKPiA' },
    de: { alt: 'Das MSR-Register in ProcessView: jedes Instrument der Anlage mit Kennzeichen und Funktion.', caption: 'MSR-Register' },
  },
  'pv-mirror': {
    en: { alt: 'The circulation loop on the P&ID in ProcessView: the tank, its drain valve, the pump and the return valve back to the tank.', caption: 'The circulation loop on the P&ID' },
    pl: { alt: 'Pętla obiegu na P&ID w ProcessView: zbiornik, zawór spustowy, pompa i zawór powrotny do zbiornika.', caption: 'Pętla obiegu na P&ID' },
    de: { alt: 'Der Umlaufkreis im R&I-Fließbild in ProcessView: der Behälter, sein Ablassventil, die Pumpe und das Rücklaufventil zum Behälter.', caption: 'Der Umlaufkreis im R&I-Fließbild' },
  },
  'pv-sim-dosing': {
    en: { alt: 'The simulation during dosing: NaOH flakes are added bag by bag while the chilled-water jacket takes away the heat of dissolution.', caption: 'Dosing, held at the temperature limit' },
    pl: { alt: 'Symulacja w trakcie dozowania: płatki NaOH są podawane worek po worku, a płaszcz z wodą lodową odbiera ciepło rozpuszczania.', caption: 'Dozowanie trzymane na limicie temperatury' },
    de: { alt: 'Die Simulation während der Dosierung: NaOH-Schuppen werden Sack für Sack zugegeben, während der Kaltwassermantel die Lösungswärme abführt.', caption: 'Dosieren an der Temperaturgrenze' },
  },
  'pv-sim-final': {
    en: { alt: 'The end of the simulated batch: the Programs panel lists the ten steps of the 30% batch program, the first seven completed and the lab sample waiting for the operator.', caption: 'The batch program on the emulated PLC' },
    pl: { alt: 'Koniec symulowanej szarży: panel Programy pokazuje dziesięć kroków programu szarży 30%, z których siedem pierwszych jest zakończonych, a próbka laboratoryjna czeka na operatora.', caption: 'Program szarży na emulowanym PLC' },
    de: { alt: 'Das Ende der simulierten Charge: Das Programmfenster zeigt die zehn Schritte des 30-%-Chargenprogramms, die ersten sieben abgeschlossen, die Laborprobe wartet auf den Anlagenfahrer.', caption: 'Das Chargenprogramm auf der emulierten SPS' },
  },

  // MechGraph (layer 2)
  'mg-master': {
    en: { alt: 'Render of the NaOH dissolving vessel generated in MechGraph: the stainless tank with its platform and agitator turns, is cut open along the shaft and shows the impeller, the half-pipe jacket and the liquid inside.', caption: 'The vessel and agitator, generated from parameters' },
    pl: { alt: 'Render zbiornika do rozpuszczania NaOH wygenerowanego w MechGraph: zbiornik nierdzewny z pomostem i mieszadłem obraca się, zostaje przecięty wzdłuż wału i pokazuje wirnik, płaszcz half-pipe i ciecz w środku.', caption: 'Zbiornik i mieszadło wygenerowane z parametrów' },
    de: { alt: 'Rendering des in MechGraph erzeugten NaOH-Lösebehälters: Der Edelstahlbehälter mit Bühne und Rührwerk dreht sich, wird entlang der Welle aufgeschnitten und zeigt Rührorgan, Halbrohrmantel und die Flüssigkeit im Inneren.', caption: 'Behälter und Rührwerk, aus Parametern erzeugt' },
  },
  'mg-turntable': {
    en: { alt: 'Render of the stainless dissolving vessel with its platform, half-pipe jacket, nozzles and agitator drive.', caption: 'Designed from inputs, not drawn' },
    pl: { alt: 'Render nierdzewnego zbiornika do rozpuszczania z pomostem, płaszczem half-pipe, króćcami i napędem mieszadła.', caption: 'Projektowany z danych, nie rysowany' },
    de: { alt: 'Rendering des Edelstahl-Lösebehälters mit Bühne, Halbrohrmantel, Stutzen und Rührwerksantrieb.', caption: 'Aus Eingaben ausgelegt, nicht gezeichnet' },
  },
  'mg-section': {
    en: { alt: 'Section through the vessel: the agitator shaft and impeller in the liquid, the half-pipe cooling jacket on the shell.', caption: 'Section: impeller, shaft and cooling jacket' },
    pl: { alt: 'Przekrój zbiornika: wał i wirnik mieszadła w cieczy, chłodzący płaszcz half-pipe na powłoce.', caption: 'Przekrój: wirnik, wał i płaszcz chłodzący' },
    de: { alt: 'Schnitt durch den Behälter: Rührwelle und Rührorgan in der Flüssigkeit, der Halbrohr-Kühlmantel am Mantel.', caption: 'Schnitt: Rührorgan, Welle und Kühlmantel' },
  },
  'mg-shaft': {
    en: { alt: 'The long overhung agitator shaft and its impeller inside the cut-open vessel.', caption: 'The overhung shaft: deflection and critical speed' },
    pl: { alt: 'Długi, wspornikowy wał mieszadła z wirnikiem wewnątrz przeciętego zbiornika.', caption: 'Wał wspornikowy: ugięcie i prędkość krytyczna' },
    de: { alt: 'Die lange, fliegend gelagerte Rührwelle mit ihrem Rührorgan im aufgeschnittenen Behälter.', caption: 'Die fliegende Welle: Durchbiegung und kritische Drehzahl' },
  },
  'mg-contour': {
    en: { alt: 'The cut-open vessel with a stress-style colour contour on its shell, as in the film: a visualization of where the loads gather.', caption: 'The shell under load, as a visualization' },
    pl: { alt: 'Przecięty zbiornik z barwnym konturem w stylu mapy naprężeń na powłoce, jak w filmie: wizualizacja miejsc, w których skupiają się obciążenia.', caption: 'Powłoka pod obciążeniem, jako wizualizacja' },
    de: { alt: 'Der aufgeschnittene Behälter mit einer farbigen Kontur im Stil einer Spannungsdarstellung auf dem Mantel, wie im Film: eine Visualisierung, wo sich die Lasten sammeln.', caption: 'Der Mantel unter Last, als Visualisierung' },
  },
  'mg-pellets': {
    en: { alt: 'NaOH flakes falling through the solids nozzle into the liquid of the cut-open vessel.', caption: 'Flakes entering through the solids nozzle' },
    pl: { alt: 'Płatki NaOH wpadające przez króciec zasypowy do cieczy w przeciętym zbiorniku.', caption: 'Płatki wpadające przez króciec zasypowy' },
    de: { alt: 'NaOH-Schuppen fallen durch den Feststoffstutzen in die Flüssigkeit des aufgeschnittenen Behälters.', caption: 'Schuppen durch den Feststoffstutzen' },
  },
  'mg-tracks': {
    en: { alt: 'Glowing particle tracks in the cut-open vessel, showing flakes carried down by the circulation. An illustrative flow visualization, not a CFD result.', caption: 'Particle tracks: an illustrative visualization, not a CFD result' },
    pl: { alt: 'Świecące tory cząstek w przeciętym zbiorniku, pokazujące płatki porywane w dół przez cyrkulację. Poglądowa wizualizacja przepływu, a nie wynik CFD.', caption: 'Tory cząstek: poglądowa wizualizacja, nie wynik CFD' },
    de: { alt: 'Leuchtende Partikelbahnen im aufgeschnittenen Behälter, die zeigen, wie die Strömung die Schuppen nach unten trägt. Eine veranschaulichende Strömungsdarstellung, kein CFD-Ergebnis.', caption: 'Partikelbahnen: eine Veranschaulichung, kein CFD-Ergebnis' },
  },
  'mg-plate-default': {
    en: { alt: 'The MechGraph window with the vessel and its list of calculations: agitator power, solids suspension, shaft deflection, critical speed, shell and heads, flow field.', caption: 'MechGraph: the vessel and its calculations' },
    pl: { alt: 'Okno MechGraph ze zbiornikiem i listą obliczeń: moc mieszadła, zawieszanie cząstek, ugięcie wału, prędkość krytyczna, powłoka i dennice, pole przepływu.', caption: 'MechGraph: zbiornik i jego obliczenia' },
    de: { alt: 'Das MechGraph-Fenster mit dem Behälter und der Liste seiner Berechnungen: Rührleistung, Feststoffsuspension, Wellendurchbiegung, kritische Drehzahl, Mantel und Böden, Strömungsfeld.', caption: 'MechGraph: der Behälter und seine Berechnungen' },
  },
  'mg-plate-section': {
    en: { alt: 'The MechGraph window with section A-A: a plane through the shaft axis cuts the vessel open.', caption: 'MechGraph: section A-A through the shaft axis' },
    pl: { alt: 'Okno MechGraph z przekrojem A-A: płaszczyzna przez oś wału przecina zbiornik.', caption: 'MechGraph: przekrój A-A przez oś wału' },
    de: { alt: 'Das MechGraph-Fenster mit Schnitt A-A: Eine Ebene durch die Wellenachse schneidet den Behälter auf.', caption: 'MechGraph: Schnitt A-A durch die Wellenachse' },
  },
  'mg-plate-dark': {
    en: { alt: 'The MechGraph window in the dark canvas tone: the vessel with the agitator drive and the platform on its roof, and the Assemblies & parts panel with the machine’s assembly tree.', caption: 'MechGraph: the machine and its assembly tree' },
    pl: { alt: 'Okno MechGraph w ciemnym motywie: zbiornik z napędem mieszadła i pomostem na dachu oraz panel Assemblies & parts z drzewem złożenia maszyny.', caption: 'MechGraph: maszyna i jej drzewo złożenia' },
    de: { alt: 'Das MechGraph-Fenster im dunklen Farbschema: der Behälter mit dem Rührwerksantrieb und der Bühne auf dem Dach und das Panel Assemblies & parts mit dem Baugruppenbaum der Maschine.', caption: 'MechGraph: die Maschine und ihr Baugruppenbaum' },
  },

  // IonGrid (layer 2, parallel track)
  'ig-assembly': {
    en: { alt: 'IonGrid assembles the control cabinet from manufacturers’ models: enclosure and mounting plate, rails and ducts, three variable-speed drives, power supplies, the controller with its I/O, terminals and wiring.', caption: 'A real cabinet, part by part' },
    pl: { alt: 'IonGrid składa szafę sterowniczą z modeli producentów: obudowa i płyta montażowa, szyny i korytka, trzy przemienniki częstotliwości, zasilacze, sterownik z modułami I/O, listwy zaciskowe i okablowanie.', caption: 'Prawdziwa szafa, część po części' },
    de: { alt: 'IonGrid baut den Schaltschrank aus Herstellermodellen auf: Gehäuse und Montageplatte, Schienen und Kanäle, drei Frequenzumrichter, Netzteile, die Steuerung mit ihren E/A, Klemmen und Verdrahtung.', caption: 'Ein echter Schrank, Teil für Teil' },
  },
  'ig-kit': {
    en: { alt: 'The enclosure of the control cabinet as a kit: side walls, back panel, door and plinth, before they come together.', caption: 'The cabinet, before assembly' },
    pl: { alt: 'Obudowa szafy sterowniczej jako zestaw: ściany boczne, ściana tylna, drzwi i cokół, zanim się złożą.', caption: 'Szafa przed montażem' },
    de: { alt: 'Das Gehäuse des Schaltschranks als Bausatz: Seitenwände, Rückwand, Tür und Sockel, bevor sie sich zusammenfügen.', caption: 'Der Schrank vor der Montage' },
  },
  'ig-open': {
    en: { alt: 'The open control cabinet: three variable-speed drives, the controller and its I/O modules, power supplies and terminals on the mounting plate.', caption: 'Inside the cabinet: drives, controller and I/O' },
    pl: { alt: 'Otwarta szafa sterownicza: trzy przemienniki częstotliwości, sterownik z modułami I/O, zasilacze i listwy zaciskowe na płycie montażowej.', caption: 'Wnętrze szafy: przemienniki, sterownik i I/O' },
    de: { alt: 'Der geöffnete Schaltschrank: drei Frequenzumrichter, die Steuerung mit ihren E/A-Modulen, Netzteile und Klemmen auf der Montageplatte.', caption: 'Im Schrank: Umrichter, Steuerung und E/A' },
  },
  'ig-closed': {
    en: { alt: 'The closed control cabinet.', caption: 'The cabinet, closed' },
    pl: { alt: 'Zamknięta szafa sterownicza.', caption: 'Szafa zamknięta' },
    de: { alt: 'Der geschlossene Schaltschrank.', caption: 'Der Schrank, geschlossen' },
  },
  'ig-plate-default': {
    en: { alt: 'The IonGrid window with the cabinet model.', caption: 'IonGrid: the cabinet model' },
    pl: { alt: 'Okno IonGrid z modelem szafy.', caption: 'IonGrid: model szafy' },
    de: { alt: 'Das IonGrid-Fenster mit dem Schrankmodell.', caption: 'IonGrid: das Schrankmodell' },
  },
  'ig-plate-panel': {
    en: { alt: 'The IonGrid window in the dark canvas tone: the open control cabinet in 3D and the Devices & assemblies panel listing the devices it controls, from the agitator and the dosing screw to the valves and transmitters.', caption: 'IonGrid: the cabinet and its devices' },
    pl: { alt: 'Okno IonGrid w ciemnym motywie: otwarta szafa sterownicza w 3D i panel Devices & assemblies z listą sterowanych urządzeń, od mieszadła i ślimaka dozującego po zawory i przetworniki.', caption: 'IonGrid: szafa i jej urządzenia' },
    de: { alt: 'Das IonGrid-Fenster im dunklen Farbschema: der geöffnete Schaltschrank in 3D und das Panel Devices & assemblies mit den gesteuerten Geräten, vom Rührwerk und der Dosierschnecke bis zu den Ventilen und Messumformern.', caption: 'IonGrid: der Schrank und seine Geräte' },
  },
  'ig-register': {
    en: { alt: 'The apparatus register and the I/O list of the cabinet in IonGrid, generated from the same model, signal by signal.', caption: 'Apparatus register and I/O list' },
    pl: { alt: 'Rejestr aparatów i lista I/O szafy w IonGrid, wygenerowane z tego samego modelu, sygnał po sygnale.', caption: 'Rejestr aparatów i lista I/O' },
    de: { alt: 'Das Geräteregister und die E/A-Liste des Schranks in IonGrid, aus demselben Modell erzeugt, Signal für Signal.', caption: 'Geräteregister und E/A-Liste' },
  },

  // PlantMesh (layer 3)
  'pm-assembly': {
    en: { alt: 'PlantMesh assembles the unit around the tank: columns and beams, the bag-dump deck, the bucket elevator, the pump and the piping drawn from nozzle to nozzle.', caption: 'Converging into one process unit' },
    pl: { alt: 'PlantMesh składa węzeł wokół zbiornika: słupy i belki, pomost rozworkownicy, przenośnik kubełkowy, pompa i rurociągi prowadzone od króćca do króćca.', caption: 'Zbieżność w jeden węzeł technologiczny' },
    de: { alt: 'PlantMesh setzt die Anlage um den Behälter zusammen: Stützen und Träger, die Sackaufgabebühne, das Becherwerk, die Pumpe und die Rohrleitungen von Stutzen zu Stutzen.', caption: 'Zusammengeführt zu einer Prozesseinheit' },
  },
  'pm-final': {
    en: { alt: 'The assembled process unit in PlantMesh: tank, bag-dump station, bucket elevator, pump, piping and support structure.', caption: 'The assembled unit' },
    pl: { alt: 'Złożony węzeł technologiczny w PlantMesh: zbiornik, rozworkownica, przenośnik kubełkowy, pompa, rurociągi i konstrukcja wsporcza.', caption: 'Złożony węzeł' },
    de: { alt: 'Die zusammengebaute Prozesseinheit in PlantMesh: Behälter, Sackaufgabestation, Becherwerk, Pumpe, Rohrleitungen und Stahlbau.', caption: 'Die zusammengebaute Einheit' },
  },
  'pm-final-line': {
    en: { alt: 'The assembled unit in PlantMesh with the pump’s discharge line lit violet.', caption: 'The pump’s discharge line' },
    pl: { alt: 'Złożony węzeł w PlantMesh z rurociągiem tłocznym pompy podświetlonym na fioletowo.', caption: 'Rurociąg tłoczny pompy' },
    de: { alt: 'Die zusammengebaute Einheit in PlantMesh mit der violett hervorgehobenen Druckleitung der Pumpe.', caption: 'Die Druckleitung der Pumpe' },
  },
  'pm-final-steel': {
    en: { alt: 'The assembled unit in PlantMesh with the tower the operator stands on lit violet.', caption: 'The support tower' },
    pl: { alt: 'Złożony węzeł w PlantMesh z wieżą, na której stoi operator, podświetloną na fioletowo.', caption: 'Wieża konstrukcji wsporczej' },
    de: { alt: 'Die zusammengebaute Einheit in PlantMesh mit dem violett hervorgehobenen Turm, auf dem der Bediener steht.', caption: 'Der Stahlbauturm' },
  },
  'pm-wire': {
    en: { alt: 'The same unit as edges only: the geometry the AI agent works with.', caption: 'The unit as edges' },
    pl: { alt: 'Ten sam węzeł jako same krawędzie: geometria, na której pracuje agent AI.', caption: 'Węzeł jako krawędzie' },
    de: { alt: 'Dieselbe Einheit nur als Kanten: die Geometrie, mit der der KI-Agent arbeitet.', caption: 'Die Einheit als Kanten' },
  },
  'pm-orbit': {
    en: { alt: 'The camera circles the assembled process unit in PlantMesh: tank, bag-dump station, bucket elevator, pump, piping and support structure.', caption: 'Around the assembled unit' },
    pl: { alt: 'Kamera okrąża złożony węzeł technologiczny w PlantMesh: zbiornik, rozworkownica, przenośnik kubełkowy, pompa, rurociągi i konstrukcja wsporcza.', caption: 'Wokół złożonego węzła' },
    de: { alt: 'Die Kamera umkreist die zusammengebaute Prozesseinheit in PlantMesh: Behälter, Sackaufgabestation, Becherwerk, Pumpe, Rohrleitungen und Stahlbau.', caption: 'Rund um die zusammengebaute Einheit' },
  },
  'pm-clash': {
    en: { alt: 'Clash detection in PlantMesh: the envelope of the bucket elevator intersects its feed chute, marked in red as a detected finding.', caption: 'Detected: the elevator envelope meets its feed chute' },
    pl: { alt: 'Detekcja kolizji w PlantMesh: obwiednia przenośnika kubełkowego przecina jego zsyp, oznaczona na czerwono jako wykryta kolizja.', caption: 'Wykryto: obwiednia przenośnika przecina zsyp' },
    de: { alt: 'Kollisionsprüfung in PlantMesh: Die Hüllkurve des Becherwerks schneidet seine Aufgabeschurre, rot markiert als erkannter Befund.', caption: 'Erkannt: Becherwerk-Hüllkurve trifft die Aufgabeschurre' },
  },
  'pm-plate-home': {
    en: { alt: 'The PlantMesh window with the assembled unit.', caption: 'PlantMesh: the unit model' },
    pl: { alt: 'Okno PlantMesh ze złożonym węzłem.', caption: 'PlantMesh: model węzła' },
    de: { alt: 'Das PlantMesh-Fenster mit der zusammengebauten Einheit.', caption: 'PlantMesh: das Anlagenmodell' },
  },
  'pm-plate-collisions': {
    en: { alt: 'The PlantMesh Diagnostics panel reporting 2 findings from the automatic clash detection.', caption: 'Diagnostics: 2 findings' },
    pl: { alt: 'Panel diagnostyki PlantMesh zgłaszający 2 kolizje z automatycznej detekcji.', caption: 'Diagnostyka: 2 kolizje' },
    de: { alt: 'Das Diagnosefenster von PlantMesh meldet 2 Befunde der automatischen Kollisionsprüfung.', caption: 'Diagnose: 2 Befunde' },
  },

  // Architecture (layer 4)
  'ar-site': {
    en: { alt: 'The camera pulls back from the unit to the whole site: the tank farm and its bund, the unloading bay, halls and roads with hatched traffic and storage zones. The surroundings are a generic model.', caption: 'From the unit to the plant (generic surroundings)' },
    pl: { alt: 'Kamera odjeżdża od węzła na cały teren: farma zbiorników z tacą, stanowisko rozładunku, hale i drogi z kreskowanymi strefami ruchu i składowania. Otoczenie to model generyczny.', caption: 'Od węzła do zakładu (otoczenie generyczne)' },
    de: { alt: 'Die Kamera zieht sich von der Anlage auf das ganze Werksgelände zurück: Tanklager mit Auffangwanne, Entladestelle, Hallen und Straßen mit schraffierten Verkehrs- und Lagerflächen. Die Umgebung ist ein generisches Modell.', caption: 'Von der Anlage zum Werk (generische Umgebung)' },
  },
  'ar-top-colour': {
    en: { alt: 'The site model seen from directly above, in colour.', caption: 'The site from above' },
    pl: { alt: 'Model terenu widziany z góry, w kolorze.', caption: 'Teren z góry' },
    de: { alt: 'Das Geländemodell senkrecht von oben, in Farbe.', caption: 'Das Gelände von oben' },
  },
  'ar-top-lineart': {
    en: { alt: 'The same top view of the site as line art.', caption: 'The same view as line art' },
    pl: { alt: 'Ten sam widok terenu z góry jako rysunek kreskowy.', caption: 'Ten sam widok jako rysunek kreskowy' },
    de: { alt: 'Dieselbe Draufsicht des Geländes als Strichzeichnung.', caption: 'Dieselbe Ansicht als Strichzeichnung' },
  },
  'ar-pzt': {
    en: { alt: 'The site plan drawn by the platform’s renderer from the same model: buildings, zones and underground networks.', caption: 'The site plan, drawn from the model' },
    pl: { alt: 'Plan zagospodarowania terenu narysowany przez renderer platformy z tego samego modelu: budynki, strefy i sieci podziemne.', caption: 'Plan zagospodarowania z modelu' },
    de: { alt: 'Der Lageplan, vom Renderer der Plattform aus demselben Modell gezeichnet: Gebäude, Zonen und unterirdische Netze.', caption: 'Der Lageplan, aus dem Modell gezeichnet' },
  },
  'ar-pzt-sheet': {
    en: { alt: 'The full A2 site plan sheet with legend, object list and a neutral title block.', caption: 'Site plan sheet, A2' },
    pl: { alt: 'Pełny arkusz A2 planu zagospodarowania terenu z legendą, wykazem obiektów i neutralną tabelką rysunkową.', caption: 'Arkusz planu zagospodarowania, A2' },
    de: { alt: 'Das vollständige A2-Blatt des Lageplans mit Legende, Objektliste und neutralem Schriftfeld.', caption: 'Lageplanblatt, A2' },
  },
  'ar-bim': {
    en: { alt: 'The federated BIM model of another project in Architecture: a production hall with photovoltaics on the roof, the staff car park, the truck unloading bay and container storage; the model layers panel lists buildings, structure, foundations, installations, photovoltaics and vehicles.', caption: 'Architecture: a BIM model (another project)' },
    pl: { alt: 'Sfederowany model BIM innego projektu w Architecture: hala produkcyjna z fotowoltaiką na dachu, parking pracowników, stanowisko rozładunku TIR i składowisko kontenerów; panel warstw modeli wymienia budynki, konstrukcję, fundamenty, instalacje, fotowoltaikę i pojazdy.', caption: 'Architecture: model BIM (inny projekt)' },
    de: { alt: 'Das föderierte BIM-Modell eines anderen Projekts in Architecture: eine Produktionshalle mit Photovoltaik auf dem Dach, der Mitarbeiterparkplatz, die Lkw-Entladestelle und das Containerlager; das Panel der Modellebenen listet Gebäude, Tragwerk, Fundamente, Installationen, Photovoltaik und Fahrzeuge.', caption: 'Architecture: ein BIM-Modell (anderes Projekt)' },
  },

  // Documents: the output of the layers
  'doc-01': doc('Process report, cover', 'Raport procesowy, strona tytułowa', 'Prozessbericht, Deckblatt'),
  'doc-02': doc('Process flow diagram', 'Schemat technologiczny', 'Verfahrensfließbild'),
  'doc-03': doc('Batch schedule and trends', 'Harmonogram szarży i trendy', 'Chargenablauf und Trends'),
  'doc-04': doc('CFD velocity sections', 'Przekroje prędkości CFD', 'CFD-Geschwindigkeitsschnitte'),
  'doc-05': doc('Nozzle layout', 'Rozmieszczenie króćców', 'Stutzenanordnung'),
  'doc-06': doc('Mixer assembly drawing', 'Rysunek złożeniowy mieszalnika', 'Zusammenbauzeichnung des Rührbehälters'),
  'doc-07': doc('Mixer details', 'Szczegóły mieszalnika', 'Details des Rührbehälters'),
  'doc-08': doc('Piping isometric with parts list', 'Izometria rurociągu z wykazem części', 'Rohrleitungsisometrie mit Stückliste'),
  'doc-09': doc('Piping isometric', 'Izometria rurociągu', 'Rohrleitungsisometrie'),
  'doc-10': doc('Support structure, 3D sheet', 'Konstrukcja wsporcza, arkusz 3D', 'Stahlbau, 3D-Blatt'),
  'doc-11': doc('Support structure drawing', 'Rysunek konstrukcji wsporczej', 'Stahlbauzeichnung'),
  'doc-12': doc('Platform drawing', 'Rysunek pomostu', 'Bühnenzeichnung'),
  'doc-13': doc('Base plate detail', 'Szczegół blachy podstawy', 'Fußplattendetail'),
  'doc-14': doc('Control and signals', 'Sterowanie i sygnały', 'Steuerung und Signale'),
  'doc-15': doc('Cabinet mounting layout', 'Rozmieszczenie aparatów w szafie', 'Montageplan des Schaltschranks'),
  'doc-16': doc('Power circuits', 'Obwody zasilania', 'Leistungsstromkreise'),
  'doc-17': doc('P&ID', 'Schemat P&ID', 'R&I-Fließbild'),
  'doc-pzt': doc('Site plan', 'Plan zagospodarowania terenu', 'Lageplan'),

  // LabelHash: the free tool's own screens
  'lh-screen-1': {
    en: { alt: 'LabelHash: an ISO 20560 label for ethylene oxide at 20\u00a0°C on a DN\u00a050 pipe, with GHS pictograms, the colour band and a flow arrow, previewed with rulers beside the band dimensions.', caption: 'A pipeline label, previewed to scale' },
    pl: { alt: 'LabelHash: etykieta wg ISO 20560 dla tlenku etylenu 20\u00a0°C na rurociągu DN\u00a050, z piktogramami GHS, pasem barwnym i strzałką kierunku przepływu, w podglądzie z linijkami obok wymiarów pasa.', caption: 'Etykieta rurociągu w podglądzie w skali' },
    de: { alt: 'LabelHash: ein Etikett nach ISO 20560 für Ethylenoxid bei 20\u00a0°C auf einer DN-50-Leitung, mit GHS-Piktogrammen, Farbband und Fließrichtungspfeil, in der Vorschau mit Linealen neben den Bandmaßen.', caption: 'Ein Rohrleitungsetikett in maßstäblicher Vorschau' },
  },
  'lh-screen-2': {
    en: { alt: 'LabelHash: a label for 45% sulphuric acid with corrosion and environment pictograms and a two-way flow arrow, with the hazardous-medium settings and the GHS pictogram picker.', caption: 'Hazardous media: GHS pictograms and colour coding' },
    pl: { alt: 'LabelHash: etykieta dla kwasu siarkowego 45% z piktogramami korozji i zagrożenia dla środowiska oraz dwukierunkową strzałką przepływu, obok ustawień medium niebezpiecznego i wyboru piktogramów GHS.', caption: 'Media niebezpieczne: piktogramy GHS i kodowanie barwne' },
    de: { alt: 'LabelHash: ein Etikett für 45-prozentige Schwefelsäure mit Piktogrammen für Ätzwirkung und Umweltgefahr und einem Pfeil für beide Fließrichtungen, daneben die Einstellungen für Gefahrstoffe und die Auswahl der GHS-Piktogramme.', caption: 'Gefahrstoffe: GHS-Piktogramme und Farbkennzeichnung' },
  },

  // Films
  'film-en': {
    en: { alt: 'The two-minute film “Bottom-Up”, narrated in English: one project from the specification to the site plan.', caption: 'Bottom-Up · English narration' },
    pl: { alt: 'Dwuminutowy film „Bottom-Up” z narracją po angielsku: jeden projekt od specyfikacji do planu zagospodarowania terenu.', caption: 'Bottom-Up · narracja angielska' },
    de: { alt: 'Der zweiminütige Film „Bottom-Up“, englisch gesprochen: ein Projekt von der Spezifikation bis zum Lageplan.', caption: 'Bottom-Up · englischer Sprecher' },
  },
  'film-pl': {
    en: { alt: 'The two-minute film “Bottom-Up”, narrated in Polish: one project from the specification to the site plan.', caption: 'Bottom-Up · Polish narration' },
    pl: { alt: 'Dwuminutowy film „Bottom-Up” z polską narracją: jeden projekt od specyfikacji do planu zagospodarowania terenu.', caption: 'Bottom-Up · polska narracja' },
    de: { alt: 'Der zweiminütige Film „Bottom-Up“, polnisch gesprochen: ein Projekt von der Spezifikation bis zum Lageplan.', caption: 'Bottom-Up · polnischer Sprecher' },
  },
  // the team page (owner photos after the media repo's team intake)
  'team-portrait': {
    en: { alt: 'Szymon in a yellow sailing jacket, misty mountains and water behind him.', caption: 'Szymon' },
    pl: { alt: 'Szymon w żółtej kurtce żeglarskiej, za nim zamglone góry i woda.', caption: 'Szymon' },
    de: { alt: 'Szymon in einer gelben Segeljacke, dahinter neblige Berge und Wasser.', caption: 'Szymon' },
  },
  'team-plant': {
    en: { alt: 'A process hall with a stirred vessel on a steel platform and a centrifuge unit; Szymon sits on a wooden chair in front of them, wearing a full-face gas mask.', caption: 'Commissioning, the relaxed part' },
    pl: { alt: 'Hala procesowa z mieszalnikiem na stalowym podeście i wirówką; przed nimi na drewnianym krześle siedzi Szymon w pełnej masce przeciwgazowej.', caption: 'Rozruch, ta spokojniejsza część' },
    de: { alt: 'Eine Prozesshalle mit einem Rührbehälter auf einer Stahlbühne und einer Zentrifuge; davor sitzt Szymon auf einem Holzstuhl, mit Vollmaske.', caption: 'Inbetriebnahme, der entspannte Teil' },
  },
  'team-homelab': {
    en: { alt: 'A basement corner with several desktop computers, a router and a laptop on a yellow steel post, cables everywhere.', caption: 'HomeLab Enterprises, mid-reorganisation' },
    pl: { alt: 'Kąt piwnicy z kilkoma komputerami, routerem i laptopem na żółtym stalowym słupku, wszędzie kable.', caption: 'HomeLab Enterprises w trakcie reorganizacji' },
    de: { alt: 'Eine Kellerecke mit mehreren Rechnern, einem Router und einem Laptop auf einem gelben Stahlpfosten, überall Kabel.', caption: 'HomeLab Enterprises, mitten in der Umstrukturierung' },
  },
};

/**
 * Callout words at named points of the renders (leader-line labels), per language. Keys are callout ids: usually the
 * anchor's own name, or a variant when one anchor carries different words per state ("jacket" and "shell" both
 * point at the vessel shell). The heat and clash callouts use the article's own labels (knownLosses, findings).
 */
export const CALLOUT_WORDS: Record<string, Record<Lang, string>> = {
  impeller: { en: 'Impeller · power and solids suspension', pl: 'Wirnik · moc i zawieszanie cząstek', de: 'Rührorgan · Leistung und Feststoffsuspension' },
  'liquid-surface': { en: 'Working level', pl: 'Poziom roboczy', de: 'Arbeitsfüllstand' },
  jacket: { en: 'Half-pipe cooling jacket', pl: 'Chłodzący płaszcz half-pipe', de: 'Halbrohr-Kühlmantel' },
  shaft: { en: 'Overhung shaft · deflection, critical speed', pl: 'Wał wspornikowy · ugięcie, prędkość krytyczna', de: 'Fliegende Welle · Durchbiegung, kritische Drehzahl' },
  shell: { en: 'Shell and heads · EN 13445', pl: 'Powłoka i dennice · EN 13445', de: 'Mantel und Böden · EN 13445' },
  'nozzle-n1': { en: 'Solids nozzle N1', pl: 'Króciec zasypowy N1', de: 'Feststoffstutzen N1' },
  tracks: { en: 'Particle tracks', pl: 'Tory cząstek', de: 'Partikelbahnen' },
  pneumatic: { en: 'I/O → solenoid valves · pneumatic control', pl: 'I/O → elektrozawory · sterowanie pneumatyczne', de: 'E/A → Magnetventile · pneumatische Ansteuerung' },
  'pipe-run': { en: 'Pump discharge line', pl: 'Rurociąg tłoczny pompy', de: 'Druckleitung der Pumpe' },
  'support-structure': { en: 'Support structure · FEM', pl: 'Konstrukcja wsporcza · MES', de: 'Stahlbau · FEM' },
};

/** Which layer produced each document (edge colour in the documents stack). */
export const DOC_LAYER: Record<string, string> = {
  'doc-01': 'processview',
  'doc-02': 'processview',
  'doc-03': 'processview',
  'doc-17': 'processview',
  'doc-04': 'mechgraph',
  'doc-05': 'mechgraph',
  'doc-06': 'mechgraph',
  'doc-07': 'mechgraph',
  'doc-08': 'plantmesh',
  'doc-09': 'plantmesh',
  'doc-10': 'plantmesh',
  'doc-11': 'plantmesh',
  'doc-12': 'plantmesh',
  'doc-13': 'plantmesh',
  'doc-14': 'iongrid',
  'doc-15': 'iongrid',
  'doc-16': 'iongrid',
  'doc-pzt': 'architecture',
};

export type Figure = { id: string; item: MediaItem };

/**
 * Site assets that are not part of the film export: the LabelHash screens (public/assets/screenshots, public since the
 * previous site; checked with the media repo's OCR denylist gate, 0 hits).
 */
const STATIC: Record<string, ImageItem> = {
  'lh-screen-1': { kind: 'image', width: 1922, height: 915, avif: [], webp: [], src: '/assets/screenshots/label-1.png', bg: '#f4f6f9' },
  'lh-screen-2': { kind: 'image', width: 1911, height: 912, avif: [], webp: [], src: '/assets/screenshots/label-2.png', bg: '#f4f6f9' },
};

export const media = (id: string): Figure | undefined => {
  const item = ITEMS[id] ?? STATIC[id];
  return item ? { id, item } : undefined;
};

export function words(id: string, lang: Lang): Words {
  const w = WORDS[id];
  if (!w) throw new Error(`media "${id}" has no alt text (src/data/media.ts WORDS)`);
  return w[lang];
}

const point = (p: RawPoint): Point => (Array.isArray(p) ? { x: p[0], y: p[1] } : { x: p.x, y: p.y });

/** Named anchors of a still or clip (normalized), from the item or from the manifest's anchor table. */
export function anchors(id: string): Record<string, Point> {
  const raw = ITEMS[id]?.anchors ?? MANIFEST.anchors?.[id] ?? {};
  return Object.fromEntries(Object.entries(raw).map(([k, v]) => [k, point(v)]));
}

/** A data file published with the media, by id ("pv-hud") or by its file path ("processview/hud.json"). */
export function data(key: string): DataItem | undefined {
  for (const [id, entry] of Object.entries(MANIFEST.data ?? {})) {
    const item = typeof entry === 'string' ? { src: entry } : entry;
    if (id === key || item.src.endsWith(`/${key}`)) return item;
  }
  return undefined;
}

export const dataSrc = (key: string) => data(key)?.src;

/** A short text excerpt published with the media (e.g. "pv-model": the circulation loop as the AI agent reads it). */
export const text = (id: string) => MANIFEST.texts?.[id];

/** A narrated film, from the manifest's film table (or a video item carrying caption tracks). */
export function film(id: string): FilmItem | undefined {
  const raw = (MANIFEST.films?.[id] ?? ITEMS[id]) as RawFilm | undefined;
  if (!raw?.sources?.length) return undefined;
  const list = raw.captions ?? raw.tracks;
  const tracks: FilmTrack[] = Array.isArray(list)
    ? list
    : Object.entries(list ?? {}).map(([lang, t]) => (typeof t === 'string' ? { lang, src: t } : { lang, src: t.src, label: t.label }));
  return { id, lang: raw.lang, width: raw.width ?? 1280, height: raw.height ?? 720, duration: raw.duration, sources: raw.sources, poster: raw.poster, tracks };
}

/** A link-preview image (1200 × 630) exported for a page, by name. */
export const ogImage = (name: string) => MANIFEST.og?.[name]?.src;

/** The src of an image whose picture waits for a script (data-src, data-srcset): a transparent pixel, inline, so the
 *  markup stays valid HTML (src is required), nothing is fetched and no alt text shows before the picture arrives. */
export const BLANK_SRC = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

/** the first id of the list the export has produced (a new capture replaces an older one once it exists) */
/** Screens shown on each application page (hero + gallery), by media id. Missing ids are skipped. */
const APP_MEDIA: Record<string, { hero?: string; gallery: string[]; og?: string }> = {
  // real UI screens first, then the renders and clips of the demonstration project
  processview: {
    hero: 'pv-sim-dosing',
    // the simulation cropped to its P&ID (the full capture's side panel jumps while dosing)
    gallery: ['pv-build', 'pv-infobox-nozzles', 'pv-tab-pipelines', 'pv-tab-instrumentation', 'pv-sim-canvas', 'pv-sim-final'],
    og: 'app-processview',
  },
  mechgraph: { hero: 'mg-plate-section', gallery: ['mg-master', 'mg-section', 'mg-shaft', 'mg-tracks'], og: 'app-mechgraph' },
  // the documents IonGrid exports in place of the closed cabinet
  iongrid: { hero: 'ig-plate-panel', gallery: ['ig-assembly', 'ig-open', 'ig-register', 'doc-15', 'doc-14', 'doc-16'], og: 'app-iongrid' },
  // the support structure's assembly drawing beside the isometric
  plantmesh: { hero: 'pm-final', gallery: ['pm-assembly', 'pm-plate-home', 'pm-clash', 'pm-plate-collisions', 'doc-08', 'doc-11'], og: 'app-plantmesh' },
  architecture: { hero: 'ar-site', gallery: ['ar-top-colour', 'ar-pzt', 'ar-pzt-sheet'], og: 'app-architecture' },
  // no screens of its own yet: the page shows the article's agent terminal as a concept (AppPage.astro)
  capacityindex: { gallery: [], og: 'app-capacityindex' },
  labelhash: { hero: 'lh-screen-1', gallery: ['lh-screen-2'] },
};

/**
 * Three slides per application (AppSlides.astro, on the applications index and on each application page), by media id:
 * real screens first, then renders. A clip shows its poster. `drawing:` ids are CapacityIndex's drawings
 * (CapacitySlides.astro): it has no screens of its own yet. `fit: 'contain'` shows a sheet or a plan whole.
 */
export type Slide = { id: string; fit?: 'contain' };
export const APP_SLIDES: Record<string, Slide[]> = {
  // CapacityIndex: its AI agent terminal (a concept) and three drawings
  capacityindex: [{ id: 'drawing:terminal' }, { id: 'drawing:finance' }, { id: 'drawing:shifts' }, { id: 'drawing:scope' }],
  processview: [{ id: 'pv-sim-dosing' }, { id: 'pv-tab-pipelines' }, { id: 'pv-infobox-nozzles' }],
  // MechGraph and IonGrid: the dark canvas with the right panel open (the light default views are not shown)
  mechgraph: [{ id: 'mg-plate-dark' }, { id: 'mg-plate-section' }, { id: 'mg-contour' }],
  iongrid: [{ id: 'ig-plate-panel' }, { id: 'ig-register' }, { id: 'ig-open' }],
  plantmesh: [{ id: 'pm-plate-home' }, { id: 'pm-plate-collisions' }, { id: 'pm-final' }],
  // Architecture: a BIM model of another project (site context off), then the demonstration project's site and sheet
  architecture: [{ id: 'ar-bim' }, { id: 'ar-site' }, { id: 'ar-pzt-sheet', fit: 'contain' }],
};

export function mediaFor(appId: string): { hero?: Figure; gallery: Figure[]; og?: string } {
  const spec = APP_MEDIA[appId];
  if (!spec) return { gallery: [] };
  const shown = new Set((APP_SLIDES[appId] ?? []).map((s) => s.id));
  return {
    hero: spec.hero ? media(spec.hero) : undefined,
    // with slides, the hero figure joins the gallery, and what the slides show is not repeated there
    gallery: [...(spec.hero && shown.size ? [spec.hero] : []), ...spec.gallery]
      .filter((id) => !shown.has(id))
      .map(media)
      .filter((f): f is Figure => Boolean(f)),
    og: spec.og ? ogImage(spec.og) : undefined,
  };
}
