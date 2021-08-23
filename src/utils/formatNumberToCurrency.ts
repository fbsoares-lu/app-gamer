export function formatNumberToCurrency(value: number): string {
  const currentValue = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return currentValue;
}