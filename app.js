const express = require("express"); // importando o framework Express.js
const server = express(); // criando uma instância do servidor usando Express

const inicio = require("./src/routes/inicio") // importando arquivo de rotas para a página inicial
const chuckNorris = require("./src/routes/piadas") // importando arquivo de rotas para as piadas
const atv = require("./src/routes/atividades") // importando arquivo de rotas para as atividades

server.use(express.json()); // configurando o servidor para aceitar requisições no formato JSON

server.use('/', inicio) // adicionando rotas para a página inicial

server.use('/api', chuckNorris) // adicionando rotas para as piadas

server.use('/api', atv) // adicionando rotas para as atividades

server.listen(8080); // iniciando o servidor e configurando-o para escutar na porta 8080
console.log("Servidor aberto em 8080"); // imprimindo mensagem no console para indicar que o servidor está aberto e pronto para receber requisições
