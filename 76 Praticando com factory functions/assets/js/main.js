function criaCalculadora() {
  return {
    display: document.querySelector(".display"),

    inicia() {
      this.cliqueBotoes();
    },

    cliqueBotoes() {
      addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.numerosDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clearn")) {
          this.limpaInput();
        }

        if (el.classList.contains("btn-del")) {
          this.deletaUm();
        }

        if (el.classList.contains("btn-eq")) {
          this.realizaConta();
        }
      });
    },

    limpaInput() {
      this.display.value = "";
    },

    numerosDisplay(valor) {
      this.display.value += valor;
    },

    deletaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);
        if (conta === "" || Number.isNaN(conta) || typeof conta !== "number") {
          alert("Conta inválida");
          return;
        }
        this.display.value = String(conta);
      } catch (e) {
        alert("Conta inválida");
        return;
      }
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
