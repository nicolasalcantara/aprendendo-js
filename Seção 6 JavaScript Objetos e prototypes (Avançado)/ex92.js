/*
// ...spread
const produto = { nome: "Caneca", preco: 1.8 };
const outroProduto = {
    ...produto,
    material: "Vidro",
};

outroProduto.nome = "Copo";
outroProduto.preco = "2.0";
outroProduto.material = "Vidro";
console.log(outroProduto);
*/

/*
// assign
const produto = { nome: "Caneca", preco: 1.8 };
const caneca = Object.assign({}, produto, { material: "porcelana" });
caneca.preco = 2.0;
console.log(caneca);
console.log(produto);
*/

/*
const produto = { nome: "Copo", preco: 1.8 };
const caneca = { nome: produto.nome };
caneca.nome = "Caneca";
console.log(produto);
console.log(caneca);
*/

/*
const produto = { nome: "Copo", preco: 1.8 };
const caneca = { nome: produto.nome };
console.log(Object.keys(produto));
*/

/*
// Object.getOwnPropertyDescriptor
const produto = { nome: "Copo", preco: 1.8 };
console.log(Object.getOwnPropertyDescriptor(produto, "nome"));
 */

/*
// entries
const produto = { nome: "Copo", preco: 1.8, material: "Porcelana" };
for (let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor);
}
 */
