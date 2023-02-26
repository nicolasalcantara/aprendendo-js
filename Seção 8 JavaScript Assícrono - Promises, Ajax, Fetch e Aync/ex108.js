function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function conectarBD(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("BAD VALUE");

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

conectarBD("Conexão com o BD", rand(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return conectarBD("Buscando dados da BD", rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return conectarBD("Tratando os dados da BD", rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .then(() => {
    console.log("Exibe os dados na tela");
  })
  .catch((e) => {
    console.log("ERRO:", e);
  });

console.log("Hello World!!");
