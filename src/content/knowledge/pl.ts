import type { KnowledgeCopy } from './types';

export const knowledge: KnowledgeCopy = {
  lang: 'pl',
  meta: {
    title: 'Baza wiedzy | Simon Lab',
    description:
      'Ilustrowane artykuły o ideach stojących za Simon Lab: metoda bottom-up i projekt jako kod.',
  },
  hero: {
    eyebrow: 'Baza wiedzy',
    title: 'Jak działa Simon Lab',
    lede: 'Ilustrowane artykuły dla inżynierów, którzy chcą zobaczyć cały przepływ pracy: idee stojące za platformą, pokazane na prawdziwym projekcie demonstracyjnym.',
  },
  labels: {
    read: 'Przeczytaj artykuł',
    soon: 'W przygotowaniu',
    minutes: '{n}\u00a0min czytania',
    articles: 'Artykuły',
    preparing: 'W przygotowaniu',
  },
  entries: {
    'project-as-code': {
      title: 'Projekt jako kod',
      standfirst:
        'Dlaczego projekt instalacji chemicznej działa lepiej jako ustrukturyzowane, wersjonowane dane niż jako stos dokumentów i co to zmienia dla ludzi, którzy go projektują.',
    },
    'bottom-up': {
      title: 'Inżynieria chemiczna metodą bottom-up',
      standfirst:
        'Kompletny węzeł przygotowania roztworu ługu sodowego, budowany warstwa po warstwie: specyfikacja, proces, maszyny, szafy sterownicze, złożenie 3D, teren i dokumenty.',
    },
    'your-agent': {
      title: 'Twój agent AI, nasza praktyka inżynierska',
      standfirst:
        'Agent AI jest Twój: Codex, Claude Code, Hermes Agent, OpenClaw, Grok, DeepSeek, dots albo inny. Nasza jest dobra praktyka inżynierska spisana dla niego: kolejność działań, system ticketów, kontrola kompletności każdej dostawy, widoczność dla ludzi, którzy odpowiadają za projekt, i dokumentacja, którą każdy może sprawdzić. Do tego moc obliczeniowa, której Twój agent AI potrzebuje.',
    },
    hardware: {
      title: 'Płacisz tylko za sprzęt',
      standfirst:
        'Nasze aplikacje będą open source: możesz używać ich do własnych projektów i zmieniać je w celach niekomercyjnych. Płacisz za infrastrukturę: moc obliczeniową do symulacji procesu, obliczeń wytrzymałościowych (MES) i symulacji przepływów (CFD), dyski i backupy.',
    },
  },
};
