import type { RoadmapCopy } from './types';

// Deutsch, aus dem Englischen übersetzt (Durchsicht durch Muttersprachler empfohlen); dieselben Schritte und dasselbe
// Ziel (ACHEMA 2027).
export const roadmap: RoadmapCopy = {
  lang: 'de',
  meta: {
    title: 'Roadmap | Simon Lab',
    description:
      'Wo Simon Lab heute steht und welche Schritte zum fertigen Produkt führen: Härtung der Anwendungen und der Infrastruktur, Projekte mit Trusted Partners, breite Tests, Open Source und der Start mit Trusted Partners auf der ACHEMA 2027.',
  },
  hero: {
    eyebrow: 'Roadmap',
    title: 'Von der privaten Beta zum Produkt',
    lede: 'Simon Lab ist in einer privaten Beta. Das sind die Schritte zwischen heute und einem fertigen Produkt, in der Reihenfolge, in der wir sie gehen, und was jeder von ihnen für die Partner bedeutet, die mit uns arbeiten werden.',
    target: 'Ziel: Start und Ende der Beta auf der ACHEMA 2027, Frankfurt, 14.–18. Juni 2027',
  },
  goal: {
    eyebrow: 'Worauf wir hinarbeiten',
    title: 'Von einem Umfang zum Engineering-Paket',
    lede: 'Zum Start soll ein strukturierter Projektumfang genügen, damit die Plattform Folgendes erstellt:',
    points: [
      'die Projektstruktur und ein visuelles Prozessmodell mit seiner Simulation',
      'herstellerneutrale Steuerungsstrukturen, bereit für das SPS-Engineering',
      'ein CAPEX-Modell auf Basis echter Beschaffung: Lieferanten, Angebote und Budgets',
      'die Engineering-Dokumentation, alles aus derselben Quelle der Wahrheit',
    ],
    promise:
      'Simon Lab ersetzt nicht das Urteil der Ingenieure. Es gibt ihnen ein maschinenlesbares Rückgrat für das Projekt, damit sie schneller prüfen, korrigieren, simulieren, kalkulieren, dokumentieren und automatisieren.',
  },
  road: { eyebrow: 'Schritt für Schritt', title: 'Der Weg zum Start' },
  status: { now: 'Jetzt', next: 'Als Nächstes', planned: 'Geplant', launch: 'ACHEMA 2027 · 14.–18. Juni 2027', after: 'Nach dem Start' },
  steps: [
    {
      id: 'apps',
      status: 'now',
      title: 'Härtung der Anwendungen',
      body: ['Die Anwendungen sind in schnellen, KI-gestützten Prototyping-Sprints entstanden. Jetzt härten wir sie für die echte Arbeit:'],
      points: [
        'Ein aktueller, unterstützter Technologie-Stack in jeder Anwendung, mit reproduzierbaren Prüfungen vor jedem Release.',
        'Eine Identität für jedes Projekt in allen Anwendungen und eine Sitzung, die dem Ingenieur zwischen ihnen folgt.',
        'KI-Agenten ändern ein Projekt nur über typisierte, validierte Befehle. Destruktive Änderungen brauchen die Freigabe eines Menschen.',
        'Jede Aktion wird für das Audit festgehalten, und die Plattform testet sich selbst, bevor Ergebnisse Menschen erreichen.',
      ],
    },
    {
      id: 'infra',
      status: 'next',
      title: 'Härtung der Infrastruktur',
      body: [
        'KI-Agenten arbeiten auf Computern, und diese brauchen weit mehr Leistung als die Rechner in einem Ingenieurbüro: Ein KI-Agent arbeitet viel schneller als ein Mensch und nutzt Spezialwerkzeuge wie Prozesssimulation, Festigkeitsberechnung (FEM) und Strömungssimulation (CFD).',
        'Wir bereiten diese Infrastruktur für unsere Trusted Partners vor: Rechenleistung, Speicher, Backups und sicheren Fernzugriff.',
      ],
    },
    {
      id: 'calibration',
      status: 'planned',
      title: 'Kalibrierung: Projekte mit Trusted Partners',
      body: [
        'Die ersten Projekte entstehen gemeinsam mit Trusted Partners als fertige Ergebnisse: PDF-Dokumentation, 3D-Modelle und Resultate, die in ihre eigenen Arbeitsabläufe passen. Jedes kalibriert die Plattform an den Erwartungen ihrer Kunden und Ingenieure.',
      ],
    },
    {
      id: 'access',
      status: 'planned',
      title: 'Zugang für Ingenieure',
      body: [
        'Trusted Partners - Einzelpersonen, Ingenieurunternehmen, Hochschulen. Sie sind eingeladen, die Plattform selbst im BYOA-Modell zu testen (bring your own agent: jeder arbeitet mit dem eigenen KI-Agenten), über den Zugang zur Simon Lab CLI.',
      ],
    },
    {
      id: 'open',
      status: 'planned',
      title: 'Open Source und Community',
      body: ['Die praxiserprobte Plattform wird Open Source, um eine breitere Zusammenarbeit von Ingenieuren einzuladen: Ingenieure aus aller Welt verbessern sie mit uns und sagen uns, wo sie noch nicht genügt. Wer möchte, kann sie auch forken.'],
    },
    {
      id: 'clients',
      status: 'planned',
      title: 'Breiterer Zugang und Ausbau der Infrastruktur',
      body: [
        'Wir stellen ein Werkzeug für Ingenieure bereit, die Mitglieder ihres Teams oder das Team ihres eigenen Kunden zur Arbeit im Projekt einladen möchten. Ihre Kunden sehen das Projekt, das für sie umgesetzt wird, und es bleibt auch für den eigenen KI-Agenten des Kunden transparent.',
      ],
    },
    {
      id: 'scale',
      status: 'planned',
      title: 'Physische Architektur und Zuverlässigkeit',
      body: [
        'Die Plattform für einen größeren Kundenkreis zu tragen, braucht viel Rechenleistung. Wir bauen die physische Architektur dahinter aus und arbeiten an Zuverlässigkeit und unterbrechungsfreiem Zugang.',
      ],
    },
    {
      id: 'launch',
      status: 'launch',
      title: 'Das Angebot mit Trusted Partners und das Ende der Beta',
      body: [
        'Simon Lab verlässt die Beta mit einem Angebot, das gemeinsam mit Trusted Partners entsteht. Sie beaufsichtigen die KI, validieren die Ergebnisse und bringen das ingenieurtechnische Urteil ein. Die Ergebnisse werden von Menschen verfeinert und sind für den Kunden in der Plattform sichtbar oder außerhalb über Exporte.',
        'Die Plattform ist Open Source, daher lassen sich Projekte leicht hinein- und hinausbewegen: Im Zeitalter der KI ist Programmcode eine Sprache, die jeder KI-Agent versteht. Nichts ist abgeschottet. Die Daten gehören dem Nutzer, und jeder kann seine eigene Rechenleistung mitbringen (BYOC) und die Plattform auf eigener Hardware betreiben.',
        'Das Netz der Trusted Partners liefert schnell Vorschläge und Entwürfe für Chemieanlagen. Das ist das Produkt: Die Plattform plant keine Anlagen allein. Sie beschleunigt die Arbeit, aber das Wissen, welcher Prozess richtig ist, welche Lösungen gut oder schlecht sind und was der Kunde braucht, ausgesprochen oder nicht, bleibt Arbeit von Menschen. Der Ingenieur lässt das Zeichnen und die Kleinarbeit hinter sich und übernimmt die Rolle eines Architekten der Chemietechnik.',
      ],
    },
    {
      id: 'provider',
      status: 'after',
      title: 'Infrastruktur für den KI-Agenten der Wahl',
      body: ['Nach dem Start wird Simon Lab als Unternehmen zum Infrastrukturanbieter: Es liefert die Rechenleistung, die KI-Agenten für die Arbeit in dieser Umgebung brauchen, den einzigen verbleibenden Wert im Zeitalter der KI.'],
    },
  ],
};
