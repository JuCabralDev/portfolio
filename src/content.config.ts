import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Cada projeto é um arquivo em src/content/projetos/{pt,en}/. O schema valida tudo no build:
 * um projeto sem status ou com diagrama desconhecido quebra o `astro check`, não a página.
 */
const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: z.object({
    lang: z.enum(['pt', 'en']),
    /** Segmento da rota exibida (GET /projetos/<route>) e da âncora. Igual nos dois idiomas. */
    route: z.string(),
    order: z.number().int(),
    title: z.string(),
    summary: z.string(),
    /** Status HTTP usado como metáfora do estado do projeto (206 = parcialmente pronto). */
    status: z.object({ code: z.number().int(), text: z.string(), note: z.string() }),
    kind: z.string(),
    stack: z.array(z.string()).min(1),
    source: z.object({ label: z.string(), url: z.url().optional() }),
    /** Nome do cliente: só preencher com autorização. Sem ele, o texto fica genérico. */
    clientName: z.string().optional(),
    diagram: z.enum(['estoque', 'dindin']).optional(),
    decisions: z.array(z.string()).min(1),
    limits: z.array(z.string()).default([]),
    /** Arquivos em src/snippets/, com título e legenda no idioma do projeto. */
    snippets: z.array(z.object({ file: z.string(), title: z.string(), caption: z.string() })).default([]),
  }),
});

export const collections = { projetos };
