![Logo_CompassoUOL_Positivo](https://user-images.githubusercontent.com/94761781/212589731-3d9e9380-e9ea-4ea2-9f52-fc6595f8d3f0.png)
##### Avaliação Sprint 4 - Programa de Bolsas Compass UOL / AWS e IFCE

<hr>

<p align="center">
   <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUÍDO&color=RED&style=for-the-badge" />
</p>

### Tópicos 

- [Descrição do projeto](#descrição-do-projeto)

- [Ferramentas e Tecnologias](#ferramentas-e-tecnologias)

- [Requisitos Funcionais da entrega](#requisitos-funcionais)

- [Código](#código)

- [Deploy](#deploy)

- [Equipe](#equipe)

- [Considerações finais](#considerações-finais)

## Descrição do projeto 

<p align="justify">
 Projeto em desenvolvimento se refere à 
avaliação da quarta sprint do programa de bolsas Compass UOL para formação em machine learning para AWS.

Trata-se do consumo de do processo criativo de uma aplicação nodeJs (express) que irá consumir duas APIs distintas e efetue o deploy na AWS Elastic Beanstalk.

**Especificações:**
- A aplicação terá basicamente duas rotas que irão retornar informações vindas de APIs externas formatadas de acordo com a especifícação a seguir.


<hr>

## Ferramentas e Tecnologias 

<a href="https://nodejs.org/en/" target="_blank"> 
<img src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png" alt="androidStudio" width="40" title="Nodejs" height="40"/> </a> <a href="https://aws.amazon.com/pt/" target="_blank"> <img src="https://static-00.iconduck.com/assets.00/aws-icon-512x512-hniukvcn.png" title="AWS" alt="java" width="40" height="40"/> </a> 
<a href="https://aws.amazon.com/pt/elasticbeanstalk/" target="_blank"> <img src="https://pragmaticintegrator.files.wordpress.com/2016/08/aws_simple_icons_networking_amazonroute53-svg.png" alt="firebase" width="40" height="40" title="AWS Elastic Beanstalk"/> </a>


🚩[API Piadas](https://api.chucknorris.io/jokes/random)
🚩[API Atividades]( https://www.boredapi.com/api/activity)
<hr>

## Requisitos funcionais

:heavy_check_mark: `Rota → Get /:`
- 1. Nesta rota será efetuado um get na raiz do projeto.
- 2. O retorno desta API deverá ter um texto simples.
Exemplo:

```json
 Este é o app do Grupo 04 🐊
```
- 3. Status code para sucesso da requisição será `200`


:heavy_check_mark: `Rota → Get /api/piadas:`
- 1. Nesta rota será efetuado um get em: [https://api.chucknorris.io/jokes/random](https://api.chucknorris.io/jokes/random)
- 2. O retorno da API a ser desenvolvida deverá estar na seguinte formatação:

```json
{
  "data_atualizacao": "05-01-2020",
  "data_criacao": "05-01-2020",
  "icone": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  "id": "b7585687-b14b-406d-a557-9cfeea4a8c16",
  "piada": "CHUCK NORRIS can slit your throat with his pinkie toenail.",
  "referencia": "https://api.chucknorris.io/jokes/2itjvbXZTcScUiuAMoOPLA"
}
```
Observações sobre os campos no retorno esperado

- `data_atualizacao` → será o campo “updated_at” da resposta da API original.
  - Formatação: Sem as horas (somente a data no formato DD/MM/AAAA)

- `data_criacao` → será o campo “created_at” da resposta da API original.  
  - Formatação: Sem as horas (somente a data no formato DD/MM/AAAA)

- `icone` → será o campo “icon_url” da resposta da API original.  
  - Formatação: Não há (manter original)

- `id` → será um GUID gerado randomicamente
  - Formatação: um GUID possui o formato {XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX} onde X é um Hexadecimal (0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F). 
  - Pode-se utilizar libs para a geração ou criação de funções para esse fim.

- `piada` → será o campo “value” da resposta da API original. 
  - Formatação: a palavra Chuck Norris deverá estar em caixa alta dentro da piada.

- `referencia` → será o campo “url” da resposta da API original.  
  - Formatação: Não há (manter original)

3. Status code para sucesso da requisição será `200`

:heavy_check_mark: `Rota → Get /api/atividades`

- 1. Nesta rota será efetuado um get em: [https://www.boredapi.com/api/activity](https://www.boredapi.com/api/activity)
- 2. O retorno da API a ser desenvolvida deverá estar na seguinte formatação:

```json
{
  "id": "b7585687-b14b-406d-a557-9cfeea4a8c16",
  "atividade": "Wash your car",
  "tipo": "busywork",
  "participantes": 1,
  "acessibilidade": "15%"
}
```
Observações sobre os campos no retorno esperado

- `id` → será um GUID gerado randomicamente
  - Formatação: um GUID possui o formato {XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX} onde X é um Hexadecimal (0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F)
  - Pode-se utilizar libs para a geração ou criação de funções para esse fim.

- `atividade` → será o campo “activity” da resposta da API original.  
  - Formatação: Não há (manter original)

- `tipo` → será o campo “type” da resposta da API original.  
  - Formatação: Não há (manter original)

- `participantes` → será o campo “participants” da resposta da API original.  
  - Formatação: Não há (manter original)

- `acessibilidade` →será o campo “accessibility” da resposta da API original.  
  - Formatação: transformar para número percentual dentro de uma string.
  - Exemplo: api respondeu `0.15` logo a resposta será `"15%"`

- 3. Status code para sucesso da requisição será `200`

***

Preparação do projeto para Deploy no Elastic Beanstalk
 - Por padrão o serviço abre acesso á porta **8080**, portanto é necessário que a aplicação esteja respondendo nessa mesma porta.

 - Para inicializar a aplicação é preciso criar a chave `start` dentro do objeto `scripts` do arquivo package.json do projeto Node. O valor dessa chave deve ser uma string contendo o comando que inicializa a aplicação.

![exemplo package.json](https://images.tango.us/workflows/23e0be0e-db8d-447b-bce6-28b449120230/steps/9caa2f0c-d6a4-4000-ade7-f297b289508f/4c54c1fc-bb25-4356-8d56-7b0edc1ab949.png)

 - Essas e outras configurações padrões podem ser alteradas através de arquivos de configuração dentro do projeto.

 - Por fim, comprimir a pasta do projeto, lembrando que o diretório node_modules não deve ser incluído.

 Exemplo: [aqui](https://crudtec-site.s3.amazonaws.com/wp-content/uploads/2023/01/05112026/compress.gif)
 
 ![compress](https://crudtec-site.s3.amazonaws.com/wp-content/uploads/2023/01/05112026/compress.gif)
 
***

## Código

##### comandos no terminal para instalação e dependências

- cria um pacote onde os arquivos do projeto serão armazenados
```npm init -y```

Para instalar as dependências do seu projeto, vamos começar com a express, que é um framework para Node.js que fornece recursos mínimos para construção de servidores web:

Agora, instala-se o Express:
```npm install --save express```


Agora instalamos o nodemon que vai reiniciar automaticamente o aplicativo do Node 
sempre que detectar qualquer alteração.
```npm install --save nodemon```

#### acompanhe como deverá ficar após a criação dos arquivos subsequentes a imagem

```estrutura **src**```
![01](https://user-images.githubusercontent.com/94761781/212593640-7523887b-88f2-42bf-a107-84e72a8178fd.png)


Arquivo app.js
```
const express = require("express");
const app = express();
//const path = require("path");
const PORT = "8080";

app.use(express.static(__dirname + "/src"));

// rota principal
app.get("/", function (req, res) {
  res.status(200).send("<h1>Este é o app do Grupo 4 🐊</h1>");
});

app.use("/api", require("./apis/atividades_api")); // rota: get /api/atividades

app.use("/api", require("./apis/chucknorris_api")); // rota: get /api/piadas

app.listen(PORT, function () {
  console.log(`Ouvindo a porta ${PORT}`);
});

```

dentro de "apis" criamos o arquivo atividades_api.js
```
const express = require("express");
const router  = express.Router();
const request = require("request");
const activity = require("../format/atividades.js")

router.get("/atividades", (req, res) => {
  request("https://www.boredapi.com/api/activity", (error, response, body) => {
    if(error) {
      console.log(error);
    } else {
      // converte o retorno da API para JSON
      const data = JSON.parse(body);
      // exibe na tela o JSON formatado
      res.status(200).send(activity.returnActivity(data.activity, data.type, data.participants, data.accessibility));
    }
  });
});

module.exports = router;
```


Também dentro de "apis" é criado o arquivo chucknorris_api.js
```
const express = require("express");
const router = express.Router();
const request = require("request");
const format = require("../format/chucknorris.js")
const guid = require("../format/atividades.js")

router.get("/piadas", (req, res) => {
  // função que consome a API
  request(
    "https://api.chucknorris.io/jokes/random",
    (error, response, body) => {
      if (error) {
        console.log(error);
      } else {
        // converte o retorno da API para JSON
        data = JSON.parse(body)
        // exibe o JSON formatado na tela
        res.status(200).send(format.contentFormat(format.dataFormat(data.updated_at), format.dataFormat(data.created_at), data.icon_url, guid.createGUID(), format.chuckUpper(data.value), data.url));
      }
    }
  );
})
module.exports = router;

```

Agora em uma outra pasta dentro de src, criamos a pasta "format" criamos o arquivo atividades.js:
```
function createGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

function returnActivity(activity, type, participants, acessibility){
    const act = `{
    "id": "${createGUID()}",
    "atividade": "${activity}",
    "tipo": "${type}",
    "participantes": "${participants}",
    "acessibilidade": "${acessibility * 100}%"
    }`
    return JSON.parse(act);
};

//console.log(returnActivity("a", "esc", 2, 0.2))
module.exports = {returnActivity, createGUID}
```

format/chucknorris.js
```

// formatar a data no formado DD/MM/YYYY
function dataFormat(date){
    newdate = date.slice(0,10).split('-')
    return `${newdate[2]}-${newdate[1]}-${newdate[0]}`
}

// formatação da api no formato solicitado para exibição na tela.
function contentFormat(updated_at, created_at, icon_url, id, joke, reference){
    const template = `{
    "data_atualizacao": "${updated_at}",
    "data_criacao": "${created_at}",
    "icone": "${icon_url}",
    "id": "${id}",
    "piada": "${joke}",
    "referencia": "${reference}"
    }`
    return JSON.parse(template)
}

// função para deixar a palavra "Chuck Norris" em caixa alta.
function chuckUpper(string){
    string_upper = string.replace('Chuck Norris', 'CHUCK NORRIS')
    return string_upper
}

// exportação para uso em outro script
module.exports = {dataFormat, contentFormat, chuckUpper}
```

Rodando local na porta 8080 temos o resultado:
![000](https://user-images.githubusercontent.com/94761781/212600262-a6b4fb78-5843-4174-81a5-35baf391c840.png)

De forma similar na rota de atividades temos a saída formatada
![00000](https://user-images.githubusercontent.com/94761781/212601459-86c11a79-2352-4e7a-8bb2-585238619398.png)

E, ainda, na rota de piadas:

![00000](https://user-images.githubusercontent.com/94761781/212602195-d4da37f2-2706-44f7-a33c-3ebd6df054d5.png)


## Deploy

Para essa realização foi utilizada a região → `us-east-1` (confira na console se está na região correta antes de proseguir os próximos passos)

1. [Acesse o serviço Elastic Beanstalk no console da AWS.](https://us-east-1.console.aws.amazon.com/elasticbeanstalk/home?region=us-east-1#/welcome)

2. Clique em Create Application

![Step 2 screenshot](https://images.tango.us/workflows/6d444cf6-7a3c-4959-b26c-55383834d79f/steps/05b6785f-52dd-4f8d-8f97-b3cb759de880/169788ea-7c8f-43ff-ad6b-e167074ca7cf.png?crop=focalpoint&fit=crop&fp-x=0.6992&fp-y=0.2949&fp-z=2.9003&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A902)

3. Na página de criação em "Application Information" digite o nome da aplicação.

![Step 3 screenshot](https://images.tango.us/workflows/6d444cf6-7a3c-4959-b26c-55383834d79f/steps/b20d1f0d-84ba-4c73-9dd6-0f69f33fa3a6/10c91e6c-a33c-4dd3-afbd-abd388fe3b3a.png?crop=focalpoint&fit=crop&fp-x=0.3438&fp-y=0.3902&fp-z=1.5789&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A902)

4. Em "Platform" selecione NodeJS.

![Step 4 screenshot](https://images.tango.us/workflows/6d444cf6-7a3c-4959-b26c-55383834d79f/steps/9bc9d120-e3df-4539-8abf-06c0ad32cf75/f33873b1-a27d-4b92-8fb7-3adfe56df467.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&fp-z=1.0000&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A902)

5. Selecione a opção "Upload your code"

![Step 5 screenshot](https://images.tango.us/workflows/6d444cf6-7a3c-4959-b26c-55383834d79f/steps/d240c48b-2133-4752-b10f-af26a503f97c/3dd6b41e-6646-4387-8384-9db4a2d310ff.png?crop=focalpoint&fit=crop&fp-x=0.3064&fp-y=0.7163&fp-z=3.1680&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A902)

6. Aqui você pode nomear a versão de sua aplicação. 

Exemplo: projeto-node-v1 ou projeto-node-v1.0.0

![Step 6 screenshot](https://images.tango.us/workflows/6d444cf6-7a3c-4959-b26c-55383834d79f/steps/423fe710-615f-49f2-b9e5-c5685ad15afe/fd447c2e-0559-4b3d-b094-719d9298bdcd.png?crop=focalpoint&fit=crop&fp-x=0.3438&fp-y=0.5599&fp-z=1.5789&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A902)


7. Selecione o arquivo .zip com o projeto Node e clique em "Create application"

![Step 7 screenshot](https://images.tango.us/workflows/6d444cf6-7a3c-4959-b26c-55383834d79f/steps/5812c363-7ba6-46fb-a203-8e2714912d31/12d57884-17f5-4ad9-806e-bb21e1b5b786.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&fp-z=1.0000&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A902)


8. Aqui serão exibidos os logs da criação do ambiente.
Observe que vários serviços AWS serão criados (S3, EC2, Security Groups, etc).

![Step 8 screenshot](https://images.tango.us/workflows/6d444cf6-7a3c-4959-b26c-55383834d79f/steps/b137bf4d-ee4b-44ac-b73a-3be1497c1145/e1c756a8-f99e-4278-a3d3-ef9400859216.png?crop=focalpoint&fit=crop&fp-x=0.5625&fp-y=0.2711&fp-z=1.2000&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A902)


9. Pronto, aqui está a url exposta para acessar sua aplicação.

No card Health é possível observar o status da aplicação, se algo estiver incorreto você pode clicar em "Causes" para entender o que causou o erro.

![Step 9 screenshot](https://images.tango.us/workflows/6d444cf6-7a3c-4959-b26c-55383834d79f/steps/349dc567-04e1-4c4f-8849-fc2eb2197472/fdda04f3-f223-4c04-82ef-2583d36fa5cd.png?crop=focalpoint&fit=crop&fp-x=0.2887&fp-y=0.2516&fp-z=2.0000&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A902)


10. Caso seja preciso subir uma atualização do projeto 

Basta clicar em "Upload and deploy" e selecionar o arquivo .zip com o projeto atualizado.

Lembre-se de manter uma coêrencia nas versões por exemplo: projeto-node-v1, projeto-node-v2, etc.

![Step 10 screenshot](https://images.tango.us/workflows/6d444cf6-7a3c-4959-b26c-55383834d79f/steps/ac98c95f-721b-409b-8ef3-5cbc8d90b4a6/7e18be39-5928-436a-bcf9-aa2f1ddb5060.png?crop=focalpoint&fit=crop&fp-x=0.5373&fp-y=0.4019&fp-z=1.5703&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=1920%3A902)

Mais informações sobre o Elastic Beanstalk podem ser encontradas na [documentação da AWS](https://docs.aws.amazon.com/pt_br/elasticbeanstalk/latest/dg/Welcome.html)

***

### Acesso ao projeto

Você pode [acessar o código fonte do projeto](https://github.com/camilafernanda/GlicoCare) 


### Equipe
- Nicolas Ferreira
- Josiana Silva
- Samara Oliveira
- Jhonatan Gonçalves

## Considerações finais
Em resumo, o projeto envolvendo o uso da plataforma AWS e o framework Node.js foi muito proveitoso. A exploração das do ambiente integrado de ferramentas da AWS, como o EC2, S3, RDS e principalmente Elastic Beanstalk, permitiu escalabilidade e boas expectativas sobre o que pode ser desenvolvido, enquanto o Node.js proporcionou uma boa performance e facilidade de desenvolvimento. Além disso, a utilização do Elastic Beanstalk, tornou a implantação e gerenciamento da aplicação mais simples e eficiente.

É importante destacar que, como em qualquer projeto, houveram desafios e limitações, mas a equipe de desenvolvimento foi capaz de superá-los e entregar uma solução robusta e escalável.

Em geral, o projeto foi um grande sucesso e a equipe tem confiança de que a solução entregue atenderá aos requisitos.
