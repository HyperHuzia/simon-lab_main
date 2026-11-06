// simon-lab.org: static Astro build deployed to GitHub Pages (.github/workflows/static.yml publishes dist/ only).
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://simon-lab.org',
  trailingSlash: 'ignore',
  // keep one space between adjacent inline elements in prose (Astro 7 defaults to 'jsx', which strips it)
  compressHTML: true,
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pl', 'de'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', pl: 'pl', de: 'de' } },
      // the unlisted recruiting page and utility pages stay out of the sitemap
      filter: (page) => !page.includes('/last-job-before-ai-takes-over/') && !page.endsWith('/404/'),
    }),
  ],
  image: { responsiveStyles: true },
});
