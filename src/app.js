const express = require("express");
const app = express();

const PORT = 8080;

// Porta de comunicação 
app.listen(PORT, function() {
   console.log(`O APP está rodando na porta ${PORT}`)
});

app.get('/', async(req, res) => {
   // Renderiza a página HTML index
   res.send("<h1>Este é o app do grupo 5 \uD83D\uDE0A</h1>");
});

// Uso das rotas
app.use('/api/piadas', require('./routes/piadas'))

app.use('/api/atividades', require('./routes/atividades'))