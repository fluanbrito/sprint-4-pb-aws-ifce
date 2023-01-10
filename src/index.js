const api_chucknorris = require("./apis/api_chucknorris");
const api_atividades = require("./apis/api_atividades");
const express = require("express");
const server = express();
server.use(express.json());
const axios = require("axios");
const chuck_utils = require("./utils/chuck_utils")
const atividade_utils = require("./utils/atividades_utils")

//Rota inicial
server.get("/", (req, res) => {
    return res.send("Este é o app do grupo 3 😎")
});

//padrão do ID
const { v4: uuidv4 } = require('uuid');

//rotas formatações dos dados que serão apresentados
server.get("/api/piadas", async (req, res) => {
    try {
        const {data} = await api_chucknorris.get('/jokes/random')
    
        return res.send({
            "data_atualizacao": chuck_utils.formatar_data((data.updated_at)),
            "data_criacao": chuck_utils.formatar_data((data.created_at)),
            "icone": data.icon_url,
            "id": uuidv4(),
            "piada": chuck_utils.formatar_piada(chuck_utils.upperName(data.value)),
            "referencia": data.url
    
        })
    }   catch (error) {
        res.send({error: error.message})  
    }
});

//rotas e formatação dos dados apresentados
server.get("/api/atividades", async (req, res) => {
    try {
        const {data} = await api_atividades.get('/api/activity')
    
        return res.send({
            "id": data.id,
            "atividade": data.activity,
            "tipo": data.type,
            "participantes": data.participants,
            "acessibilidade": atividade_utils.formatar_accessibility(data.accessibility)

        })
    }   catch (error) {
        res.send({error: error.message})  
    }
});

// Ouvindo na porta 8080
server.listen(8080); 
console.log("Servidor aberto em 8080");