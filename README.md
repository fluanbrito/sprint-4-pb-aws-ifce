# Consumo de duas APIs distintas e sua automatização de detalhes escalonamento pelo serviço deploy na AWS Elastic Beanstalk.

> Neste projeto fazemos utilização de duas APIs distintas e executar o deploy na AWS Elastic Beanstalk.

[![N|Solid](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/LogoCompasso-positivo.png/440px-LogoCompasso-positivo.png)](https://compass.uol/pt/home/)

Neste arquivo se encontra detalhado o passo a passo de como foi desenvolvido de duas APIs distintas e execução por parte do deploy na AWS Elastic Beanstalk. Neste presente arquivo será apresentado:
- Apresentação das APIs
- Ferramentas
- Comandos

## Apresentação das APIs

**1ª API: Chuck Norris Jokes API**: 
A API Chuck Norris fornece milhares de piadas engraçadas de Chuck Norris para suas necessidades de desenvolvimento de aplicativos de entretenimento.

**2ª API: Activity:**
A API Activity é uma API que gera informações de atividades diarista, porém com detalhes precisos sobre as mais diversas atividades. Nela você irá encontrar descrição da atividade, tipo dela, preço, link e entre outras informações.

## Ferramentas

As principais ferramentas utilizadas no projeto foram:

- **[API Chuck Norris](https://api.chucknorris.io/jokes/random)** - API responsável por fornece milhares de piadas engraçadas de Chuck Norris para suas necessidades de desenvolvimento de aplicativos de entretenimento.

- **[API 2](https://www.boredapi.com/api/activity)** - API que gera informações de atividades diarista, porém com detalhes precisos sobre as mais diversas atividades.

- **[Visual Studio Code v.1.73.1](https://code.visualstudio.com/)** - Editor de código aberto desenvolvido pela Microsoft. Nesse caso, ele foi usado em prol do desenvolvimento deste README do projeto.

- **[Amazon Web Services](https://aws.amazon.com/pt/)** - Também conhecido como AWS, é uma plataforma de serviços de computação em nuvem, que formam uma plataforma de computação na nuvem oferecida pela Amazon.com. Os serviços são oferecidos em várias áreas geográficas distribuídas pelo mundo. Dentre teus principais serviços, estão:
1º Computação.
2º Armazenamento.
3º Banco de dados.
4º Redes e entrega de conteúdo.
5º Análises.
6º /Machine learning.
7º Segurança, identidade e conformidade. Dentre muito outros.

## Comandos

Comerce criando um projeto Node.js.
```
npm init -y
```
O comando *npm init* criará um pacote onde os arquivos do projeto serão armazenados. Todos os módulos e dependências serão baixados armazenados no pacote.

Para instalar as dependências do seu projeto, vamos começar com a express, que é um framework para Node.js que fornece recursos mínimos para construção de servidores web:
```
npm install --save express
```
Quando o comando "--save" for usado com o npm install, ele salvará todos os pacotes principais instalados na seção de dependências do arquivo package. arquivo json.

Instale uma ferramenta chamada nodemon que reinicia automaticamente o aplicativo do nó ao detectar qualquer alteração.
```
npm install --save nodemon
```
Agora, vamos instalar a dependência axios, que é um cliente HTTP baseado em promessas para o node.js e para o navegador:
```
npm install --save axios
```
Agora chega uma parte muito importante do projeto que é a organização geral do código fonte. Nesse caso, na pasta raiz irá se encontrar apenas nossos arquivos json gerados. Para uma maior organização foi criado uma pasta /src onde estará o arquivo index e dois diretórios, o /routes para as rotas e o /utils para as funções de formatação das APIs. Como mostrado na imagem abaixo:
![estrutura_arquivos](https://user-images.githubusercontent.com/119500249/212207758-c94e1c19-daf2-4120-8845-683affe1a99d.png)

Agora adentrando as rotas das APIs, temos primeiro a rota da API de atividades, segue o código:
```
const express = require("express")
const router = express.Router()
const atividade_utils = require("../utils/atividades_utils")
const axios = require("axios");

//padrão do ID random
const { v4: uuidv4 } = require('uuid');

//Rotas API "atividades"
router.get('/atividades',async (req,res) => {
    try {
        const {data} = await axios('https://www.boredapi.com/api/activity')
    
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
```
Após isso, vamos as rotas de acesso a API do Chuck Norris
```
const express = require("express")
const router = express.Router()
const chuck_utils = require("../utils/chuck_utils")
const axios = require("axios");

//padrão do ID random
const { v4: uuidv4 } = require('uuid');

//Rotas API Chuck Norris
router.get('/piadas',async (req,res) => {
    try {
        const {data} = await axios('https://api.chucknorris.io/jokes/random')
        
        return res.send({
            "data_atualizacao": chuck_utils.formatar_data((data.updated_at)),
            "data_criacao": chuck_utils.formatar_data((data.created_at)),
            "icone": data.icon_url,
            "id": uuidv4(),
            "piada": chuck_utils.upperName(data.value),
            "referencia": data.url
            
        })
    }   catch (error) {
        res.send({error: error.message})  
    }
})

module.exports = router
```

Para finalizar essa parte de rotas, temos a rota inicial sendo-a responsável por sinalizar o estabelecimento da conexão.
```
const express = require("express")
const router = express.Router()

//Rotas iniciais 
router.get('/',(req,res) => {
    res.send("Este é o app do grupo 3 😎 / Programa de bolsas Compass UOL")
})

module.exports = router
```

Já finalizada a parte de configurações das rotas, adentramos agora a pasta /utils, onde consta as formatações necessárias de ambas as APIs. Vamos agora a formatação adevinda da API de atividades.
```
//FUNÇÕES DE FORMATAÇÃO DA API "ATIVIDADES"

//formatando o dados de acessibilidade
function formatar_accessibility(valor) {
    valor = parseFloat(valor) * 100
    return valor + '%'
};

module.exports = {formatar_accessibility}
```
Nesse caso, temos a formatação aos dados de acessibilidade, onde a função 

Formatação da API Chuck Norris
```
const moment = require('moment')

//FUNÇÕES DE FORMATAÇÃO DA API CHUCK NORRIS

//deixando o nome "Chuck Norris" em alta caixa
function upperName(nome){
    nome = nome.replace("Chuck Norris", "CHUCK NORRIS")
    return nome
};

//formatando a data
function formatar_data(valor_data){
    const new_data = moment(valor_data).format("DD-MM-YY")
    return new_data
}

module.exports = {upperName, formatar_data}
```
Nessa formatação é responsável por deixar o nome "Chuck Norris" em alta caixa e o formato da data.

Por fim na pasta /src, temos o arquivo ==index.js== que terá as importações de ambas as rotas das APIs.
```
const express = require("express");
const server = express();

// Importando rotas
const inicio = require("./routes/inicio")
const chuckNorris = require("./routes/api_chucknorris")
const atv = require("./routes/api_atv")

server.use(express.json());

// rota inicial
server.use('/', inicio)

// rotas chucknorris
server.use('/api', chuckNorris)

// rotas api atividades
server.use('/api', atv)


// Ouvindo na porta 8080
server.listen(8080); 
console.log("Servidor aberto em 8080");
```
Agora iremos fazer a preparação do projeto para Deploy no Elastic Beanstalk, acessando o arquivo package.json, é preciso criar a chave ==start== dentro do objeto ==scripts== renomeando-o de acordo com o arquivo de importação de rotas do teu projeto. Segue exemplo de como deve ficar:
![json_config](https://user-images.githubusercontent.com/119500249/212320151-78cb8ccb-7aa2-460c-beb0-6c519fec416a.png)




## Autores

* [@Davi-Santos](https://github.com/davi222-santos)
* [@Guilherme-de-Oliveira](https://github.com/GuilOliveira)
* [@Jeef-Moreira](https://github.com/Jeef-Moreira)
* [@Rangel-Melo](https://github.com/Rangelmello)