import type { Article } from './types';

// Polska wersja pisana natywnie (nie tłumaczenie 1:1). Te same zastrzeżenia co w EN: tory cząstek to wizualizacja, a
// otoczenie zakładu to model generyczny (mówią to uwagi na końcu), kolizje pokazujemy jako wykryte, straty ciepła szafy
// to znana dolna granica.
export const article: Article = {
  lang: 'pl',
  meta: {
    title: 'Inżynieria chemiczna metodą bottom-up | Simon Lab',
    description:
      'Simon Lab to środowisko produkcyjne, w którym Twój agent AI buduje kompletny projekt instalacji warstwa po warstwie, według zasad inżynierskich i na prawdziwej mocy obliczeniowej.',
  },
  hero: {
    eyebrow: 'Simon Lab · metoda bottom-up',
    title: 'Twój agent AI nie potrzebuje kolejnego okna czatu. Potrzebuje instalacji, przy której może pracować.',
    standfirst:
      'Simon Lab to środowisko produkcyjne, w którym agent AI projektuje kompletną instalację chemiczną, od fizyki procesu po rysunki, z których wykonawca może budować. Warstwa po warstwie, według zasad, które pilnują kompletności i właściwej kolejności pracy.',
    read: 'Czytaj historię',
    watch: 'Obejrzyj 2-minutowy film',
    scrollHint: 'Przewiń, aby zbudować instalację',
  },
  chapters: [
    {
      id: 'environment',
      eyebrow: 'Rozdział 1',
      title: 'Od czatu do środowiska',
      intro: [
        'Większość inżynierów zna AI jako okno czatu. Pokazujemy, jak czat staje się agentem AI, co agent AI robi w projekcie instalacji bez środowiska i co daje mu Simon Lab.',
      ],
      steps: [
        {
          id: 'env-chat',
          stage: 'env-chat',
          kicker: 'Czat',
          title: 'Czat odpowiada, jeden dokument naraz',
          body: [
            'Poproś czat o dobór pompy, a dostaniesz dokumentację doboru. Otwórz nowy czat, żeby sprawdzić wytrzymałość wału mieszadła, i dostaniesz kolejny dokument, który nic nie wie o pierwszym. Trzecie pytanie, trzeci dokument.',
            'Każda odpowiedź stoi osobno i nie ma nic wspólnego z poprzednią. Uzgodnienie odpowiedzi, ich sprawdzenie i przeniesienie do projektu wciąż należy do Ciebie.',
          ],
        },
        {
          id: 'env-agent',
          stage: 'env-agent',
          kicker: 'Twój agent AI',
          title: 'Agent AI to czat, który dostał narzędzia',
          body: [
            'Agent AI powstał właśnie jako odpowiedź na ten problem. Jego sercem jest ten sam czat, czyli inteligencja. Wokół niego dostaje narzędzia, plan, pliki i sprawdzenia, a pracuje w pętli, aż zadanie będzie skończone.',
            'Agentami AI tego rodzaju są Codex, Claude Code, Grok Build i Google Antigravity.',
          ],
        },
        {
          id: 'env-docs',
          stage: 'env-docs',
          kicker: 'Nasze doświadczenie',
          title: 'Puszczony na projekt, strzela dokumentami',
          body: [
            'Agent AI pracuje na plikach, tak jak programista w repozytorium. Puszczony na projekt instalacji buduje sobie własne środowisko, ale nie zna właściwego standardu, a każdy temat zaczyna od pustego folderu. Potem strzela jak z karabinu maszynowego: seria za serią dokumentów, a serie zaczynają się zderzać, bo nikt nie zdefiniował standardów.',
            'Zaawansowane narzędzia nie istnieją. A kiedy zaczynałeś ten weekendowy projekt, nie myślałeś, że zamieni się w rok optymalizacji silnika symulacji CFD i renderowania geometrii CAD na wysłużonym laptopie.',
          ],
        },
        {
          id: 'env-build',
          stage: 'env-build',
          kicker: 'Simon Lab',
          title: 'Przynieś własnego agenta AI',
          body: [
            'Simon Lab pozwala przynieść własnego agenta AI: BYOA (bring your own agent). Simon Lab daje mu środowisko: każda część projektu ma swoje miejsce w warstwie, a każda warstwa jest budowana na tej pod nią. Agent AI zaczyna od specyfikacji w CapacityIndex i buduje proces w ProcessView; gdy proces pokaże, że specyfikacja wymaga zmiany, wraca, a obie warstwy dostają nową rewizję.',
          ],
        },
        {
          id: 'env-release',
          stage: 'env-release',
          kicker: 'Iteracje',
          title: 'Każda rewizja sprawdzona, projekt wydany razem',
          body: [
            'Zmiana w procesie przebudowuje to, co od niego zależy: maszynę, szafę, model 3D i teren. Każdy dokument jest sprawdzany ponownie przy każdej rewizji. Gdy wszystko przejdzie, projekt przechodzi z wersji beta do wersji 1.0 we wszystkich aplikacjach.',
            'Za warstwami stoją <strong>aplikacje inżynierskie</strong>, po jednej na branżę, <strong>zasady dobrej praktyki inżynierskiej</strong> zapisane jako testy i <strong>moc obliczeniowa</strong> do prawdziwej weryfikacji (CFD, MES, rendering), na naszych własnych maszynach.',
          ],
        },
      ],
    },
    {
      id: 'mirror',
      eyebrow: 'Rozdział 2',
      title: 'Agent AI czyta kod, inżynier widzi instalację',
      intro: [
        'Agent AI proponuje, inżynier zatwierdza. Agent AI czyta kod i nie potrzebuje ekranu. Inżynier, żeby zdecydować, musi widzieć pracę, i ten interfejs daje Simon Lab: jeden model, pokazany każdemu w jego własnym języku.',
      ],
      steps: [
        {
          id: 'mirror-pv',
          stage: 'mirror-pv',
          kicker: 'ProcessView',
          title: 'Struktura danych albo P&ID',
          body: [
            'Dla agenta AI proces to dane w strukturze: każdy zbiornik, króciec, rurociąg i przyrząd to obiekt ze swoimi połączeniami. Inżynier widzi ten sam model jako P&ID.',
          ],
        },
        {
          id: 'mirror-ig',
          stage: 'mirror-ig',
          kicker: 'IonGrid',
          title: 'Netlista albo szafa',
          body: [
            'Agent AI nie potrzebuje renderu szafy. Czyta netlistę: aparaty, zaciski, przewody i sygnały. Inżynier widzi szafę w 3D, część po części, tak jak zostanie zbudowana.',
          ],
        },
        {
          id: 'mirror-pm',
          stage: 'mirror-pm',
          kicker: 'PlantMesh',
          title: 'Krawędzie i współrzędne albo sam węzeł',
          body: [
            'W PlantMesh agent AI pracuje na geometrii, jej krawędziach i współrzędnych. Inżynier widzi węzeł wyrenderowany, z konstrukcją, rurociągami i ludźmi, którzy będą go obsługiwać.',
          ],
        },
      ],
      outro: [
        'Tak szybkie iteracje pozwalają inżynierowi pracować z projektem jak z plasteliną, bez tygodni czekania i proszenia się o nową rewizję konstrukcji wsporczej. Kierunek widać, zanim zostanie wybrany, więc wiadomo, czy warto nim iść.',
        'Inżynier pracuje bardziej jak rzemieślnik niż jak część korporacyjnej maszyny, bez ciężaru koordynacji międzybranżowej, i może projektować instalacje, z których można być dumnym: szybkość iteracji daje jakość, która dotąd była nieuchwytna.',
      ],
    },
    {
      id: 'method',
      eyebrow: 'Rozdział 3',
      title: 'Bottom-up: najpierw fizyka, budżet i harmonogram na końcu',
      intro: [
        'Projekty zwykle zaczynają się od budżetu i harmonogramu, ustalonych przez kogoś, kto jeszcze nie zna fizyki, od której one zależą. Start od fizyki zmniejsza wysiłek potrzebny, by rozpocząć projekt na właściwym fundamencie, a nie na błędnym założeniu klienta, które wzięło się z oferty przygotowanej w kilka godzin.',
        'Tradycyjne projekty buduje się z góry, z dokumentów, a każda branża łata to, co założyła poprzednia. W metodzie bottom-up nic nie jest rysowane, zanim nie zostanie postanowione warstwę niżej.',
      ],
      steps: [
        {
          id: 'method-laminate',
          stage: 'stack-laminate',
          kicker: 'Jeden projekt',
          title: 'Projekt to stos decyzji',
          body: [
            'Z zewnątrz projekt instalacji wygląda jak jeden gęsty blok informacji. W środku ma warstwy: co instalacja ma dostarczać, jak przebiega proces, jakie są maszyny i szafy, jak do siebie pasują i gdzie stoją.',
          ],
        },
        {
          id: 'method-layers',
          stage: 'stack-layers',
          kicker: 'Sześć warstw',
          title: 'Każda warstwa to aplikacja',
          body: [
            '<strong>CapacityIndex</strong> trzyma zakres, wydajność i ekonomię. <strong>ProcessView</strong> odpowiada za proces i jego sterowanie. <strong>MechGraph</strong> i <strong>IonGrid</strong> równolegle projektują maszyny i szafy sterownicze. <strong>PlantMesh</strong> składa węzeł w 3D. <strong>Architecture</strong> osadza go w terenie.',
          ],
        },
        {
          id: 'method-flow',
          stage: 'stack-flow',
          kicker: 'Bottom-up',
          title: 'Każda warstwa czyta tę pod sobą',
          body: [
            'Agent AI pracuje w górę. Każda warstwa korzysta z tego, co postanowiono niżej, i dodaje własne szczegóły, więc zmiana specyfikacji przechodzi przez proces, maszyny i rysunki, zamiast wyjść na jaw na budowie.',
          ],
        },
        {
          id: 'method-input',
          stage: 'stack-in',
          kicker: 'Wejście',
          title: 'Dokumenty są też wejściem',
          body: [
            'Wszystko, od czego zaczyna się projekt, trafia do CapacityIndex: rysunki w DXF, modele w STEP, specyfikacje w PDF i DOCX, dane w XML. Przyjmuje ten miszmasz i potrafi go oddać, ale w środku wszystko leży w strukturze Simon Lab.',
          ],
        },
        {
          id: 'method-docs',
          stage: 'stack-docs',
          kicker: 'Na końcu, nie na początku',
          title: 'Dokumenty są wynikiem',
          body: [
            'Rysunki, karty i raporty generuje się z warstw na końcu, a nie wpisuje na początku. Dzięki temu są spójne: to różne widoki tych samych decyzji.',
          ],
        },
      ],
    },
    {
      id: 'capacityindex',
      layer: 'capacityindex',
      eyebrow: 'Warstwa 0 · CapacityIndex',
      title: 'Prześledź projekt demonstracyjny',
      intro: [
        'Dalej śledzimy jeden prawdziwy projekt przez cały stos: zanonimizowany węzeł przygotowania roztworu sody kaustycznej, zaprojektowany w platformie i pokazany na jej rzeczywistych ekranach i renderach.',
        'Zadanie jest takie, jakie inżynier dostaje w poniedziałek rano: zakład wytwarza już ług 5%; na nową linię potrzebuje 30%, rozpuszczanego z płatków dostarczanych w workach po 25\u00a0kg, w istniejącym zbiorniku nierdzewnym, na wolnym kawałku terenu.',
      ],
      steps: [
        {
          id: 'ci-prompt',
          stage: 'cli-prompt',
          kicker: 'Polecenie',
          title: 'Na wejściu zwykły język, na wyjściu struktura',
          body: [
            'Inżynier opisuje proces i jego ograniczenia (wielkość szarży, górna granica 60\u00a0°C w zbiorniku, 40\u00a0°C na wylocie) i prosi o projekt metodą bottom-up, który zmieści się na wolnym fragmencie zakładu.',
          ],
        },
        {
          id: 'ci-spec',
          stage: 'cli-spec',
          kicker: 'Najpierw fizyka',
          title: 'Specyfikacja, którą przeczyta każda warstwa',
          body: [
            'Agent AI zwraca założenia projektowe, a nie rysunek: NaOH 30% w szarżach po 14,5\u00a0m³; 220 worków, czyli 5,5 tony płatków na szarżę; woda lodowa 7,5\u00a0°C w płaszczu half-pipe; jedna szarża na zmianę, aby pokryć 60\u00a0m³ tygodniowo. Podaje też fizykę, która ograniczy projekt: rozpuszczanie jest egzotermiczne, więc tempo dozowania wyznacza wydajność chłodzenia. Wskazuje również otwarte kwestie, których sam nie rozstrzygnie.',
            'Nic nie idzie dalej, dopóki inżynier nie zatwierdzi specyfikacji.',
          ],
          note: 'To przykład: każdy inżynier zobaczy terminal albo interfejs swojego agenta AI. Liczby to założenia projektowe projektu demonstracyjnego.',
        },
      ],
    },
    {
      id: 'processview',
      layer: 'processview',
      eyebrow: 'Warstwa 1 · ProcessView',
      title: 'P&ID, który działa',
      intro: [
        'Po zatwierdzeniu specyfikacji agent AI buduje proces w ProcessView, nie jako obrazek schematu, ale jako model, w którym każdy element jest obiektem inżynierskim z doborem za plecami.',
      ],
      steps: [
        {
          id: 'pv-build',
          stage: 'pv-build',
          kicker: 'Element po elemencie',
          title: 'Urządzenia, rurociągi, zawory, przyrządy',
          body: [
            'Agent AI najpierw stawia urządzenia (zbiornik, rozworkownicę, przenośnik kubełkowy, pompę), potem prowadzi rurociągi między ich króćcami, a na końcu dodaje zawory i przyrządy, których te linie potrzebują. Każdy rodzaj urządzenia ma swoją klasę i typ; urządzenie nietypowe agent AI tworzy na bieżąco.',
          ],
        },
        {
          id: 'pv-selection',
          stage: 'pv-selection',
          kicker: 'Pełny dobór',
          title: 'Każdy element niesie swoje decyzje',
          body: [
            'Kliknij dowolny zawór, a otworzy się jego karta: co robi, jakie ma stany, które króćce łączy, jakie ma parametry. Przyrządy niosą zasadę pomiaru i sposób montażu, a rurociągi materiał i klasę. To wytyczne, które mechanika, AKPiA i sterowanie przeczytają w kolejnych warstwach.',
          ],
        },
        {
          id: 'pv-registers',
          stage: 'pv-registers',
          kicker: 'Rejestry, nie listy',
          title: 'Materiały, rurociągi, przyrządy',
          body: [
            'Ten sam model jest też rejestrem: materiały z ich źródłami, rurociągi z klasami i średnicami, każdy przyrząd z jego pętlą. Nikt nie wpisuje tych tabel ręcznie: to schemat oglądany jako dane.',
          ],
        },
        {
          id: 'pv-sim',
          stage: 'pv-sim',
          kicker: 'Symulacja dynamiczna',
          title: 'Sprawdzone, zanim kupisz pierwszą rurę',
          body: [
            'Potem schemat rusza. Program szarży 30% napełnia zbiornik ługiem, mierzy go, uruchamia mieszadło i dozuje płatki worek po worku, a płaszcz z wodą lodową odbiera ciepło rozpuszczania. Cztery godziny i czterdzieści minut procesu w kilka sekund.',
            'Temperatura rośnie do wartości zadanej 60\u00a0°C i na niej się utrzymuje: program wstrzymuje dozowanie za każdym razem, gdy szacowana temperatura w najgorszym przypadku by ją przekroczyła. To ta sama blokada, którą uruchomi prawdziwa instalacja.',
          ],
        },
        {
          id: 'pv-plc',
          stage: 'pv-plc',
          kicker: 'Sterowanie',
          title: 'Gotowe programy na emulowanym sterowniku PLC',
          body: [
            'Sekwencja szarży (reset, napełnianie, pomiar, dolewka, start mieszadła, dozowanie, rozpuszczanie, próbka) działa jako program sterowania na emulowanym sterowniku PLC, z krokami operatora tam, gdzie zadziała prawdziwy operator. Na koniec szarży podano 5,5 tony NaOH, a przewidywane stężenie produktu wynosi 30%.',
          ],
        },
      ],
    },
    {
      id: 'mechgraph',
      layer: 'mechgraph',
      eyebrow: 'Warstwa 2 · MechGraph',
      title: 'Maszyna z jej własnych obliczeń',
      intro: [
        'Proces wie już, co zbiornik ma robić. MechGraph zamienia to w maszynę: istniejący zbiornik nierdzewny, jego płaszcz half-pipe, króćce i pomost oraz nowe mieszadło dobrane do zadania.',
      ],
      steps: [
        {
          id: 'mg-model',
          stage: 'mg-turntable',
          kicker: 'Geometria jako program',
          title: 'Projektowana z danych, nie rysowana',
          body: [
            'Zbiornik i mieszadło powstają z parametrów. Gdy proces zmienia przepływ albo temperaturę, model, obliczenia i rysunki wynikają z tego samego źródła.',
          ],
        },
        {
          id: 'mg-mixing',
          stage: 'mg-section',
          kicker: 'Mieszanie',
          title: 'Moc mieszania i zawieszanie cząstek',
          body: [
            'Przekrój zbiornika odsłania pytania projektowe: ile mocy potrzebuje mieszadło i czy utrzyma płatki w zawieszeniu, aż się rozpuszczą, zamiast pozwolić im osiąść na dennicy, podczas gdy lepkość, temperatura i gęstość roztworu zmieniają się dynamicznie.',
          ],
        },
        {
          id: 'mg-shaft',
          stage: 'mg-shaft',
          kicker: 'Mechanika',
          title: 'Ugięcie wału, prędkość krytyczna, wytrzymałość',
          body: [
            'Długi, wspornikowy wał nie może ugiąć się aż do ścianki zbiornika ani pracować w pobliżu prędkości krytycznej; płaszcz i powłoka muszą przenieść ciśnienie i temperaturę według EN 13445. Każde sprawdzenie to obliczenie z zapisanymi danymi wejściowymi.',
          ],
        },
        {
          id: 'mg-cfd',
          stage: 'mg-tracks',
          kicker: 'Przepływ',
          title: 'CFD i AI-assisted CFD',
          body: [
            'Przepływ badamy symulacjami CFD na naszych węzłach obliczeniowych. AI-assisted CFD (Walrus, Gemini) pozwala nam szybciej zweryfikować warianty i szukać stanu optymalnego. Tu płatki wpadają przez króciec zasypowy i są wciągane w dół przez cyrkulację.',
          ],
        },
      ],
    },
    {
      id: 'iongrid',
      layer: 'iongrid',
      eyebrow: 'Warstwa 2 · IonGrid',
      title: 'Równolegle: szafa sterownicza',
      intro: [
        'Podczas gdy powstaje maszyna, logika sterowania z ProcessView zamienia się w sprzęt. IonGrid pracuje na tym samym poziomie stosu co MechGraph: dwa tory, jeden zestaw decyzji pod spodem.',
      ],
      steps: [
        {
          id: 'ig-assembly',
          stage: 'ig-assembly',
          kicker: 'Podzespoły katalogowe',
          title: 'Prawdziwa szafa, część po części',
          body: [
            'Szafa składa się z modeli producentów: obudowa i płyta montażowa, szyny i korytka, trzy przemienniki częstotliwości dla napędów procesowych, zasilacze, sterownik z modułami I/O, listwy zaciskowe i okablowanie.',
          ],
        },
        {
          id: 'ig-heat',
          stage: 'ig-heat',
          kicker: 'Zyski ciepła',
          title: 'Na czym opiera się bilans',
          body: [
            'Każdy aparat z podaną w karcie stratą mocy wchodzi do bilansu zysków ciepła szafy. Dla tej szafy znane jest już co najmniej 705\u00a0W, głównie z przemienników. Sterowanie pneumatyczne pozostaje powiązane z P&ID: wyjścia sterownika zasilają elektrozawory, które przestawiają zawory procesowe.',
          ],
        },
        {
          id: 'ig-register',
          stage: 'ig-register',
          kicker: 'Rejestry',
          title: 'Aparaty i I/O generowane razem z szafą',
          body: [
            'Rejestr aparatów i lista I/O wychodzą z tego samego modelu, sygnał po sygnale, gotowe dla elektryka i działu zakupów.',
          ],
        },
      ],
    },
    {
      id: 'plantmesh',
      layer: 'plantmesh',
      eyebrow: 'Warstwa 3 · PlantMesh',
      title: 'Wszystko spotyka się w jednym modelu',
      intro: [
        'Maszyna z MechGraph i szafa z IonGrid trafiają do PlantMesh, gdzie węzeł składa się razem z konstrukcją stalową, pomostami, rurociągami i ludźmi, którzy będą go obsługiwać.',
      ],
      steps: [
        {
          id: 'pm-assembly',
          stage: 'pm-assembly',
          kicker: 'Złożenie',
          title: 'Zbieżność w węzeł technologiczny',
          body: [
            'Wokół zbiornika stają słupy i belki, pomost rozworkownicy, przenośnik kubełkowy, pompa i rurociągi; linie z P&ID prowadzone są w 3D od króćca do króćca.',
          ],
        },
        {
          id: 'pm-iso',
          stage: 'pm-iso',
          kicker: 'Izometrie',
          title: 'Rysunek dla każdej linii',
          body: [
            'Każda linia dostaje izometrię z wykazem części: tu linia tłoczna pompy obok swojego arkusza.',
          ],
        },
        {
          id: 'pm-steel',
          stage: 'pm-steel',
          kicker: 'Stal',
          title: 'Konstrukcje z MES, rysunki z modelu',
          body: [
            'Konstrukcje wsporcze przechodzą analizę MES, zanim zostaną wydane ich rysunki: tu wieża, na której stoi operator, obok swojego rysunku złożeniowego.',
          ],
        },
        {
          id: 'pm-clash',
          stage: 'pm-clash',
          kicker: 'Detekcja kolizji',
          title: 'Wykryte w modelu, nie na budowie',
          body: [
            'Automatyczna detekcja kolizji sprawdza urządzenia, trasy i konstrukcje względem siebie. W tym węźle zgłasza dwie kolizje: obwiednia przenośnika kubełkowego przecina jego zsyp. Dokładnie tam takie wyniki powinny się pojawiać: na ekranie, tygodnie przed montażem.',
          ],
        },
      ],
    },
    {
      id: 'architecture',
      layer: 'architecture',
      eyebrow: 'Warstwa 4 · Architecture',
      title: 'Węzeł w swoim zakładzie',
      intro: [
        'Polecenie mówiło o wolnym fragmencie zakładu. W Architecture węzeł wychodzi z własnego modelu i dołącza do terenu: ukształtowanie terenu z publicznych danych geoprzestrzennych, drogi i budynki dookoła, stopy fundamentowe pod nogami zbiornika, dojazd dla cystern.',
      ],
      steps: [
        {
          id: 'ar-site',
          stage: 'ar-site',
          kicker: 'Teren',
          title: 'Od węzła do zakładu',
          body: [
            'Węzeł zajmuje wolny kawałek terenu, o który prosiło polecenie, i pytania się zmieniają: co stoi obok (farma zbiorników z tacą, stanowisko rozładunku, hale), jak dojadą do niego cysterny, gdzie wolno jeździć i składować. Architecture odpowiada na nie w tym samym modelu.',
          ],
        },
        {
          id: 'ar-plan',
          stage: 'ar-wipe',
          kicker: 'Plan zagospodarowania',
          title: 'Rysunek jest modelem',
          body: [
            'Z góry ten sam model staje się planem zagospodarowania terenu, rysowanym przez własny renderer platformy (budynki, strefy, sieci podziemne, wykaz obiektów i tabelka rysunkowa), więc rysunek i scena 3D nie mogą się rozjechać.',
          ],
        },
      ],
    },
    {
      id: 'documents',
      eyebrow: 'Wynik',
      title: 'Zweryfikowany pakiet projektowy',
      intro: [],
      steps: [
        {
          id: 'docs-stack',
          stage: 'docs-stack',
          kicker: 'Eksport',
          title: 'Gotowa dokumentacja wykonawcza',
          body: [
            'Na końcu warstwy eksportuje się jako dokumenty: P&ID, raporty procesowe i symulacyjne, rysunki mieszalnika, izometrie rurociągów, rysunki konstrukcji i pomostów, rozmieszczenie aparatów w szafach i schematy obwodów oraz plan zagospodarowania terenu. Każdy dokument ma numer i rewizję, a zarazem jest widokiem decyzji podjętych niżej.',
            'Z przetestowanego procesu i modelu 3D sprawdzonego pod kątem kolizji.',
          ],
        },
      ],
    },
    {
      id: 'infrastructure',
      eyebrow: 'Pod maską',
      title: 'Zasady, moc obliczeniowa i otwarta architektura',
      intro: [
        'Środowisko jest tyle warte, ile potrafi sprawdzić. Za aplikacjami Simon Lab stoi maszyneria, która zamienia propozycję agenta AI w zweryfikowany wynik.',
      ],
      steps: [
        {
          id: 'infra-rules',
          stage: 'infra-rules',
          kicker: 'Zasady',
          title: 'Dobra praktyka, spisana',
          body: [
            'Zasady dobrej praktyki inżynierskiej są częścią środowiska, a nie polecenia: co musi istnieć, zanim ruszy kolejna warstwa, co musi nieść każdy element, które kontrole muszą przejść. To one prowadzą agenta AI do kompletnego projektu we właściwej kolejności.',
          ],
        },
        {
          id: 'infra-compute',
          stage: 'infra-compute',
          kicker: 'Moc obliczeniowa',
          title: 'Komputery dużej mocy w zestawie',
          body: [
            'CFD liczy się na dedykowanych węzłach obliczeniowych, MES sprawdza konstrukcje, rendering na GPU tworzy wizualizacje, które widzisz na tej stronie, a AI-assisted CFD (Walrus, Gemini) przyspiesza przegląd wariantów. Twój agent AI nie potrzebuje własnego klastra.',
          ],
        },
        {
          id: 'infra-open',
          stage: 'infra-open',
          kicker: 'Wkrótce',
          title: 'Open source',
          body: [
            'Otwieramy architekturę: sposób, w jaki warstwy, zasady i aplikacje do siebie pasują, zostanie udostępniony jako open source, aby inni mogli budować na metodzie bottom-up i uruchamiać ją we własnych środowiskach.',
          ],
        },
      ],
    },
  ],
  closing: {
    eyebrow: 'Teraz w becie',
    title: 'Inżynieria chemiczna bottom-up, z zaufanymi partnerami',
    body: [
      'Simon Lab jest w fazie beta z niewielką grupą partnerów, projekt po projekcie. Jeśli planujesz węzeł technologiczny albo budujesz agentów AI, którzy mają go projektować, chętnie porozmawiamy.',
    ],
    filmTitle: 'Film',
    filmCaption: 'Ten sam projekt w dwie minuty: od specyfikacji do planu zagospodarowania terenu.',
    play: 'Odtwórz film',
    cta: { beta: 'Dołącz do bety', apps: 'Poznaj aplikacje' },
  },
  notes: [
    'Projekt demonstracyjny jest zanonimizowany: nie pokazujemy nazw, numerów ani lokalizacji klienta i zakładu.',
    'Ekrany i rendery pochodzą z platformy; otoczenie zakładu to model generyczny; tory cząstek to poglądowa wizualizacja.',
    'Wyniki detekcji kolizji pokazujemy tak, jak raportuje je model; wartość zysków ciepła to znana dolna granica dla bieżącej rewizji szafy.',
  ],
  labels: {
    agent: 'Twój agent AI',
    chat: 'Czat',
    newChat: 'Nowy czat',
    chatQ1: 'Dobierz pompę na 12\u00a0m³/h.',
    chatA1: 'Oto dokumentacja doboru.',
    pdf1: 'dobor-pompy.pdf',
    chatQ2: 'Sprawdź wytrzymałość wału mieszadła.',
    chatA2: 'Oto obliczenia wytrzymałościowe.',
    pdf2: 'wytrzymalosc-walu.pdf',
    chatQ3: 'Opisz sterowanie dozowaniem.',
    chatA3: 'Oto opis sterowania.',
    pdf3: 'sterowanie-dozowania.pdf',
    aiAgent: 'Agent AI',
    plan: 'Plan',
    use: 'Narzędzia',
    files: 'Pliki',
    check: 'Sprawdzenie',
    rev: 'v0.{n}',
    beta: 'beta',
    release: 'v1.0',
    agentView: 'Agent AI',
    engineerView: 'Inżynier',
    excerpt: 'fragment',
    formats: 'DXF · STEP · PDF · XML · DOCX',
    project: 'Projekt inżynierii chemicznej',
    environment: 'Środowisko Simon Lab',
    tools: 'Aplikacje inżynierskie',
    rules: 'Zasady dobrej praktyki',
    compute: 'Moc obliczeniowa: CFD · MES · rendering',
    layer: 'Warstwa',
    simClock: 'czas symulacji',
    timelapse: '×60 · przyspieszenie',
    step: 'Krok',
    level: 'Napełnienie',
    temp: 'Temperatura',
    dosed: 'Podane NaOH',
    limit: 'limit 60\u00a0°C',
    batchDone: 'szarża 30% ✓',
    filling: 'Napełnianie',
    mixing: 'Mieszanie',
    dosing: 'Dozowanie',
    cooling: 'Chłodzenie',
    plc: 'PLC · emulowany',
    visualization: 'wizualizacja',
    findings: '2 kolizje',
    knownLosses: 'znane straty ≥ 705\u00a0W',
    s1: 'Reset szarży przez operatora',
    s2: 'Napełnianie ługiem',
    s3: 'Pomiar stężenia ługu',
    s4: 'Dolewka kompensacyjna i pomiar końcowy',
    s5: 'Uruchomienie mieszadła',
    s6: 'Dozowanie NaOH z worków',
    s7: 'Rozpuszczanie i stabilizacja',
    s8: 'Pobór próbki laboratoryjnej',
  },
};
