import type { PrivacyCopy } from './types';

// Deutsch, aus der englischen Fassung übersetzt, mit denselben Fakten (src/content/privacy/en.ts).
export const privacy: PrivacyCopy = {
  lang: 'de',
  meta: {
    title: 'Datenschutz | Simon Lab',
    description:
      'Was simon-lab.org speichert und sendet: ohne Einwilligung keine Cookies, Conversion-Messung von Google Ads nur mit Einwilligung, und E-Mails dienen der Antwort und der Abwicklung von Aufträgen.',
  },
  eyebrow: 'Datenschutz',
  title: 'Datenschutzhinweis',
  lede: 'Was diese Website speichert und sendet und was mit E-Mails an Simon Lab geschieht.',
  sections: [
    {
      title: 'Verantwortlicher',
      body: [
        'Verantwortlich für personenbezogene Daten ist Szymon Wojciechowski Simon-Lab, Zabrze, Polen. Die vollständige Adresse und die Steuernummern stehen unter {contact} am Ende dieser Seite. Fragen zu personenbezogenen Daten gehen an {email}.',
      ],
    },
    {
      title: 'Ohne Einwilligung',
      body: [
        'Die Website setzt keine Cookies und sendet nichts an Google. Die Filme laufen aus den eigenen Dateien der Website und laden erst nach einem Klick auf Wiedergabe.',
        'Gespeichert wird nur die Wahl im Cookie-Banner, im lokalen Speicher des Browsers (localStorage, Schlüssel sl-consent), für 12 Monate; danach fragt das Banner erneut.',
      ],
    },
    {
      title: 'Mit Einwilligung: Google Ads',
      body: [
        'Google Ads, betrieben von Google Ireland Limited, misst, ob ein Besuch über eine Anzeige zu einer Kontaktaufnahme geführt hat: ein Klick auf die E-Mail-Adresse oder auf eine Schaltfläche, die sie anzeigt, oder das Kopieren der Adresse. Dafür lädt die Website das Google-Tag, das Cookies wie _gcl_au und _gcl_aw für bis zu 90 Tage setzt und Google die Klick-ID der Anzeige, die Seitenadresse und technische Daten des Browsers einschließlich der IP-Adresse übermittelt. Es gibt kein Remarketing und keine Analyse.',
        'Google kann diese Daten auch außerhalb des Europäischen Wirtschaftsraums verarbeiten, wie seine Datenschutzerklärung beschreibt (policies.google.com).',
        'Rechtsgrundlage ist die Einwilligung: Art. 6 Abs. 1 lit. a DSGVO und Art. 399 des polnischen Gesetzes über elektronische Kommunikation vom 12. Juli 2024 (Prawo komunikacji elektronicznej). Die Einwilligung lässt sich jederzeit unter „Cookie-Einstellungen“ am Ende jeder Seite oder mit der Schaltfläche unten widerrufen; die Messung endet, und die Website entfernt ihre _gcl_-Cookies. Der Widerruf berührt nicht, was vorher gemessen wurde.',
      ],
      settings: true,
    },
    {
      title: 'E-Mails',
      body: [
        'E-Mails an Simon Lab dienen der Antwort und der Abwicklung von Aufträgen: bei einem Auftrag oder einer Anfrage dazu nach Art. 6 Abs. 1 lit. b DSGVO, bei anderen Nachrichten auf Grundlage unseres berechtigten Interesses an einer Antwort (Art. 6 Abs. 1 lit. f DSGVO). Wir bewahren sie auf, solange die Sache es erfordert, die Unterlagen eines Auftrags so lange, wie das Steuerrecht es vorschreibt.',
      ],
    },
    {
      title: 'Hosting',
      body: [
        'Die Website wird über GitHub Pages (GitHub, Inc.) und Cloudflare (Cloudflare, Inc.) ausgeliefert. Beide erhalten die IP-Adresse und die Angaben jeder Anfrage und speichern sie in Server-Logs, um die Website auszuliefern und zu schützen (berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO).',
      ],
    },
    {
      title: 'Rechte',
      body: [
        'Jede Person, deren Daten wir verarbeiten, hat das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch und kann ihre Einwilligung jederzeit widerrufen. Beschwerden nimmt der Präsident des polnischen Amtes für den Schutz personenbezogener Daten (Prezes UODO) in Warschau entgegen.',
      ],
    },
  ],
  updated: 'Stand: 27. November 2026',
};
