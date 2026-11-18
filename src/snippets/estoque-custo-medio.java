int saldo = variacao.getQuantidade() + m.quantidade();
if (saldo < 0) {
    throw new RegraDeNegocioException("Estoque insuficiente de " + variacao.getDescricaoCompleta()
            + ": há " + variacao.getQuantidade() + ", precisa de " + -m.quantidade() + ".");
}

// ...

/** (qtd atual × custo atual + qtd que entra × custo de quem entra) ÷ qtd total. Estoque zerado: vale o custo novo. */
static BigDecimal custoMedioPonderado(int qtdAtual, BigDecimal custoAtual, int qtdEntrando, BigDecimal custoEntrando) {
    BigDecimal valorAtual = custoAtual.multiply(BigDecimal.valueOf(qtdAtual));
    BigDecimal valorEntrando = custoEntrando.multiply(BigDecimal.valueOf(qtdEntrando));
    return valorAtual.add(valorEntrando)
            .divide(BigDecimal.valueOf((long) qtdAtual + qtdEntrando), ESCALA_CUSTO, RoundingMode.HALF_EVEN);
}
