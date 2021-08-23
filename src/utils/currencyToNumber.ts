export function currencyToNumber(stringToSplit: string, separator: string): number {
    let arrayOfStrings = stringToSplit.split(separator).join('.');
    separator = 'R$';
    let number = arrayOfStrings.split(separator).join('');

    return Number(number);
}