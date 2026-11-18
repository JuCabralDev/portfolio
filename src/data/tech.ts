/**
 * Ícones das tecnologias. Marcas vêm do Simple Icons (CC0), exceto Java, do Devicon (MIT), porque o
 * Simple Icons não tem o logo do Java. Os genéricos (SQL, REST...) são desenhados aqui, em traço.
 * Tudo é resolvido no build: nenhum JS de ícone vai para o navegador.
 */
import {
  siApachemaven,
  siAstro,
  siCaddy,
  siCloudflarepages,
  siCss,
  siDocker,
  siFlyway,
  siGithubactions,
  siHibernate,
  siHtml5,
  siJavascript,
  siJunit5,
  siLinux,
  siPostgresql,
  siReact,
  siSpring,
  siSpringboot,
  siSpringsecurity,
  siSqlite,
  siTailwindcss,
  siTypescript,
} from 'simple-icons';

export interface TechIcon {
  viewBox: string;
  /** Caminho preenchido (marcas) ou com traço (genéricos). */
  path: string;
  mode: 'fill' | 'stroke';
  /** Cor da marca, usada no hover. */
  hex: string;
}

const brand = (i: { path: string; hex: string }): TechIcon => ({ viewBox: '0 0 24 24', path: i.path, mode: 'fill', hex: `#${i.hex}` });
const generic = (path: string, hex = '#A8978A'): TechIcon => ({ viewBox: '0 0 24 24', path, mode: 'stroke', hex });

const java: TechIcon = { viewBox: '0 0 128 128', path: 'M47.617 98.12c-19.192 5.362 11.677 16.439 36.115 5.969-4.003-1.556-6.874-3.351-6.874-3.351-10.897 2.06-15.952 2.222-25.844 1.092-8.164-.935-3.397-3.71-3.397-3.71zm33.189-10.46c-14.444 2.779-22.787 2.69-33.354 1.6-8.171-.845-2.822-4.805-2.822-4.805-21.137 7.016 11.767 14.977 41.309 6.336-3.14-1.106-5.133-3.131-5.133-3.131zm11.319-60.575c.001 0-42.731 10.669-22.323 34.187 6.024 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.793 15.634-29.58zm9.998 81.144s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.095.171-4.45-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.952-3.487-32.013 6.85-13.742 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM85 77.896c2.395-1.634 5.703-3.053 5.703-3.053s-9.424 1.685-18.813 2.474c-11.494.964-23.823 1.154-30.012.326-14.652-1.959 8.033-7.348 8.033-7.348s-8.812-.596-19.644 4.644C17.455 81.134 61.958 83.958 85 77.896zm5.609 15.145c-.108.29-.468.616-.468.616 31.273-8.221 19.775-28.979 4.822-23.725-1.312.464-2 1.543-2 1.543s.829-.334 2.678-.72c7.559-1.575 18.389 10.119-5.032 22.286zM64.181 70.069c-4.614-10.429-20.26-19.553.007-35.559C89.459 14.563 76.492 1.587 76.492 1.587c5.23 20.608-18.451 26.833-26.999 39.667-5.821 8.745 2.857 18.142 14.688 28.815zm27.274 51.748c-19.187 3.612-42.854 3.191-56.887.874 0 0 2.874 2.38 17.646 3.331 22.476 1.437 57-.8 57.816-11.436.001 0-1.57 4.032-18.575 7.231z', mode: 'fill', hex: '#EA2D2E' };

const database = generic('M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3', '#E7C08A');
const braces = generic('M8 3c-2 0-3 1-3 3v3c0 1.5-1 2.5-2 3 1 .5 2 1.5 2 3v3c0 2 1 3 3 3M16 3c2 0 3 1 3 3v3c0 1.5 1 2.5 2 3-1 .5-2 1.5-2 3v3c0 2-1 3-3 3', '#E7C08A');
const container = generic('M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9Zm0 0 9 4.5 9-4.5M12 12v9', '#7FB77E');
const lock = generic('M6 11h12v10H6V11Zm3 0V7a3 3 0 0 1 6 0v4', '#E7C08A');
const sparkle = generic('M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6', '#E7C08A');
const highlight = generic('M4 6h16M4 12h10M4 18h7M17 15l3 3-3 3', '#E7C08A');

/** Chave = nome normalizado (minúsculas, sem versão). */
const registry: Record<string, TechIcon> = {
  java: java,
  sql: database,
  jdbc: database,
  javascript: brand(siJavascript),
  typescript: brand(siTypescript),
  'spring boot': brand(siSpringboot),
  'spring security': brand(siSpringsecurity),
  'spring data jpa': brand(siSpring),
  hibernate: brand(siHibernate),
  'apis rest': braces,
  'rest apis': braces,
  flyway: brand(siFlyway),
  postgresql: brand(siPostgresql),
  sqlite: brand(siSqlite),
  junit: brand(siJunit5),
  'junit 5': brand(siJunit5),
  testcontainers: container,
  spotless: sparkle,
  docker: brand(siDocker),
  'docker compose': brand(siDocker),
  'github actions': brand(siGithubactions),
  maven: brand(siApachemaven),
  linux: brand(siLinux),
  caddy: brand(siCaddy),
  html: brand(siHtml5),
  css: brand(siCss),
  'html/css/js': brand(siHtml5),
  react: brand(siReact),
  bcrypt: lock,
  astro: brand(siAstro),
  'tailwind css': brand(siTailwindcss),
  shiki: highlight,
  'cloudflare pages': brand(siCloudflarepages),
};

export function techIcon(name: string): TechIcon | undefined {
  const key = name
    .toLowerCase()
    .replace(/\s+\d+(\.\d+)*$/, '')
    .trim();
  return registry[key];
}

/** Clareia (tema escuro) ou escurece (tema claro) a cor da marca até ter contraste legível com o fundo. */
export function readableHex(hex: string, bg: string): string {
  const toRgb = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const lum = (rgb: number[]) => {
    const [r, g, b] = rgb.map((c) => {
      const v = c / 255;
      return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const contrast = (a: number[], b: number[]) => {
    const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
    return (x + 0.05) / (y + 0.05);
  };
  const bgRgb = toRgb(bg);
  const target = lum(bgRgb) < 0.5 ? [255, 255, 255] : [0, 0, 0];
  let rgb = toRgb(hex);
  for (let t = 0; t <= 1 && contrast(rgb, bgRgb) < 3; t += 0.1) {
    rgb = toRgb(hex).map((c, i) => Math.round(c + (target[i] - c) * t));
  }
  return `#${rgb.map((c) => c.toString(16).padStart(2, '0')).join('')}`;
}
