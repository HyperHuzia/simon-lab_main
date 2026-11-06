import type { RoadmapCopy } from './types';

// Polski, pisany natywnie; te same kroki i ten sam cel (ACHEMA 2027) co wersja angielska.
export const roadmap: RoadmapCopy = {
  lang: 'pl',
  meta: {
    title: 'Roadmapa | Simon Lab',
    description:
      'Gdzie jest dziś Simon Lab i jakie kroki dzielą go od gotowego produktu: utwardzanie aplikacji i infrastruktury, projekty z Trusted Partners, szerokie testy, open source i premiera z Trusted Partners na ACHEMA 2027.',
  },
  hero: {
    eyebrow: 'Roadmapa',
    title: 'Od prywatnej bety do produktu',
    lede: 'Simon Lab jest w prywatnej becie. Oto kroki między dniem dzisiejszym a gotowym produktem, w kolejności, w jakiej je robimy, i to, co każdy z nich znaczy dla partnerów, którzy będą z nami pracować.',
    target: 'Cel: premiera i koniec bety na ACHEMA 2027, Frankfurt, 14–18 czerwca 2027',
  },
  goal: {
    eyebrow: 'Do czego zmierzamy',
    title: 'Od jednego zakresu do pakietu inżynierskiego',
    lede: 'Na premierę uporządkowany zakres projektu ma wystarczyć, by platforma przygotowała:',
    points: [
      'strukturę projektu oraz wizualny model procesu z symulacją',
      'struktury sterowania niezależne od dostawcy, gotowe pod automatykę PLC',
      'model CAPEX oparty na prawdziwych zakupach: dostawcach, ofertach i budżetach',
      'dokumentację inżynierską, wszystko z jednego źródła prawdy',
    ],
    promise:
      'Simon Lab nie zastępuje osądu inżyniera. Daje inżynierom czytelny maszynowo kręgosłup projektu, dzięki któremu szybciej przeglądają, poprawiają, symulują, wyceniają, dokumentują i automatyzują.',
  },
  road: { eyebrow: 'Krok po kroku', title: 'Droga do premiery' },
  status: { now: 'Teraz', next: 'Następny', planned: 'Planowany', launch: 'ACHEMA 2027 · 14–18 czerwca 2027', after: 'Po premierze' },
  steps: [
    {
      id: 'apps',
      status: 'now',
      title: 'Utwardzanie aplikacji',
      body: ['Aplikacje powstały w szybkich sprintach prototypowania z pomocą AI. Teraz utwardzamy je do prawdziwej pracy:'],
      points: [
        'Aktualny, wspierany stos technologiczny w każdej aplikacji i powtarzalne testy przed każdym wydaniem.',
        'Jedna tożsamość każdego projektu we wszystkich aplikacjach i jedna sesja, która przechodzi z inżynierem między nimi.',
        'Agenci AI zmieniają projekt tylko typowanymi, walidowanymi komendami. Zmiany niszczące wymagają akceptacji człowieka.',
        'Każda akcja jest zapisywana do audytu, a platforma sama się testuje, zanim wyniki trafią do ludzi.',
      ],
    },
    {
      id: 'infra',
      status: 'next',
      title: 'Utwardzanie infrastruktury',
      body: [
        'Agenci AI pracują na komputerach, a te potrzebują dużo więcej mocy niż komputery w biurze projektowym: agent AI pracuje dużo szybciej niż człowiek i korzysta z wyspecjalizowanych narzędzi, takich jak symulacja procesu, obliczenia wytrzymałościowe (MES) i symulacje przepływów (CFD).',
        'Przygotowujemy tę infrastrukturę dla naszych Trusted Partners: moc obliczeniową, dyski, backupy i bezpieczny dostęp zdalny.',
      ],
    },
    {
      id: 'calibration',
      status: 'planned',
      title: 'Kalibracja: projekty z Trusted Partners',
      body: [
        'Pierwsze projekty realizujemy razem z Trusted Partners w formie gotowych artefaktów: dokumentacji PDF, modeli 3D i wyników pasujących do ich własnego sposobu pracy. Każdy z nich kalibruje platformę względem oczekiwań ich klientów i inżynierów.',
      ],
    },
    {
      id: 'access',
      status: 'planned',
      title: 'Dostęp dla inżynierów',
      body: [
        'Trusted Partners - osoby prywatne, firmy inżynierskie, uczelnie. Zapraszamy ich do samodzielnego testowania platformy w modelu BYOA (bring your own agent: każdy pracuje z własnym agentem AI), przez dostęp do Simon Lab CLI.',
      ],
    },
    {
      id: 'open',
      status: 'planned',
      title: 'Open source i społeczność',
      body: ['Sprawdzona w boju platforma staje się open source, żeby zaprosić do współpracy szersze grono inżynierów: z całego świata, żeby razem z nami ją ulepszali i mówili, gdzie jeszcze nie domaga. Kto chce, może ją też forkować.'],
    },
    {
      id: 'clients',
      status: 'planned',
      title: 'Szerszy dostęp i skalowanie infrastruktury',
      body: [
        'Udostępniamy narzędzie dla inżynierów, którzy chcą zaprosić do pracy w projekcie członków swojego zespołu albo zespół po stronie własnego klienta. Ich klienci widzą realizowany dla nich projekt, przejrzysty także dla własnego agenta AI klienta.',
      ],
    },
    {
      id: 'scale',
      status: 'planned',
      title: 'Fizyczna architektura i niezawodność',
      body: [
        'Utrzymanie platformy dla szerszego grona klientów wymaga sporej mocy obliczeniowej. Rozbudowujemy stojącą za nią fizyczną architekturę i pracujemy nad niezawodnością oraz nieprzerwanym dostępem.',
      ],
    },
    {
      id: 'launch',
      status: 'launch',
      title: 'Oferta z Trusted Partners i koniec bety',
      body: [
        'Simon Lab wychodzi z bety z ofertą przygotowaną razem z Trusted Partners. To oni nadzorują AI, walidują wyniki i wnoszą wiedzę inżynierską. Wyniki dopracowują ludzie, a klient widzi je w platformie albo poza nią, w eksportach.',
        'Platforma jest open source, więc projekty łatwo przenieść do niej i z niej: w epoce AI kod programu jest językiem zrozumiałym dla każdego agenta AI. Bez gatekeepingu. Dane należą do użytkownika, a każdy może przynieść własną moc obliczeniową (BYOC) i hostować platformę na własnym sprzęcie.',
        'Sieć Trusted Partners szybko przygotowuje propozycje i projekty instalacji chemicznych. To jest produkt: platforma sama instalacji nie zaprojektuje. Przyspiesza pracę, ale wiedza o tym, który proces jest właściwy, które rozwiązania są dobre, a które nie, i czego klient potrzebuje, także tego, czego nie powiedział, pozostaje pracą ludzi. Inżynier zostawia za sobą kreślenie i siermiężną robotę i wchodzi w rolę architekta inżynierii chemicznej.',
      ],
    },
    {
      id: 'provider',
      status: 'after',
      title: 'Infrastruktura dla agenta AI z wyboru',
      body: ['Po premierze Simon Lab jako firma staje się dostawcą infrastruktury: dostarcza moc obliczeniową, której potrzebują agenci AI pracujący w tym środowisku, jedyną rezydualną wartość w epoce AI.'],
    },
  ],
};
