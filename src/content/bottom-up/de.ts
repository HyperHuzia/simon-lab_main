import type { Article } from './types';

// German version, written from the English master (not word for word) and cross-checked against pl.ts. Same caveats
// as EN: particle tracks are a visualization and the plant surroundings a generic model (said in the notes at the
// end), clashes are shown as detected (never as resolved), the cabinet's heat losses are a known lower bound
// ("mindestens 705 W bekannt").
export const article: Article = {
  lang: 'de',
  meta: {
    title: 'Chemieanlagenbau nach dem Bottom-up-Prinzip | Simon Lab',
    description:
      'Simon Lab ist die Produktionsumgebung, in der Ihr KI-Agent ein vollständiges Anlagenprojekt Ebene für Ebene aufbaut, nach den Regeln der Ingenieurpraxis und mit echter Rechenleistung.',
  },
  hero: {
    eyebrow: 'Simon Lab · die Bottom-up-Methode',
    title: 'Ihr KI-Agent braucht kein weiteres Chatfenster. Er braucht eine Anlage, in der er arbeiten kann.',
    standfirst:
      'Simon Lab ist die Produktionsumgebung, in der ein KI-Agent eine vollständige Chemieanlage plant: von der Physik des Prozesses bis zu den Zeichnungen, nach denen eine ausführende Firma die Anlage errichten kann. Ebene für Ebene, nach Regeln, die für Vollständigkeit und die richtige Reihenfolge der Arbeit sorgen.',
    read: 'Die Geschichte lesen',
    watch: 'Den 2-Minuten-Film ansehen',
    scrollHint: 'Scrollen Sie, um die Anlage aufzubauen',
  },
  chapters: [
    {
      id: 'environment',
      eyebrow: 'Kapitel 1',
      title: 'Vom Chat zur Umgebung',
      intro: [
        'Die meisten Ingenieure kennen KI als Chatfenster. Hier zeigen wir, wie aus einem Chat ein KI-Agent wird, was ein KI-Agent ohne Umgebung in einem Anlagenprojekt tut und was Simon Lab ihm gibt.',
      ],
      steps: [
        {
          id: 'env-chat',
          stage: 'env-chat',
          kicker: 'Chat',
          title: 'Ein Chat antwortet, ein Dokument nach dem anderen',
          body: [
            'Bitten Sie einen Chat, eine Pumpe auszulegen, und er liefert Ihnen die Auslegungsdokumentation. Öffnen Sie einen neuen Chat, um die Festigkeit der Rührwerkswelle zu prüfen, und Sie bekommen ein weiteres Dokument, das nichts vom ersten weiß. Eine dritte Frage, ein drittes Dokument.',
            'Jede Antwort steht für sich und hat nichts mit der vorherigen gemein. Die Antworten abzugleichen, zu prüfen und ins Projekt zu übernehmen, bleibt Ihre Aufgabe.',
          ],
        },
        {
          id: 'env-agent',
          stage: 'env-agent',
          kicker: 'Ihr KI-Agent',
          title: 'Ein KI-Agent ist ein Chat, der Werkzeuge bekommen hat',
          body: [
            'Der KI-Agent ist genau als Antwort auf dieses Problem entstanden. In seinem Kern steckt derselbe Chat, die Intelligenz. Um ihn herum bekommt er Werkzeuge, einen Plan, Dateien und Prüfungen, und er arbeitet in einer Schleife, bis die Aufgabe erledigt ist.',
            'Codex, Claude Code, Grok Build und Google Antigravity sind KI-Agenten dieser Art.',
          ],
        },
        {
          id: 'env-docs',
          stage: 'env-docs',
          kicker: 'Unsere Erfahrung',
          title: 'Auf ein Projekt losgelassen, feuert er Dokumente ab',
          body: [
            'Ein KI-Agent arbeitet mit Dateien, so wie ein Programmierer in einem Repository. Auf ein Anlagenprojekt losgelassen, baut er sich eine eigene Umgebung, kennt aber den richtigen Standard nicht, und jedes Thema beginnt mit einem leeren Ordner. Dann feuert er wie ein Maschinengewehr: Serie um Serie von Dokumenten, und die Serien kollidieren, weil niemand die Standards festgelegt hat.',
            'Die fortgeschrittenen Werkzeuge gibt es nicht. Und als Sie dieses Wochenendprojekt begonnen haben, hätten Sie nicht gedacht, dass daraus ein Jahr wird, in dem ein CFD-Löser optimiert und CAD-Geometrie auf einem altgedienten Laptop gerendert wird.',
          ],
        },
        {
          id: 'env-build',
          stage: 'env-build',
          kicker: 'Simon Lab',
          title: 'Bringen Sie Ihren eigenen KI-Agenten mit',
          body: [
            'Mit Simon Lab bringen Sie Ihren eigenen KI-Agenten mit: BYOA (bring your own agent). Simon Lab gibt ihm die Umgebung: Jeder Teil des Projekts hat seinen Platz in einer Ebene, und jede Ebene baut auf der darunter auf. Der KI-Agent beginnt mit der Spezifikation in CapacityIndex und baut den Prozess in ProcessView auf; zeigt der Prozess, dass die Spezifikation eine Änderung braucht, geht er zurück, und beide erhalten eine neue Revision.',
          ],
        },
        {
          id: 'env-release',
          stage: 'env-release',
          kicker: 'Iterationen',
          title: 'Jede Revision geprüft, das Projekt gemeinsam freigegeben',
          body: [
            'Eine Änderung im Prozess baut neu auf, was von ihm abhängt: die Maschine, den Schaltschrank, das 3D-Modell und das Gelände. Jedes Dokument wird bei jeder Revision erneut geprüft. Besteht alles, geht das Projekt in jeder Anwendung von der Beta zur Version 1.0.',
            'Hinter den Ebenen stehen <strong>Engineering-Anwendungen</strong>, eine je Gewerk, <strong>Regeln guter Ingenieurpraxis</strong>, aufgeschrieben als Prüfungen, und die <strong>Rechenleistung</strong>, die echte Verifikation braucht (CFD, FEM, Rendering), auf unseren eigenen Maschinen.',
          ],
        },
      ],
    },
    {
      id: 'mirror',
      eyebrow: 'Kapitel 2',
      title: 'Der KI-Agent liest Code, der Ingenieur sieht die Anlage',
      intro: [
        'Der KI-Agent schlägt vor, der Ingenieur gibt frei. Der KI-Agent liest Code und braucht keinen Bildschirm. Der Ingenieur muss die Arbeit sehen, um zu entscheiden, und genau diese Oberfläche bietet Simon Lab: ein Modell, jedem in seiner eigenen Sprache gezeigt.',
      ],
      steps: [
        {
          id: 'mirror-pv',
          stage: 'mirror-pv',
          kicker: 'ProcessView',
          title: 'Eine Datenstruktur oder ein R&I-Fließbild',
          body: [
            'Für den KI-Agenten ist der Prozess strukturierte Daten: jeder Behälter, jeder Stutzen, jede Leitung und jedes Instrument ein Objekt mit seinen Verbindungen. Der Ingenieur sieht dasselbe Modell als R&I-Fließbild.',
          ],
        },
        {
          id: 'mirror-ig',
          stage: 'mirror-ig',
          kicker: 'IonGrid',
          title: 'Eine Netzliste oder ein Schaltschrank',
          body: [
            'Der KI-Agent braucht kein Rendering des Schaltschranks. Er liest eine Netzliste: Geräte, Klemmen, Leiter und Signale. Der Ingenieur sieht den Schaltschrank in 3D, Teil für Teil, so wie er gebaut wird.',
          ],
        },
        {
          id: 'mirror-pm',
          stage: 'mirror-pm',
          kicker: 'PlantMesh',
          title: 'Kanten und Koordinaten oder die Anlage selbst',
          body: [
            'In PlantMesh arbeitet der KI-Agent mit der Geometrie, ihren Kanten und Koordinaten. Der Ingenieur sieht die Anlage gerendert, mit Stahlbau, Rohrleitungen und den Menschen, die sie bedienen werden.',
          ],
        },
      ],
      outro: [
        'So schnelle Iterationen lassen den Ingenieur mit dem Projekt arbeiten wie mit Knetmasse, ohne wochenlang zu warten und um eine neue Revision der Tragkonstruktion zu bitten. Eine Richtung ist zu sehen, bevor sie gewählt wird, und so zeigt sich, ob es sich lohnt, ihr zu folgen.',
        'Der Ingenieur arbeitet eher wie ein Handwerker als wie ein Teil einer Konzernmaschine, frei von der Koordination zwischen den Gewerken, und kann Anlagen planen, auf die man stolz sein kann: Die Geschwindigkeit der Iteration bringt eine Qualität, die bisher unerreichbar war.',
      ],
    },
    {
      id: 'method',
      eyebrow: 'Kapitel 3',
      title: 'Bottom-up: zuerst die Physik, zuletzt Budget und Zeitplan',
      intro: [
        'Projekte beginnen meist mit einem Budget und einem Zeitplan, festgelegt von jemandem, der die Physik, von der sie abhängen, noch nicht kennt. Wer mit der Physik beginnt, braucht weniger Aufwand, um ein Projekt auf dem richtigen Fundament zu starten statt auf einer falschen Annahme des Kunden, die mit einem in wenigen Stunden erstellten Angebot begann.',
        'Konventionelle Projekte entstehen von oben nach unten, aus Dokumenten heraus, und jede Disziplin bessert nach, was die vorherige angenommen hat. Bottom-up wird nur gezeichnet, was auf der Ebene darunter bereits entschieden ist.',
      ],
      steps: [
        {
          id: 'method-laminate',
          stage: 'stack-laminate',
          kicker: 'Ein Projekt',
          title: 'Ein Projekt ist ein Stapel von Entscheidungen',
          body: [
            'Von außen betrachtet ist ein Anlagenprojekt ein einziger, dichter Informationsblock. Im Inneren besteht es aus Ebenen: was die Anlage leisten muss, wie der Prozess abläuft, welche Maschinen und Schaltschränke dazugehören, wie sie zusammenpassen und wo sie stehen.',
          ],
        },
        {
          id: 'method-layers',
          stage: 'stack-layers',
          kicker: 'Sechs Ebenen',
          title: 'Jede Ebene ist eine Anwendung',
          body: [
            'In <strong>CapacityIndex</strong> liegen Umfang, Kapazität und Wirtschaftlichkeit, in <strong>ProcessView</strong> der Prozess und seine Steuerung. <strong>MechGraph</strong> und <strong>IonGrid</strong> legen parallel Maschinen und Schaltschränke aus. <strong>PlantMesh</strong> setzt die Anlage in 3D zusammen. <strong>Architecture</strong> bringt sie an ihren Standort.',
          ],
        },
        {
          id: 'method-flow',
          stage: 'stack-flow',
          kicker: 'Bottom-up',
          title: 'Jede Ebene liest die Ebene darunter',
          body: [
            'Der KI-Agent arbeitet sich von unten nach oben vor. Jede Ebene übernimmt, was darunter entschieden wurde, und ergänzt eigene Details. So wandert eine Änderung der Spezifikation durch Prozess, Maschinen und Zeichnungen nach oben, statt erst auf der Baustelle aufzufallen.',
          ],
        },
        {
          id: 'method-input',
          stage: 'stack-in',
          kicker: 'Eingang',
          title: 'Dokumente sind auch ein Eingang',
          body: [
            'Womit ein Projekt auch beginnt, es geht in CapacityIndex ein: Zeichnungen als DXF, Modelle als STEP, Spezifikationen als PDF und DOCX, Daten als XML. Es nimmt das Durcheinander auf und kann eines zurückgeben, doch innen liegt alles in der Struktur von Simon Lab.',
          ],
        },
        {
          id: 'method-docs',
          stage: 'stack-docs',
          kicker: 'Zuletzt, nicht zuerst',
          title: 'Dokumente sind ein Ergebnis',
          body: [
            'Zeichnungen, Datenblätter und Berichte werden am Ende aus den Ebenen erzeugt, nicht am Anfang eingetippt. Das macht sie konsistent: Es sind verschiedene Sichten auf dieselben Entscheidungen.',
          ],
        },
      ],
    },
    {
      id: 'capacityindex',
      layer: 'capacityindex',
      eyebrow: 'Ebene 0 · CapacityIndex',
      title: 'Dem Demonstrations\u00adprojekt folgen',
      intro: [
        'Im weiteren Verlauf dieser Seite begleiten wir ein reales Projekt durch alle Ebenen: eine anonymisierte Löseanlage für Natronlauge, in der Plattform geplant und mit ihren echten Bildschirmansichten und Renderings gezeigt.',
        'Eine Aufgabenstellung, wie sie ein Ingenieur an einem Montagmorgen auf den Tisch bekommt: Ein Werk stellt bereits Natronlauge mit 5\u00a0% her und braucht für eine neue Linie Lauge mit 30\u00a0%. Dazu sollen in einer freien Ecke des Werksgeländes NaOH-Schuppen aus angelieferten Säcken à 25\u00a0kg in einem vorhandenen Edelstahlbehälter gelöst werden.',
      ],
      steps: [
        {
          id: 'ci-prompt',
          stage: 'cli-prompt',
          kicker: 'Der Prompt',
          title: 'Aus Klartext wird Struktur',
          body: [
            'Der Ingenieur beschreibt den Prozess und seine Grenzen (Chargengröße, die Obergrenze von 60\u00a0°C im Behälter, 40\u00a0°C am Austritt) und fordert eine Bottom-up-Planung an, die auf eine freie Fläche im Werk passt.',
          ],
        },
        {
          id: 'ci-spec',
          stage: 'cli-spec',
          kicker: 'Zuerst die Physik',
          title: 'Die Spezifikation, die jede Ebene liest',
          body: [
            'Der KI-Agent liefert Auslegungsgrundlagen, keine Zeichnung: NaOH 30\u00a0% in Chargen zu 14,5\u00a0m³; 220 Säcke, also 5,5 t Schuppen je Charge; Kaltwasser mit 7,5\u00a0°C im Halbrohrmantel; eine Charge pro Schicht, um 60\u00a0m³ pro Woche abzudecken. Außerdem benennt er die Physik, die der Auslegung Grenzen setzt: Der Lösevorgang ist exotherm, die Dosierrate wird also durch die Kühlleistung begrenzt. Dazu kommen die offenen Punkte, die er nicht allein klären kann.',
            'Erst wenn der Ingenieur die Spezifikation freigegeben hat, geht es weiter.',
          ],
          note: 'Ein Beispiel: Jeder Ingenieur sieht das Terminal oder die Oberfläche seines eigenen KI-Agenten. Die Zahlen stammen aus den Auslegungsgrundlagen des Demonstrationsprojekts.',
        },
      ],
    },
    {
      id: 'processview',
      layer: 'processview',
      eyebrow: 'Ebene 1 · ProcessView',
      title: 'Ein R&I-Fließbild, das läuft',
      intro: [
        'Nach der Freigabe der Spezifikation baut der KI-Agent den Prozess in ProcessView auf, nicht als Zeichnung eines R&I-Fließbilds, sondern als Modell, in dem jedes Element ein Engineering-Objekt mit hinterlegter Auslegung ist.',
      ],
      steps: [
        {
          id: 'pv-build',
          stage: 'pv-build',
          kicker: 'Element für Element aufgebaut',
          title: 'Apparate, Leitungen, Armaturen, Instrumente',
          body: [
            'Zuerst platziert der KI-Agent die Apparate: Behälter, Sackaufgabestation, Becherwerk und Pumpe. Dann verlegt er die Leitungen zwischen ihren Stutzen und ergänzt zuletzt die Armaturen und Instrumente, die diese Leitungen brauchen. Jede Art von Gerät hat ihre Klasse und ihren Typ; ein Sondergerät legt der KI-Agent direkt selbst an.',
          ],
        },
        {
          id: 'pv-selection',
          stage: 'pv-selection',
          kicker: 'Vollständige Auslegung',
          title: 'Jedes Element trägt seine Entscheidungen',
          body: [
            'Klicken Sie auf eine beliebige Armatur, und ihr Datensatz öffnet sich: ihre Funktion, ihre Stellungen, die Stutzen, die sie verbindet, ihre Parameter. Bei Instrumenten sind Messprinzip und Einbausituation hinterlegt, bei Leitungen Werkstoff und Rohrklasse. Das sind die Vorgaben, mit denen Konstruktion, MSR-Technik und Steuerungstechnik auf den nächsten Ebenen weiterarbeiten.',
          ],
        },
        {
          id: 'pv-registers',
          stage: 'pv-registers',
          kicker: 'Register statt Listen',
          title: 'Stoffe, Rohrleitungen, Instrumente',
          body: [
            'Dasselbe Modell ist zugleich das Register: Stoffe mit ihren Quellen, Rohrleitungen mit Rohrklasse und Nennweite, jedes Instrument mit seiner MSR-Stelle. Niemand tippt diese Tabellen ein; sie sind das Fließbild, als Daten betrachtet.',
          ],
        },
        {
          id: 'pv-sim',
          stage: 'pv-sim',
          kicker: 'Dynamische Simulation',
          title: 'Erprobt, bevor Sie auch nur ein Rohr kaufen',
          body: [
            'Dann läuft das Fließbild an. Das Chargenprogramm für 30\u00a0% befüllt den Behälter mit Lauge, misst sie, startet das Rührwerk und dosiert die Schuppen Sack für Sack, während der Kaltwassermantel die Lösungswärme abführt. Vier Stunden und vierzig Minuten Prozesszeit, auf Sekunden verdichtet.',
            'Die Temperatur steigt bis zum Sollwert von 60\u00a0°C und hält sich dort: Das Programm hält die Dosierung immer dann zurück, wenn die abgeschätzte Temperatur im ungünstigsten Fall ihn überschreiten würde. Das ist dieselbe Verriegelung, die auch in der realen Anlage laufen wird.',
          ],
        },
        {
          id: 'pv-plc',
          stage: 'pv-plc',
          kicker: 'Steuerung',
          title: 'Fertige Programme auf einer emulierten SPS',
          body: [
            'Die Chargensequenz (Rücksetzen, Befüllen, Messen, Nachfüllen, Rührwerksstart, Dosieren, Lösen, Probenahme) läuft als Steuerprogramm auf einer emulierten SPS, mit Bedienschritten dort, wo in der realen Anlage der Anlagenfahrer eingreift. Am Ende der Charge sind 5,5\u00a0t NaOH dosiert, und die vorhergesagte Produktkonzentration liegt bei 30\u00a0%.',
          ],
        },
      ],
    },
    {
      id: 'mechgraph',
      layer: 'mechgraph',
      eyebrow: 'Ebene 2 · MechGraph',
      title: 'Die Maschine aus ihren eigenen Berechnungen',
      intro: [
        'Der Prozess gibt jetzt vor, was der Behälter leisten muss. MechGraph macht daraus eine Maschine: den vorhandenen Edelstahlbehälter mit Halbrohrmantel, Stutzen und Bühne sowie ein neues, für diese Aufgabe ausgelegtes Rührwerk.',
      ],
      steps: [
        {
          id: 'mg-model',
          stage: 'mg-turntable',
          kicker: 'Geometrie als Programm',
          title: 'Aus Eingaben konstruiert, nicht gezeichnet',
          body: [
            'Behälter und Rührwerk werden aus Parametern erzeugt. Ändert der Prozess einen Durchfluss oder eine Temperatur, ziehen Modell, Berechnungen und Zeichnungen aus derselben Quelle nach.',
          ],
        },
        {
          id: 'mg-mixing',
          stage: 'mg-section',
          kicker: 'Rührtechnik',
          title: 'Leistungsbedarf und Feststoffsuspension',
          body: [
            'Im Schnitt durch den Behälter werden die Auslegungsfragen sichtbar: wie viel Leistung das Rührorgan braucht und ob es die Schuppen in Schwebe hält, bis sie gelöst sind, statt dass sie sich auf dem Behälterboden absetzen, während sich Viskosität, Temperatur und Dichte der Lösung dynamisch ändern.',
          ],
        },
        {
          id: 'mg-shaft',
          stage: 'mg-shaft',
          kicker: 'Mechanik',
          title: 'Wellendurchbiegung, kritische Drehzahl, Festigkeit',
          body: [
            'Eine lange, fliegend gelagerte Welle darf sich weder bis an die Behälterwand durchbiegen noch in der Nähe ihrer kritischen Drehzahl laufen; Behältermantel und Halbrohrmantel müssen nach EN 13445 für Druck und Temperatur ausgelegt sein. Jeder Nachweis ist eine Berechnung mit dokumentierten Eingangsdaten.',
          ],
        },
        {
          id: 'mg-cfd',
          stage: 'mg-tracks',
          kicker: 'Strömung',
          title: 'CFD und KI-gestützte CFD',
          body: [
            'Die Strömung untersuchen wir mit CFD auf unseren Rechenknoten. KI-gestützte CFD (Walrus, Gemini) lässt uns Rechenfälle schneller prüfen und nach dem optimalen Zustand suchen. Hier gelangen die Schuppen über den Feststoffstutzen in den Behälter und werden von der Zirkulationsströmung nach unten getragen.',
          ],
        },
      ],
    },
    {
      id: 'iongrid',
      layer: 'iongrid',
      eyebrow: 'Ebene 2 · IonGrid',
      title: 'Parallel dazu: der Schaltschrank',
      intro: [
        'Während die Maschine konstruiert wird, nimmt die Steuerungslogik aus ProcessView als Hardware Gestalt an. IonGrid arbeitet auf derselben Ebene des Stapels wie MechGraph: zwei Stränge auf einer gemeinsamen Entscheidungsgrundlage.',
      ],
      steps: [
        {
          id: 'ig-assembly',
          stage: 'ig-assembly',
          kicker: 'Katalogkomponenten',
          title: 'Ein echter Schaltschrank, Teil für Teil',
          body: [
            'Der Schaltschrank entsteht aus den Modellen der Hersteller: Gehäuse und Montageplatte, Tragschienen und Kabelkanäle, drei Frequenzumrichter für die Prozessmotoren, Netzteile, die Steuerung mit ihren E/A-Baugruppen, Klemmen und Verdrahtung.',
          ],
        },
        {
          id: 'ig-heat',
          stage: 'ig-heat',
          kicker: 'Verlustleistung',
          title: 'Worauf die Wärmebilanz aufbaut',
          body: [
            'Jedes Gerät mit einer Verlustleistung laut Datenblatt geht in die Wärmebilanz des Schaltschranks ein. Für diesen Schrank sind bisher mindestens 705\u00a0W bekannt, der Großteil davon entfällt auf die Frequenzumrichter. Die pneumatische Ansteuerung bleibt mit dem R&I-Fließbild verknüpft: Die Ausgänge der Steuerung schalten die Magnetventile, und diese betätigen die Prozessarmaturen.',
          ],
        },
        {
          id: 'ig-register',
          stage: 'ig-register',
          kicker: 'Register',
          title: 'Geräte- und E/A-Liste, mit dem Schrank erzeugt',
          body: [
            'Geräteliste und E/A-Liste gehen Signal für Signal aus demselben Modell hervor und sind damit bereit für den Elektriker und für den Einkauf.',
          ],
        },
      ],
    },
    {
      id: 'plantmesh',
      layer: 'plantmesh',
      eyebrow: 'Ebene 3 · PlantMesh',
      title: 'Alles kommt in einem Modell zusammen',
      intro: [
        'Die Maschine aus MechGraph und der Schaltschrank aus IonGrid gelangen in PlantMesh. Dort wird die Anlage aufgebaut, mit Stahlbau, Bühnen, Rohrleitungen und den Menschen, die sie bedienen werden.',
      ],
      steps: [
        {
          id: 'pm-assembly',
          stage: 'pm-assembly',
          kicker: 'Zusammenbau',
          title: 'Zusammengeführt zur Prozessanlage',
          body: [
            'Stützen und Träger, die Bühne der Sackaufgabestation, das Becherwerk, die Pumpe und die Rohrleitungen werden um den Behälter herum angeordnet; die Leitungen aus dem R&I-Fließbild werden in 3D von Stutzen zu Stutzen verlegt.',
          ],
        },
        {
          id: 'pm-iso',
          stage: 'pm-iso',
          kicker: 'Isometrien',
          title: 'Eine Zeichnung je Leitung',
          body: [
            'Jede Leitung erhält ihre Rohrleitungsisometrie mit Stückliste: hier die Druckleitung der Pumpe neben ihrem Blatt.',
          ],
        },
        {
          id: 'pm-steel',
          stage: 'pm-steel',
          kicker: 'Stahlbau',
          title: 'Tragkonstruktionen mit FEM, Zeichnungen aus dem Modell',
          body: [
            'Die Tragkonstruktionen werden mit einer FEM-Berechnung geprüft, bevor ihre Zeichnungen herausgegeben werden: hier der Turm, auf dem der Bediener steht, neben seiner Zusammenstellungszeichnung.',
          ],
        },
        {
          id: 'pm-clash',
          stage: 'pm-clash',
          kicker: 'Kollisionsprüfung',
          title: 'Im Modell gefunden, nicht auf der Baustelle',
          body: [
            'Die automatische Kollisionsprüfung gleicht Apparate, Trassen und Konstruktionen gegeneinander ab. In dieser Anlage meldet sie zwei Befunde: Der Hüllkörper des Becherwerks schneidet seine Einlaufschurre. Genau dort gehört ein solcher Befund hin: auf den Bildschirm, Wochen vor der Montage.',
          ],
        },
      ],
    },
    {
      id: 'architecture',
      layer: 'architecture',
      eyebrow: 'Ebene 4 · Architecture',
      title: 'Die Anlage in ihrem Werk',
      intro: [
        'Der Prompt verlangte eine freie Fläche im Werk. In Architecture verlässt die Anlage ihr eigenes Modell und wird Teil des Standorts: das Gelände aus öffentlichen Geodaten, die Straßen und Gebäude ringsum, die Fundamente unter den Behälterfüßen, die Zufahrt für Tankwagen.',
      ],
      steps: [
        {
          id: 'ar-site',
          stage: 'ar-site',
          kicker: 'Standort',
          title: 'Von der Anlage zum Werk',
          body: [
            'Die Anlage bezieht die freie Ecke, nach der der Prompt gefragt hat, und die Fragen ändern sich: was neben ihr steht (das Tanklager mit seinem Auffangraum, die Entladestelle, die Hallen), wie Tankwagen sie erreichen und wo Verkehr und Lagerung erlaubt sind. Architecture beantwortet sie im selben Modell.',
          ],
        },
        {
          id: 'ar-plan',
          stage: 'ar-wipe',
          kicker: 'Lageplan',
          title: 'Die Zeichnung ist das Modell',
          body: [
            'Von oben betrachtet wird dasselbe Modell zum Lageplan, den der plattformeigene Renderer zeichnet: Gebäude, Zonen, erdverlegte Leitungen, Objektliste und Schriftfeld. Zeichnung und 3D-Szene können daher nicht auseinanderlaufen.',
          ],
        },
      ],
    },
    {
      id: 'documents',
      eyebrow: 'Ergebnis',
      title: 'Ein geprüftes Planungspaket',
      intro: [],
      steps: [
        {
          id: 'docs-stack',
          stage: 'docs-stack',
          kicker: 'Export',
          title: 'Ausführungsreife Dokumentation',
          body: [
            'Am Ende werden die Ebenen als Dokumente exportiert: das R&I-Fließbild, Prozess- und Simulationsberichte, die Rührwerkszeichnungen, Rohrleitungsisometrien, Stahlbau- und Bühnenzeichnungen, Schaltschrankaufbau- und Stromlaufpläne sowie der Lageplan. Jedes Dokument trägt Dokumentnummer und Revision und ist eine Sicht auf Entscheidungen, die auf den Ebenen darunter getroffen wurden.',
            'Aus einem getesteten Prozess und einem auf Kollisionen geprüften 3D-Modell.',
          ],
        },
      ],
    },
    {
      id: 'infrastructure',
      eyebrow: 'Unter der Haube',
      title: 'Regeln, Rechenleistung und eine offene Architektur',
      intro: [
        'Eine Umgebung ist nur so gut wie das, was sie verifizieren kann. Hinter den Anwendungen betreibt Simon Lab die Technik, die aus dem Vorschlag eines KI-Agenten ein geprüftes Ergebnis macht.',
      ],
      steps: [
        {
          id: 'infra-rules',
          stage: 'infra-rules',
          kicker: 'Regeln',
          title: 'Gute Praxis, festgeschrieben',
          body: [
            'Die Regeln guter Ingenieurpraxis sind Teil der Umgebung, nicht des Prompts: was vorliegen muss, bevor die nächste Ebene beginnen darf, welche Angaben jedes Element enthalten muss, welche Prüfungen bestanden sein müssen. Genau diese Regeln lenken einen KI-Agenten hin zu einem vollständigen Projekt in der richtigen Reihenfolge.',
          ],
        },
        {
          id: 'infra-compute',
          stage: 'infra-compute',
          kicker: 'Rechenleistung',
          title: 'Hochleistungsrechnen inklusive',
          body: [
            'CFD läuft auf dedizierten Rechenknoten, FEM-Berechnungen prüfen die Tragkonstruktionen, GPU-Rendering erzeugt die Visualisierungen, die Sie auf dieser Seite gesehen haben, und KI-gestützte CFD (Walrus, Gemini) beschleunigt das Durchspielen von Rechenfällen. Ihr KI-Agent braucht keinen eigenen Cluster.',
          ],
        },
        {
          id: 'infra-open',
          stage: 'infra-open',
          kicker: 'Demnächst',
          title: 'Open Source',
          body: [
            'Wir öffnen die Architektur: Wie Ebenen, Regeln und Anwendungen ineinandergreifen, wird als Open Source veröffentlicht, damit andere auf der Bottom-up-Methode aufbauen und sie in ihren eigenen Umgebungen betreiben können.',
          ],
        },
      ],
    },
  ],
  closing: {
    eyebrow: 'Jetzt in der Beta',
    title: 'Chemieanlagenbau nach dem Bottom-up-Prinzip, gemeinsam mit Partnern unseres Vertrauens',
    body: [
      'Simon Lab ist mit wenigen Partnern in der Beta-Phase, Projekt für Projekt. Wenn Sie eine Anlage planen oder KI-Agenten entwickeln, die das übernehmen sollen, würden wir gern von Ihnen hören.',
    ],
    filmTitle: 'Der Film',
    filmCaption: 'Dasselbe Projekt in zwei Minuten: von der Spezifikation bis zum Lageplan.',
    play: 'Film abspielen',
    cta: { beta: 'Zur Beta anmelden', apps: 'Anwendungen entdecken' },
  },
  notes: [
    'Das Demonstrationsprojekt ist anonymisiert: Namen, Nummern und Standorte von Auftraggeber und Werk werden nicht gezeigt.',
    'Bildschirmansichten und Renderings stammen aus der Plattform; das Werksgelände rund um die Anlage ist ein generisches Modell; die Partikelbahnen sind eine veranschaulichende Darstellung.',
    'Die Ergebnisse der Kollisionsprüfung werden so gezeigt, wie das Modell sie meldet; die angegebene Verlustleistung ist die bekannte Untergrenze für den aktuellen Revisionsstand des Schaltschranks.',
  ],
  labels: {
    agent: 'Ihr KI-Agent',
    chat: 'Chat',
    newChat: 'Neuer Chat',
    chatQ1: 'Lege eine Pumpe für 12\u00a0m³/h aus.',
    chatA1: 'Hier ist die Auslegungsdokumentation.',
    pdf1: 'pumpenauslegung.pdf',
    chatQ2: 'Prüfe die Festigkeit der Rührwerkswelle.',
    chatA2: 'Hier ist die Festigkeitsberechnung.',
    pdf2: 'wellenfestigkeit.pdf',
    chatQ3: 'Beschreibe die Dosiersteuerung.',
    chatA3: 'Hier ist die Steuerungsbeschreibung.',
    pdf3: 'dosiersteuerung.pdf',
    aiAgent: 'KI-Agent',
    plan: 'Plan',
    use: 'Werkzeuge',
    files: 'Dateien',
    check: 'Prüfung',
    rev: 'v0.{n}',
    beta: 'Beta',
    release: 'v1.0',
    agentView: 'KI-Agent',
    engineerView: 'Ingenieur',
    excerpt: 'Auszug',
    formats: 'DXF · STEP · PDF · XML · DOCX',
    project: 'Verfahrenstechnisches Projekt',
    environment: 'Simon-Lab-Umgebung',
    tools: 'Engineering-Anwendungen',
    rules: 'Regeln guter Praxis',
    compute: 'Rechenleistung: CFD · FEM · Rendering',
    layer: 'Ebene',
    simClock: 'Simulationszeit',
    timelapse: '×60 · Zeitraffer',
    step: 'Schritt',
    level: 'Füllstand',
    temp: 'Temperatur',
    dosed: 'NaOH dosiert',
    limit: 'Grenzwert 60\u00a0°C',
    batchDone: 'Charge 30\u00a0% ✓',
    filling: 'Befüllen',
    mixing: 'Mischen',
    dosing: 'Dosieren',
    cooling: 'Kühlen',
    plc: 'SPS · emuliert',
    visualization: 'Visualisierung',
    findings: '2 Befunde',
    knownLosses: 'bekannte Verlustleistung ≥ 705\u00a0W',
    s1: 'Rücksetzen der Charge durch den Anlagenfahrer',
    s2: 'Befüllen mit Lauge',
    s3: 'Messen der Laugenkonzentration',
    s4: 'Ausgleichendes Nachfüllen und Endmessung',
    s5: 'Rührwerksstart',
    s6: 'Dosieren von NaOH aus Säcken',
    s7: 'Lösen und Stabilisieren',
    s8: 'Probenahme für das Labor',
  },
};
