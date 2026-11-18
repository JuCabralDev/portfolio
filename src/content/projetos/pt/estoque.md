---
lang: pt
route: estoque-artesanato
order: 1
title: Estoque e vendas para uma loja de artesanato
summary: >-
  Sistema que substitui o caderno de uma loja de artesanato em couro: cada venda é registrada no balcão,
  o estoque se atualiza sozinho e o fechamento do dia sai sem calculadora. Uma administradora e de 1 a 3
  vendedoras, cada uma com o próprio login.
status:
  code: 206
  text: Partial Content
  note: 'fases 1 a 3 de 5 prontas: login, catálogo e estoque, venda no balcão'
kind: sistema para uma loja real
stack: [Java 21, Spring Boot 4, Spring Security, Spring Data JPA, PostgreSQL 17, Flyway, Testcontainers, Docker Compose, React 19]
source:
  label: privado, disponível sob pedido
diagram: estoque
decisions:
  - 'Toda mudança de quantidade passa por um único ponto, o `EstoqueService`, que grava um extrato com saldo e custo médio depois de cada movimento. Nenhuma tela mexe no saldo direto.'
  - 'Duas vendas ao mesmo tempo não vendem a mesma peça: as variações ficam travadas com `SELECT ... FOR UPDATE`, sempre em ordem de id, para duas transações nunca se bloquearem em ordens opostas.'
  - 'Se um item da venda deixaria o estoque negativo, nada é aplicado. O banco também se protege com `CHECK` (por exemplo, `total = subtotal - desconto`).'
  - 'Conta desativada perde a sessão na hora (`UsuarioAtivoFilter`), e quem está com senha provisória só consegue trocar a senha.'
  - 'Nada com histórico é apagado, só desativado. Backup diário do banco fora do servidor, com 30 dias de retenção e roteiro de restauração.'
  - '46 testes, os de integração rodando contra um PostgreSQL real com Testcontainers. CI com dois jobs (back-end e front-end).'
limits:
  - 'Ainda faltam cancelamento, trocas e ajustes de estoque (fase 4) e o painel com relatórios em PDF e Excel (fase 5).'
  - 'Feito para uma loja só: não há multiloja nem multiempresa, de propósito.'
snippets:
  - file: estoque-movimentar
    title: EstoqueService.java
    caption: 'A porta única do estoque: trava as variações em ordem e aplica tudo ou nada, na transação de quem chamou.'
  - file: estoque-custo-medio
    title: EstoqueService.java
    caption: 'Saldo nunca negativo e custo médio ponderado com BigDecimal, sem ponto flutuante.'
---
