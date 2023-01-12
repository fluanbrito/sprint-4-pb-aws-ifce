const express = require("express");
const app = express();
const path = require("path");
const PORT = "8080";

// Configuração para usar arquivos estáticos do diretório src
app.use(express.static(__dirname + "/src"));

// Rota principal para a raiz da aplicação
app.get("/", function (req, res) {
  res.status(200).send("<h1>Este é o app do Grupo 2 👾</h1>");
});

// Rota para acessar as atividades
app.use("/api", require("./src/atividades")); 

// Rota para acessar as piadas
app.use("/api", require("./src/piadas")); 

// Inicia o servidor e escuta na porta 8080
app.listen(PORT, function () {
  console.log(`Ouvindo a porta ${PORT}`);
});