// IIFE -> Immediataly invoked function expression
(function () {
  const nome = "Nicolas";
  function falaOi(nome) {
    console.log(`Hello ${nome}`);
  }
  falaOi(nome);
})();
