import type { GoogleAdsCopy } from './types';

// Search campaign: distinct service pages and manual CPC. Service contact only reveals the email address.
// Account identifiers, budget and dates stay outside this public repository. One more ad group exists only in the
// account (its keywords are not published here); it is not a leftover, leave it as it is.
// The CFD keywords need a policy exemption in the account: Google reads "CFD" as a financial product.
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
      "cpc": 3,
      "keywords": [
        "\"projektowanie instalacji przemysłowych\"",
        "\"projektowanie instalacji technologicznych\"",
        "\"projektowanie rurociągów przemysłowych\"",
        "[projekt procesowy]",
        "\"projektowanie rurociągów\"",
        "\"projektowanie instalacji chemicznych\"",
        "\"projektowanie instalacji procesowych\"",
        "\"inżynieria procesowa\""
      ],
      "bids": {
        "\"projektowanie instalacji przemysłowych\"": 6,
        "\"projektowanie instalacji technologicznych\"": 4.5,
        "\"projektowanie rurociągów przemysłowych\"": 4,
        "[projekt procesowy]": 3.5,
        "\"projektowanie rurociągów\"": 3,
        "\"projektowanie instalacji chemicznych\"": 3,
        "\"projektowanie instalacji procesowych\"": 3,
        "\"inżynieria procesowa\"": 1.5
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
        "Wsparcie biur projektowych",
        "Instalacje przemysłowe",
        "Instalacje technologiczne",
        "Projektowanie instalacji",
        "Biuro projektowe dla chemii",
        "Simon Lab | Inżynieria"
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
      "cpc": 4,
      "keywords": [
        "\"projektowanie szaf sterowniczych\"",
        "\"projektowanie szaf elektrycznych\""
      ],
      "bids": {
        "\"projektowanie szaf sterowniczych\"": 7.5,
        "\"projektowanie szaf elektrycznych\"": 6.7
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
        "Wsparcie projektowe AKPiA",
        "Projekty szaf sterowniczych",
        "Projektowanie szaf AKPiA",
        "Szafy elektryczne: projekt",
        "Schematy elektryczne szaf",
        "Simon Lab | Automatyka"
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
        "[projekt zbiornika]",
        "\"projekt mieszalnika\"",
        "\"projektowanie mieszalników\"",
        "\"projektowanie zbiorników ciśnieniowych\""
      ],
      "bids": {
        "\"projektowanie zbiorników\"": 5.5,
        "[projekt zbiornika]": 4.5,
        "\"projekt mieszalnika\"": 3.5,
        "\"projektowanie mieszalników\"": 3.5,
        "\"projektowanie zbiorników ciśnieniowych\"": 3.5
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
        "Obliczenia i modele 3D",
        "Projektowanie zbiorników",
        "Projekt mieszalnika",
        "Zbiorniki procesowe",
        "Obliczenia zbiornika",
        "Simon Lab | Zbiorniki"
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
      "name": "Symulacje CFD",
      "page": "/services/",
      "cpc": 3,
      "keywords": [
        "\"symulacja cfd\"",
        "\"symulacje cfd\"",
        "\"analiza cfd\"",
        "\"obliczenia cfd\"",
        "\"usługi cfd\""
      ],
      "path": [
        "uslugi",
        "cfd"
      ],
      "headlines": [
        "Symulacje CFD dla przemysłu",
        "Analiza CFD aparatu",
        "Obliczenia CFD i FEM",
        "Symulacja CFD mieszalnika",
        "CFD mieszania i przepływu",
        "Usługi CFD dla zakładów",
        "Simon Lab | Symulacje CFD",
        "Raport z symulacji CFD",
        "Symulacja przepływu w aparacie",
        "Wyniki sprawdza inżynier",
        "Dobór mieszadła z CFD",
        "Wycena na podstawie zakresu"
      ],
      "descriptions": [
        "Symulacje przepływu (CFD) aparatów i instalacji. Raport z wynikami i wnioskami.",
        "Mieszanie i przepływy liczone pod konkretny proces. Wyniki sprawdza inżynier.",
        "Symulacje przepływu (CFD) i obliczenia wytrzymałościowe (FEM) z jednego modelu.",
        "Zakres i termin ustalane e-mailem przed realizacją. Wycena na podstawie danych procesu."
      ],
      "negatives": []
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
        "[simon lab]": 2,
        "[simonlab]": 2,
        "[simon-lab.org]": 2
      },
      "path": [
        "",
        ""
      ],
      "headlines": [
        "Simon Lab | Oficjalna strona",
        "Inżynieria chemiczna",
        "Projekty instalacji i aparatów",
        "Dokumentacja i modele 3D",
        "Poznaj Simon Lab",
        "Simon Lab",
        "Simon Lab | Inżynieria",
        "Biuro projektowe Simon Lab",
        "Projekty dla przemysłu",
        "Aparaty, instalacje, AKPiA",
        "Usługi inżynierskie",
        "Zlecenia e-mailem"
      ],
      "descriptions": [
        "Simon Lab: projekty instalacji chemicznych i procesowych, aparatury i automatyki.",
        "Poznaj usługi i platformę Simon Lab. Skontaktuj się z nami w sprawie projektu."
      ],
      "negatives": [
        "gra",
        "gry",
        "game",
        "games",
        "yale",
        "stanford"
      ]
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
    "wynagrodzenie",
    "kariera",
    "opinie",
    "pdf",
    "wykład",
    "wykłady",
    "definicja",
    "podręcznik",
    "książka",
    "książki",
    "politechnika",
    "uczelnia",
    "uniwersytet",
    "kierunek",
    "rekrutacja",
    "student",
    "studenci",
    "studenta",
    "studentów",
    "magisterka",
    "inżynierka",
    "dyplomowa",
    "egzamin",
    "zadania",
    "sylabus",
    "pwr",
    "agh",
    "przykład",
    "przykłady",
    "program",
    "programy",
    "oprogramowanie",
    "software",
    "ansys",
    "fluent",
    "openfoam",
    "solidworks",
    "comsol",
    "darmowy",
    "darmowe",
    "\"za darmo\"",
    "free",
    "download",
    "wikipedia",
    "youtube",
    "kalkulator",
    "dwg",
    "\"co to\""
  ]
};
