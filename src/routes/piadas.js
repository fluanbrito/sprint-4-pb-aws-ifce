const express = require('express');
const router  = express.Router();
const axios = require('axios');

const format = require("../formatacoes")

router.get('/', async(req, res) => {
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

module.exports = router;