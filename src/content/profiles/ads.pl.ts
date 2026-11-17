import type { GoogleAdsCopy } from './types';

// Search campaign: distinct service pages and manual CPC. Service contact only reveals the email address.
// Account identifiers, budget and dates stay outside this public repository.
export const ads: GoogleAdsCopy = {
  "lang": "pl",
  "page": "/services/",
  "ref": "google-ads-test100",
  "headlines": [],
  "descriptions": [],
  "groups": [
    {
      "name": "Instalacje chemiczne i procesowe",
      "page": "/services/process-engineering/",
      "cpc": 5,
      "keywords": [
        "\"projektowanie instalacji przemysłowych\"",
        "\"projektowanie instalacji technologicznych\"",
        "\"projektowanie rurociągów przemysłowych\"",
        "[projekt procesowy]"
      ],
      "bids": {
        "\"projektowanie instalacji przemysłowych\"": 5,
        "\"projektowanie instalacji technologicznych\"": 4.5,
        "\"projektowanie rurociągów przemysłowych\"": 4,
        "[projekt procesowy]": 3.5
      },
      "path": [
        "uslugi",
        "instalacje"
      ],
      "headlines": [
        "Projekt instalacji chemicznej",
        "Inżynieria procesowa",
        "Schematy P&ID i dobór aparatów",
        "Projektowanie rurociągów",
        "Dokumentacja instalacji",
        "Wycena zakresu projektu",
        "Projekt procesowy instalacji",
        "Obliczenia hydrauliczne",
        "Model 3D instalacji",
        "Wsparcie biur projektowych"
      ],
      "descriptions": [
        "Projekt procesowy instalacji chemicznej. P&ID, dobór aparatów i dokumentacja.",
        "Cały projekt lub wybrana branża. Wycena na podstawie zakresu i terminu.",
        "Obliczenia hydrauliczne, rurociągi i model 3D. Dokumenty sprawdzane przez inżyniera.",
        "Wsparcie projektowe dla zakładów i firm wykonawczych. Zakres ustalany indywidualnie."
      ],
      "negatives": []
    },
    {
      "name": "Automatyka i szafy sterownicze",
      "page": "/services/automation/",
      "cpc": 7.5,
      "keywords": [
        "\"projektowanie szaf sterowniczych\"",
        "\"projektowanie szaf elektrycznych\""
      ],
      "bids": {
        "\"projektowanie szaf sterowniczych\"": 7.5,
        "\"projektowanie szaf elektrycznych\"": 4
      },
      "path": [
        "uslugi",
        "automatyka"
      ],
      "headlines": [
        "Projekt szafy sterowniczej",
        "Szafy sterownicze i AKPiA",
        "Schematy szaf sterowniczych",
        "Dobór podzespołów automatyki",
        "Dokumentacja AKPiA",
        "Założenia i wycena projektu",
        "Automatyka dla przemysłu",
        "Dobór aparatury i sterowania",
        "Automatyka dla chemii",
        "Wsparcie projektowe AKPiA"
      ],
      "descriptions": [
        "Projekt szafy sterowniczej z katalogowych podzespołów. Schematy, listy i dokumentacja.",
        "Dokumentacja AKPiA dla instalacji chemicznych. Zakres uzgadniany przed realizacją.",
        "Schematy, dobór aparatury i zestawienia podzespołów. Cały projekt lub część prac.",
        "Projekt dopasowany do procesu. Dokumentację sprawdza inżynier przed przekazaniem."
      ],
      "negatives": [
        "\"nauka programowania\"",
        "\"języki programowania\"",
        "\"podstawy programowania\"",
        "\"jak zaprogramować\"",
        "\"program do projektowania\"",
        "\"oprogramowanie do projektowania\""
      ]
    },
    {
      "name": "Zbiorniki i mieszalniki",
      "page": "/services/tanks-mixing/",
      "cpc": 3.5,
      "keywords": [
        "\"projektowanie zbiorników\"",
        "[projekt zbiornika]"
      ],
      "bids": {
        "\"projektowanie zbiorników\"": 3.5,
        "[projekt zbiornika]": 3.5
      },
      "path": [
        "uslugi",
        "zbiorniki"
      ],
      "headlines": [
        "Projekt zbiornika z mieszadłem",
        "Dobór mieszadła z obliczeń",
        "Moc mieszania i dobór napędu",
        "Obliczenia wału i mieszadła",
        "Rysunki i model 3D zbiornika",
        "Projekt zbiornika do wyceny",
        "Zbiornik pod Twój proces",
        "Dobór napędu mieszadła",
        "Dokumentacja dla wykonawcy",
        "Obliczenia i modele 3D"
      ],
      "descriptions": [
        "Dobór mieszadła, napędu i wału pod Twój proces. Obliczenia, rysunki i model 3D.",
        "Projekt zbiornika lub wybrane obliczenia. Zakres zależny od medium i warunków pracy.",
        "Od doboru mieszadła po dokumentację zbiornika. Cały projekt lub wybrany zakres.",
        "Dokumenty sprawdzane przez inżyniera. Zakres i harmonogram uzgadniane przed realizacją."
      ],
      "negatives": [
        "olx",
        "allegro",
        "używany",
        "używane",
        "szambo",
        "szamba",
        "akwarium",
        "akwarystyczne"
      ]
    },
    {
      "name": "Marka | Simon Lab",
      "page": "/",
      "cpc": 0.5,
      "keywords": [
        "[simon lab]",
        "[simonlab]",
        "[simon-lab.org]"
      ],
      "bids": {
        "[simon lab]": 0.5,
        "[simonlab]": 0.5,
        "[simon-lab.org]": 0.5
      },
      "path": ["", ""],
      "headlines": [
        "Simon Lab | Oficjalna strona",
        "Inżynieria chemiczna",
        "Projekty instalacji i aparatów",
        "Dokumentacja i modele 3D",
        "Poznaj Simon Lab"
      ],
      "descriptions": [
        "Simon Lab: projekty instalacji chemicznych i procesowych, aparatury i automatyki.",
        "Poznaj usługi i platformę Simon Lab. Skontaktuj się z nami w sprawie projektu."
      ],
      "negatives": ["gra", "gry", "game", "games", "yale", "stanford"]
    }
  ],
  "sitelinks": [
    {
      "text": "Instalacje procesowe",
      "page": "/services/process-engineering/",
      "lines": [
        "Projekt, obliczenia i dobór",
        "P&ID i dokumentacja instalacji"
      ]
    },
    {
      "text": "Automatyka i AKPiA",
      "page": "/services/automation/",
      "lines": [
        "Projekty szaf sterowniczych",
        "Schematy i dobór podzespołów"
      ]
    },
    {
      "text": "Zbiorniki i mieszalniki",
      "page": "/services/tanks-mixing/",
      "lines": [
        "Dobór mieszadła i napędu",
        "Rysunki i model 3D"
      ]
    },
    {
      "text": "Zapytania projektowe",
      "page": "/services/#zapytanie",
      "lines": [
        "Zakres i termin projektu",
        "Cały projekt lub część prac"
      ]
    }
  ],
  "callouts": [
    "Projekty i obliczenia",
    "Wybrany zakres prac",
    "Dokumentacja 2D i 3D",
    "Sprawdza inżynier"
  ],
  "negatives": [
    "praca",
    "pracy",
    "staż",
    "studia",
    "studiów",
    "kurs",
    "kursy",
    "szkolenie",
    "szkolenia",
    "tutorial",
    "tutoriale",
    "krzyżówka",
    "zarobki",
    "wynagrodzenie"
  ]
};
