# Portfólio · Julia Medeiros

Site pessoal de desenvolvedora back-end Java. Página única, em português e inglês, com os projetos
apresentados como respostas de uma API: rota, status, stack, decisões de arquitetura e trechos de código.

## Stack

- [Astro](https://astro.build) 7, que gera HTML estático (zero JS por padrão)
- Tailwind CSS 4, com tokens de cor em CSS custom properties (tema escuro padrão + claro)
- i18n nativo do Astro: `pt` na raiz, `en` em `/en/`
- Fontes self-hosted via Fontsource: Martian Mono e Schibsted Grotesk
- Deploy estático no Cloudflare Pages

## Rodando local

```sh
npm install
npm run dev      # http://localhost:4321
npm run check    # type-check (astro check)
npm run build    # gera dist/
npm run preview  # serve o build
```

## Estrutura

```text
src/
├── components/   # Home, SiteHeader, Section, ThemeToggle...
├── i18n/ui.ts    # textos de interface PT/EN + helpers
├── layouts/      # Base.astro (head, tema, header, footer)
├── pages/        # / (pt) e /en/
└── styles/       # global.css: tokens, fontes, base
docs/design.md    # decisões visuais
```

## Decisões

- **Página única, sem JS de framework:** o conteúdo é estático; só o toggle de tema e a animação do hero usam
  scripts pequenos.
- **Tema escuro por padrão:** a preferência fica no `localStorage`. Um script inline aplica o tema antes da
  pintura, para a tela não piscar.
- **Repositórios privados:** dois dos projetos são privados (um deles é de cliente). Por isso aparecem com
  diagrama de arquitetura e trechos de código, e não com link para o repo.
