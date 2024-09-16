/**
 * Aritiméticos
 * + Adição / Concatenação
 * - Subtração
 * / Divisão
 * * Multiplicação
 * ** Potenciação
 * % Resto da divisão
 */

/**
 * Precedencia dos operadores Aritiméticos
 * 1 - ()
 * 2 - **
 * 3 - *
 * 4 - /
 * 5 - %
 * 6 - +
 * 7 - -
 */

/**
 * Incremento = ++
 * Decremento = --
 * 
 * contador++ (Pós incremento)
 * ++contador (Pré incremento)
 * --contador (Pré Decremento)
 * contador-- (Pós Decremento)
 */

const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log((num1 + num2) * num3);

console.log('==================================================================')

const passo = 2;
let contador = 0;
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);

console.log('==================================================================')

const step = 10;
let count = 2;
/**
 * Operadores de Atribuição
 * +=
 * -=
 * **=
 * e com os demais operadores aritiméticos
 */
count **= step; // count = count + 50; ou count = count + step;
console.log(count);

// NaN - Not a number parseInt(inteiro), parseFloat(decimais), Number
const numero1 = 10;
const numero2 = Number('5.2');
console.log(numero1 + numero2);
console.log( typeof numero2);
