/*
Fórmula
IMC = peso (kg) / altura (m) x altura (m) 
Exemplo
Se uma pessoa pesa 70 kg e tem 1,75 m de altura, 
o cálculo do IMC é: 70 / (1,75 x 1,75) = 22,86 kg/m². 
*/

function IMC (peso = 0, altura = 0){

    const resultado = peso / (altura * altura);
    console.log(resultado); 
    return resultado;
}

function meuEscopo(){
    
    const form = document.querySelector('.form');
    
    function recebeEventoForm(evento){

        evento.preventDefault();

        const peso = form.querySelector('.peso');
        console.log(`Peso: ${typeof peso.value}`);
        console.log(`Peso: ${peso.value}`);

        const altura = form.querySelector('.altura');
        console.log(`Altura: ${altura.value}`);
        
        const pesoConvertido = parseFloat(peso.value);
        console.log(`Peso convertido: ${pesoConvertido}`);

        const alturaConvertida = parseFloat(altura.value);
        console.log(`Altura convertida: ${alturaConvertida}`);
        const imc = IMC(pesoConvertido, alturaConvertida);
        console.log(`Seu IMC é: ${imc}`);
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();