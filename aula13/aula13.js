let umaString = "Um \"texto\"";
// essa é mais uma forma de colocar aspas duplas dentro de uma string a palavra texto vai sair entre aspas duplas.
// essa técnica se chama "Deixar escapar" um caractere.                                 
console.log(umaString);


//                01234567   
let umaString1 = "Um texto";
console.log(umaString1[3]);

//                   
let umaString2 = "Um texto";
console.log(umaString2.charAt(6));

let umaString3 = "Um texto";
console.log(umaString3.concat(' aqui'));

let umaString4 = "Um texto";
console.log(`${umaString4} em um lindo dia.`);

let umaString5 = "Um texto";
console.log(`${umaString5.indexOf('texto')}`);
 
console.log(umaString.replace('Um', 'Outro'));
console.log(umaString1.length);
console.log(umaString1.charAt(0));

let umaString6 = 'o rato roeu a roupa do rei de roma.';
console.log(umaString6.length - 8);
console.log(umaString6.slice(-8));
console.log(umaString6.slice(27));
console.log(umaString6.split(' ', 4));
console.log(umaString6.toLocaleUpperCase());
console.log(umaString6.toLocaleLowerCase());