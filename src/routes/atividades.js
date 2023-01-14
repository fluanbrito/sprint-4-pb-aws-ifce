const express = require("express") // importando o framework Express.js
const router = express.Router() // criando uma instância de rotas
const atividade_utils = require("../format/atividades_format") // importando o arquivo de utilitários para formatação de dados
const axios = require("axios"); // importando a biblioteca axios para realizar requisições HTTP

const { v4: uuidv4 } = require('uuid'); // importando a biblioteca uuid para gerar IDs únicos

router.get('/atividades',async (req,res) => {  // definindo rota para obter atividades aleatórias
    try {
        const {data} = await axios('https://www.boredapi.com/api/activity')  // fazendo requisição à API de atividades
    
        return res.send({
            "id": uuidv4(), // gerando id único para a atividade
            "atividade": data.activity, // obtendo nome da atividade
            "tipo": data.type, // obtendo tipo da atividade
            "participantes": data.participants, // obtendo número de participantes
            "acessibilidade": atividade_utils.formatar_accessibility(data.accessibility)  // formatando a acessibilidade da atividade

        })
    }   catch (error) {
        res.send({error: error.message})  // caso ocorra algum erro, envia a mensagem de erro como resposta
    }
})

module.exports = router // exportando a instância de rotas
