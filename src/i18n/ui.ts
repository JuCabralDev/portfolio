export const languages = {
  pt: 'Português',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'pt';

/** Seções da página, na ordem em que aparecem. O slug vira âncora e rota (ex.: GET /projetos). */
export const sections = ['sobre', 'stack', 'projetos', 'experiencia', 'formacao', 'contato'] as const;
export type Section = (typeof sections)[number];

/** Seções que aparecem na navegação (formação fica de fora para a nav caber no mobile). */
export const navSections = ['sobre', 'stack', 'projetos', 'experiencia', 'contato'] as const satisfies readonly Section[];

export const ui = {
  pt: {
    'meta.title': 'Júlia Cabral | Desenvolvedora Back-end Java',
    'meta.description':
      'Portfólio de Júlia Cabral, desenvolvedora back-end Java em Natal (RN): Spring Boot, SQL e sistemas em produção.',
    'a11y.skip': 'Pular para o conteúdo',
    'nav.label': 'Seções',
    'nav.sobre': 'sobre',
    'nav.stack': 'stack',
    'nav.projetos': 'projetos',
    'nav.experiencia': 'experiencia',
    'nav.formacao': 'formacao',
    'nav.contato': 'contato',
    'theme.toLight': 'Usar tema claro',
    'theme.toDark': 'Usar tema escuro',
    'lang.switch': 'Read in English',
    'hero.photoAlt': 'Foto de Júlia Cabral',
    'hero.terminalLabel': 'Exemplo de requisição à minha API pessoal, com a resposta em JSON',
    'footer.source': 'Código deste site no GitHub',
  },
  en: {
    'meta.title': 'Júlia Cabral | Java Back-end Developer',
    'meta.description':
      'Portfolio of Júlia Cabral, Java back-end developer in Natal, Brazil: Spring Boot, SQL and production systems.',
    'a11y.skip': 'Skip to content',
    'nav.label': 'Sections',
    'nav.sobre': 'about',
    'nav.stack': 'stack',
    'nav.projetos': 'projects',
    'nav.experiencia': 'experience',
    'nav.formacao': 'education',
    'nav.contato': 'contact',
    'theme.toLight': 'Switch to light theme',
    'theme.toDark': 'Switch to dark theme',
    'lang.switch': 'Ler em português',
    'hero.photoAlt': 'Photo of Júlia Cabral',
    'hero.terminalLabel': 'Sample request to my personal API, with the JSON response',
    'footer.source': 'Source code of this site on GitHub',
  },
} as const;

export type UiKey = keyof (typeof ui)['pt'];

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui[defaultLang][key];
}
