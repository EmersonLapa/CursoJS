/**
 * Primitivos (imutáveis)- string, number, boolean, undefined, null, (bigint, symbol) - Valores copiados 
 * eles são independentes.
 * 
 * Referência (mutável) - array, object, function - Valores passados por referência
 * são valores linkados.
 */

// //          0123456
// let nome = 'Emerson';
// nome[0] = 'W';
// console.log(nome[0], nome); 

// let a = [1,2,3];
// let b = [...a];
// console.log(a, b);

// a.push(4);
// console.log(a, b);

// const a = {
//     nome: 'Emerson',
//     sobreNome: 'Lapa'
// };

// const b = {...a};
// a.nome = 'Eu';

// console.log(a);
// console.log(b);