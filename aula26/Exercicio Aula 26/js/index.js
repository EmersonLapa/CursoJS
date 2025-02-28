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
    //console.log(`Seu IMC é: ${imc} (Abaixo do peso)`);
    const resposta = falaImc(imc, "Abaixo do peso");
    return resposta;
  } else if (imc > 18.5 && imc <= 24.9) {
    //falaImc(imc, "Peso normal");
    const resposta = falaImc(imc, "Peso normal");
    return resposta;
  } else if (imc >= 25 && imc <= 29.9) {
    const resposta = falaImc(imc, "Sobrepeso");
    return resposta;
    //falaImc(imc, "Sobrepeso");
  } else if (imc >= 30 && imc <= 34.9) {
    const resposta = falaImc(imc, "Obesidade grau 1");
    return resposta;
    //falaImc(imc, "Obesidade grau 1");
  } else if (imc >= 35 && imc <= 39.9) {
    const resposta = falaImc(imc, "Obesidade grau 2");
    return resposta;
    //falaImc(imc, "Obesidade grau 2");
  } else {
    const resposta = falaImc(imc, "Obesidade grau 3");
    return resposta;
    //falaImc(imc, "Obesidade grau 3");
  }
}

function falaImc(imc = 0, descricaoPeso = "") {
  //console.log(`Seu IMC é: ${imc} (${descricaoPeso})`);
  const respostaIMC = `Seu IMC é: ${imc} (${descricaoPeso})`;
  console.log("Resposta da variavel:: " + respostaIMC);
  //return(`Seu IMC é: ${imc} (${descricaoPeso})`);
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

    const pesoConvertido = parseFloat(peso.value);
    console.log(`Peso convertido: ${pesoConvertido}`);

    const alturaConvertida = parseFloat(altura.value);
    console.log(`Altura convertida: ${alturaConvertida}`);
    const imc = calculaImc(pesoConvertido, alturaConvertida);
    console.log(`Seu IMC é: ${imc}`);
    const resultadoImc = verificaImc(imc);
    resultado.innerHTML += `Seu IMC é: ${resultadoImc}`;
    resultado.innerHTML += `<p>Seu IMC é: ${imc}</p>`;
  }
  form.addEventListener("submit", recebeEventoForm);
}
meuEscopo();