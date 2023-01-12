const express = require("express");
const server = express();

// Importando rotas
const inicio = require("./routes/inicio")
const chuckNorris = require("./routes/api_chucknorris")
const atv = require("./routes/api_atv")

server.use(express.json());

// rota inicial
server.use('/', inicio)

// rotas chucknorris
server.use('/api', chuckNorris)

// rotas api atividades
server.use('/api', atv)


// Ouvindo na porta 8080
server.listen(8080); 
console.log("Servidor aberto em 8080");