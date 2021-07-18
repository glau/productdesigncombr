function Calculadora() {
  this.display = document.querySelector('.display');
  
  this.inicia = () => {
    this.cliqueBotoes();
    this.pressionaEnter();
  };

  this.pressionaEnter = () => {
    this.display.addEventListener('keyup', e => {
      if (e.keyCode === 13) { 
        if (!this.display.value) return;
        console.log(this);
        this.realizaCalculo();
      }
    });
  };

  this.limpaDisplay = () => {
    this.display.value = null;
  };

  this.apagaUltimoDigito = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.realizaCalculo = () => {
    let conta = this.display.value;
    try {
      conta = eval(conta); //eval é uma função perigosa do JS pois tenta executar o que for passado para ela, podendo receber codigos maliciosos
      if (!conta) {
        throw Error();
      }
      this.display.value = String(conta);
      return
    } catch(e) {
      alert('Conta inválida')
      return
    }
  };

  this.cliqueBotoes = () => {
    document.addEventListener('click', (e) => {
      const el = e.target;
      if (el.classList.contains('btn-num')) {
        this.mostraNumeroNoDisplay(el.innerText);
      }

      if (el.classList.contains('btn-clear')) {
        this.limpaDisplay();
      }

      if (el.classList.contains('btn-del')) {
        this.apagaUltimoDigito();
      }

      if (el.classList.contains('btn-equal')) {
        this.realizaCalculo();
      }
    });

    this.mostraNumeroNoDisplay = (valor) => {
      this.display.value += valor;
    };
  };
};

const calc = new Calculadora();
calc.inicia();