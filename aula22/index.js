/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU - > Pelo menos uma expressão precisa ser verdadeira para retornar true
! -> NOT -> NÃO 
*/

console.log(true && true); // true
console.log(true && false); // false
console.log(true && true && true && true); // true

const expressaoAnd = true && true && true && true;
console.log(expressaoAnd); // true

const expressaoOr = true || false; // true
console.log(expressaoOr); // true


const usuario = 'Emerson'; // form usuário digitou
const senha = '123456'; // form usuário digitou

const vailogar = usuario === 'Emerson' && senha === '12346';
console.log(vailogar); // true

console.log(true);
console.log(!true); // false
console.log(false);
console.log(!!false);
