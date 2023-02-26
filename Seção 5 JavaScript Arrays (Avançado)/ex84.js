//               0  1   2   3  4...
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Retorne os números maiores que 10

// function callbackFilter(valor, indice, arrayCompleto) {
//   if (valor > 10) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function callbackFilter(valor) {
//   return valor > 10;
// }

// const numerosFiltrados = numeros.filter((valor) => {
//   return valor > 10;
// });

const numerosFiltrados = numeros.filter((valor) => valor > 10);
// console.log(numerosFiltrados);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com menos de 14 anos
// Retorne as pessoas cujo nome termina com a letra a
const pessoas = [
  { nome: "Lucas", idade: 22 },
  { nome: "Nicolas", idade: 17 },
  { nome: "Vitoria", idade: 16 },
  { nome: "Miguel", idade: 14 },
  { nome: "Bernardo", idade: 7 },
  { nome: "Belly", idade: 13 },
];

const pessoasComNomeGrande = pessoas.filter((valor) => valor.nome.length >= 7);
// console.log(pessoasComNomeGrande);

const criancas = pessoas.filter((valor) => valor.idade <= 14);
// console.log(criancas);

const letraFinal = pessoas.filter((valor) =>
  valor.nome.toLowerCase().endsWith("a")
);
console.log(letraFinal);
