export const converNumberToCurrency = (number: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
};

export const capitalize = (str: string) => {
  return str?.charAt(0).toUpperCase() + str?.slice(1);
};
