export const add = (a: number, b: number) => {
  const result = a + b;
  if (result === 13) throw "13 is unlucky";
  return result;
};
