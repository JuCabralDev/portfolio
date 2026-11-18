# Design

## Ideia
Um portfólio de back-end que se lê como uma API: cada seção é uma rota (`GET /projetos`) e cada projeto é uma
resposta (`HTTP/1.1 200 OK`, cabeçalhos com a stack, corpo com decisões e código). A ousadia fica num lugar só,
o hero com um `curl` respondendo o resumo em JSON. O resto é silencioso e legível.

## Cor
| Token | Escuro (padrão) | Claro | Uso |
|---|---|---|---|
| `--bg` | `#1a1310` espresso | `#f6f4f1` | fundo |
| `--surface` | `#241b16` | `#ffffff` | blocos de código/diagrama, hover |
| `--line` | `#3a2d25` | `#e2dbd3` | bordas, divisórias de seção |
| `--text` | `#ede3d9` crema | `#2a1f19` | texto principal |
| `--muted` | `#a8978a` | `#6b5c52` | texto secundário |
| `--accent` | `#f2a541` âmbar-mel | `#9a5800` | método HTTP, foco, links ativos |
| `--ok` | `#7fb77e` sálvia | `#3d7a3c` | só status 2xx |

O fundo é marrom-café, não preto neutro: amarra com Java (café) e foge do "preto + 1 cor neon".

## Tipografia
- **Martian Mono** (variável, eixo de largura 75-112.5%): títulos-rota em largura expandida, nav e rótulos em
  largura condensada, blocos de código.
- **Schibsted Grotesk**: texto corrido, base de 17px, linhas com no máximo cerca de 65ch.

## Regras
- Alinhamento à esquerda em tudo.
- Sem caixa-alta em rótulos, sem "→" em botões e sem metadados com "·". Metadados viram cabeçalhos HTTP.
- Movimento: só a digitação do `curl` no hero, uma vez, e desligada com `prefers-reduced-motion`.
- Numeração só em sequência real (timeline de experiência).

## Evitar (referências)
Metáfora de sistema operacional, azul `#6bbaf0`, o par Inter + JetBrains Mono, seção de pipeline de deploy.
