const express = require('express')
const router = express.Router()
const axios = require("axios")
const { v4: uuidv4 } = require('uuid');

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

router.get('/api/atividades', async (req, res) => {
    const { data } = await axios("https://www.boredapi.com/api/activity")
    const id = uuidv4()
    const atividades = data.activity
    const tipo = data.type
    const participantes = data.participants
    const acessibilidade = formatAcc(data.accessibility)

    const returnValueAT = createJsonAT(id, atividades, tipo, participantes, acessibilidade)

    res.send(returnValueAT)
})

module.exports = router