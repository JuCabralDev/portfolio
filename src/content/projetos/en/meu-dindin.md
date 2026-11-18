---
lang: en
route: meu-dindin
order: 2
title: Meu Dindin, personal finance that runs on your machine
summary: >-
  A personal finance web app that runs only on the user's own computer: transactions, budgets, fixed
  expenses, credit card installments, savings goals and an investment portfolio with
  average price, dividends and returns. Everything exports to CSV.
status:
  code: 200
  text: OK
  note: on hold
kind: personal project
stack: [Java, SQL, Spring Boot, JDBC, SQLite, BCrypt, JUnit, Spotless, GitHub Actions, HTML, CSS, JavaScript]
source:
  label: private, available on request
diagram: dindin
decisions:
  - 'SQLite with plain JDBC, no JPA: every query is hand-written and the database is a local file.'
  - 'Repositories behind interfaces (`TransactionRepository` → `SqliteTransactionRepository`), and the same for quotes (`QuoteProvider` → `BrapiQuoteProvider`). Services never know which database or API sits underneath.'
  - 'Amounts in reais are stored as integer cents, and investment math uses `BigDecimal` with scale rules centralized in a `Money` class, so nothing drifts from rounding.'
  - 'The portfolio is rebuilt by replaying operations in chronological order (`AssetLedger`), which handles partial sales, rebuys and withdrawals without storing balances that could drift.'
  - 'Stock quotes from brapi.dev refresh on a schedule (cron), with the API token kept server-side only.'
  - 'BCrypt passwords, expiring sessions, an admin account kept apart from financial data and a server bound to 127.0.0.1.'
  - '36 tests in JUnit 5. CI with Spotless and `mvn verify`, plus Dependabot to keep dependencies current.'
limits:
  - 'No public deployment: it is designed for local use.'
  - 'The schema is created in code, with no versioned migrations. That would be the next step before any major database change.'
snippets:
  - file: dindin-limite
    title: Money.java
    caption: 'Checks the size of a BigDecimal before rounding it. A 1e10000000 sent by the browser would otherwise lock up the CPU.'
  - file: dindin-replay
    title: AssetLedger.java
    caption: "Each asset's position comes from replaying its operations in order, with deterministic tie-breaking."
---
