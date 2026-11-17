export const languages = {
  pt: 'Português',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'pt';

/** Rotas das seções: o slug vira âncora e rótulo (ex.: GET /projetos). */
export const sections = ['sobre', 'stack', 'projetos', 'experiencia', 'contato'] as const;
export type Section = (typeof sections)[number];

export const ui = {
  pt: {
    'meta.title': 'Julia Medeiros · Desenvolvedora Back-end Java',
    'meta.description':
      'Portfólio de Julia Medeiros, desenvolvedora back-end Java: Spring Boot, bancos de dados e sistemas em produção.',
    'a11y.skip': 'Pular para o conteúdo',
    'nav.label': 'Seções',
    'nav.sobre': 'sobre',
    'nav.stack': 'stack',
    'nav.projetos': 'projetos',
    'nav.experiencia': 'experiencia',
    'nav.contato': 'contato',
    'theme.toLight': 'Usar tema claro',
    'theme.toDark': 'Usar tema escuro',
    'lang.switch': 'Read in English',
    'footer.source': 'Código deste site no GitHub',
  },
  en: {
    'meta.title': 'Julia Medeiros · Java Back-end Developer',
    'meta.description':
      'Portfolio of Julia Medeiros, Java back-end developer: Spring Boot, databases and production systems.',
    'a11y.skip': 'Skip to content',
    'nav.label': 'Sections',
    'nav.sobre': 'about',
    'nav.stack': 'stack',
    'nav.projetos': 'projects',
    'nav.experiencia': 'experience',
    'nav.contato': 'contact',
    'theme.toLight': 'Switch to light theme',
    'theme.toDark': 'Switch to dark theme',
    'lang.switch': 'Ler em português',
    'footer.source': 'Source code of this site on GitHub',
  },
} as const;

export type UiKey = keyof (typeof ui)['pt'];

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first in languages ? (first as Lang) : defaultLang;
}
