const api = require("./api");
const express = require("express");
const server = express();
server.use(express.json());
const axios = require("axios");



//Formatações e rotas da API Chuck Norris

//deixando a palavra "Chuck Norris" em alta caixa
function upperName(valor) {
    new_valor = valor.replace('Chuck Norris', 'Chuck Norris'.toLocaleUpperCase())
    return new_valor
}

//formatando a piada
function formatar_piada(valor) {
    new_valor = valor.replace(/"/g, '`')
    return new_valor
}

//formatando data
function formatar_data(valor_data) {
    new_data = valor_data.slice(0, 10).split('-');
    return `${new_data[2]}-${new_data[1]}-${new_data[0]}`
};


server.get("/", (req, res) => {
    return res.send("Este é o app do grupo 3 😎")
});

//padrão do ID
const { v4: uuidv4 } = require('uuid');

//rotas formatações dos dados que serão apresentados
server.get("/api/piadas", async (req, res) => {
    try {
        const {data} = await api.get('https://api.chucknorris.io/jokes/random')
    
        return res.send({
            "data_atualizacao": formatar_data((data.updated_at)),
            "data_criacao": formatar_data((data.created_at)),
            "icone": data.icon_url,
            "id": uuidv4(),
            "piada": formatar_piada(upperName(data.value)),
            "referencia": data.url
    
        })
    }   catch (error) {
        res.send({error: error.message})  
    }
});


//FUNÇÕES DE FORMATAÇÃO E ROTAS DA API "ATIVIDADES"

//formatando o dados de acessibilidade
function formatar_accessibility(acc) {
    newAcc = `${(parseFloat(acc)) * 100}%`
    return newAcc
};

//rotas e formatação dos dados apresentados
server.get("/api/atividades", async (req, res) => {
    try {
        const {data} = await api.get('https://www.boredapi.com/api/activity')
    
        return res.send({
            "id": data.id,
            "atividade": data.activity,
            "tipo": data.type,
            "participantes": data.participants,
            "acessibilidade": formatar_accessibility(data.accessibility)

        })
    }   catch (error) {
        res.send({error: error.message})  
    }
});

// Ouvindo na porta 8080
server.listen(8080); 
console.log("Servidor aberto em 8080");