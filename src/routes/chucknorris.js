const express = require("express")
const router = express.Router()
const api_chucknorris = require("../apis/api_chucknorris");
const chuck_utils = require("../utils/chuck_utils")

//padrão do ID
const { v4: uuidv4 } = require('uuid');

router.get('/piadas',async (req,res) => {
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
})

module.exports = router