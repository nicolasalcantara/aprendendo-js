class Dispositivo {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já ligado`);
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if (this.ligado) {
      console.log(`${this.nome} já desligado`);
      return;
    }

    this.ligado = false;
  }
}

class Smarthphone extends Dispositivo {
  constructor(nome, estado, modelo) {
    super(nome);

    this.estado = estado;
    this.modelo = modelo;
  }
}

const s1 = new Smarthphone("Iphone", "Bom", "Iphone 12 mini");
console.log(s1);
