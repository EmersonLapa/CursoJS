// Quando usamos "[]" estamos declarando um array e quando usamos "{}" estamos declarando um objeto.
// quando colocamos o "THIS" estamos usando a propriedade do objeto "pessoa3" por exemplo. (this.nome).
// this nesse contexto referencia o objeto "pessoa3".

const pessoa3 = {
    nome: 'Emerson',
    sobrenome: 'Lapa',
    idade: 28,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi....`);
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++; // o "this" é o objeto em si e a "idade" é é o valor por exemplo 28.
    }
};

pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();

// function criaPessoa(nome, sobrenome, idade) {
//     return { nome, sobrenome, idade };
// }
                               
// const pessoa1 = criaPessoa('Emerson', 'Lapa', 28);
// const pessoa2 = criaPessoa('Paloma', 'De Paula', 25);
// console.log(pessoa1.nome, pessoa2.nome);

                       // Parâmetros
// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome: nome, // Não precisamos colocar os parâmetros dentro das variáveis exemplo (nome: nome) pois o JavaScript faz isso implicitamente
//         sobrenome: sobrenome, // Não precisamos colocar os parâmetros dentro das variáveis exemplo (sobrenome: sobrenome) pois o JavaScript faz isso implicitamente
//         idade: idade // Não precisamos colocar os parâmetros dentro das variáveis exemplo (idade: idade) pois o JavaScript faz isso implicitamente
//     };
// }
                               // Argumentos
// const pessoa1 = criaPessoa('Emerson', 'Lapa', 28);
// const pessoa2 = criaPessoa('Paloma', 'De Paula', 25);
// console.log(pessoa1.nome, pessoa2.nome);

// function criaPessoa(nome, sobrenome, idade){
//     return {
//         nome,
//         sobrenome,
//         idade
//     };
// }

// const pessoa1 = criaPessoa('Emerson', 'Lapa', 28);
// const pessoa2 = criaPessoa('Paloma', 'De Paula', 25);
// console.log(pessoa1.nome, pessoa2.nome);

// const pessoa1 = {
//     nome: 'Emerson',
//     sobreNome: 'Lapa',
//     idade: 25
// };

// console.log(pessoa1);
// console.log(pessoa1.nome);
// console.log(pessoa1.sobreNome);
// console.log(pessoa1.idade);