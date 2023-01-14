const express = require("express") // importando o framework Express.js
const router = express.Router() // criando uma instância de rotas
const chuck_utils = require("../format/chuck_format") // importando o arquivo de utilitários para formatação de dados
const axios = require("axios"); // importando a biblioteca axios para realizar requisições HTTP

const { v4: uuidv4 } = require('uuid'); // importando a biblioteca uuid para gerar IDs únicos

router.get('/piadas',async (req,res) => { // definindo rota para obter piadas aleatórias
    try {
        const {data} = await axios('https://api.chucknorris.io/jokes/random') // fazendo requisição à API de piadas do Chuck Norris
        
        return res.send({
            "data_atualizacao": chuck_utils.formatar_data((data.updated_at)), // formatando data de atualização da piada
            "data_criacao": chuck_utils.formatar_data((data.created_at)), // formatando data de criação da piada
            "icone": data.icon_url, // obtendo url do ícone da piada
            "id": uuidv4(), // gerando id único para a piada
            "piada": chuck_utils.upperName(data.value), // formatando a piada para caixa alta
            "referencia": data.url // obtendo url de referência da piada
            
        })
    }   catch (error) {
        res.send({error: error.message})  // caso ocorra algum erro, envia a mensagem de erro como resposta
    }
})

module.exports = router // exportando a instância de rotas
