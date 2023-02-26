// Construtora -> molde (classe)
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  // this.nomeCompleto = () => {
  //   this.nome + " " + this.sobrenome;
  // };
}

Pessoa.prototype.nomeCompleto = () => {
  return this.nome + " " + this.sobrenome;
};

// instância
const pessoa1 = new Pessoa("Nicolas", "A.", 17); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa("Vitória", "S.", 16); // <- Pessoa = Função construtora

console.dir(pessoa1);
