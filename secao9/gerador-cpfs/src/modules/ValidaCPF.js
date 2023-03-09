export default class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }

  isSequence() {
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
  }

  geraNovoCPF() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = geraDigitos(cpfSemDigitos);
    const digito2 = geraDigitos(cpfSemDigitos + digito1);

    const cpfInteiro = this.cpfLimpo + digito1 + digito2;

    return cpfInteiro === this.cpfLimpo;
  }

  static geraDigitos(cpfSemDigitos) {
    let total = 0;
    let regressivo = cpfSemDigitos.length + 1;

    for (let stringNumerica of cpfSemDigitos) {
      total += regressivo * Number(stringNumerica);
      regressivo--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : "0";
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== "string") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequence()) return false;
    this.geraNovoCPF();
    return true;
  }
}
