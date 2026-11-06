import type { ServicesCopy } from './types';

// German, translated from the English copy with the same claims. The slogan is the owner's (2026-11-06).
export const services: ServicesCopy = {
  lang: 'de',
  meta: {
    title: 'Ingenieurleistungen | Simon Lab',
    description:
      'Ingenieuraufträge für Chemieanlagen, ein ganzes Projekt oder ein einzelnes Gewerk, vom R&I-Fließbild bis zum BIM-Modell: als Code gebaut, schnell geliefert, von erfahrenen Ingenieuren geprüft.',
  },
  hero: {
    eyebrow: 'Ingenieurleistungen',
    title: 'Machen Sie Ihre Anlage KI-nativ, schnell.',
    lede: 'Simon Lab übernimmt Ingenieuraufträge für Chemieanlagen: ein ganzes Projekt oder ein einzelnes Gewerk. Die Arbeit läuft auf der Plattform von Simon Lab, deshalb entstehen die Dokumente schnell aus einem Modell, und erfahrene Ingenieure prüfen jedes davon, bevor es das Haus verlässt.',
  },
  disciplines: {
    eyebrow: 'Gewerke',
    title: 'Vom R&I-Fließbild bis zum BIM-Modell',
    items: [
      {
        app: 'processview',
        name: 'Verfahrenstechnik und Prozessautomatisierung',
        body: 'R&I-Fließbild, dynamische Prozesssimulation und Steuerungsprogramme, auf einer emulierten SPS getestet, bevor etwas gekauft wird.',
      },
      {
        app: 'mechgraph',
        name: 'Mechanische Konstruktion',
        body: 'Maschinen und Apparate aus eigenen Berechnungen: Rühren, Wellen, Festigkeitsberechnungen (FEM) und Strömungssimulationen (CFD), mit Zeichnungen und Berichten aus demselben Modell.',
      },
      {
        app: 'iongrid',
        name: 'Automatisierung und Energieversorgung',
        body: 'Schaltschränke und ihre Energieversorgung aus Katalogkomponenten der Hersteller, mit Verlustleistungsdaten und technischen Verzeichnissen.',
      },
      {
        app: 'plantmesh',
        name: '3D-Modellierung',
        body: 'Die Anlage als 3D-Baugruppe: Rohrleitungsisometrien, Stützkonstruktionen, Wartungszugänge und Kollisionsprüfung.',
      },
      {
        app: 'architecture',
        name: 'Architektur und BIM',
        body: 'Die Anlage in ihrem Gebäude und an ihrem Standort: architektonische Anordnung und georeferenzierte OpenBIM-Modelle bis zum Lageplan.',
      },
    ],
  },
  fast: {
    eyebrow: 'Umsetzung',
    title: 'Schnell, weil das Projekt Code ist',
    body: [
      'Das Projekt wird einmal definiert, als strukturierte und versionierte Daten. Zeichnungen, Listen und Berechnungen entstehen aus diesem Modell, deshalb erreicht eine Änderung jedes Dokument in derselben Revision, statt von einer Übergabe zur nächsten zu wandern.',
      'Nach jeder Iteration wird das Modell gegen Physik, Grenzwerte und Geometrie geprüft, so wie Software getestet wird. KI-Agenten übernehmen die Koordination und die wiederkehrende Arbeit zwischen den Dokumenten.',
    ],
    more: 'Projekt als Code in der Wissensbasis',
  },
  checked: {
    eyebrow: 'Qualität',
    title: 'Von erfahrenen Ingenieuren geprüft',
    body: [
      'Die Entscheidungen treffen Ingenieure: den Umfang, den Prozess, die Auswahl jeder Maschine und jeder Komponente. Jedes Ergebnis prüft ein erfahrener Ingenieur, bevor es an den Kunden geht.',
    ],
  },
  delivery: {
    eyebrow: 'Was der Kunde erhält',
    title: 'Die Dokumente und das Projekt als Daten',
    lede: 'Die Dokumente, mit denen ausführende Firmen und Behörden arbeiten, und das Modell, aus dem sie entstehen, in offenen Formaten:',
    points: [
      'Zeichnungen und Berichte als PDF',
      'Modelle als IFC und 3D Tiles',
      'Listen und Verzeichnisse als XLSX und CSV',
      'das Projekt selbst als strukturierte Daten, bereit für die nächste Revision und für KI-Agenten',
    ],
  },
  order: {
    eyebrow: 'Aufträge',
    title: 'Aufträge per E-Mail',
    body: 'Für den Anfang genügt eine kurze Beschreibung: die Anlage oder ihr Teil, die Gewerke und der Termin. Wir antworten mit einem Vorschlag für Umfang und Zeitplan.',
    write: 'Schreiben Sie uns',
  },
};
