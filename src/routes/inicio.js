const express = require("express") // importando o framework Express.js
const router = express.Router() // criando uma instância de rotas

router.get('/',(req,res) => {  // definindo rota principal para a página inicial
    res.send("Este é o app do grupo 2 👾") // enviando uma mensagem como resposta para a requisição
})

module.exports = router // exportando a instância de rotas
