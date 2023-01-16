# Avaliação Sprint 4 - Programa de Bolsas Compass UOL / AWS e IFCE

[![N|Solid](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/LogoCompasso-positivo.png/440px-LogoCompasso-positivo.png)](https://compass.uol/pt/home/)

Avaliação da quarta sprint do programa de bolsas Compass UOL para formação em machine learning para AWS.

***

## Objetivo

O objetivo deste projeto é construir uma aplicação NodeJS para consumir o conteúdo de duas APIs externas e implantá-las no ambiente da AWS Elastic Beanstalk.

***

## Ferramentas
- [Node.js](https://nodejs.org/en/)
- [Biblioteca JS GUID](https://www.npmjs.com/package/js-guid)

***

## Estrutura do projeto
Para maior organização dos códigos do projeto, o mesmo foi estruturado da seguinte maneira:

![image](https://user-images.githubusercontent.com/80788425/212719261-9a57cf3a-d607-40f7-8498-9b1c2d5b3598.png)

> A pasta raiz contém os arquivos **.json**, responsáveis por descrever detalhes do projeto como as dependências e a pasta **/src**, que possui todos os códigos desenvolvidos

***

## Desenvolvimento
### Iniciando o projeto
Para iniciar o projeto utilizamos o seguinte comando para gerar o arquivo **package.json** com as configurações iniciais
```js
npm init
```

### Instalando dependências
Utilize o comando abaixo para baixar as dependências necessárias contidas no arquivo *package.json*
```js
npm install
```
> **Express** facilita o processo de criar um servidor

> **Axios** faz requisições tanto para o cliente quanto para o servidor

> **JS Guild** biblioteca responsável por gerar o GUID

### Formatações
Dentro do diretório **src**, criamos o arquivo **formatacoes.js** para formatar os retornos de ambas as APIs com a seguintes funções definidas já no corpo do *module.exports* responsável por exportá-las

```js
module.exports = {
    formatDate(data){
        // Seleciona as primeiras posições da data considerando o formato 00/00/0000
        let date = data.slice(0,11)
        // Transforma em objeto data e utiliza a função toLocal para exibir no formato brasileiro
        date = new Date(date).toLocaleDateString('pt-br')
        // Retorna a data formatada
        return date
    },

    geraGUID(){
        // Realiza a requisição do objeto GUID da biblioteca js-guid
        const { Guid } = require('js-guid');
        // Gera um guid e transforma em string
        let guid = new Guid().toString()
        // Retorna o identificador guid
        return guid
    },

    caixaAlta(frase){
        // Substitui as palavras "Chuck" e "Norris" por "CHUCK" e "NORRIS" na frase
        frase = frase.replace("Chuck", "CHUCK")
        frase = frase.replace("Norris", "NORRIS")
        // Retorna a frase com as substituições
        return frase
    },

    acessibilidade(numero){
        // Transforma o parâmetro em float
        numero = parseFloat(numero)
        // Multiplica por 100 para exibir como inteiro
        numero *= 100
        // Retorna o número com o símbolo da porcentagem
        return `${numero}%`
    }
}

```
### Rotas
Para o redirecionamento das respostas das APIs com os campos especificados nos requisitos da atividade foi utilizado a pasta de **/routes**

**Bored API**
```js
const format = require("../formatacoes")

router.get('/', async(req, res) => {
  // Tratamento de erros
    try {
        const {data} = await axios("https://www.boredapi.com/api/activity")
        // console.log(data) exibe todos os dados de retorno da API

        // Definindo os campos necessários para receber a resposta
        const atividades = JSON.parse(`
        {
            "id": "${format.geraGUID()}",
            "atividade": "${data.activity}",
            "tipo": "${data.type}",
            "participantes": "${data.participants}",
            "acessibilidade": "${format.acessibilidade(data.accessibility)}"
        }`);

        res.send(atividades)

    } catch (error) {
        res.send({error: error.message});
    }
});

module.exports = router;
```

**Chuck Norris API**
```js
const format = require("../formatacoes")

router.get('/', async(req, res) => {
    // Tratamento de erros
    try {
        const {data} = await axios("https://api.chucknorris.io/jokes/random")
        // console.log(data) exibe todos os dados de retorno da API

        // Definindo os campos necessários para receber a resposta
        const piadas = JSON.parse(`
        { 
            "data_atualizacao": "${format.formatDate(data.updated_at)}",
            "data_criacao": "${format.formatDate(data.created_at)}",
            "icon": "${data.icon_url}",
            "id":" ${format.geraGUID()}",
            "piada": "${format.caixaAlta(data.value)}",
            "referencia": "${data.url}"
        }`);
    
        res.send(piadas);

    } catch (error) {
        res.send({error: error.message});
    }
});

module.exports = router;
```

### Programa principal
A utilização das rotas e a criação do servidor estão contidas no **app.js**
```js
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
```
Para ser executado todo o projeto, basta rodar
```js
npm start
```

***

## Resultado
Na raiz **localhost:8080** temos apenas a seguinte mensagem:

![rota principal](https://user-images.githubusercontent.com/103221427/212692559-02db19c4-c12f-481e-93d5-c7a31c589687.png)

Em **localhost:8080/api/piadas/** temos o retorno exibido desta forma:
![rota piadas](https://user-images.githubusercontent.com/103221427/212693583-fd7238e5-bd65-4a31-87af-c3483c4e5395.png)

E por fim, um exemplo da rota **localhost:8080/api/atividades/** :

![rota atividades](https://user-images.githubusercontent.com/103221427/212693720-c122be75-2cb8-45db-97f8-55e4c406156e.png)

***

## Deploy (AWS Elastic Beanstalk)
...

***

## Conclusão
- Nesse projeto foi abordado a utilização de APIs com NodeJS juntamente com conceitos de computação em nuvem por meio da ferramenta AWS Elastic Beanstalk.

***

## Autores
- [Dayanne Lucy](https://github.com/dayannebugarim)
- [Humberto Sampaio](https://github.com/Humbert010)
- [Mylena Soares](https://github.com/mylensoares)
- [Rafael Pereira](https://github.com/Kurokishin)