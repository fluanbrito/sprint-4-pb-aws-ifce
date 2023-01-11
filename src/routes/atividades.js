const express = require("express")
const router = express.Router()
const atividade_utils = require("../utils/atividades_utils")
const axios = require("axios");

//padrão do ID
const { v4: uuidv4 } = require('uuid');

//Rotas API "atividades"
router.get('/atividades',async (req,res) => {
    try {
        const {data} = await axios('https://www.boredapi.com/api/activity')
    
        return res.send({
            "id": uuidv4(),
            "atividade": data.activity,
            "tipo": data.type,
            "participantes": data.participants,
            "acessibilidade": atividade_utils.formatar_accessibility(data.accessibility)

        })
    }   catch (error) {
        res.send({error: error.message})  
    }
})

module.exports = router