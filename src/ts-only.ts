const button = document.querySelector('button')! as HTMLButtonElement;
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;

function add(num1: number, num2: number): number {
  return num1 + num2;
}

button.addEventListener('click', function () {
  console.log(add(+input1.value, +input2.value));
});

/**
 * document.getElementById('num2')!
 * a '!' serve para afirmar ao TS que esse elemento existe
 * 'as' type casting
 *
 * 'HTMLButtonElement' type html button
 * 'HTMLInputElement' type html input
 * +value => cast value to number
 *
 * to compile, run "tsc <filename>"
 */
