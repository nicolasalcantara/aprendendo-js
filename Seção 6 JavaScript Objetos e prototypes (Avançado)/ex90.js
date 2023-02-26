// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
  //   this.nome = nome;
  //   this.preco = preco;
  //   this.estoque = estoque;

  //   Object.defineProperty(this, "estoque", {
  //     enumerable: true, // mostra a chave
  //     value: estoque, // valor
  //     writable: true, // pode alterar
  //     configurable: true, // configurável
  //   });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave
      value: estoque, // valor
      writable: true, // pode alterar
      configurable: true, // configurável
    },
    preco: {
      enumerable: true, // mostra a chave
      value: estoque, // valor
      writable: true, // pode alterar
      configurable: true, // configurável
    },
    preco: {
      enumerable: true, // mostra a chave
      value: estoque, // valor
      writable: true, // pode alterar
      configurable: true, // configurável
    },
  });
}

const p1 = new Produto("Camiseta Nike", 20, 3);
console.log(p1);
