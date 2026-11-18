---
lang: pt
route: portfolio
order: 3
title: Este portfólio
summary: >-
  O site que você está lendo. Estático, em português e inglês, e com os projetos escritos como dados
  tipados: adicionar um projeto é criar um arquivo, e o build recusa um projeto incompleto.
status:
  code: 200
  text: OK
  note: no ar
kind: projeto pessoal
stack: [Astro 7, TypeScript, Tailwind CSS 4, Shiki, Cloudflare Pages]
source:
  label: público
  url: https://github.com/JuCabralDev/portfolio
decisions:
  - 'HTML estático, sem framework de JavaScript no navegador. Só o tema e a animação do terminal usam scripts, e o conteúdo aparece mesmo sem eles.'
  - 'Projetos em content collections validadas por schema: um status ou diagrama inválido quebra o build, não a página.'
  - 'Tema escuro e claro com tokens em CSS e um script inline que aplica o tema antes da pintura, para não piscar.'
  - 'Cada fase entrou por pull request, com CI rodando `astro check` e o build.'
---
