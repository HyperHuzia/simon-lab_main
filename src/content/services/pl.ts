import type { ServicesCopy } from './types';
import { offerUI } from './offers.ts';

// Polski, pisany natywnie; te same twierdzenia co wersja angielska. Pierwszy ekran przedstawia zakres usług.
export const services: ServicesCopy = {
  lang: 'pl',
  meta: {
    title: 'Usługi inżynierskie | Simon Lab',
    description:
      'Zlecenia projektowe dla instalacji chemicznych, cały projekt albo jedna branża, od schematu P&ID po model BIM: projekt jako kod, szybka realizacja, sprawdzone przez doświadczonych inżynierów.',
  },
  hero: {
    eyebrow: 'Usługi inżynierskie',
    title: offerUI.pl.title,
    lede: offerUI.pl.lede,
  },
  disciplines: {
    eyebrow: 'Branże',
    title: 'Od schematu P&ID po model BIM',
    items: [
      {
        app: 'processview',
        name: 'Technologia i automatyka procesowa',
        body: 'Schemat P&ID, dynamiczna symulacja procesu i programy sterowania, przetestowane na emulowanym sterowniku PLC, zanim cokolwiek zostanie kupione.',
      },
      {
        app: 'mechgraph',
        name: 'Konstrukcja mechaniczna',
        body: 'Maszyny i aparaty z dedykowanych obliczeń: mieszanie, wały, obliczenia wytrzymałościowe (FEM) i symulacje przepływu (CFD), z rysunkami i raportami z tego samego modelu.',
      },
      {
        app: 'iongrid',
        name: 'Automatyka i zasilanie',
        body: 'Projekty szaf zasilająco-sterowniczych z katalogowych podzespołów i aparatury, schematy i zestawienia AKPiA, programy PLC oraz aplikacje komputerowe do nadzoru i zarządzania procesem.',
      },
      {
        app: 'plantmesh',
        name: 'Modelowanie 3D',
        body: 'Złożenie węzła w 3D: izometrie rurociągów, konstrukcje wsporcze, dostęp serwisowy i wykrywanie kolizji.',
      },
      {
        app: 'architecture',
        name: 'Aranżacja architektoniczna i modele BIM',
        body: 'Węzeł w budynku i w zakładzie: aranżacja architektoniczna i georeferencyjne modele OpenBIM, aż po plan zagospodarowania terenu.',
      },
    ],
  },
  fast: {
    eyebrow: 'Realizacja',
    title: 'Szybko, bo projekt jest kodem',
    body: [
      'Projekt jest definiowany raz, jako ustrukturyzowane i wersjonowane dane. Rysunki, zestawienia i obliczenia powstają z tego modelu, więc zmiana trafia do wszystkich dokumentów w tej samej rewizji, zamiast wędrować od jednego przekazania do kolejnego.',
      'Po każdej iteracji model jest sprawdzany pod kątem fizyki, limitów i geometrii, tak jak testuje się oprogramowanie. Agenci AI przejmują koordynację i powtarzalną pracę między dokumentami.',
    ],
    more: 'Projekt jako kod w bazie wiedzy',
  },
  checked: {
    eyebrow: 'Jakość',
    title: 'Sprawdzone przez doświadczonych inżynierów',
    body: [
      '15 lat doświadczenia w inżynierii chemicznej. Zrealizowane projekty o wartości ponad 25 milionów złotych.',
    ],
  },
  delivery: {
    eyebrow: 'Co dostaje klient',
    title: 'Dokumenty i projekt jako dane',
    lede: 'Dokumenty, z którymi pracują wykonawcy i urzędy, oraz model, z którego powstały, w otwartych formatach:',
    points: [
      'rysunki i raporty w PDF',
      'modele w IFC i 3D Tiles',
      'zestawienia i rejestry w XLSX i CSV',
      'sam projekt jako ustrukturyzowane dane, gotowy na kolejną rewizję i dla agentów AI',
    ],
  },
  order: {
    eyebrow: 'Zlecenia',
    title: 'Zlecenia e-mailem',
    body: offerUI.pl.contactBody,
    write: 'Napisz do nas',
  },
};
