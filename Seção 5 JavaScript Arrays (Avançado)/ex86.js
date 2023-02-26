// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
//               0  1   2   3  4...
const numeros = [5, 50, 80, 1, 2, 3, 4, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function (acumulador, valor, indice, array) {
  acumulador += valor;
  return acumulador;
}, 0);
// console.log(total);

// Retorne a pessoa mais velha
const pessoas = [
  { nome: "Lucas", idade: 22 },
  { nome: "Nicolas", idade: 17 },
  { nome: "Vitoria", idade: 16 },
  { nome: "Miguel", idade: 14 },
  { nome: "Bernardo", idade: 7 },
  { nome: "Belly", idade: 13 },
];
const maisVelha = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});
console.log(maisVelha);
