---
lang: en
route: estoque-artesanato
order: 1
title: Inventory and sales for a handicraft shop
summary: >-
  A system that replaces the paper notebook of a leather handicraft shop: every sale is recorded at the
  counter, stock updates itself and the end-of-day report needs no calculator. One admin and 1 to 3
  salespeople, each with their own login.
status:
  code: 206
  text: Partial Content
  note: 'phases 1 to 3 of 5 done: login, catalog and stock, counter sales'
kind: system for a real shop
stack: [Java 21, Spring Boot 4, Spring Security, Spring Data JPA, PostgreSQL 17, Flyway, Testcontainers, Docker Compose, React 19]
source:
  label: private, available on request
diagram: estoque
decisions:
  - 'Every quantity change goes through a single entry point, `EstoqueService`, which writes a ledger line with the balance and average cost after each movement. No screen touches the balance directly.'
  - 'Two simultaneous sales never sell the same item: variants are locked with `SELECT ... FOR UPDATE`, always in id order, so two transactions never lock in opposite orders.'
  - 'If any item would make stock negative, nothing is applied. The database guards itself too, with `CHECK` constraints (e.g. `total = subtotal - desconto`).'
  - 'A deactivated account loses its session immediately (`UsuarioAtivoFilter`), and a user with a temporary password can only change it.'
  - 'Nothing with history is deleted, only deactivated. Daily off-server database backups with 30-day retention and a restore runbook.'
  - '46 tests, with integration tests running against a real PostgreSQL via Testcontainers. CI with two jobs (back-end and front-end).'
limits:
  - 'Cancellations, exchanges and stock adjustments (phase 4) and the dashboard with PDF and Excel reports (phase 5) are still to come.'
  - 'Built for a single shop: no multi-store or multi-tenant support, on purpose.'
snippets:
  - file: estoque-movimentar
    title: EstoqueService.java
    caption: "The stock's single entry point: locks variants in order and applies all or nothing, inside the caller's transaction. Comments in Portuguese, as in the original code."
  - file: estoque-custo-medio
    title: EstoqueService.java
    caption: 'Balance never goes negative, and the weighted average cost uses BigDecimal, no floating point.'
---
