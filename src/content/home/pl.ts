import type { HomeCopy } from './types';

// Polski, pisany natywnie. Misja, projekt jako kod i „O nas” to teksty poprzedniej strony, lekko zredagowane; motto
// (src/i18n/ui.ts) zostaje decyzją właściciela.
export const home: HomeCopy = {
  lang: 'pl',
  meta: {
    title: 'Simon Lab | Inżynieria obliczeniowa dla projektów chemicznych',
    description:
      'Simon Lab koordynuje kompletne projekty inżynierii chemicznej na jednej otwartej platformie: proces, maszyny, szafy sterownicze, złożenie 3D, teren i pozwolenia, z importem i eksportem wszystkich rodzajów dokumentów.',
  },
  hero: {
    eyebrow: 'Inżynieria chemiczna',
    title: 'Inżynieria obliczeniowa dla projektów chemicznych',
    lede: 'Simon Lab koordynuje całe projekty inżynierii chemicznej na jednej otwartej platformie, z importem i eksportem wszystkich rodzajów dokumentów. Od stołu laboratoryjnego po repozytorium dane inżynierskie są zapisane jako kod: identyfikowalne, weryfikowalne i czytelne maszynowo od pierwszego dnia.',
    film: 'Zobacz film',
    filmLink: 'Zobacz 2-minutowy film',
    slides: [
      'PlantMesh · instalacja w 3D, sprawdzona pod kątem kolizji',
      'MechGraph · maszyna z własnych obliczeń',
      'IonGrid · szafa sterownicza, element po elemencie',
      'Dokumenty · wygenerowane z projektu',
    ],
  },
  mission: {
    eyebrow: 'Misja',
    body: [
      'Przemysł chemiczny zostaje w tyle. Oprogramowanie, finanse i produkcja dawno przeszły na obliczeniowe przepływy pracy, a inżynieria procesowa wciąż tkwi w statycznych dokumentach: plikach PDF, które umierają w chwili wysłania, arkuszach, które rozjeżdżają się z każdą rewizją, i rysunkach, których nie odczyta żaden system.',
      'To przerwany łańcuch. Dane utworzone w jednej fazie nie mogą przejść do następnej. Każde przekazanie wprowadza błędy, a każdy projekt zaczyna się od zera.',
    ],
    close: 'Jesteśmy tu, aby to naprawić.',
  },
  story: {
    eyebrow: 'Jak powstaje projekt instalacji',
    title: 'Od rozproszonych dokumentów do jednego, skoordynowanego projektu',
    steps: [
      {
        id: 'idea',
        title: 'Na początku jest pomysł',
        body: 'Klient potrzebuje nowej instalacji: określonej wydajności, produktu, lokalizacji. Na tym etapie to rozmowa i kilka liczb.',
      },
      {
        id: 'classic',
        title: 'Potem dochodzą kolejne branże',
        body: 'Badania laboratoryjne, proces i wydajność, obliczenia, sterowanie, maszyny, architektura, pozwolenia. Każda branża pracuje we własnych narzędziach i dokumentach, a wyniki przekazuje mailem i w plikach PDF.',
      },
      {
        id: 'chaos',
        title: 'I łańcuch się rwie',
        body: 'Dane przychodzą niekompletne. Część tematów zostaje porzucona, inne są ignorowane albo wchodzą ze sobą w konflikt. Wydajność przestaje pasować do procesu, emisje przekraczają limit, brakuje pozwolenia. Architektura projektowana bez pozwoleń działa w próżni. Jedna iteracja to miesiące koordynacji.',
      },
      {
        id: 'order',
        title: 'Jeden język dla całego projektu',
        body: 'Tym wspólnym językiem jest kod programistyczny, czyli język, w którym pracuje agent AI. Mniej ważne, czy jest zapisany w strukturze Simon Lab, czy w innej: Simon Lab to po prostu struktura przygotowana dla projektu instalacji. W niej LabGate, CapacityIndex, ProcessView, MechGraph, IonGrid, PlantMesh, Architecture i Permit czytają i zapisują ten sam kod projektu. Nic nie jest przepisywane i nic nie ginie między zespołami.',
      },
      {
        id: 'iterate',
        title: 'Iteracje przyspieszają',
        body: 'Praca nadal jest iteracyjna. Ale aplikacje wymieniają teraz dane bezpośrednio, więc każda iteracja daje komplet dokumentów, a następna przychodzi szybciej.',
      },
      {
        id: 'validate',
        title: 'Każda iteracja jest testowana',
        body: 'Po każdej iteracji cały projekt jest testowany i walidowany: zgodność matematyczna, spójność wszystkich dokumentów ze sobą, te same standardy jakości, według których testuje się oprogramowanie. Gdy testy wykażą błędy, powstaje kolejna iteracja, aż projekt przejdzie bezbłędnie.',
      },
      {
        id: 'scope',
        title: 'Zmiana zakresu to po prostu kolejna iteracja',
        body: 'Gdy klient zmienia zakres, CapacityIndex to sygnalizuje i nic się nie zatrzymuje. Zmiana wchodzi na początku, a kolejne iteracje przenoszą ją przez wszystkie dokumenty i testy.',
      },
      {
        id: 'law',
        title: 'Tak samo zmiana prawa',
        body: 'Gdy zmieniają się przepisy, Permit to wychwytuje. Kolejne iteracje aktualizują wszystko, co od nich zależy, i znów przechodzą testy, aż projekt będzie wolny od błędów.',
      },
    ],
    nodes: {
      idea: 'Pomysł klienta',
      lab: 'Badania laboratoryjne',
      process: 'Proces i wydajność',
      calc: 'Obliczenia',
      control: 'Sterowanie',
      machine: 'Maszyny i złożenie',
      arch: 'Architektura',
      permit: 'Pozwolenia i emisje',
    },
    flags: {
      conflict: 'Konflikt',
      noPermit: 'Brak pozwolenia',
      emissions: 'Emisje ponad limit',
      capacity: 'Niezgodna wydajność',
      missing: 'Brak danych',
    },
    iteration: 'Iteracja',
    scope: 'Zmiana zakresu',
    law: 'Zmiana prawa',
    outro: [
      'Na tym polega nasza misja: kompletne projekty inżynierii chemicznej, koordynowane na jednej otwartej platformie.',
      'Dzięki temu inżynier może skupić się nie na koordynacji, tylko na tych częściach instalacji, które naprawdę mają znaczenie.',
    ],
  },
  pac: {
    eyebrow: 'Baza wiedzy',
    title: 'Gdy projekt jest kodem',
    body: [
      'Tradycyjne projekty chemiczne żyją w statycznych dokumentach. Wnioski grantowe stają się plikami PDF, schematy P&ID rysunkami, a symulacje arkuszami kalkulacyjnymi. Każde przekazanie wprowadza rozbieżności, a logika projektu kończy w formatach, których żaden system nie przetworzy.',
      'Projekt jako kod odwraca ten porządek. Definiujemy projekt w ustrukturyzowanych, wersjonowanych danych już od etapu wniosku grantowego. Matematyka jest sprawdzona przed pierwszym wnioskiem o finansowanie, a proces kompiluje się do działającej symulacji, zanim powstanie pierwsza linia rysunku.',
      'To nie AI generuje Twoją instalację. To intencja inżynierska zapisana na tyle precyzyjnie, że narzędzia obliczeniowe, także AI, mogą ją czytać, sprawdzać i pomagać. Nie dlatego, że zautomatyzowaliśmy inżynierię, ale dlatego, że uczyniliśmy ją obliczalną.',
    ],
    result: 'Rezultat: projekty gotowe obliczeniowo, audytowalne przy każdej rewizji i identyfikowalne do każdej decyzji.',
    more: 'Otwórz bazę wiedzy',
  },
  apps: {
    eyebrow: 'Aplikacje',
    title: 'Jedna platforma, jedna aplikacja na branżę',
    lede: 'Każda aplikacja obejmuje jedną branżę projektu instalacji i wymienia dane z pozostałymi. Dokumenty powstają ze wspólnego modelu.',
    all: 'Wszystkie aplikacje',
  },
  services: {
    body: 'Simon Lab przyjmuje też zlecenia projektowe, cały projekt instalacji chemicznej albo jedną jego branżę: budowane jako kod na platformie, realizowane szybko i sprawdzane przez doświadczonych inżynierów.',
    link: 'Usługi inżynierskie',
  },
  about: {
    eyebrow: 'Firma',
    title: 'O nas',
    body: 'Simon Lab dostarcza inżynierię obliczeniową dla przemysłu chemicznego: doświadczenie w inżynierii procesowej połączone z metodami opartymi na kodzie, aby projekty były audytowalne, identyfikowalne i gotowe na narzędzia obliczeniowe dziś i jutro.',
    team: 'Poznaj zespół',
    roadmap: { body: 'Od prywatnej bety do startu z zaufanymi partnerami na ACHEMA 2027.', link: 'Zobacz roadmapę' },
  },
  beta: {
    eyebrow: 'Prywatna beta',
    title: 'Dołącz do bety',
    body: 'Pracujemy z zaufanymi partnerami: razem tworzymy prototypowe projekty, oceniamy jakość wyników i testujemy nowe narzędzia w inżynierii chemicznej.',
    join: 'Zgłoś się do bety',
  },
};
