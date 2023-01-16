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
Quando o comando *"--save"* for usado com o npm install, ele salvará todos os pacotes principais instalados na seção de dependências do arquivo package. arquivo json.

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
Após vamos as rotas de acesso a API do Chuck Norris
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

Já finalizada a parte de configurações das rotas, adentramos agora a pasta /utlis onde consta as formatações necessárias de ambas as APIs. Vamos agora a formatação adevinda da API de atividades.
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
Agora iremos fazer a preparação do projeto para Deploy no Elastic Beanstalk, acessando o arquivo package.json, é preciso criar a chave **==start==** dentro do objeto **==scripts==** renomeando-o de acordo com o arquivo de importação de rotas do teu projeto. Segue exemplo de como deve ficar:

![json_config](https://user-images.githubusercontent.com/119500249/212320151-78cb8ccb-7aa2-460c-beb0-6c519fec416a.png)

Agora adentrando a parte do Deploy by AWS Elastic Beanstalk. Primeiro, é necessário selecionar o servidor da Virgínia do Norte, para isso, ao lado do campo de perfil do lado direito da tela, temos a opção de região, a que iremos utilizar é a Leste dos EUA (Norte da Virgínia) ou simplesmente *us-east-1*, observe como deve ficar:

![regiao](https://user-images.githubusercontent.com/119500249/212570664-8a6de775-8426-492b-98aa-cf4f22849c87.png)

1. Observou que estar na região correta, na barra de pesquisa de serviços da AWS, pesquise por: "Elastic Beanstalk" e selecione esse serviço.
2. Com o painel do Elastic Beanstalk aberto, irimos criar uma nova aplicação, para isso selecione o botão de Create Application localizada no canto superior direito da página. Segue a figura:

![create_application](https://user-images.githubusercontent.com/119500249/212570956-26296251-ebb3-405e-9c8a-64e65f085823.png)

3. Após irá carregar a tela de criação da aplicação, nela iremos escolher um nome correspondente a apliação. Ex.: "node_api". Na seção de **Plataforma** selecione a opção Node.js e você também pode escolher a **Ramificação da plataforma** e a **Versão da plataforma**, todavia, iremos deixar padrão conforme mostra a figura abaixo:

![plataforma_node.js](https://user-images.githubusercontent.com/119500249/212571310-fb2c3df2-37cb-4c58-a179-a3388fef3d3b.png)

4. Seguindo na criação da aplicação da aplicação, na seção de **Código do aplicativo**, selecione a opção "Fazer upload do código". Observe que logo abaixo surgiu uma seção de **Origem do código-fonte**, nele iremos seleciona o campo de "Rótulo da versão" e renomear de acordo com a versão de sua aplicação. 
Ex.: projeto-node-v1 ou projeto-node-v1.0.0
É importante que conforme você for atualizando os arquivos e gerando o arquivo ZIP compactado, lembre-se de sempre tá mudando o rótulo da versão para uma versão atualizada.
Ex.: antes era projeto-node-v1 ou projeto-node-v1.0.0 agora passe a chama de projeto-node-v1.1 ou v2 ou projeto-node-v1.0.0.1 ou v2.0.0

![rotulo_versao](https://user-images.githubusercontent.com/119500249/212572499-ad302360-354d-45dd-879d-512088d89395.png)

5. Agora deixe selecionado a opção "Arquivo local" e aperte em "Escolher arquivo". Nessa nova janela já com todos os arquivos da apliação selecionados, clique no botão esquerdo do mouse e selecione a opção "Compactar para arquivo ZIP", por fim nomei o arquivo ZIP gerado com tua preferência, selecione-o e clique em Abrir. Segue um exemplo de base de como realizar esse procedimento:

![arquivos_compactados](https://user-images.githubusercontent.com/119500249/212571582-0bd807bc-9835-43e6-b0ba-f78be1b3c340.png)
![arquivo_ZIP](https://user-images.githubusercontent.com/119500249/212571930-48aec2be-8d8d-4616-a430-0211f7423129.png)

Obs.: é de extrema importância adicionar todos os arquivos da apliação dentro desse arquivo ZIP, apenas deixe de fora o arquivo do README.md, o mesmo não é necessário estar dentro do arquivo gerado.

Se tudo tiver ok, será mostrado a nome do arquivo e a sinalização de Arquivo carregado com êxito. Como base:

![arquivo_carregado](https://user-images.githubusercontent.com/119500249/212572711-7d6973bd-fb1c-4407-992f-358ca4a98156.png)

6. Por fim clique em "Create application"

7. Aqui serão exibidos os logs da criação do ambiente. Observe que o projeto começará a ser criado com uma URL exposta do projeto e seus demais serviços

![log_criacao](https://user-images.githubusercontent.com/119500249/212686581-66433460-f8c6-4a3e-a843-2e923b999e9f.png)

Ele irá demorar alguns minutos, pois ele estará criando vários serviços AWS serão criados (S3, EC2, Security Groups, etc). Após concluir o processo de criação você será direcionado para uma nova janela com informações do projeto, como URL exposta da apliação, integridade e demais detalhes do projeto. Segue a imagem de base:

![projeto_criado](https://user-images.githubusercontent.com/119500249/212689563-9242596f-7043-4462-a93f-9ac726afccc5.png)

8. Visto que o projeto exposto na figura acima foi finalizado com sucesso e a integridade do projeto ocorreu de forma ok, clique em "Causas" para se ter mais informações da execução do projeto. Na imagem logo abaixo temos os principais detalhes do projeto gerado, como: ID de instância, status, o tempo de execução, ID de implatação, tempo de solicitação/sec e etc.

![causas](https://user-images.githubusercontent.com/119500249/212693553-df84e9e9-3ed5-49cd-8c91-1fcc778a4f50.png)

9. Projeto finalizado, tudo sucesso!!!
Caso seja preciso subir uma atualização do projeto
Basta clicar em "Upload and deploy" e selecionar o arquivo .zip com o projeto atualizado.

Lembre-se de manter uma coêrencia nas versões por exemplo: projeto-node-v1, projeto-node-v2, etc.

![projeto_criado2](https://user-images.githubusercontent.com/119500249/212688948-ff068725-62f5-4537-86b3-3dc5fd9ec8f2.png)

Obs.: 1º é a URL exposta de tua aplicação, é importante sinalizar que essa URL é única para cada aplicação, veja que ela se baseia no nome escolhido da aplicação e da região selecionada. 2º sinaliza o status da integridade do projeto, se algo estiver incorreto você pode clicar em "Causes" para entender o que causou o erro. 3º local onde caso seja necessário subir uma atualização do projeto.

# Observações
Mais informações sobre o Elastic Beanstalk podem ser encontradas na [documentação da AWS](https://docs.aws.amazon.com/pt_br/elasticbeanstalk/latest/dg/Welcome.html)

# Utilitário
Para acessar o projeto gerado nessa aplicação, acesse o link do [projeto exemplo](http://projetonodeexample-env.eba-w4qu2yup.us-east-1.elasticbeanstalk.com/)


## Autores

* [@Davi-Santos](https://github.com/davi222-santos)
* [@Guilherme-de-Oliveira](https://github.com/GuilOliveira)
* [@Jeef-Moreira](https://github.com/Jeef-Moreira)
* [@Rangel-Melo](https://github.com/Rangelmello)
