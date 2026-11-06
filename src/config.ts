// Site configuration read at build time.

/**
 * The mailbox behind the beta page's "Write to us" and the contact details (the info mailbox of this domain), as character codes of
 * the local part plus the domain: assembled in the browser at the moment of use, never written into the HTML as an
 * address. The site has no forms: whoever wants to join writes an email.
 */
export const MAILBOX = { code: '105,110,102,111', domain: 'simon-lab.org' };

/**
 * The company's contact details behind the "Show contact details" button (src/components/ContactDetails.astro): the
 * mailbox above, the phone and the address, all as character codes, so the HTML never carries them as text.
 */
export const CONTACT = {
  mailbox: MAILBOX,
  phone: '43,52,56,32,53,48,56,32,51,56,52,32,55,55,52',
  /** two lines, broken before the postal code */
  address: ['74,117,108,105,97,110,97,32,84,117,119,105,109,97,32,52,47,56', '52,49,45,56,48,48,32,90,97,98,114,122,101,44,32,80,79,76,65,78,68'],
};

/** The platform's sign-in page ("Sign in" in the header and footer). The host is offline while the platform is rebuilt. */
export const PLATFORM_URL = 'https://auth.simon-lab.org';
/** "Sign in" is off while the platform is rebuilt; its place in the header and footer is kept: set true to bring it back. */
export const SIGN_IN = false;
