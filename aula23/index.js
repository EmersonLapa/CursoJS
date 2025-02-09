/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"

FAISY VALUE - > valores que são avalidados como falso
*false
0
'' "" ``
null / undefined
NaN

Qualquer valor que não seja falsy, é truthy
*/

// console.log('Emerson' && 0 && 'Paloma'); // 0
// console.log('Emerson' && '' &&'Paloma');

// function falaOi(){
//     return 'Oi';
// }

// const vaiExecutar = false;

// console.log(vaiExecutar && falaOi());


// console.log(0 || false || null || 'Emerson' || true); // Emerson

// const corUsuario = 'Azul';
// const corPadrao = corUsuario || 'Verde';

// console.log(corPadrao);

const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || 'Emerson' ||  c || d || e);