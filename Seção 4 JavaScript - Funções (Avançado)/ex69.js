function funcao01() {
  console.log("Oie");
}
funcao01("Valor");

// arguments
function funcao02() {
  console.log(arguments[10]);
}

funcao02("Valor", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Nicolas");

// setar valor
function funcao03(a, b = 2, c = 4) {
  console.log(a + b + c);
}

funcao03(2, undefined, 20);

// desestruturação de array
function funcao04({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}

let obj = { nome: "Nicolas", sobrenome: "Alcantara", idade: 17 };
funcao04(obj);

// rest operator
function funcao05(operador, acumulador, ...numeros) {
  for (numero of numeros) {
    acumulador += numero;
  }

  console.log(acumulador);
}

funcao05("+", 1, 20, 30, 40, 50);
