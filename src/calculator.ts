export const calculator = (a: number, b: number) => {
  const sum = a + b;
  const rest = a - b;
  const mult = a * b;
  const div = a / b;

  return { sum, rest, mult, div };
};
