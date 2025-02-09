/*
Operadores de comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor) **** (não é recomendado usar esse tipo de comparação)
=== igualdade estrita (valor e tipo) ****
!= diferente (valor) **** (não é recomendado usar esse tipo de comparação)
!== diferente estrito (valor e tipo) ****
*/

console.log(10 > 5); // true

const comp = 10 > 5;
console.log(comp); // true

const comp2 = 10 >= 5;
console.log(comp2); // true

const comp3 = 11 <= 10;
console.log(comp3); // false


const num1 = 10;
const num2 = 11;

const comp4 = num1 < num2;
console.log(comp4); // true

const num3 = 10;
const num4 = '10';
const comp5 = num1 === num2;
console.log(comp5); // true


const num5 = 10;
const num6 = '10';
const comp6 = num5 !== num6;
console.log(comp6); // true