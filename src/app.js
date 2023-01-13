const express = require("express");
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');

const PORT = 8080;

// Porta de comunicação 
app.listen(PORT, function() {
   console.log(`O APP está rodando na porta ${PORT}`)
});

// Setando as views com handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async(req, res) => {
   // Renderiza a página HTML index
   res.render('index');
});

// Uso das rotas
app.use('/api/piadas', require('./routes/piadas'))

app.use('/api/atividades', require('./routes/atividades'))