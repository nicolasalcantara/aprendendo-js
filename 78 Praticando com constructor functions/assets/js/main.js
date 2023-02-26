function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = () => {
    this.cliqueBotoes();
  };

  this.cliqueBotoes = () => {
    document.addEventListener("click", (event) => {
      const el = event.target;
      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains("btn-clearn")) this.clearnDisplay();
      if (el.classList.contains("btn-del")) this.deleteUm();
      if (el.classList.contains("btn-eq")) this.realizaConta();
    });
  };

  this.addNumDisplay = (el) => (this.display.value += el.innerText);
  this.clearnDisplay = () => (this.display.value = "");
  this.deleteUm = () => (this.display.value = this.display.value.slice(0, -1));
  this.realizaConta = () => {
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
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
