// Dobre os números
//               0  1   2   3  4...
const numeros = [5, 50, 80, 1, 2, 3, 4, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map((valor) => `${valor} x 2 = ${valor * 2}`);
// console.log(numerosEmDobro);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
  { nome: "Lucas", idade: 22 },
  { nome: "Nicolas", idade: 17 },
  { nome: "Vitoria", idade: 16 },
  { nome: "Miguel", idade: 14 },
  { nome: "Bernardo", idade: 7 },
  { nome: "Belly", idade: 13 },
];

const nomes = pessoas.map((valor) => valor.nome);
// console.log(nomes);

const idades = pessoas.map((valor) => ({ idade: valor.idade }));
// console.log(idades);

const comIDs = pessoas.map((valor, indice) => {
  valor.id = indice;
  return valor;
});
// console.log(comIDs);
