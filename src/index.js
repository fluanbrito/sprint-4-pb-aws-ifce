const api = require("./api");

const express = require("express");

const server = express();

server.use(express.json());

server.listen(80); // Ouvindo na porta 80
console.log("Servidor aberto em: 127.0.0.1");

server.get("/", (req, res) => {
    return res.send("Este é o app do grupo 3 😎")
});

server.get("/api/piadas", async (req, res) => {
    try {
        const {data} = await api.get('/jokes/random')
    
        return res.send({
            "data_atualizacao": data.updated_at,
            "data_criacao": data.created_at,
            "icone": data.icon_url,
            "id": data.id,
            "piada": data.value,
            "referencia": data.url
    
        })
    }   catch (error) {
        res.send({error: error.message})  
    }
});

server.get("/api/atividades", async (req, res) => {
    try {
        const {data} = await api.get('https://www.boredapi.com/api/activity')
    
        return res.send({
            "id": data.id,
            "atividade": data.activity,
            "tipo": data.type,
            "participantes": data.participants,
            "acessibilidade": data.accessibility

        })
    }   catch (error) {
        res.send({error: error.message})  
    }
});