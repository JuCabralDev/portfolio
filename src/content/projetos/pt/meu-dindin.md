---
lang: pt
route: meu-dindin
order: 2
title: Meu Dindin, finanças pessoais que rodam na sua máquina
summary: >-
  Aplicação web de finanças pessoais que roda só no computador de quem usa: lançamentos, orçamentos,
  despesas fixas, cartões com parcelas e faturas, metas e uma carteira de investimentos com preço médio,
  proventos e rentabilidade. Exporta tudo em CSV.
status:
  code: 200
  text: OK
  note: em desenvolvimento ativo
kind: projeto pessoal
stack: [Java, SQL, Spring Boot, JDBC, SQLite, BCrypt, JUnit, Spotless, GitHub Actions, HTML, CSS, JavaScript]
source:
  label: privado, disponível sob pedido
diagram: dindin
decisions:
  - 'SQLite com JDBC puro, sem JPA: cada consulta é escrita à mão e o banco é um arquivo local.'
  - 'Repositórios atrás de interfaces (`TransactionRepository` → `SqliteTransactionRepository`), e o mesmo para cotações (`QuoteProvider` → `BrapiQuoteProvider`). Os serviços não sabem qual banco ou API está por baixo.'
  - 'Dinheiro com `BigDecimal` e regras de escala centralizadas na classe `Money`. Valores absurdos vindos do navegador são recusados antes de qualquer arredondamento.'
  - 'A carteira é recalculada reproduzindo as operações em ordem cronológica (`AssetLedger`), o que resolve vendas parciais, recompras e resgates sem guardar saldos que podem divergir.'
  - 'Cotações da brapi.dev atualizadas por agendamento (cron), com o token guardado só no servidor.'
  - 'Senhas com BCrypt, sessão com expiração, conta de administração separada dos dados financeiros e servidor ouvindo só em 127.0.0.1.'
  - '103 testes em JUnit 5. CI com Spotless e `mvn verify`, Dependabot e uma spec por funcionalidade em `docs/`.'
limits:
  - 'Não tem deploy público: foi pensado para uso local.'
  - 'O schema é criado em código, sem migrações versionadas. Seria o próximo passo antes de qualquer mudança grande no banco.'
snippets:
  - file: dindin-limite
    title: Money.java
    caption: 'Valida o tamanho de um BigDecimal antes de arredondar. Um 1e10000000 vindo do navegador travaria a CPU.'
  - file: dindin-replay
    title: AssetLedger.java
    caption: 'A posição de cada ativo sai da reprodução das operações em ordem, com desempate determinístico.'
---
