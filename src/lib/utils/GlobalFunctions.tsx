export default function showPrice(input: number | string, currency: string = 'USD'): string {
  try {
    const number = typeof input === 'number' ? input : parseFloat(input);
    if (isNaN(number)) {
      return `${currency} ${input}`;
    }
    const [integerPart, decimalPart] = number.toFixed(2).split('.');
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return `${currency} ${formattedIntegerPart}.${decimalPart}`;
  } catch (e:unknown) {
    console.error(e);
    return `${currency} ${input}`;
  }
}
