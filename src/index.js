const express = require("express");
const server = express();

// Importando rotas
const route_home = require("./routes/home")
const route_chucknorris = require("./routes/chucknorris")
const route_atividades = require("./routes/atividades")

server.use(express.json());

// Rota inicial
server.use('/', route_home)

// rotas chucknorris
server.use('/api', route_chucknorris)

// rotas api atividades
server.use('/api', route_atividades)


// Ouvindo na porta 8080
server.listen(8080); 
console.log("Servidor aberto em 8080");