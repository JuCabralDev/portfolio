---
lang: en
route: portfolio
order: 3
title: This portfolio
summary: >-
  The site you are reading. Static, in Portuguese and English, with projects written as typed data:
  adding a project means adding a file, and the build rejects an incomplete one.
status:
  code: 200
  text: OK
  note: live
kind: personal project
stack: [Astro, TypeScript, Tailwind CSS, Shiki, GitHub Actions, Cloudflare Pages]
source:
  label: public
  url: https://github.com/JuCabralDev/portfolio
decisions:
  - 'Static HTML, no JavaScript framework in the browser. Scripts (theme, coffee boot screen, terminal and interactive background) are small and optional: the content shows up without them.'
  - 'Projects live in schema-validated content collections: an invalid status or diagram breaks the build, not the page.'
  - 'Dark and light themes with CSS tokens and an inline script that applies the theme before first paint, so it never flashes.'
  - 'Every phase landed through a pull request, with CI running `astro check` and the build.'
---
