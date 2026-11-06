import type { KnowledgeCopy } from './types';

export const knowledge: KnowledgeCopy = {
  lang: 'de',
  meta: {
    title: 'Wissensbasis | Simon Lab',
    description:
      'Illustrierte Artikel über die Ideen hinter Simon Lab: die Bottom-up-Methode und das Projekt als Code.',
  },
  hero: {
    eyebrow: 'Wissensbasis',
    title: 'Wie Simon Lab funktioniert',
    lede: 'Illustrierte Artikel für Ingenieure, die den ganzen Arbeitsablauf sehen möchten: die Ideen hinter der Plattform, gezeigt an einem echten Demonstrationsprojekt.',
  },
  labels: {
    read: 'Artikel lesen',
    soon: 'In Vorbereitung',
    minutes: '{n}\u00a0Min. Lesezeit',
    articles: 'Artikel',
    preparing: 'In Vorbereitung',
  },
  entries: {
    'project-as-code': {
      title: 'Projekt als Code',
      standfirst:
        'Warum ein Chemieanlagenprojekt als strukturierte, versionierte Daten besser funktioniert als ein Stapel Dokumente, und was das für die Menschen ändert, die es planen.',
    },
    'bottom-up': {
      title: 'Chemieanlagenbau nach dem Bottom-up-Prinzip',
      standfirst:
        'Eine vollständige Anlage zum Ansetzen von Natronlauge, Ebene für Ebene aufgebaut: Spezifikation, Prozess, Maschinen, Schaltschränke, 3D-Montage, Standort und Dokumente.',
    },
    'your-agent': {
      title: 'Ihr KI-Agent, unsere Ingenieurpraxis',
      standfirst:
        'Der KI-Agent gehört Ihnen: Codex, Claude Code, Hermes Agent, OpenClaw, Grok, DeepSeek, dots oder ein anderer. Von uns kommt gute Ingenieurpraxis, für ihn aufgeschrieben: die Reihenfolge der Arbeit, ein Ticketsystem, Vollständigkeitsprüfungen jeder Lieferung, Transparenz für die Verantwortlichen und eine Dokumentation, die jeder prüfen kann. Dazu die Rechenleistung, die Ihr KI-Agent braucht.',
    },
    hardware: {
      title: 'Sie zahlen nur für Hardware',
      standfirst:
        'Unsere Anwendungen werden Open Source: Nutzen Sie sie für eigene Projekte und passen Sie sie für nicht kommerzielle Zwecke an. Bezahlt wird die Infrastruktur: Rechenleistung für Prozesssimulation, Festigkeitsberechnung (FEM) und Strömungssimulation (CFD), Speicher und Backups.',
    },
  },
};
