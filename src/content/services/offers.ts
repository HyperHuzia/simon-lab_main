import type { Lang } from '../../i18n/config';
import type { ServiceId } from '../../i18n/service-routes';

export interface ServiceOffer {
  id: ServiceId;
  title: string;
  summary: string;
  scope: string[];
  inputs: string[];
  deliverables: string[];
  subject: string;
}
interface ServiceUI {
  eyebrow: string; title: string; lede: string; choose: string; details: string;
  scope: string; inputs: string; deliverables: string; quality: string;
  contact: string; contactBody: string; emailHint: string; back: string; emailFields: string[];
}
export const offerUI: Record<Lang, ServiceUI> = {
  en: {
    eyebrow: 'Engineering services', title: 'Chemical and process plant design',
    lede: 'Process engineering, automation, tanks and mixing equipment. Commission a complete project or a selected scope of work.',
    choose: 'A scope for your project', details: 'Scope and project inputs',
    scope: 'Scope of work', inputs: 'What we need to start', deliverables: 'What you receive', quality: 'Checked by engineers',
    contact: 'Send your project requirements', contactBody: 'A short description, the scope and the expected deadline are enough to start. We agree the deliverables and schedule before work begins.',
    emailHint: 'The button opens an email with questions to help describe your project. You can also reveal the email address beside it.',
    back: 'All engineering services', emailFields: ['Project or process description:', 'Required scope:', 'Available documentation:', 'Expected deadline:'],
  },
  pl: {
    eyebrow: 'Usługi inżynierskie', title: 'Projekty instalacji chemicznych i procesowych',
    lede: 'Projekt procesowy, automatyka oraz zbiorniki i mieszalniki. Zleć cały projekt lub wybrany zakres prac.',
    choose: 'Zakres dopasowany do projektu', details: 'Zakres i dane do wyceny',
    scope: 'Zakres prac', inputs: 'Dane na początek', deliverables: 'Co otrzymasz', quality: 'Sprawdzane przez inżynierów',
    contact: 'Prześlij założenia do wyceny', contactBody: 'Na początek wystarczy krótki opis, zakres i oczekiwany termin. Dokumenty do przekazania i harmonogram uzgadniamy przed rozpoczęciem prac.',
    emailHint: 'Przycisk otwiera e-mail z pytaniami pomocnymi przy opisie projektu. Obok możesz też wyświetlić adres e-mail.',
    back: 'Wszystkie usługi inżynierskie', emailFields: ['Opis projektu lub procesu:', 'Potrzebny zakres:', 'Dostępna dokumentacja:', 'Oczekiwany termin:'],
  },
  de: {
    eyebrow: 'Ingenieurleistungen', title: 'Planung von Chemie- und Prozessanlagen',
    lede: 'Verfahrenstechnik, Automatisierung sowie Behälter und Rührwerke. Beauftragen Sie ein ganzes Projekt oder einen ausgewählten Leistungsumfang.',
    choose: 'Leistungen für Ihr Projekt', details: 'Leistungsumfang und Projektdaten',
    scope: 'Leistungsumfang', inputs: 'Angaben für den Einstieg', deliverables: 'Ihre Ergebnisse', quality: 'Von Ingenieuren geprüft',
    contact: 'Projektanforderungen zur Angebotsanfrage senden', contactBody: 'Eine kurze Beschreibung, der benötigte Umfang und der gewünschte Termin reichen für den Einstieg. Lieferumfang und Zeitplan werden vor Beginn der Arbeiten vereinbart.',
    emailHint: 'Die Schaltfläche öffnet eine E-Mail mit Fragen zur Beschreibung Ihres Projekts. Daneben können Sie auch die E-Mail-Adresse anzeigen.',
    back: 'Alle Ingenieurleistungen', emailFields: ['Projekt- oder Prozessbeschreibung:', 'Benötigter Umfang:', 'Vorhandene Dokumentation:', 'Gewünschter Termin:'],
  },
};

