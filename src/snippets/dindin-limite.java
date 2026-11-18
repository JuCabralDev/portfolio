/**
 * Recusa números absurdos vindos do cliente antes de qualquer setScale. Arredondar 1e10000000 ou
 * 1e-10000000 obriga o Java a montar um número de milhões de dígitos e prende a CPU.
 */
public static BigDecimal requireWithinLimit(BigDecimal value, BigDecimal max) {
    var limitMessage = "O valor informado passa do limite permitido ("
            + String.format(Locale.of("pt", "BR"), "%,." + max.scale() + "f", max) + ").";
    // Dígitos da parte inteira; em long porque scale() pode ser perto de Integer.MIN_VALUE.
    if ((long) value.precision() - value.scale() > (long) max.precision() - max.scale()) {
        throw new IllegalArgumentException(limitMessage);
    }
    if (value.scale() > MAX_DECIMALS) {
        throw new IllegalArgumentException("O valor informado tem casas decimais demais.");
    }
    if (value.abs().compareTo(max) > 0) throw new IllegalArgumentException(limitMessage);
    return value;
}
