const express = require("express");
const router = express.Router();

// Cria um roteador que escuta uma requisição GET na rota "/atividades"
router.get("/atividades", (req, res) => {
  // Opções da requisição
  const options = {
    method: "GET", // Método da requisição
    mode: "cors", // Modo de requisição
    cache: "default", // Cache da requisição
  };
  // Faz uma requisição GET usando o Fetch API à API de Atividades
  fetch(`https://www.boredapi.com/api/activity`, options)
    .then((result) => {
      // Converte o resultado da requisição para JSON
      result.json().then((data) => {
        // Envia a resposta com status 200 e os dados obtidos
        res.status(200).send(data);
      });
    })
    .catch((err) => console.log("Error:" + err, message));
});

// Exporta a rota criada para que possa ser usada em outros arquivos da aplicação
module.exports = router;