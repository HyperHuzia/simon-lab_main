import type { Article } from '../article-types';

// Deutsch, aus dem Englischen übersetzt (Durchsicht durch Muttersprachler empfohlen); dieselben Aussagen wie die
// englische Fassung (Tabelle der Aussagen in simon-lab-media).
export const article: Article = {
  lang: 'de',
  meta: {
    title: 'Projekt als Code | Simon Lab',
    description:
      'Warum ein Chemieanlagenprojekt als strukturierte, versionierte Daten besser funktioniert als ein Stapel Dokumente: ein Modell, daraus erzeugte Dokumente, jede Änderung eine Revision, Prüfungen wie Tests.',
  },
  hero: {
    eyebrow: 'Wissensbasis · Projekt als Code',
    title: 'Ein Anlagenprojekt sollte sich lesen wie ein Programm, nicht wie ein Stapel Dokumente',
    standfirst:
      'Jedes Chemieanlagenprojekt besteht aus Tausenden Entscheidungen, verteilt auf PDFs, Tabellen und Zeichnungen, die einander nicht lesen können. Ein Team auf einem Revisionsstandard zu halten, mit einer Dokumentation, die über alle Gewerke korrekt und konsistent bleibt, ist der Kampf jeder Leitung eines verfahrenstechnischen Planungsbüros. Revisionen driften auseinander, und der Mensch hat sich nicht dazu entwickelt, die Konsistenz von Dokumenten zu überwachen: Das ist eine Aufgabe für eine Maschine, denn wir erwarten maschinelle Präzision.',
    read: 'Weiterlesen',
  },
  chapters: [
    {
      id: 'broken-chain',
      eyebrow: '1 · Die gebrochene Kette',
      title: 'Dokumente, die nicht miteinander sprechen können',
      intro: [
        'Ein typisches Projekt durchläuft eine Kette von Dokumenten: Förderantrag, Prozessbeschreibung, R&I-Fließbilder, Apparatelisten, Berechnungsblätter, Schaltschrankregister, Zeichnungen und Genehmigungsanträge. Jedes davon wird von Hand aus den vorherigen geschrieben.',
      ],
      steps: [
        {
          id: 'pac-chain',
          stage: 'pac-chain',
          title: 'Eine Datei speist die nächste',
          body: [
            'Zahlen verlassen den Antrag als PDF, werden in eine Tabelle abgetippt, in eine Zeichnung kopiert und noch einmal in einen Genehmigungsantrag eingetragen. Jede Kopie ist eine Gelegenheit für einen Fehler, und kein System kann dem Faden von einer Datei zur nächsten folgen.',
          ],
        },
        {
          id: 'pac-drift',
          stage: 'pac-drift',
          title: 'Und jede Revision läuft auseinander',
          body: [
            'Ändert sich etwas, muss jedes Dokument von jemandem aktualisiert werden, der es bemerkt. Ein Blatt steht auf Revision C, die Zeichnung noch auf A, der Genehmigungsantrag irgendwo dazwischen. Die Logik des Projekts steckt in den Köpfen der Menschen, nicht in den Dateien.',
          ],
        },
      ],
    },
    {
      id: 'one-model',
      eyebrow: '2 · Ein Modell',
      title: 'Eine Quelle, viele Dokumente',
      intro: [
        'In Simon Lab ist das Projekt kein Ordner voller Dateien. Es sind strukturierte Daten: Apparate mit ihren Parametern, Leitungen mit Werkstoffen und Rohrklassen, Instrumente, Steuerungslogik, Schaltschränke, Stahlbau und der Standort. Jedes Element wird einmal definiert, in der Anwendung seines Gewerks.',
      ],
      steps: [
        {
          id: 'pac-model',
          stage: 'pac-model',
          title: 'Einmal definiert',
          body: [
            'Eine Leitung wird einmal definiert: Nummer, Medium, Nennweite, Werkstoff und Rohrklasse sowie die Apparate, die sie verbindet. Das R&I-Blatt, die Leitungsliste und die Rohrleitungsisometrie lesen alle diese eine Definition.',
          ],
        },
        {
          id: 'pac-fanout',
          stage: 'pac-fanout',
          title: 'Dokumente werden erzeugt',
          body: [
            'Dokumente entstehen aus dem Modell, statt daneben gezeichnet zu werden: R&I-Blätter, Apparatedaten, Rohrleitungsisometrien, Schaltschrankregister, Stahlbauzeichnungen und der Lageplan. Die Plattform hat heute etwa 45 Dokumentprofile.',
          ],
        },
        {
          id: 'pac-pages',
          stage: 'pac-pages',
          title: 'Seiten für die Prüfung',
          body: [
            'Die PDF-Dokumente werden für die Prüfung aus dem Code erzeugt. Sie sind nicht die Quelle der Wahrheit, sondern folgen aus ihr, und die Quelle der Wahrheit ist der Code.',
          ],
        },
      ],
    },
    {
      id: 'revisions',
      eyebrow: '3 · Revisionen',
      title: 'Jede Änderung ist eine Revision',
      intro: [
        'Weil das Projekt aus Daten besteht, ist eine Änderung keine neue Kopie einer Datei. Sie ist eine neue Revision des Modells, und ihre Wirkung lässt sich durch alles verfolgen, was davon abhängt.',
      ],
      steps: [
        {
          id: 'pac-rev',
          stage: 'pac-rev',
          title: 'Eine Geschichte der Entscheidungen',
          body: [
            'Das Modell bewahrt seine Revisionen. Jede hält eine Änderung an den Daten selbst fest: ein hinzugefügter Schrank, eine abgestimmte Sequenz, eine geänderte Nennweite. In der Prüfung lautet die Frage nicht mehr „Welche Datei ist aktuell?“, sondern „Was hat sich geändert, und warum?“.',
          ],
        },
        {
          id: 'pac-diff',
          stage: 'pac-diff',
          title: 'Eine Änderung, alle Dokumente',
          body: [
            'Wird die Nennweite einer Leitung vergrößert, erreicht die Änderung ihr R&I-Blatt, die Leitungsliste und die Isometrie, weil alle drei aus dieser Leitung erzeugt werden. Das Modell zeigt auch, was daraus folgt: Der Druckverlust in der Druckleitung sinkt, der Durchflussmesser liegt für das Rohr jetzt außerhalb seines Messbereichs und muss neu ausgewählt werden, und die Pumpe bleibt im Bereich, obwohl jetzt ein günstigeres Modell reichen würde. Nichts wartet darauf, dass es jemand bemerkt.',
          ],
        },
      ],
    },
    {
      id: 'checks',
      eyebrow: '4 · Prüfungen',
      title: 'Prüfungen laufen wie Tests',
      intro: [
        'In der Software startet jede Änderung die Tests. Ein als Daten definiertes Projekt funktioniert genauso: Das Modell wird bei jeder Änderung gegen Physik, Grenzwerte und Geometrie geprüft.',
      ],
      steps: [
        {
          id: 'pacm-sim',
          stage: 'pacm-sim',
          title: 'Der Prozess läuft, bevor er gebaut wird',
          body: [
            'Das Chargenprogramm der Demonstrationsanlage läuft auf einer emulierten SPS in der dynamischen Simulation. Die Dosierung wird gedrosselt, damit die Lösung nahe an ihrer Grenze von 60\u00a0°C bleibt, und die Bedienschritte sind geprüft, bevor etwas bestellt wird.',
          ],
        },
        {
          id: 'pacm-clash',
          stage: 'pacm-clash',
          title: 'Das 3D-Modell wird auf Kollisionen geprüft',
          body: [
            'Die Kollisionsprüfung läuft über die montierte Anlage. Im Demonstrationsprojekt meldet sie zwei Hüllkörperkollisionen, hier gezeigt als Befunde, die der Planer auflöst.',
          ],
        },
      ],
    },
    {
      id: 'open-formats',
      eyebrow: '5 · Offene Formate',
      title: 'Import und Export in den Formaten, die Sie schon nutzen',
      intro: [
        'Eine offene Plattform muss der übrigen Branche dort begegnen, wo sie steht. Daten kommen aus den Dateien, die Partner bereits haben, und verlassen die Plattform als die Dokumente, die sie erwarten.',
      ],
      steps: [
        {
          id: 'pac-formats',
          stage: 'pac-formats',
          title: 'Hinein und hinaus',
          body: [
            'Hinein: alles, was das Projekt bereits hat, von DXF- und STEP-Zeichnungen und -Modellen, IFC und Punktwolken (E57) bis zu PDF- und Word-Dokumenten, Tabellen und Daten (XLSX, CSV, XML, JSON). Der KI-Agent bringt sie in die Form, die das Projekt braucht. Hinaus: PDF-Dokumentensätze, IFC und 3D Tiles für das Standortmodell, XLSX- und CSV-Register. Ein Partner, der Simon Lab nicht nutzt, erhält trotzdem Standarddateien.',
          ],
        },
      ],
    },
    {
      id: 'the-team',
      eyebrow: '6 · Das Team',
      title: 'Was sich für die Menschen ändert, die die Anlage planen',
      steps: [
        {
          id: 'pac-iterate',
          stage: 'pac-iterate',
          title: 'Ingenieure entscheiden, das Modell hält das Projekt konsistent',
          body: [
            'Nichts davon ersetzt ingenieurmäßiges Urteil. Der Ingenieur wählt weiterhin den Prozess, legt die Maschinen aus und unterschreibt die Zeichnungen. Was sich ändert, ist die Arbeit drumherum: kein Abtippen, keine Suche nach der aktuellen Revision, keine Änderung, die still ein Dokument verfehlt.',
          ],
        },
        {
          id: 'pac-scope',
          stage: 'pac-scope',
          title: 'Iterationen werden günstig',
          body: [
            'Ändern sich der Umfang oder eine Vorschrift, läuft die nächste Iteration auf einmal durch das ganze Projekt. Genau das meinen wir mit Projekt als Code: keine KI, die die Anlage erzeugt, sondern Engineering, das berechenbar geworden ist.',
          ],
        },
      ],
    },
  ],
  closing: {
    eyebrow: 'Private Beta',
    title: 'Führen Sie Ihr nächstes Projekt als Code',
    body: ['Wir arbeiten Projekt für Projekt mit Partnern unseres Vertrauens. Erzählen Sie uns von Ihrem.'],
    cta: { beta: 'Zur Beta anmelden', apps: 'Anwendungen entdecken' },
  },
  notes: [
    'Das Demonstrationsprojekt ist anonymisiert. Seine Seiten und Bildschirme sind Ausgaben der Plattform selbst.',
    'Das Code-Listing, die Zeichnung der Leitung L-104 und der Revisionsverlauf veranschaulichen die Idee und sind weder Dateiformate noch Bildschirme der Plattform.',
    'Die Kollisionsprüfung zeigt Befunde, der Planer löst sie auf.',
  ],
  labels: {
    'pac.grant': 'Förderantrag',
    'pac.process': 'Prozessbeschreibung',
    'pac.pid': 'R&I-Fließbild',
    'pac.list': 'Apparateliste',
    'pac.permit': 'Genehmigungsantrag',
    'pac.pdf': 'PDF',
    'pac.dwg': 'Zeichnung',
    'pac.xls': 'Tabelle',
    'pac.doc': 'Dokument',
    'pac.retyped': 'Von Hand abgetippt',
    'pac.rev': 'Rev.',
    'pac.model': 'Projektmodell',
    'pac.doc.pid': 'R&I-Blatt',
    'pac.doc.lines': 'Leitungsliste',
    'pac.doc.iso': 'Rohrleitungs\u00adisometrie',
    'pac.doc.equip': 'Apparatedaten',
    'pac.doc.cab': 'Schaltschrank\u00adregister',
    'pac.doc.site': 'Lageplan',
    'pac.eq.pump': 'Pumpe',
    'pac.eq.ft': 'Durchflussmesser',
    'pac.eq.valve': 'Ventil',
    'pac.eq.tank': 'Behälter',
    'pac.pid.alt': 'Leitung L-104, DN50, Rohrklasse B1: von der Pumpe P-101 über den Durchflussmesser FT-104 und das Ventil HV-104 zum Behälter B-101',
    'pac.log': 'Revisionsverlauf',
    'pac.r10': 'Prozessgrundlagen festgelegt',
    'pac.r11': 'Apparateliste herausgegeben',
    'pac.r12': 'Schaltschrank C-101 ergänzt',
    'pac.r13': 'Dosiersequenz abgestimmt',
    'pac.r14': 'Nennweite L-104 geändert',
    'pac.current': 'aktuell',
    'pac.regenerated': 'Neu erzeugt',
    'pac.change': 'Änderung',
    'pac.affected': 'Betroffene Dokumente',
    'pac.doc.io': 'E/A-Liste',
    'pac.doc.plc': 'SPS-Programm',
    'pac.doc.seq': 'Ablaufbeschreibung',
    'pac.doc.sim': 'Simulationsbericht',
    'pac.fx.loss': 'Druckverlust in L-104: geringer',
    'pac.fx.ft': 'FT-104: außerhalb des Messbereichs, neu auszuwählen',
    'pac.fx.pump': 'P-101: im Bereich, ein günstigeres Modell reicht',
    'pac.agent': 'KI-Agent',
    'pac.in': 'Hinein',
    'pac.out': 'Hinaus',
    'pac.iteration': 'Iteration',
    'pac.scope': 'Änderung des Umfangs',
  },
};
