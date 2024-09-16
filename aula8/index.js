const nome = 'Emerson';
const sobreNome = 'Lapa';
const idade = 27;
const peso = 86;
const alturaEmM = 1.83;
let indiceMassaCorporal; // peso / (alturaEmM * alturaEmM)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2024 - idade - 1;


//template strings

console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} kg `); //template strings
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`); //template strings
console.log(`${nome} nasceu em ${anoNascimento}.`); //template strings