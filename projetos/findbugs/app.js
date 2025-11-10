// Debug feito com Chrome DevTools
const fs = require('fs');

function carregarUsuarios() {
  //Arquivo 'users.js' estava com o nome e a extensão errada, err ENOENT.
  //Estrutura do json estava incorreta, dando 'usuarios: undefined'
  fs.readFile('usuarios.json', 'utf8', (err, dados) => {
    if (err) {
      console.log('Erro ao ler o arquivo:', err.message);
    } else {
      const usuarios = JSON.parse(dados);
      filtrarUsuarios(usuarios);
    }
  });
}

function filtrarUsuarios(lista) {
  const resultado = lista.filter((usuario) => usuario.idade > 18);
  console.log('Usuários maiores de idade:');
  resultado.forEach((u) => {
    console.log(`- ${u.nome} (${u.idade} anos)`);
  });
}

function exibirMensagem() {
//Mensagem não foi definida. 'mensagem: undefined'
const mensagem = "Usuários carregados"
  console.log(mensagem); 
}

function main() {
  carregarUsuarios();
  exibirMensagem();
}

main();
