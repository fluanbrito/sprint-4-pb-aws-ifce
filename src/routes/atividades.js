const express = require("express")
const router = express.Router()
const api_atividades = require("../apis/api_atividades");
const atividade_utils = require("../utils/atividades_utils")

//padrão do ID
const { v4: uuidv4 } = require('uuid');

router.get('/atividades',async (req,res) => {
    try {
        const {data} = await api_atividades.get('/api/activity')
    
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