export const offers: Record<Lang, ServiceOffer[]> = {
  en: [
    {
      id: 'process', title: 'Chemical and process plant design',
      summary: 'P&ID, equipment selection and plant documentation. A complete study or a selected scope.',
      scope: ['Process design and P&ID', 'Equipment selection and hydraulic calculations', 'Industrial piping design'],
      inputs: ['A short description of the process and the task', 'Available drawings, process data and documentation', 'The expected deadline'],
      deliverables: ['Agreed diagrams, calculations and equipment lists', 'Plant documentation for the agreed scope', 'A 3D model where included in the scope'],
      subject: 'Inquiry: process plant design',
    },
    {
      id: 'automation', title: 'Control cabinet and instrumentation design',
      summary: 'Diagrams, component selection and automation documentation for chemical plants.',
      scope: ['Control cabinet design', 'Selection of catalogue components and instrumentation', 'Diagrams and instrumentation schedules'],
      inputs: ['A description of the plant and the required control functions', 'Available equipment and signal lists', 'The expected deadline'],
      deliverables: ['Agreed diagrams and component schedules', 'Automation documentation for the contractor', 'The complete project or a selected scope of work'],
      subject: 'Inquiry: automation and control cabinets',
    },
    {
      id: 'tanks', title: 'Tank and mixing equipment design',
      summary: 'Agitator, shaft and drive selection for your process. Calculations, drawings and a 3D model.',
      scope: ['Agitator and drive selection', 'Shaft calculations and tank design', 'Mechanical documentation'],
      inputs: ['The medium, volume and operating conditions', 'The required mixing result and available equipment data', 'The expected deadline'],
      deliverables: ['Agreed calculation reports', 'Tank or agitator drawings', 'A 3D model for the agreed scope'],
      subject: 'Inquiry: tanks and mixing equipment',
    },
  ],
  pl: [
    {
      id: 'process', title: 'Projekty instalacji chemicznych i procesowych',
      summary: 'P&ID, dobór aparatów i dokumentacja instalacji. Zleć całe opracowanie lub wybrany zakres.',
      scope: ['Projekt procesowy i schematy P&ID', 'Dobór aparatów i obliczenia hydrauliczne', 'Projektowanie rurociągów przemysłowych'],
      inputs: ['Krótki opis procesu i zakres zadania', 'Dostępne rysunki, dane procesu i dokumentacja', 'Oczekiwany termin'],
      deliverables: ['Uzgodnione schematy, obliczenia i zestawienia aparatów', 'Dokumentacja instalacji w uzgodnionym zakresie', 'Model 3D, jeśli jest częścią zakresu'],
      subject: 'Zapytanie: instalacje procesowe',
    },
    {
      id: 'automation', title: 'Projektowanie szaf sterowniczych i AKPiA',
      summary: 'Schematy, dobór podzespołów i dokumentacja automatyki dla instalacji chemicznych.',
      scope: ['Projekt szafy sterowniczej', 'Dobór katalogowych podzespołów i aparatury', 'Schematy i zestawienia AKPiA'],
      inputs: ['Opis instalacji i oczekiwanych funkcji sterowania', 'Dostępne listy urządzeń i sygnałów', 'Oczekiwany termin'],
      deliverables: ['Uzgodnione schematy i zestawienia podzespołów', 'Dokumentacja automatyki dla wykonawcy', 'Cały projekt lub wybrany zakres prac'],
      subject: 'Zapytanie: automatyka i szafy sterownicze',
    },
    {
      id: 'tanks', title: 'Projektowanie zbiorników i mieszalników',
      summary: 'Dobór mieszadła, wału i napędu pod Twój proces. Obliczenia, rysunki i model 3D.',
      scope: ['Dobór mieszadła i napędu', 'Obliczenia wału i projekt zbiornika', 'Dokumentacja mechaniczna'],
      inputs: ['Medium, objętość i warunki pracy', 'Oczekiwany efekt mieszania i dostępne dane urządzenia', 'Oczekiwany termin'],
      deliverables: ['Uzgodnione raporty obliczeniowe', 'Rysunki zbiornika lub mieszadła', 'Model 3D w uzgodnionym zakresie'],
      subject: 'Zapytanie: zbiorniki i mieszalniki',
    },
  ],
  de: [
    {
      id: 'process', title: 'Planung von Chemie- und Prozessanlagen',
      summary: 'R&I-Fließbilder, Apparateauswahl und Anlagendokumentation. Eine vollständige Ausarbeitung oder ein ausgewählter Umfang.',
      scope: ['Verfahrenstechnische Planung und R&I-Fließbilder', 'Apparateauswahl und hydraulische Berechnungen', 'Planung industrieller Rohrleitungen'],
      inputs: ['Kurze Beschreibung des Prozesses und der Aufgabe', 'Vorhandene Zeichnungen, Prozessdaten und Dokumentation', 'Der gewünschte Termin'],
      deliverables: ['Vereinbarte Fließbilder, Berechnungen und Apparateübersichten', 'Anlagendokumentation im vereinbarten Umfang', 'Ein 3D-Modell, sofern es zum Leistungsumfang gehört'],
      subject: 'Anfrage: Planung von Prozessanlagen',
    },
    {
      id: 'automation', title: 'Schaltschrankplanung und Mess- und Regeltechnik',
      summary: 'Schaltpläne, Komponentenauswahl und Automatisierungsdokumentation für Chemieanlagen.',
      scope: ['Schaltschrankplanung', 'Auswahl von Katalogkomponenten und Instrumentierung', 'Schaltpläne und MSR-Listen'],
      inputs: ['Beschreibung der Anlage und der benötigten Steuerungsfunktionen', 'Vorhandene Geräte- und Signallisten', 'Der gewünschte Termin'],
      deliverables: ['Vereinbarte Schaltpläne und Komponentenlisten', 'Automatisierungsdokumentation für den Anlagenbauer', 'Das gesamte Projekt oder ein ausgewählter Leistungsumfang'],
      subject: 'Anfrage: Automatisierung und Schaltschränke',
    },
    {
      id: 'tanks', title: 'Planung von Behältern und Rührwerken',
      summary: 'Auslegung von Rührwerk, Welle und Antrieb für Ihren Prozess. Berechnungen, Zeichnungen und ein 3D-Modell.',
      scope: ['Auswahl von Rührwerk und Antrieb', 'Wellenberechnungen und Behälterplanung', 'Mechanische Dokumentation'],
      inputs: ['Medium, Volumen und Betriebsbedingungen', 'Gewünschtes Mischergebnis und vorhandene Gerätedaten', 'Der gewünschte Termin'],
      deliverables: ['Vereinbarte Berechnungsberichte', 'Zeichnungen des Behälters oder Rührwerks', 'Ein 3D-Modell im vereinbarten Umfang'],
      subject: 'Anfrage: Behälter und Rührwerke',
    },
  ],
};
