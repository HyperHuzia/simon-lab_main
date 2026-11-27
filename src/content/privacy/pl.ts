import type { PrivacyCopy } from './types';

// Polski, pisany natywnie; te same fakty co wersja angielska (src/content/privacy/en.ts).
export const privacy: PrivacyCopy = {
  lang: 'pl',
  meta: {
    title: 'Prywatność | Simon Lab',
    description:
      'Co zapisuje i wysyła simon-lab.org: bez zgody żadnych cookies, pomiar konwersji Google Ads tylko za zgodą, a e-maile służą do odpowiedzi i realizacji zleceń.',
  },
  eyebrow: 'Prywatność',
  title: 'Informacja o prywatności',
  lede: 'Co ta strona zapisuje i wysyła oraz co dzieje się z e-mailami do Simon Lab.',
  sections: [
    {
      title: 'Kto odpowiada za dane',
      body: [
        'Administratorem danych osobowych jest Szymon Wojciechowski Simon-Lab, Zabrze, Polska. Pełny adres i numery podatkowe są w sekcji {contact} na dole strony. Pytania o dane osobowe można kierować na adres {email}.',
      ],
    },
    {
      title: 'Bez zgody',
      body: [
        'Strona nie zapisuje cookies i nic nie wysyła do Google. Filmy odtwarzają się z plików samej strony i wczytują się dopiero po kliknięciu odtwarzania.',
        'Zapisany zostaje tylko wybór z banera cookies, w pamięci przeglądarki (localStorage, klucz sl-consent), na 12 miesięcy; potem baner pyta ponownie.',
      ],
    },
    {
      title: 'Za zgodą: Google Ads',
      body: [
        'Google Ads, prowadzone przez Google Ireland Limited, mierzy, czy wizyta z reklamy skończyła się kontaktem: kliknięciem adresu e-mail albo przycisku, który go pokazuje, lub skopiowaniem adresu. W tym celu strona wczytuje tag Google, który zapisuje cookies takie jak _gcl_au i _gcl_aw na maksymalnie 90 dni i wysyła do Google identyfikator kliknięcia reklamy, adres strony i dane techniczne przeglądarki, w tym adres IP. Nie ma remarketingu ani analityki.',
        'Google może przetwarzać te dane także poza Europejskim Obszarem Gospodarczym, jak opisuje to jego polityka prywatności (policies.google.com).',
        'Podstawą jest zgoda: art. 6 ust. 1 lit. a RODO i art. 399 ustawy Prawo komunikacji elektronicznej z 12 lipca 2024 r. Zgodę można wycofać w każdej chwili w „Ustawieniach cookies” na dole każdej strony albo przyciskiem poniżej; pomiar się wtedy kończy, a strona usuwa swoje cookies _gcl_. Wycofanie nie wpływa na to, co zmierzono wcześniej.',
      ],
      settings: true,
    },
    {
      title: 'E-maile',
      body: [
        'E-maile do Simon Lab służą do odpowiedzi i do realizacji zleceń: przy zleceniu lub zapytaniu o nie podstawą jest art. 6 ust. 1 lit. b RODO, przy innych wiadomościach nasz prawnie uzasadniony interes w odpowiedzi (art. 6 ust. 1 lit. f RODO). Przechowujemy je, dopóki sprawa tego wymaga, a dokumenty zlecenia tak długo, jak wymagają przepisy podatkowe.',
      ],
    },
    {
      title: 'Hosting',
      body: [
        'Stronę serwuje GitHub Pages (GitHub, Inc.) przez Cloudflare (Cloudflare, Inc.). Obie firmy otrzymują adres IP i dane każdego zapytania i przechowują je w logach serwera, żeby dostarczyć i chronić stronę (prawnie uzasadniony interes, art. 6 ust. 1 lit. f RODO).',
      ],
    },
    {
      title: 'Prawa',
      body: [
        'Każda osoba, której dane przetwarzamy, ma prawo dostępu do nich, ich sprostowania, usunięcia, ograniczenia przetwarzania i przenoszenia oraz prawo sprzeciwu, a zgodę może wycofać w każdej chwili. Przysługuje jej też skarga do Prezesa Urzędu Ochrony Danych Osobowych (Prezesa UODO) w Warszawie.',
      ],
    },
  ],
  updated: 'Ostatnia zmiana: 27 listopada 2026',
};
