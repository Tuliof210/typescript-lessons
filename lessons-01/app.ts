const add = (n1: number, n2: number, show: boolean): number | void => {
  const result = n1 + n2;
  if (show) console.log(result);
  else return result;
};

const num1: number = 5;
const num2: number = 2.8;
const result: number = add(num1, num2, true);

/**
 * The core primitive types in TypeScript are all lowercase!
 *
 * core types
 * >>> number = integers and floats
 * >>> string = text values
 * >>> boolean = true|false
 */
