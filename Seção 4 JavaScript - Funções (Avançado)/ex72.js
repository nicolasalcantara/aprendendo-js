// Global
function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao("Nicolas");
const funcao2 = retornaFuncao("Alcântara");

console.log(funcao(), funcao2());
