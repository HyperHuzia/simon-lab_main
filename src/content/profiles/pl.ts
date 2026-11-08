import type { ProfilesCopy } from './types';

// Polski, pisany natywnie; te same fakty co wersja angielska. Na YouTube polski opis kanału jest tłumaczeniem, a film
// polski ma własny tytuł i opis; na LinkedIn to polska wersja językowa strony.
export const profiles: ProfilesCopy = {
  lang: 'pl',
  youtube: {
    channel: [
      'Simon Lab zajmuje się inżynierią obliczeniową dla projektów chemicznych. Koordynuje kompletne projekty inżynierii chemicznej na jednej otwartej platformie: proces, maszyny, szafy sterownicze, złożenie 3D, teren i pozwolenia, z importem i eksportem wszystkich rodzajów dokumentów. Projekt jest zdefiniowany raz, jako ustrukturyzowane i wersjonowane dane; dokumenty powstają z tego modelu, a każda zmiana jest testowana jak oprogramowanie.',
      'Filmy na tym kanale pokazują aplikacje platformy, od CapacityIndex i ProcessView po MechGraph, IonGrid, PlantMesh i Architecture, oraz to, jak projekt powstaje metodą bottom-up, warstwa po warstwie.',
      'Simon Lab przyjmuje też zlecenia projektowe dla instalacji chemicznych, cały projekt albo jedną branżę: {services}',
      'Prywatna beta z zaufanymi partnerami. {motto}',
      '{site}',
    ],
    films: {
      pl: {
        title: 'Simon Lab · Inżynieria chemiczna metodą bottom-up',
        lede: 'Jeden projekt inżynierii chemicznej prowadzony warstwa po warstwie przez aplikacje Simon Lab: specyfikacja w CapacityIndex, schemat P&ID i dynamiczna symulacja procesu w ProcessView, maszyna w MechGraph i szafy sterownicze w IonGrid, złożenie węzła w 3D w PlantMesh i jego osadzenie w zakładzie w Architecture, a na końcu eksport dokumentacji wykonawczej.',
        chapters: {
          heading: 'Rozdziały',
          titles: [
            'Specyfikacja: CapacityIndex',
            'ProcessView: P&ID i symulacja procesu',
            'MechGraph i IonGrid',
            'PlantMesh: węzeł w 3D',
            'Architecture: węzeł w zakładzie',
            'Dokumenty i beta',
          ],
        },
        notes:
          'Projekt jest zanonimizowanym projektem demonstracyjnym: węzłem przygotowania roztworu sody kaustycznej (NaOH). Tory cząstek w wizualizacjach CFD są wizualizacją; wyniki detekcji kolizji pokazujemy jako ustalenia, nie jako rozwiązane.',
        company:
          'Simon Lab koordynuje kompletne projekty inżynierii chemicznej na jednej otwartej platformie: proces, maszyny, szafy sterownicze, złożenie 3D, teren i pozwolenia, z importem i eksportem wszystkich rodzajów dokumentów. Prywatna beta z zaufanymi partnerami.',
        close: ['Strona: {site}', 'Usługi inżynierskie: {services}', 'Beta: {beta}', 'Wersja angielska: {other}', 'Napisy: polskie.'],
      },
    },
    tags: [
      'inżynieria chemiczna',
      'inżynieria procesowa',
      'projektowanie instalacji',
      'symulacja procesu',
      'AKPiA',
      'szafy sterownicze',
      'dokumentacja wykonawcza',
    ],
  },
  linkedin: {
    tagline: 'Inżynieria obliczeniowa dla projektów chemicznych. Jedna otwarta platforma, projekt jako kod.',
    about: [
      'Simon Lab zajmuje się inżynierią obliczeniową dla projektów chemicznych. Jego misją jest koordynacja kompletnych projektów inżynierii chemicznej na jednej otwartej platformie: proces, maszyny, szafy sterownicze, złożenie 3D, teren i pozwolenia, z importem i eksportem wszystkich rodzajów dokumentów.',
      'Rozwiązuje problem przerwanego łańcucha: inżynieria procesowa wciąż opiera się na statycznych dokumentach, które nie potrafią się nawzajem odczytać, więc każde przekazanie projektu wprowadza błędy. Odpowiedzią jest projekt jako kod. Projekt jest definiowany raz, jako ustrukturyzowane i wersjonowane dane, w jednej aplikacji na każdą branżę; dokumenty powstają z tego modelu, każda zmiana jest rewizją, a model jest sprawdzany względem fizyki, limitów i geometrii przy każdej zmianie. Inżynierowie decydują o każdym kroku.',
      'Zakres prac, od specyfikacji po zakład:\n{scope}',
      'Simon Lab realizuje zlecenia projektowe. Praca toczy się na platformie, więc idzie szybko, a doświadczeni inżynierowie sprawdzają każdy dokument. Klient dostaje dokumenty razem z projektem jako danymi, w standardzie AI-native od pierwszej rewizji: {services}',
      'Bezpośredni dostęp do narzędzi platformy, także dla własnego agenta AI (BYOA), w ramach prywatnej bety z zaufanymi partnerami. Open source wkrótce. Skontaktuj się: {beta}',
      '{motto}',
    ],
  },
};
