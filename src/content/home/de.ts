import type { HomeCopy } from './types';

// Deutsch, aus dem Englischen übersetzt (Durchsicht durch Muttersprachler empfohlen). Mission, Projekt als Code und
// „Über uns“ folgen der vorigen Website; das Motto (src/i18n/ui.ts) bleibt auf Wunsch des Inhabers.
export const home: HomeCopy = {
  lang: 'de',
  meta: {
    title: 'Simon Lab | Computational Engineering für Chemieprojekte',
    description:
      'Simon Lab koordiniert vollständige Projekte der Chemietechnik auf einer einzigen offenen Plattform: Prozess, Maschinen, Schaltschränke, 3D-Montage, Standort und Genehmigungen, mit Import und Export aller Arten von Dokumenten.',
  },
  hero: {
    eyebrow: 'Chemietechnik',
    title: 'Computational Engineering für Chemieprojekte',
    lede: 'Simon Lab koordiniert vollständige Projekte der Chemietechnik auf einer einzigen offenen Plattform, mit Import und Export aller Arten von Dokumenten. Vom Labortisch bis zum Repository sind Ingenieurdaten als Code strukturiert: nachverfolgbar, überprüfbar und maschinenlesbar vom ersten Tag an.',
    film: 'Film ansehen',
    filmLink: 'Den 2-Minuten-Film ansehen',
    slides: [
      'PlantMesh · die Anlage in 3D, auf Kollisionen geprüft',
      'MechGraph · die Maschine aus ihren eigenen Berechnungen',
      'IonGrid · der Schaltschrank, Teil für Teil',
      'Dokumente · aus dem Projekt erzeugt',
    ],
  },
  mission: {
    eyebrow: 'Die Mission',
    body: [
      'Die chemische Industrie fällt zurück. Software, Finanzwesen und Fertigung arbeiten längst mit computergestützten Workflows, die Verfahrenstechnik dagegen steckt noch in statischen Dokumenten fest: PDFs, die mit der Abgabe sterben, Tabellen, die mit jeder Revision auseinanderlaufen, Zeichnungen, die kein System lesen kann.',
      'Das ist die gebrochene Kette. Daten aus einer Phase können nicht in die nächste fließen. Jede Übergabe bringt Fehler mit sich, und jedes Projekt beginnt von vorn.',
    ],
    close: 'Wir sind hier, um das zu beheben.',
  },
  story: {
    eyebrow: 'Wie ein Anlagenprojekt entsteht',
    title: 'Von verstreuten Dokumenten zu einem koordinierten Projekt',
    steps: [
      {
        id: 'idea',
        title: 'Am Anfang steht eine Idee',
        body: 'Ein Kunde braucht eine neue Anlage: eine Kapazität, ein Produkt, einen Standort. In diesem Moment ist das ein Gespräch und ein paar Zahlen.',
      },
      {
        id: 'classic',
        title: 'Dann kommen die Gewerke dazu',
        body: 'Laborversuche, Prozess und Kapazität, Berechnungen, Steuerung, Maschinen, Architektur, Genehmigungen. Jedes Gewerk arbeitet in eigenen Werkzeugen und Dokumenten und gibt Ergebnisse per E-Mail und PDF weiter.',
      },
      {
        id: 'chaos',
        title: 'Und die Kette reißt',
        body: 'Daten kommen unvollständig an. Manche Themen bleiben liegen, andere werden ignoriert oder widersprechen sich. Die Kapazität passt nicht mehr zum Prozess, die Emissionen überschreiten den Grenzwert, eine Genehmigung fehlt. Eine Architektur, die die Genehmigungen nicht berücksichtigt, plant im luftleeren Raum. Eine Iteration dauert Monate an Abstimmung.',
      },
      {
        id: 'order',
        title: 'Eine Sprache für das ganze Projekt',
        body: 'Diese gemeinsame Sprache ist Programmcode, die Sprache, in der KI-Agenten arbeiten. Ob er der Struktur von Simon Lab folgt oder einer anderen, ist zweitrangig: Simon Lab ist einfach eine für ein Anlagenprojekt vorbereitete Struktur. Darin lesen und schreiben LabGate, CapacityIndex, ProcessView, MechGraph, IonGrid, PlantMesh, Architecture und Permit denselben Projektcode. Nichts wird abgetippt, nichts geht zwischen Teams verloren.',
      },
      {
        id: 'iterate',
        title: 'Iterationen werden schnell',
        body: 'Die Arbeit bleibt iterativ. Aber die Anwendungen tauschen Daten jetzt direkt aus, also liefert jede Iteration den vollständigen Satz Dokumente, und die nächste kommt früher.',
      },
      {
        id: 'validate',
        title: 'Jede Iteration wird getestet',
        body: 'Nach jeder Iteration wird das ganze Projekt getestet und validiert: mathematische Konsistenz, jedes Dokument stimmig mit den anderen, dieselben Qualitätsstandards, nach denen Software getestet wird. Finden die Tests Fehler, folgt die nächste Iteration, bis das Projekt fehlerfrei durchläuft.',
      },
      {
        id: 'scope',
        title: 'Eine Änderung des Umfangs ist einfach die nächste Iteration',
        body: 'Ändert der Kunde den Umfang, meldet CapacityIndex das, und nichts steht still. Die Änderung setzt am Anfang an, und die nächsten Iterationen tragen sie durch alle Dokumente und alle Tests.',
      },
      {
        id: 'law',
        title: 'Ebenso eine Gesetzesänderung',
        body: 'Ändert sich eine Vorschrift, meldet Permit das. Die folgenden Iterationen aktualisieren alles, was davon abhängt, und werden erneut getestet, bis das Projekt fehlerfrei ist.',
      },
    ],
    nodes: {
      idea: 'Idee des Kunden',
      lab: 'Laborversuche',
      process: 'Prozess und Kapazität',
      calc: 'Berechnungen',
      control: 'Steuerung',
      machine: 'Maschinen und Montage',
      arch: 'Architektur',
      permit: 'Genehmigungen und Emissionen',
    },
    flags: {
      conflict: 'Konflikt',
      noPermit: 'Keine Genehmigung',
      emissions: 'Emissionen über Grenzwert',
      capacity: 'Kapazität passt nicht',
      missing: 'Daten fehlen',
    },
    iteration: 'Iteration',
    scope: 'Änderung des Umfangs',
    law: 'Gesetzesänderung',
    outro: [
      'Das ist unsere Mission: vollständige Projekte der Chemietechnik, koordiniert auf einer einzigen offenen Plattform.',
      'So können sich Ingenieure statt auf Koordination auf die Teile der Anlage konzentrieren, die wirklich zählen.',
    ],
  },
  pac: {
    eyebrow: 'Wissensbasis',
    title: 'Wenn das Projekt Code ist',
    body: [
      'Klassische Chemieprojekte leben in statischen Dokumenten. Förderanträge werden zu PDFs, R&I-Fließbilder zu Zeichnungen, Simulationen zu Tabellen. Jede Übergabe erzeugt Abweichungen, und die Logik des Projekts endet in Formaten, die kein System lesen kann.',
      'Projekt als Code kehrt das um. Wir definieren das Projekt ab der Förderphase in strukturierten, versionierten Daten. Die Mathematik ist vor dem ersten Förderantrag geprüft, und der Prozess wird zu einer lauffähigen Simulation kompiliert, bevor die erste Linie gezeichnet ist.',
      'Das ist keine KI, die Ihre Anlage erzeugt. Es ist die Absicht der Ingenieure, so präzise erfasst, dass Rechenwerkzeuge und auch KI sie lesen, prüfen und dabei helfen können: nicht weil wir das Engineering automatisiert, sondern weil wir es berechenbar gemacht haben.',
    ],
    result: 'Das Ergebnis: Projekte, die bereit für Berechnungen sind, bei jeder Revision prüfbar und bis zu jeder Entscheidung nachvollziehbar.',
    more: 'Zur Wissensbasis',
  },
  apps: {
    eyebrow: 'Anwendungen',
    title: 'Eine Plattform, eine Anwendung je Gewerk',
    lede: 'Jede Anwendung deckt ein Gewerk eines Anlagenprojekts ab und tauscht Daten mit den anderen aus. Dokumente entstehen aus dem gemeinsamen Modell.',
    all: 'Alle Anwendungen',
  },
  services: {
    body: 'Simon Lab übernimmt auch Ingenieuraufträge, ein ganzes Projekt einer Chemieanlage oder ein einzelnes Gewerk daraus: als Code auf der Plattform gebaut, schnell geliefert und von erfahrenen Ingenieuren geprüft.',
    link: 'Ingenieurleistungen',
  },
  about: {
    eyebrow: 'Unternehmen',
    title: 'Über uns',
    body: 'Simon Lab liefert Computational Engineering für die chemische Industrie: Erfahrung in der Verfahrenstechnik, verbunden mit codebasierten Methoden, damit Projekte prüfbar, nachvollziehbar und bereit für die Rechenwerkzeuge von heute und morgen sind.',
    team: 'Das Team kennenlernen',
    roadmap: { body: 'Von der privaten Beta bis zum Start mit Partnern unseres Vertrauens auf der ACHEMA 2027.', link: 'Zur Roadmap' },
  },
  beta: {
    eyebrow: 'Private Beta',
    title: 'Zur Beta anmelden',
    body: 'Wir arbeiten mit Partnern unseres Vertrauens: Gemeinsam entwickeln wir Prototypprojekte, bewerten die Qualität der Ergebnisse und testen neue Werkzeuge für die Chemietechnik.',
    join: 'Für die Beta bewerben',
  },
};
