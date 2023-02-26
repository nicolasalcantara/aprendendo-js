// Produto -> aumento, desconto
// Camiseta = Cor, caneca = material, lapis

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};

Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}

// O prototype da camiseta/tenis será o do Produto
Camiseta.prototype = Object.create(Produto.prototype);
// Para a camiseta ter o construtor da Camiseta e não do Produto
Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta("Camisa Nike", 120, "Preta");
const produto = new Produto("Tênis", 900);
console.log(produto);
console.log(camiseta);
