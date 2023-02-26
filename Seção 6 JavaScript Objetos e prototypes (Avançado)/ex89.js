// const pessoa = {
//   nome: "Nicolas",
//   sobrenome: "Alcântara",
//   idade: 17,
// };

// const chave = "idade";
// console.log(pessoa.nome);
// console.log(pessoa["sobrenome"]);
// console.log(pessoa[chave]);

// const pessoa = new Object();
// pessoa.nome = "Nicolas";
// pessoa.sobrenome = "Alcântara";
// pessoa.idade = 17;
// pessoa.falarNome = function () {
//   return `${this.nome} está falando seu nome`;
// };
// pessoa.falarNome();

// Factory function

// function criaPessoa(nome, sobrenome) {
//   return {
//     nome,
//     sobrenome,
//     nomeCompleto() {
//       return `${this.nome} ${this.sobrenome}`;
//     },
//   };
// }

// const p1 = criaPessoa("Nicolas", "Alcântara");
// console.log(p1.nomeCompleto());

// Constructor function

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  // não permite mudar/manipular objeto fora dele
  Object.freeze(this);
}

const p1 = new Pessoa("Nicolas", "Alcântara");

console.log(p1);
