![imagem compass](https://vetores.org/d/compass-uol.svg)
### Atividade Avaliativa - Referente a 4° Sprint do programa de Bolsas Compass UOL 
 
### Projeto foi desenvolvido por: 

* [@Luan-Ferreira](https://github.com/fluanbrito)
* [@Jhonatan-Lobo](https://github.com/JhonatanLobo)
* [@Tecla-Fernandes](https://github.com/TeclaFernandes)
* [@Julio-Cesar](https://github.com/JC-Rodrigues)

### Recursos necessários.

 - [Visual Studio Code](https://code.visualstudio.com/)
 - [Node.js](https://nodejs.org/en/)
 - [API Piadas](https://api.chucknorris.io/jokes/random)
 - [API Atividades]( https://www.boredapi.com/api/activity)
 - [Amazon Web Services](https://aws.amazon.com/pt/)
### Desenvolvimento da Avaliação
O projeto foi desenvolvido com a seguinte organização de pastas: 

![imagem compass](https://i.imgur.com/knfl97M.jpeg)



Comandos utilizados no projeto
```
npm init -y 
```
Comando de criação do arquivo package.json
```
npm install --save express
```
Instalação do modulo Express.
```
npm install --save axios
```
Biblioteca para consumo de api's.
```
npm install --save nodemon
```
Aplicação responsável por reiniciar o servidor local sempre que necessário.
```
npm start
```
Comando para iniciar o projeto.

### Código Construído 
### APP.js
Importando o framework Express.js
```javascript
const express = require("express");
```
Criando uma instância do servidor usando Express
```javascript
const server = express(); 
```
importando arquivo de rotas para a página inicial
```javascript
const inicio = require("./src/routes/inicio") 
```

Importando arquivo de rotas para as piadas
```javascript
const chuckNorris = require("./src/routes/piadas") 
```
Importando arquivo de rotas para as atividades
```javascript
const atv = require("./src/routes/atividades") 
```
Configurando o servidor para aceitar requisições no formato JSON

```javascript 
server.use(express.json()); 
```

Adicionando rotas para a página inicial
```javascript
server.use('/', inicio)

```
Adicionando rotas para as piadas
``` javascript

server.use('/api', chuckNorris)

```

Adicionando rotas para as atividades
```javascript

server.use('/api', atv)
```

 
Iniciando o servidor e configurando-o para escutar na porta 8080
```javascript

console.log("Servidor aberto em 8080");
```

Imprimindo mensagem no console para indicar que o servidor está aberto e pronto para receber requisições
```javascript

server.listen(8080);
```

### Package.json
Arquivo padrão com parâmetros de inicio da aplicação NODE
![imagem](https://i.imgur.com/pNkxM1s.jpeg)

### Format 
Exemplo de codigo utilizado no arquivo atividades_format.js
#### Função para formatar a acessibilidade #
```javascript
   function formatar_accessibility(valor) { 
```

multiplicando o valor da acessibilidade por 100
```javascript
    valor = parseFloat(valor) * 100
```
Adicionando sinal de porcentagem ao valor 
```javascript
    return valor + '%' 
};
````
Exportando a função para ser usada em outros arquivos

```javascript

module.exports = {formatar_accessibility}
```

### Routes
Exemplo de código utilizado no arquivo inicio.js

### Nesse arquivo é definido a rota a ser inserida no navegador que leva o usuário até a página desejada ##
Importando o framework Express.js
```javascript
const express = require("express")
```
Criando uma instância de rotas
```javascript
const router = express.Router()
```
Definindo rota principal para a página inicial
```javascript
router.get('/',(req,res) => {  
    res.send("Este é o app do grupo 2 👾") // enviando uma mensagem como resposta para a requisição
})
```
Exportando a instância de rotas
```javascript
module.exports = router 
```


### Execução 


Ao abrir o terminal e executar o comando ```npm start``` a aplicação é iniciada

Para consultar a aplicação localmente é necessário inserir o endereço localhost:8080 na barra de pesquisa do seu navegador.

Se os passos foram executados corretamente a seguinte mensagem é exibida em sua tela.

![imagem](https://i.imgur.com/80CxiGF.jpeg)


### Uso do Deploy (AWS Elastic Beanstalk)
Esse recurso é ofertado pela Amazon, fazendo possível hospedar suas páginas em servidor web.

O uso da ferramenta é simples, o usuário seleciona a região do servidor, realiza o upload do arquivos compactados .zip, assim a url de acesso da página web é disponibilizada.

####  A página dessa avaliação encontra-se hospedada no seguinte link:

[Grupo 2 - página raiz ](http://equipe2segunda-env.eba-gzyfnmiu.us-east-1.elasticbeanstalk.com/)
 
Seguinte tela é apresentada: 

![imagem](https://i.imgur.com/r7ugDKy.jpeg)

[Grupo 2 - página piadas ](http://equipe2segunda-env.eba-gzyfnmiu.us-east-1.elasticbeanstalk.com/api/piadas/)

Seguinte tela é apresentada: 

![imagem](https://i.imgur.com/GCxCHEn.jpeg)

[Grupo 2 - página atividades ](http://equipe2segunda-env.eba-gzyfnmiu.us-east-1.elasticbeanstalk.com/api/atividades)  

Seguinte tela é apresentada: 

![imagem](https://i.imgur.com/i6zByl0.jpeg)


## Considerações da equipe
## Impedimentos resolvidos

Algumas dificuldades enfrentadas por nossa equipe ao desenvolver ma aplicação para rodar na nuvem AWS incluem:

- Interpretação inicial da construção e organização do código, como também a formatação de como aplicar no consumo da API.
- Tivemos um impasse quando enviamos para AWS, estava ocasionando um erro, porém foi resolvido após ajustes no package.json(Definição da rota START e MAIN).
- Interpretação de como funciona a leitura de rotas quando está na AWS(Resolvido após estudo e pesquisa, foi preciso acrescentar na url /api/atividades e assim da mesma forma nas outras rotas).



