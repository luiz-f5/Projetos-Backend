const http = require('http');

const servidor = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Content-Language', 'pt-BR');
  
  switch (req.url) {
    case '/':
      res.statusCode = 200;
      res.end('Bem-vindo ao meu servidor!');
      break;

    case '/contato':
      res.statusCode = 200;
      res.end('Página de Contato');
      break;

    case '/servicos':
      res.statusCode = 200;
      res.end('Nossos serviços estão em construção.');
      break;

    default:
      res.statusCode = 404;
      res.end('Página não encontrada.');
      break;
  }
});

servidor.listen(3000, () => {
  console.log('Servidor está rodando em http://localhost:3000/');
});