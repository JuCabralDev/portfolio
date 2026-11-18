/**
 * Aplica os movimentos em ordem. Trava as variações envolvidas até o fim da transação, para duas vendas
 * simultâneas não venderem a mesma peça. Se algum movimento deixaria o estoque negativo, nada é aplicado.
 */
@Transactional(propagation = Propagation.MANDATORY)
public List<MovimentacaoEstoque> movimentar(Usuario usuario, List<Movimento> movimentos) {
    Map<Long, Variacao> travadas = travar(movimentos.stream().map(Movimento::variacaoId).distinct().sorted().toList());

    List<MovimentacaoEstoque> registradas = new ArrayList<>();
    for (Movimento m : movimentos) {
        registradas.add(aplicar(travadas.get(m.variacaoId()), m, usuario));
    }
    return movimentacoes.saveAll(registradas);
}

/** SELECT ... FOR UPDATE em cada variação, em ordem de id (duas transações nunca travam em ordens opostas). */
private Map<Long, Variacao> travar(List<Long> idsOrdenados) {
    Map<Long, Variacao> travadas = new HashMap<>();
    for (Long id : idsOrdenados) {
        Variacao variacao = entityManager.find(Variacao.class, id);
        if (variacao == null) {
            throw new NaoEncontradoException("Variação " + id + " não encontrada.");
        }
        entityManager.refresh(variacao, LockModeType.PESSIMISTIC_WRITE);
        travadas.put(id, variacao);
    }
    return travadas;
}
