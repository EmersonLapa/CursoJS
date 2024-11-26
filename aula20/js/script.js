function meuEscopo() {
    
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    
    const pessoas = [];

    function recebeEventoForm (evento){

        evento.preventDefault(); // é usada para impedir o comportamento padrão de um evento. 
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        
        pessoas.push({
            nome: nome.value, 
            sobrenome: sobrenome.value, 
            peso: peso.value, 
            altura: altura.value
        });

        console.log(pessoas);
        console.log(nome.value, sobrenome.value, peso.value, altura.value);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }
    form.addEventListener('submit', recebeEventoForm); //  esta linha é responsável por capturar os eventos do front, nesse caso o evento do botão (submit). e recebe alguma função. 
}                                                       
meuEscopo();