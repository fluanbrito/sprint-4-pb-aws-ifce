const express = require("express");
const router = express.Router();

// Rota para obter uma piada aleatória
router.get("/piadas", (req, res) => {
  const options = {
    method: "GET", // Método da requisição
    mode: "cors", // Modo de requisição
    cache: "default", // Cache da requisição
  };
  // Faz uma requisição GET usando o Fetch API à API de piadas
  fetch(`https://api.chucknorris.io/jokes/random`, options)
    .then((result) => {
      // Converte o resultado em formato JSON
      result.json().then((data) => {
        // Envia a piada como resposta e status 200
        res.status(200).send(data);
        
      });
    })
    .catch((err) => console.log("Error:" + err, message));
});

// Exporta a rota criada para que possa ser usada em outros arquivos da aplicação
module.exports = router;