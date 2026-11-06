import type { ProfilesCopy } from './types';

// German, translated from the English copy with the same facts. On YouTube the German texts are translations: of the
// channel's description and of the English film's title and description (there is no German film). On LinkedIn this
// is the page's German version.
export const profiles: ProfilesCopy = {
  lang: 'de',
  youtube: {
    channel: [
      'Simon Lab macht Computational Engineering für Chemieprojekte und koordiniert vollständige Projekte der Chemietechnik auf einer einzigen offenen Plattform: Prozess, Maschinen, Schaltschränke, 3D-Montage, Standort und Genehmigungen, mit Import und Export aller Arten von Dokumenten. Das Projekt wird einmal definiert, als strukturierte und versionierte Daten; die Dokumente entstehen daraus, und jede Änderung wird wie Software getestet.',
      'Die Filme auf diesem Kanal zeigen die Anwendungen der Plattform, von CapacityIndex und ProcessView bis MechGraph, IonGrid, PlantMesh und Architecture, und wie ein Projekt bottom-up entsteht, Ebene für Ebene.',
      'Simon Lab übernimmt auch Ingenieuraufträge für Chemieanlagen, ein ganzes Projekt oder ein einzelnes Gewerk: {services}',
      'Private Beta mit Partnern unseres Vertrauens. {motto}',
      '{site}',
    ],
    films: {
      en: {
        title: 'Simon Lab · Chemietechnik bottom-up',
        lede: 'Ein Projekt der Chemietechnik, Ebene für Ebene durch die Anwendungen von Simon Lab: die Spezifikation in CapacityIndex, das R&I-Fließbild und die dynamische Prozesssimulation in ProcessView, die Maschine in MechGraph und die Schaltschränke in IonGrid, die Anlage in 3D in PlantMesh und an ihrem Standort in Architecture, bis zum Export der ausführungsreifen Dokumentation.',
        chapters: {
          heading: 'Kapitel',
          titles: [
            'Die Spezifikation: CapacityIndex',
            'ProcessView: R&I-Fließbild und Prozesssimulation',
            'MechGraph und IonGrid',
            'PlantMesh: die Anlage in 3D',
            'Architecture: die Anlage an ihrem Standort',
            'Dokumente und die Beta',
          ],
        },
        notes:
          'Das Projekt ist ein anonymisiertes Demonstrationsprojekt: eine Löseanlage für Natronlauge (NaOH). Die Partikelbahnen in den CFD-Bildern sind eine Visualisierung; Ergebnisse der Kollisionsprüfung werden als Befunde gezeigt, nicht als gelöst.',
        company:
          'Simon Lab koordiniert vollständige Projekte der Chemietechnik auf einer einzigen offenen Plattform. Private Beta mit Partnern unseres Vertrauens.',
        close: ['Website: {site}', 'Ingenieurleistungen: {services}', 'Untertitel: Deutsch, Englisch (gesprochen wird Englisch).'],
      },
    },
  },
  linkedin: {
    tagline: 'Computational Engineering für Chemieprojekte. Eine offene Plattform, Projekt als Code.',
    about: [
      'Simon Lab macht Computational Engineering für Chemieprojekte. Die Mission: vollständige Projekte der Chemietechnik auf einer einzigen offenen Plattform zu koordinieren, mit Prozess, Maschinen, Schaltschränken, 3D-Montage, Standort und Genehmigungen und mit Import und Export aller Arten von Dokumenten.',
      'Das gelöste Problem ist die unterbrochene Kette: Die Verfahrenstechnik arbeitet noch immer mit statischen Dokumenten, die einander nicht lesen können, und jede Übergabe bringt Fehler. Die Antwort ist Projekt als Code. Das Projekt wird einmal definiert, als strukturierte und versionierte Daten, in einer Anwendung je Gewerk; die Dokumente entstehen aus diesem Modell, jede Änderung ist eine Revision, und das Modell wird bei jeder Änderung gegen Physik, Grenzwerte und Geometrie geprüft. Die Ingenieure behalten jede Entscheidung.',
      'Die Anwendungen, von unten nach oben: {apps}. Ingenieure bringen ihren eigenen KI-Agenten mit (BYOA); Simon Lab gibt ihm die CLI, mit der er das Projekt sieht.',
      'Simon Lab übernimmt auch Ingenieuraufträge, ein ganzes Projekt der Chemietechnik oder ein einzelnes Gewerk: Verfahrenstechnik und Prozessautomatisierung, mechanische Konstruktion, Automatisierung und Energieversorgung, 3D-Modellierung, Architektur und BIM. Die Arbeit läuft auf der Plattform, deshalb werden Aufträge schnell erledigt, und erfahrene Ingenieure prüfen jedes Ergebnis. Kunden erhalten die Dokumente zusammen mit dem Projekt als Daten, KI-nativ ab der ersten Revision: {services}',
      'Private Beta mit Partnern unseres Vertrauens; der Start ist zur ACHEMA 2027 in Frankfurt geplant. Open Source folgt bald.',
      '{motto}',
    ],
  },
};
