const express = require("express");
const app = express();
const axios = require("axios");
const format = require("./formatacoes.js")
const PORT = 8080;

// Porta de comunicação 
app.listen(PORT, function() {
   console.log(`O APP está rodando na porta ${PORT}`)
});

app.get('/', async(req, res) => {
    console.log("Este é o app do Grupo 5 😀")
    res.end();
 });

app.get('/api/piadas', async(req, res) => {
   const {data} = await axios("https://api.chucknorris.io/jokes/random")
   // console.log(data) exibe todos os dados de retorno da API
   console.log(JSON.parse(`
   { 
      "data_atualizacao": "${format.formatDate(data.updated_at)}",
      "data_criacao": "${format.formatDate(data.created_at)}",
      "icon": "${data.icon_url}",
      "id":" ${format.geraGUID()}",
      "piada": "${format.caixaAlta(data.value)}",
      "referencia": "${data.url}"
   }`));
   res.end()
 });

app.get('/api/atividades', async(req, res) => {
   const {data} = await axios("https://www.boredapi.com/api/activity")
   // console.log(data) exibe todos os dados de retorno da API
   console.log(JSON.parse(`
   {
      "id": "${format.geraGUID()}",
      "atividade": "${data.activity}",
      "tipo": "${data.type}",
      "participantes": "${data.participants}",
      "acessibilidade": "${format.acessibilidade(data.accessibility)}"
   }`));
   res.end()
 });


