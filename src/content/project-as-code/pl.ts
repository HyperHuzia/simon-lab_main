import type { Article } from '../article-types';

// Polski, pisany natywnie na podstawie wersji angielskiej; te same twierdzenia (tabela twierdzeń w simon-lab-media).
export const article: Article = {
  lang: 'pl',
  meta: {
    title: 'Projekt jako kod | Simon Lab',
    description:
      'Dlaczego projekt instalacji chemicznej działa lepiej jako ustrukturyzowane, wersjonowane dane niż jako stos dokumentów: jeden model, dokumenty generowane z niego, każda zmiana jako rewizja i sprawdzenia działające jak testy.',
  },
  hero: {
    eyebrow: 'Baza wiedzy · Projekt jako kod',
    title: 'Projekt instalacji powinien czytać się jak program, a nie jak stos dokumentów',
    standfirst:
      'Każdy projekt instalacji chemicznej to tysiące decyzji rozproszonych w plikach PDF, arkuszach i rysunkach, które nie potrafią się nawzajem odczytać. Utrzymanie w zespole jednego standardu rewizji oraz poprawnej i spójnej dokumentacji międzybranżowej to walka, którą toczy każdy kierownik biura projektowego w inżynierii chemicznej. Rewizje dokumentacji dryfują, a człowiek nie ewoluował do roli strażnika spójności dokumentów: to zadanie dla maszyny, bo oczekujemy tu maszynowej precyzji.',
    read: 'Zacznij czytać',
  },
  chapters: [
    {
      id: 'broken-chain',
      eyebrow: '1 · Przerwany łańcuch',
      title: 'Dokumenty, które nie potrafią ze sobą rozmawiać',
      intro: [
        'Typowy projekt przechodzi przez łańcuch dokumentów: wniosek grantowy, opis procesu, schematy P&ID, listy urządzeń, karty obliczeń, rejestry szaf, rysunki i wnioski o pozwolenia. Każdy z nich powstaje ręcznie na podstawie poprzednich.',
      ],
      steps: [
        {
          id: 'pac-chain',
          stage: 'pac-chain',
          title: 'Jeden plik zasila następny',
          body: [
            'Liczby wychodzą z wniosku jako PDF, są przepisywane do arkusza, kopiowane na rysunek i jeszcze raz wpisywane do wniosku o pozwolenie. Każda kopia to okazja do błędu, a żaden system nie prześledzi wątku od jednego pliku do następnego.',
          ],
        },
        {
          id: 'pac-drift',
          stage: 'pac-drift',
          title: 'A każda rewizja się rozjeżdża',
          body: [
            'Gdy coś się zmienia, każdy dokument musi zaktualizować ktoś, kto to zauważy. Jeden arkusz jest w rewizji C, rysunek wciąż w A, wniosek o pozwolenie gdzieś pomiędzy. Logika projektu żyje w głowach ludzi, a nie w plikach.',
          ],
        },
      ],
    },
    {
      id: 'one-model',
      eyebrow: '2 · Jeden model',
      title: 'Jedno źródło, wiele dokumentów',
      intro: [
        'W Simon Lab projekt nie jest folderem plików. To ustrukturyzowane dane: urządzenia z parametrami, rurociągi z materiałami i klasami, przyrządy, logika sterowania, szafy, konstrukcje stalowe i teren. Każdy element jest zdefiniowany raz, w aplikacji swojej branży.',
      ],
      steps: [
        {
          id: 'pac-model',
          stage: 'pac-model',
          title: 'Zdefiniowane raz',
          body: [
            'Rurociąg jest zdefiniowany raz: numer, medium, średnica nominalna, materiał i klasa oraz urządzenia, które łączy. Arkusz P&ID, rejestr rurociągów i izometria czytają tę jedną definicję.',
          ],
        },
        {
          id: 'pac-fanout',
          stage: 'pac-fanout',
          title: 'Dokumenty są generowane',
          body: [
            'Dokumenty powstają z modelu, a nie są rysowane obok niego: arkusze P&ID, dane urządzeń, izometrie rurociągów, rejestry szaf, rysunki konstrukcji i plan zagospodarowania terenu. Platforma ma dziś około 45 profili dokumentów.',
          ],
        },
        {
          id: 'pac-pages',
          stage: 'pac-pages',
          title: 'Strony do przeglądu',
          body: [
            'Dokumenty PDF są generowane z kodu na potrzeby przeglądu. Nie są źródłem prawdy, tylko z niego wynikają, a źródłem prawdy jest kod.',
          ],
        },
      ],
    },
    {
      id: 'revisions',
      eyebrow: '3 · Rewizje',
      title: 'Każda zmiana to rewizja',
      intro: [
        'Skoro projekt jest danymi, zmiana nie jest nową kopią pliku. Jest nową rewizją modelu, a jej skutek da się prześledzić przez wszystko, co od niej zależy.',
      ],
      steps: [
        {
          id: 'pac-rev',
          stage: 'pac-rev',
          title: 'Historia decyzji',
          body: [
            'Model przechowuje swoje rewizje. Każda zapisuje zmianę samych danych: dodaną szafę, dostrojoną sekwencję, zmienioną średnicę rurociągu. Na przeglądzie pytanie nie brzmi już „który plik jest aktualny?”, tylko „co się zmieniło i dlaczego?”.',
          ],
        },
        {
          id: 'pac-diff',
          stage: 'pac-diff',
          title: 'Jedna zmiana, wszystkie dokumenty',
          body: [
            'Gdy rośnie średnica nominalna jednego rurociągu, zmiana trafia na jego arkusz P&ID, do rejestru rurociągów i na izometrię, bo wszystkie trzy powstają z tego rurociągu. Model pokazuje też, co z tego wynika: opory tłoczenia na tym rurociągu spadają, przepływomierz jest teraz poza zakresem dla tej rury i wymaga ponownego doboru, a pompa zostaje w zakresie, choć wystarczyłby już tańszy model. Nic nie czeka, aż ktoś to zauważy.',
          ],
        },
      ],
    },
    {
      id: 'checks',
      eyebrow: '4 · Sprawdzenia',
      title: 'Sprawdzenia działają jak testy',
      intro: [
        'W oprogramowaniu każda zmiana uruchamia testy. Projekt zdefiniowany jako dane działa tak samo: model jest sprawdzany względem fizyki, limitów i geometrii przy każdej zmianie.',
      ],
      steps: [
        {
          id: 'pacm-sim',
          stage: 'pacm-sim',
          title: 'Proces działa, zanim powstanie',
          body: [
            'Program szarżowy węzła demonstracyjnego pracuje na emulowanym sterowniku PLC w dynamicznej symulacji. Dozowanie jest ograniczane tak, by roztwór trzymał się w pobliżu limitu 60\u00a0°C, a kroki operatora są sprawdzone, zanim cokolwiek zostanie zamówione.',
          ],
        },
        {
          id: 'pacm-clash',
          stage: 'pacm-clash',
          title: 'Model 3D jest sprawdzany pod kątem kolizji',
          body: [
            'Detekcja kolizji przechodzi przez złożony węzeł. W projekcie demonstracyjnym zgłasza dwie kolizje obwiedni, pokazane tu jako wyniki do rozwiązania przez projektanta.',
          ],
        },
      ],
    },
    {
      id: 'open-formats',
      eyebrow: '5 · Otwarte formaty',
      title: 'Import i eksport w formatach, których już używasz',
      intro: [
        'Otwarta platforma musi spotkać resztę branży tam, gdzie ona jest. Dane przychodzą z plików, które partnerzy już mają, i wychodzą jako dokumenty, których oczekują.',
      ],
      steps: [
        {
          id: 'pac-formats',
          stage: 'pac-formats',
          title: 'Na wejściu i na wyjściu',
          body: [
            'Na wejściu: wszystko, co projekt już ma, od rysunków i modeli DXF i STEP, IFC i chmur punktów (E57) po dokumenty PDF i Word, arkusze i dane (XLSX, CSV, XML, JSON). Agent AI przetwarza je na postać, jakiej potrzebuje projekt. Na wyjściu: zestawy dokumentów PDF, IFC i 3D Tiles dla modelu terenu, rejestry XLSX i CSV. Partner, który nie korzysta z Simon Lab, nadal dostaje standardowe pliki.',
          ],
        },
      ],
    },
    {
      id: 'the-team',
      eyebrow: '6 · Zespół',
      title: 'Co to zmienia dla ludzi, którzy projektują instalację',
      steps: [
        {
          id: 'pac-iterate',
          stage: 'pac-iterate',
          title: 'Inżynier decyduje, model pilnuje spójności',
          body: [
            'Nic tu nie zastępuje inżynierskiego osądu. Inżynier nadal wybiera proces, dobiera maszyny i podpisuje rysunki. Zmienia się praca wokół tego: bez przepisywania, bez szukania aktualnej rewizji, bez zmiany, która po cichu omija jakiś dokument.',
          ],
        },
        {
          id: 'pac-scope',
          stage: 'pac-scope',
          title: 'Iteracje tanieją',
          body: [
            'Gdy zmienia się zakres albo przepis, następna iteracja przechodzi od razu przez cały projekt. To właśnie mamy na myśli, mówiąc „projekt jako kod”: nie AI, które generuje instalację, tylko inżynierię, która stała się obliczalna.',
          ],
        },
      ],
    },
  ],
  closing: {
    eyebrow: 'Prywatna beta',
    title: 'Poprowadź swój kolejny projekt jako kod',
    body: ['Pracujemy z zaufanymi partnerami, projekt po projekcie. Opowiedz nam o swoim.'],
    cta: { beta: 'Dołącz do bety', apps: 'Poznaj aplikacje' },
  },
  notes: [
    'Projekt demonstracyjny jest zanonimizowany. Jego strony i ekrany to wynik pracy samej platformy.',
    'Listing kodu, rysunek rurociągu L-104 i historia rewizji ilustrują ideę. To nie są formaty plików ani ekrany platformy.',
    'Detekcja kolizji pokazuje wyniki, a rozwiązuje je projektant.',
  ],
  labels: {
    'pac.grant': 'Wniosek grantowy',
    'pac.process': 'Opis procesu',
    'pac.pid': 'P&ID',
    'pac.list': 'Lista urządzeń',
    'pac.permit': 'Wniosek o pozwolenie',
    'pac.pdf': 'PDF',
    'pac.dwg': 'Rysunek',
    'pac.xls': 'Arkusz',
    'pac.doc': 'Dokument',
    'pac.retyped': 'Przepisane ręcznie',
    'pac.rev': 'Rew.',
    'pac.model': 'Model projektu',
    'pac.doc.pid': 'Arkusz P&ID',
    'pac.doc.lines': 'Rejestr rurociągów',
    'pac.doc.iso': 'Izometria rurociągu',
    'pac.doc.equip': 'Dane urządzeń',
    'pac.doc.cab': 'Rejestr szafy',
    'pac.doc.site': 'Plan zagospodarowania',
    'pac.eq.pump': 'Pompa',
    'pac.eq.ft': 'Przepływomierz',
    'pac.eq.valve': 'Zawór',
    'pac.eq.tank': 'Zbiornik',
    'pac.pid.alt': 'Rurociąg L-104, DN50, klasa B1: od pompy P-101 przez przepływomierz FT-104 i zawór HV-104 do zbiornika B-101',
    'pac.log': 'Historia rewizji',
    'pac.r10': 'Ustalone założenia procesowe',
    'pac.r11': 'Wydana lista urządzeń',
    'pac.r12': 'Dodana szafa C-101',
    'pac.r13': 'Dostrojona sekwencja dozowania',
    'pac.r14': 'Zmieniona średnica L-104',
    'pac.current': 'bieżąca',
    'pac.regenerated': 'Wygenerowane ponownie',
    'pac.change': 'Zmiana',
    'pac.affected': 'Dokumenty, których dotyczy',
    'pac.doc.io': 'Lista I/O',
    'pac.doc.plc': 'Program PLC',
    'pac.doc.seq': 'Opis sekwencji',
    'pac.doc.sim': 'Raport z symulacji',
    'pac.fx.loss': 'Opory tłoczenia w L-104: niższe',
    'pac.fx.ft': 'FT-104: poza zakresem, do ponownego doboru',
    'pac.fx.pump': 'P-101: w zakresie, wystarczy tańszy model',
    'pac.agent': 'Agent AI',
    'pac.in': 'Wejście',
    'pac.out': 'Wyjście',
    'pac.iteration': 'Iteracja',
    'pac.scope': 'Zmiana zakresu',
  },
};
