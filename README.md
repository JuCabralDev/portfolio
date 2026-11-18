# Portfólio · Júlia Cabral

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
├── components/          # Home, Hero, CurlTerminal, ProjetoEndpoint, diagramas/...
├── content/projetos/    # um .md por projeto e idioma (schema em content.config.ts)
├── snippets/            # trechos de código exibidos nos projetos
├── data/                # textos das seções (content.ts) e contato (profile.ts)
├── i18n/ui.ts           # textos de interface PT/EN + helpers
├── layouts/Base.astro   # head (SEO, OG, hreflang, JSON-LD), tema, header, footer
├── pages/               # / (pt), /en/ e 404
└── styles/global.css    # tokens, fontes, cores do Shiki
scripts/og/              # template e script da imagem de compartilhamento
docs/design.md           # decisões visuais
```

## Adicionar um projeto

1. Crie `src/content/projetos/pt/<nome>.md` e `src/content/projetos/en/<nome>.md` com o mesmo `route`.
2. Se tiver trechos de código, coloque os arquivos em `src/snippets/` e referencie pelo nome em `snippets`.
3. `npm run check` valida os campos. Um projeto incompleto quebra o build.

## Imagem de compartilhamento

`scripts/og/render.sh` gera `public/og-pt.png` e `public/og-en.png` (1200x630) a partir de `scripts/og/og.html`.
Precisa do Chromium. Rode de novo quando mudar nome, cargo ou foto.

## Créditos

Ícones de tecnologia: [Simple Icons](https://simpleicons.org) (CC0) e, para o Java, [Devicon](https://devicon.dev) (MIT).

## Analytics

Cloudflare Web Analytics, ativado no painel do projeto no Cloudflare Pages, que injeta o script no deploy.
Não usa cookies e não exige banner de consentimento. Não há código de analytics no repositório.

## Decisões

- **Página única, sem JS de framework:** o conteúdo é estático. Tema, boot, terminal do hero e fundo interativo
  são scripts pequenos e opcionais: sem JS (ou com reduced motion) a página abre direto e completa.
- **Tema escuro por padrão:** a preferência fica no `localStorage`. Um script inline aplica o tema antes da
  pintura, para a tela não piscar.
- **Repositórios privados:** dois dos projetos são privados (um deles é de cliente). Por isso aparecem com
  diagrama de arquitetura e trechos de código, e não com link para o repo.
