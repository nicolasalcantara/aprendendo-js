function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;
  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: true,
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        console.log("Bad value");
        return;
      }

      estoquePrivado = valor;
    },
  });
}

const p1 = new Produto("Camiseta Nike", 20, 5);
console.log(p1.estoque);
