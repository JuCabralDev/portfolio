/**
 * Reproduz em ordem cronológica as operações de um ativo e calcula a posição em cada data.
 * Venda parcial: baixa do custo = preço médio × quantidade vendida; o preço médio do que sobra não muda.
 */
static AssetLedger replay(InvestmentAsset asset, List<InvestmentOperation> operations, List<AssetQuote> valuations) {
    var ledger = new AssetLedger(asset);
    var events = new ArrayList<Event>();
    for (var operation : operations) events.add(new Event(operation.date(), 0, operation.createdAt(), operation, null));
    if (asset.tracking() == TrackingMode.VALUE) {
        for (var valuation : valuations) events.add(new Event(valuation.date(), 1, 0, null, valuation));
    }
    events.sort(Comparator.comparing(Event::date).thenComparingInt(Event::order)
            .thenComparingLong(Event::createdAt)
            .thenComparing(event -> event.operation() == null ? "" : event.operation().id().toString()));

    var state = State.empty();
    for (var event : events) {
        state = event.operation() != null ? ledger.apply(state, event.operation()) : state.valued(event.valuation());
        ledger.states.add(state);
    }
    return ledger;
}
