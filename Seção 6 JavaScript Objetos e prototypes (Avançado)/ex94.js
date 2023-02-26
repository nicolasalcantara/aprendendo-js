function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  return (preco = this.preco - this.preco * (percentual / 100));
};

Produto.prototype.aumento = function (percentual) {
  return (preco = this.preco + this.preco * (percentual / 100));
};

const p1 = new Produto("Camiseta Nike", 100);

const p2 = {
  nome: "Tênis",
  preco: 200,
};

Object.setPrototypeOf(p2, Produto.prototype);

const p3 = Object.create(Produto.prototype, {
  nome: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: "Meia Adidas",
  },
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 100,
  },
});
// p3.nome = "Meia Adidas";
// p3.preco = 100;
p1.aumento(50);
p2.aumento(50);
p3.aumento(50);

console.log(p1.desconto(50));
