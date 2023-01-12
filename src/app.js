const express = require("express");
const app = express();
const PORT = 8080;

// Porta de comunicação 
app.listen(PORT, function() {
   console.log(`O APP está rodando na porta ${PORT}`)
});

app.get('/', async(req, res) => {
    console.log("Este é o app do Grupo 5 😀")
    res.end();
 });

// Uso das rotas
app.use('/api/piadas', require('./routes/piadas'))

app.use('/api/atividades', require('./routes/atividades'))