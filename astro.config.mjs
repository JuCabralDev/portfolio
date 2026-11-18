// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: trocar pela URL definitiva do Cloudflare Pages (ou domínio próprio) na fase de deploy.
  site: 'https://jucabraldev.pages.dev',
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'pt', locales: { pt: 'pt-BR', en: 'en' } },
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
