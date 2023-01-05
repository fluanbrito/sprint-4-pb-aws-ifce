const express = require('express');
const app = express()
const axios = require("axios")
const { v4: uuidv4 } = require('uuid');




function formatdate(date) {
    datef = date.slice(0, 10).split('-');
    return `${datef[2]}-${datef[1]}-${datef[0]}`
};

function formatevalue(value) {
    newValue = value.replace('Chuck Norris', 'Chuck Norris'.toLocaleUpperCase())
    return newValue
};

function createJsonCN(dateupdate, datecreate, icon, id, piada, referencia) {
    let template = `{
        "data_atualizacao": "${dateupdate}",
            "data_criacao": "${datecreate}",
                "icone": "${icon}",
                    "id": "${id}",
                        "piada": "${piada}",
                            "referencia": "${referencia}"
    }
    `
    tempJson = JSON.parse(template)
    return tempJson
};

function createJsonAT(id, atividades, tipo, participantes, acessibilidade) {
    let template = `{
        "id": "${id}",
        "atividade": "${atividades}",
        "tipo": "${tipo}",
        "participantes": ${participantes},
        "acessibilidade": "${acessibilidade}"
      }
    `
    tempJson = JSON.parse(template)
    return tempJson
};

function formatAcc(acc) {
    newAcc = `${(parseFloat(acc)) * 100}%`
    return newAcc
};

app.get('/', (req, res) =>
    res.send("Esse trabalho percente ao Grupo-1"));

app.get('/api/piadas', async (req, res) => {
    const { data } = await axios("https://api.chucknorris.io/jokes/random")
    const dateupdate = formatdate((data.updated_at))
    const datecreate = formatdate((data.created_at))
    const icon = data.icon_url
    const id = uuidv4();
    const piada = formatevalue(data.value)
    const referencia = data.url

    const returnValueCN = createJsonCN(dateupdate, datecreate, icon, id, piada, referencia)

    res.send(returnValueCN)
})

app.get('/api/atividades', async (req, res) => {
    const { data } = await axios("https://www.boredapi.com/api/activity")
    const id = uuidv4()
    const atividades = data.activity
    const tipo = data.type
    const participantes = data.participants
    const acessibilidade = formatAcc(data.accessibility)

    const returnValueAT = createJsonAT(id, atividades, tipo, participantes, acessibilidade)

    res.send(returnValueAT)
})

app.listen(8080, () => {
    console.log(`Rodando na porta 8080`)
})