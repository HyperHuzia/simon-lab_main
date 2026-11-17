import type { Lang } from '../../i18n/config';
import type { ServiceId } from '../../i18n/service-routes';

export interface ServiceOffer {
  id: ServiceId;
  title: string;
  summary: string;
  scope: string[];
  deliverables: string[];
}
interface ServiceUI {
  eyebrow: string; title: string; lede: string; choose: string; details: string;
  scope: string; deliverables: string;
  contact: string; contactTitle: string; contactBody: string; back: string;
}
export const offerUI: Record<Lang, ServiceUI> = {
  en: {
    eyebrow: 'Engineering services', title: 'Chemical and process plant design',
    lede: 'Process engineering, automation, tanks and mixing equipment. Commission a complete project or a selected scope of work.',
    choose: 'A scope for your project', details: 'Scope and deliverables',
    scope: 'Scope of work', deliverables: 'What you receive',
    contact: 'Send your project requirements', contactTitle: 'Discuss your project',
    contactBody: 'Professional support throughout your investment project, from process design to detailed engineering documentation.',
    back: 'All engineering services',
  },
  pl: {
    eyebrow: 'Usługi inżynierskie', title: 'Projekty instalacji chemicznych i procesowych',
    lede: 'Projekt procesowy, automatyka oraz zbiorniki i mieszalniki. Zleć cały projekt lub wybrany zakres prac.',
    choose: 'Zakres dopasowany do projektu', details: 'Zakres prac i rezultaty',
    scope: 'Zakres prac', deliverables: 'Co otrzymasz',
    contact: 'Prześlij założenia do wyceny', contactTitle: 'Porozmawiajmy o Twoim projekcie',
    contactBody: 'Profesjonalne wsparcie w procesie inwestycyjnym, od projektu procesu po dokumentację wykonawczą.',
    back: 'Wszystkie usługi inżynierskie',
  },
  de: {
    eyebrow: 'Ingenieurleistungen', title: 'Planung von Chemie- und Prozessanlagen',
    lede: 'Verfahrenstechnik, Automatisierung sowie Behälter und Rührwerke. Beauftragen Sie ein ganzes Projekt oder einen ausgewählten Leistungsumfang.',
    choose: 'Leistungen für Ihr Projekt', details: 'Leistungsumfang und Ergebnisse',
    scope: 'Leistungsumfang', deliverables: 'Ihre Ergebnisse',
    contact: 'Projektanforderungen zur Angebotsanfrage senden', contactTitle: 'Sprechen wir über Ihr Projekt',
    contactBody: 'Professionelle Begleitung Ihres Investitionsprojekts, von der Verfahrensplanung bis zur Ausführungsdokumentation.',
    back: 'Alle Ingenieurleistungen',
  },
};

