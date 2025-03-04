/*
Fórmula
IMC = peso (kg) / altura (m) x altura (m) 
Exemplo
Se uma pessoa pesa 70 kg e tem 1,75 m de altura, 
o cálculo do IMC é: 70 / (1,75 x 1,75) = 22,86 kg/m². 
*/

function calculaImc(peso = 0, altura = 0) {
  const resultado = peso / (altura * altura);
  console.log(resultado);
  return resultado.toFixed(2);
}

function verificaImc(imc = 0) {
  if (imc <= 18.5) {
    const resposta = falaImc(imc, "Abaixo do peso");
    return resposta;
  } else if (imc > 18.5 && imc <= 24.9) {
    const resposta = falaImc(imc, "Peso normal");
    return resposta;
  } else if (imc >= 25 && imc <= 29.9) {
    const resposta = falaImc(imc, "Sobrepeso");
    return resposta;
  } else if (imc >= 30 && imc <= 34.9) {
    const resposta = falaImc(imc, "Obesidade grau 1");
    return resposta;
  } else if (imc >= 35 && imc <= 39.9) {
    const resposta = falaImc(imc, "Obesidade grau 2");
    return resposta;
  } else {
    const resposta = falaImc(imc, "Obesidade grau 3");
    return resposta;
  }
}

function falaImc(imc = 0, descricaoPeso = "") {
  const respostaIMC = `Seu IMC é: ${imc} (${descricaoPeso})`;
  console.log("Resposta da variavel:: " + respostaIMC);
  return respostaIMC;
}

function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const peso = form.querySelector(".peso");
    console.log(`Peso: ${typeof peso.value}`);
    console.log(`Peso: ${peso.value}`);

    const altura = form.querySelector(".altura");
    console.log(`Altura: ${altura.value}`);

    //Acredito que precisa converter os elementos
    const pesoConvertido = parseFloat(peso.value);
    console.log(`Peso convertido: ${pesoConvertido}`);

    const alturaConvertida = parseFloat(altura.value);
    console.log(`Altura convertida: ${alturaConvertida}`);

    if (Number.isNaN(pesoConvertido)) {
      
      const mensagemPeso = `Peso Iválido`;
      resultado.innerHTML += `${mensagemPeso}`;

    } else if (Number.isNaN(alturaConvertida)) {

      const mensagemAlura = `Altura Inválida`;
      resultado.innerHTML += `${mensagemAlura}`;

    } else {
      
      const pesoConvertido = parseFloat(peso.value);
      console.log(`Peso convertido: ${pesoConvertido}`);

      const alturaConvertida = parseFloat(altura.value);
      console.log(`Altura convertida: ${alturaConvertida}`);

      const imc = calculaImc(pesoConvertido, alturaConvertida);
      console.log(`Seu IMC é: ${imc}`);
      const resultadoImc = verificaImc(imc);
      resultado.innerHTML += `${resultadoImc}`;
    }
  }
  form.addEventListener("submit", recebeEventoForm);
}
meuEscopo();
