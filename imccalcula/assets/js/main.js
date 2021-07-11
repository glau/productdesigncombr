// Capturar e guardar os dados entrados pelo usuário
function calculadoraImc () {
  const formCalculadora = document.querySelector('#formCalculoImc');

  function calculaComDados (evento) {
    evento.preventDefault();
    
    const userPeso = document.querySelector('#campoPeso');
    const userAltura = document.querySelector('#campoAltura');
    const apresentaResultado = document.querySelector('#resultadoImc');

    // Checar se os campos foram preenchidos
    if (typeof userPeso.value == 'string') {
      apresentaResultado.innerHTML = `<div class='resultadoErro'>Digite seu peso em Kg. Ex.: 70</div>`;
    }

    if (typeof userAltura.value == 'string') {
      apresentaResultado.innerHTML = `<div class='resultadoErro'>Digite sua altura em M, separada por ponto. Ex.: 1.70</div>`;
    }

    // Faz a conta do IMC
    const userImc = Number(userPeso.value) / (Number(userAltura.value) * Number(userAltura.value));

    // Checar o resultado, qualifica de acordo com a tabela e apresenta para usuário  
    if (userImc < 18.5) {
      apresentaResultado.innerHTML = `<div class='resultado'>Seu IMC é <strong>${userImc.toFixed(1)}</strong>, qualificado como abaixo do peso</div>`;
    } else if (userImc >= 18.5 && userImc <= 24.99) {
      apresentaResultado.innerHTML = `<div class='resultado'>Seu IMC é <strong>${userImc.toFixed(1)}</strong>, qualificado como peso normal</div>`;
    } else if (userImc >= 25 && userImc <= 29.99) {
      apresentaResultado.innerHTML = `<div class='resultado'>Seu IMC é <strong>${userImc.toFixed(1)}</strong>, qualificado como sobrepeso</div>`;
    } else if (userImc >= 30 && userImc <= 34.99) {
      apresentaResultado.innerHTML = `<div class='resultado'>Seu IMC é <strong>${userImc.toFixed(1)}</strong>, qualificado como obesidade grau 1</div>`;
    } else if (userImc >= 35 && userImc <= 39.99) {
      apresentaResultado.innerHTML = `<div class='resultado'>Seu IMC é <strong>${userImc.toFixed(1)}</strong>, qualificado como obesidade grau 2</div>`;
    } else if (userImc >= 40 && typeof userAltura.value == 'number') {
      apresentaResultado.innerHTML = `<div class='resultado'>Seu IMC é <strong>${userImc.toFixed(1)}</strong>, qualificado como obesidade grau 3</div>`;
    }
  }
  formCalculadora.addEventListener('submit', calculaComDados);
}
calculadoraImc();
