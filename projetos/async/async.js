function buscarDadosDoServidor() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ status: 200, dados: "OK" });
    }, 2000);
  });
};

async function testarBusca() {
  const resultado = await buscarDadosDoServidor();
  console.log("Resultado da busca:", resultado);
};

function baixarImagem() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Imagem baixada"), 2000);
  });
}

function baixarVideo() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Vídeo baixado"), 3000);
  });
}

async function baixarMidias() {
  const [imagem, video] = await Promise.all([baixarImagem(), baixarVideo()]);
  console.log(imagem);
  console.log(video);
}

function fazerLogin(usuario, senha) {
  return new Promise((resolve, reject) => {
    if (usuario === "admin" && senha === "1234") {
      resolve("Login bem-sucedido");
    } else {
      reject("Credenciais inválidas");
    }
  });
}

async function testarLogin(usuario, senha) {
  try {
    const resultado = await fazerLogin(usuario, senha);
    console.log(resultado);
  } catch (erro) {
    console.log(erro);
  }
}

function getUsuario() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id: 5, nome: "João" }), 1000);
  });
}

function getPedidos(idUsuario) {
  return new Promise(resolve => {
    setTimeout(() => resolve(["Pedido 1", "Pedido 2", "Pedido 3"]), 1500);
  });
}

async function mostrarPedidos() {
  const usuario = await getUsuario();
  const pedidos = await getPedidos(usuario.id);
  console.log(`Usuário: ${usuario.nome}`);
  console.log("Pedidos:", pedidos);
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function contarAte(numero) {
  for (let i = 1; i <= numero; i++) {
    console.log(i);
    await delay(1000);
  }
}

function buscarComTimeout() {
  const busca = new Promise(resolve => {
    setTimeout(() => resolve("Dados encontrados"), 2000);
  });

  const timeout = new Promise((_, reject) => {
    setTimeout(() => reject("Tempo esgotado"), 1000);
  });

  return Promise.race([busca, timeout]);
}

async function testarBuscaComTimeout() {
  try {
    const resultado = await buscarComTimeout();
    console.log(resultado);
  } catch (erro) {
    console.log(erro);
  }
}

function promessa1() {
  return new Promise(resolve => setTimeout(() => resolve("Resolvida 1"), 1000));
}

function promessa2() {
  return new Promise((_, reject) => setTimeout(() => reject("Rejeitada 2"), 2000));
}

function promessa3() {
  return new Promise(resolve => setTimeout(() => resolve("Resolvida 3"), 500));
}

async function verificarResultados() {
  const results = await Promise.allSettled([promessa1(), promessa2(), promessa3()]);
  results.forEach((results, index) => {
    console.log(`Promessa ${index + 1}:`, results.status, "-", results.reason || results.value);
  });
}
