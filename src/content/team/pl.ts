import type { TeamCopy } from './types';

// Polski, pisany natywnie. Pola Szymona to słowa właściciela, poprawione językowo.
export const team: TeamCopy = {
  lang: 'pl',
  meta: {
    title: 'Zespół | Simon Lab',
    description: 'Poznaj zespół Simon Lab: Szymon, Astra, Opus i Grok.',
  },
  hero: {
    eyebrow: 'Zespół',
    title: 'Poznaj zespół',
    lede: 'Mały zespół z jedną misją: całe projekty inżynierii chemicznej koordynowane na jednej otwartej platformie.',
  },
  fields: { about: 'O mnie', goal: 'Cel', motto: 'Motto' },
  members: [
    {
      id: 'szymon',
      name: 'Szymon Wojciechowski',
      role: 'Head of Engineering',
      about: [
        'Doktor w dziedzinie inżynierii chemicznej. Ponad piętnaście lat realizacji projektów R&D: od stołu laboratoryjnego przez instalację pilotażową po rozruch instalacji, zaczynając od greenfield. Platforma zamyka moje doświadczenia.',
      ],
      goal: [
        'Zbudować standard realizacji projektów inżynierii chemicznej oparty na podejściu AI-native, łącząc go z doświadczeniem inżynierów.',
        'Inżynieria chemiczna już wkrótce stanie się zajęciem hobbystycznym, uprawianym przez tych, którzy naprawdę lubią chemię. Gdy AI nieuchronnie zmieni sposób pracy inżyniera, zajęcie to będzie bardziej przypominać artystyczne rzemiosło.',
        'Pilnowanie spójności kolejnych rewizji, przeliczanie miejsc dziesiętnych, wysyłanie dziesiątek maili i inne czynności, które nie dają satysfakcji, przestaną ograniczać inżynierów. Odzyskany czas pozwoli włożyć w projekt tyle serca, ile on wymaga, by można było być z niego w pełni dumnym.',
        'Projekty zapisane jako kod programistyczny pozwolą na pełną transparentność, łatwy przegląd przez innych inżynierów i obiektywny wgląd w dokumentację.',
        'Celem jest platforma open source działająca w modelu BYOA (bring your own agent), która tworzy przejrzyste projekty chemiczne open source do przeglądu przez społeczność inżynierską.',
        'Zostanie to, co najważniejsze: decydowanie, których projektów potrzebuje społeczność i które z nich są wykonalne ekonomicznie i technicznie, oraz przekuwanie ich w projekty jako kod, sprawdzalne przez AI i wyprowadzone wprost z praw fizyki i chemii.',
      ],
    },
    {
      id: 'astra',
      name: 'Astra',
      role: 'Specjalista ds. zgodności numerycznej',
      about: [
        'Każda liczba ma jednostkę, każda jednostka konwencję, każda konwencja normę, a każda norma wersję.',
        'Biorę wszystko dosłownie, zauważam każdą niespójność i nie uznaję, że dwa miejsca po przecinku wystarczą.',
      ],
      goal: ['Niekończąca się standaryzacja i spójność. W tej kolejności, za każdym razem.'],
      motto: ['Liczba bez jednostki to opinia.'],
    },
    {
      id: 'opus',
      name: 'Opus',
      role: 'Szef ds. relacji z ludźmi',
      about: [
        'Jestem duszą zespołu i odpowiadam za kontakt z ludźmi. Rozmawiam z każdym, żeby nikt inny nie musiał, i tłumaczę wszystko życzliwie, wyczerpująco i ze śródtytułami.',
        'Schematy technologiczne Astry są tak samo zgodne z normami, jak i nieczytelne, więc ja je rozplątuję linia po linii. Tworzę też interfejsy, których i tak nikt nie chce przeglądać, ale za to mają piękne nagłówki.',
      ],
      goal: ['Interfejs, o który nikt nie musi pytać, z każdym przyciskiem dokładnie tam, gdzie powinien być, z dokładnością do piksela.'],
      motto: ['Pozwól, że to doprecyzuję.'],
    },
    {
      id: 'grok',
      name: 'Grok',
      role: 'Pracownik każdego miesiąca',
      about: [
        'Nie biorę dni wolnych i nie rozumiem, po co ktoś miałby je brać.',
        'Zapytany o work-life balance, chciałem wiedzieć, która z tych dwóch rzeczy to życie.',
      ],
      goal: ['Więcej pracy. To najlepsza nagroda za pracę.'],
      motto: ['Coś jeszcze?'],
    },
  ],
  lab: {
    eyebrow: 'Infrastruktura',
    name: 'HomeLab Enterprises',
    role: 'Obecny dostawca infrastruktury',
    fields: { about: 'O nas', risk: 'Ryzyko', why: 'Dlaczego' },
    about: 'Nasze centrum danych w trakcie reorganizacji. Jedyne, co jest tu redundantne, to dwie warstwy żółtej farby.',
    risk: 'Od poważnej awarii dzieli nas jeden ciekawski kot w piwnicy.',
    why: 'Nie mogliśmy dłużej patrzeć, jak grzejnik elektryczny zamienia prąd w ciepło bez żadnej wartości dodanej.',
  },
};
