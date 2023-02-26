function Pessoa(nome, sobrenome) {
  // Privadas
  const ID = 123456;

  const metodoInterno = () => {};

  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log(this.nome + ": sou um método");
  };
}

const p1 = new Pessoa("Nicolas", "Alcântara");
p1.metodo();