export const offers: Record<Lang, ServiceOffer[]> = {
  en: [
    {
      id: 'process', title: 'Chemical and process plant design',
      summary: 'Process design, mass and energy balances, equipment selection and detailed engineering documentation.',
      scope: ['Process design and P&ID', 'Mass and energy balance calculations', 'Equipment selection and hydraulic calculations', 'Batch scheduling and utility demand calculations', 'Industrial piping and cable route design', 'HAZOP studies'],
      deliverables: ['Support with process design and throughout the investment project', 'P&ID, equipment lists and calculation reports', 'Mass balances with material flows and compositions', 'Energy balances with heating and cooling duties', 'Plant batch operating schedule and utility requirements', 'A 3D model and detailed engineering documentation', 'Isometric drawings of piping and cable routes'],
    },
    {
      id: 'automation', title: 'Power and control cabinet design',
      summary: 'Power and control cabinets, instrumentation, PLC programs and computer applications for process supervision and management.',
      scope: ['Power and control cabinet design', 'Selection of catalogue components and instrumentation', 'Electrical diagrams and instrumentation schedules', 'PLC control programming', 'Computer applications for process supervision and management, including applications independent of a PLC'],
      deliverables: ['Electrical diagrams and component and instrumentation schedules', 'A 3D model and cabinet fabrication documentation', 'PLC control programs', 'Computer applications for process supervision and management', 'Professional support throughout the investment project'],
    },
    {
      id: 'tanks', title: 'Tank and mixing equipment design',
      summary: 'Equipment selection, working liquid level definition and structural design. Mixing system design for your process.',
      scope: ['Agitator and drive selection', 'Selection of speed and flow turbulence for the process', 'Impeller geometry selection for the required mixing result', 'Shaft strength calculations', 'Equipment and instrumentation selection and working liquid level definition', 'Tank mechanical and structural design', 'Fabrication documentation'],
      deliverables: ['Support with process design', 'Agitator, drive and shaft calculation reports', 'A 3D model of the mixer or the complete process unit', 'Mechanical drawings and fabrication documentation', 'A procurement list of valves, fittings and instrumentation', 'Professional support throughout the investment project'],
    },
  ],
  pl: [
    {
      id: 'process', title: 'Projekty instalacji chemicznych i procesowych',
      summary: 'Projekt procesu, bilanse masowe i energetyczne, dobór aparatów oraz dokumentacja wykonawcza instalacji.',
      scope: ['Projekt procesowy i schematy P&ID', 'Obliczenia bilansów masowych i energetycznych', 'Dobór aparatów i obliczenia hydrauliczne', 'Planowanie pracy szarżowej i obliczenia zapotrzebowania na media', 'Projektowanie rurociągów przemysłowych i tras kablowych', 'Analiza HAZOP'],
      deliverables: ['Wsparcie przy projektowaniu procesu i w procesie inwestycyjnym', 'Schematy P&ID, zestawienia aparatów i raporty obliczeniowe', 'Bilans masowy ze strumieniami i składem materiałów', 'Bilans energetyczny z zapotrzebowaniem na ogrzewanie i chłodzenie', 'Harmonogram pracy szarży instalacji i zapotrzebowanie na media', 'Model 3D i dokumentacja wykonawcza', 'Rysunki izometryczne rurociągów i tras kablowych'],
    },
    {
      id: 'automation', title: 'Projekty szaf zasilająco-sterowniczych',
      summary: 'Szafy zasilająco-sterownicze, aparatura, programy PLC oraz aplikacje komputerowe do nadzoru i zarządzania procesem.',
      scope: ['Projekty szaf zasilająco-sterowniczych', 'Dobór katalogowych podzespołów i aparatury', 'Schematy i zestawienia AKPiA', 'Programowanie sterowników PLC', 'Aplikacje komputerowe do nadzoru i zarządzania procesem, także działające niezależnie od PLC'],
      deliverables: ['Schematy oraz zestawienia podzespołów i AKPiA', 'Model 3D i dokumentacja warsztatowa szafy', 'Programy sterowania PLC', 'Aplikacje komputerowe do nadzoru i zarządzania procesem', 'Profesjonalne wsparcie w procesie inwestycyjnym'],
    },
    {
      id: 'tanks', title: 'Projektowanie zbiorników i mieszalników',
      summary: 'Dobór aparatury, określenie poziomu roboczego i projektowanie konstrukcji. Układ mieszania dopasowany do potrzeb procesu.',
      scope: ['Dobór mieszadła i napędu', 'Dobór obrotów i poziomu turbulencji do potrzeb procesu', 'Dobór kształtu mieszadła do wymaganego efektu mieszania', 'Obliczenia wytrzymałościowe wału', 'Dobór aparatury i oprzyrządowania oraz określenie poziomu roboczego', 'Projekt mechaniczny zbiornika i konstrukcji wsporczych', 'Dokumentacja wykonawcza'],
      deliverables: ['Wsparcie przy projektowaniu procesu', 'Raporty obliczeniowe mieszadła, napędu i wału', 'Model 3D mieszalnika lub całego węzła technologicznego', 'Rysunki konstrukcyjne i dokumentacja wykonawcza', 'Lista zakupowa armatury i oprzyrządowania', 'Profesjonalne wsparcie w procesie inwestycyjnym'],
    },
  ],
  de: [
    {
      id: 'process', title: 'Planung von Chemie- und Prozessanlagen',
      summary: 'Verfahrensplanung, Stoff- und Energiebilanzen, Apparateauswahl und Ausführungsdokumentation.',
      scope: ['Verfahrenstechnische Planung und R&I-Fließbilder', 'Berechnung von Stoff- und Energiebilanzen', 'Apparateauswahl und hydraulische Berechnungen', 'Chargenplanung und Berechnung des Versorgungsmedienbedarfs', 'Planung industrieller Rohrleitungen und Kabeltrassen', 'HAZOP-Analyse'],
      deliverables: ['Unterstützung bei der Verfahrensplanung und im Investitionsprojekt', 'R&I-Fließbilder, Apparateübersichten und Berechnungsberichte', 'Stoffbilanzen mit Stoffströmen und Zusammensetzungen', 'Energiebilanzen mit Heiz- und Kühlbedarf', 'Chargenablaufplan der Anlage und Versorgungsmedienbedarf', 'Ein 3D-Modell und Ausführungsdokumentation', 'Isometrische Zeichnungen von Rohrleitungen und Kabeltrassen'],
    },
    {
      id: 'automation', title: 'Planung von Energieverteilungs- und Steuerschränken',
      summary: 'Energieverteilungs- und Steuerschränke, Instrumentierung, SPS-Programme und Computeranwendungen zur Prozessüberwachung und -verwaltung.',
      scope: ['Planung von Energieverteilungs- und Steuerschränken', 'Auswahl von Katalogkomponenten und Instrumentierung', 'Schaltpläne und MSR-Listen', 'SPS-Programmierung', 'Computeranwendungen zur Prozessüberwachung und -verwaltung, auch unabhängig von einer SPS'],
      deliverables: ['Schaltpläne sowie Komponenten- und MSR-Listen', 'Ein 3D-Modell und Fertigungsunterlagen für den Schaltschrank', 'SPS-Steuerungsprogramme', 'Computeranwendungen zur Prozessüberwachung und -verwaltung', 'Professionelle Begleitung des Investitionsprojekts'],
    },
    {
      id: 'tanks', title: 'Planung von Behältern und Rührwerken',
      summary: 'Apparateauswahl, Festlegung des Betriebsfüllstands und konstruktive Planung. Rührsysteme passend zu Ihrem Prozess.',
      scope: ['Auslegung von Rührwerk und Antrieb', 'Auswahl von Drehzahl und Strömungsturbulenz für den Prozess', 'Auswahl der Rührergeometrie für das gewünschte Mischergebnis', 'Festigkeitsberechnungen der Welle', 'Auswahl von Apparaten und Instrumentierung sowie Festlegung des Betriebsfüllstands', 'Mechanische Planung des Behälters und der Stützkonstruktionen', 'Fertigungsdokumentation'],
      deliverables: ['Unterstützung bei der Verfahrensplanung', 'Berechnungsberichte für Rührer, Antrieb und Welle', 'Ein 3D-Modell des Mischbehälters oder der gesamten Prozesseinheit', 'Konstruktionszeichnungen und Fertigungsdokumentation', 'Eine Beschaffungsliste für Armaturen und Instrumentierung', 'Professionelle Begleitung des Investitionsprojekts'],
    },
  ],
};
