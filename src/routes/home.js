const express = require("express")
const router = express.Router()

//Rotas iniciais 
router.get('/',(req,res) => {
    res.send("Este é o app do grupo 3 😎")
})

module.exports = router