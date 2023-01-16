![Logo_CompassoUOL_Positivo](https://user-images.githubusercontent.com/94761781/212589731-3d9e9380-e9ea-4ea2-9f52-fc6595f8d3f0.png)


<hr>

<p align="center">
   <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUÍDO&color=RED&style=for-the-badge" />
</p>

### Tópicos 

- [Descrição do projeto](#descrição-do-projeto)

- [Funcionalidades](#funcionalidades)

- [Código](#Código)

- [Ferramentas utilizadas](#ferramentas-utilizadas)

- [Deploy](#Deploy)

- [Desenvolvedores](#desenvolvedores)

- [Considerações finais](#considerações-finais)

## Descrição do projeto 

<p align="justify">
 Projeto em desenvolvimento se refere à 
avaliação da quarta sprint do programa de bolsas Compass UOL para formação em machine learning para AWS.

Trata-se do consumo de do processo criativo de uma aplicação nodeJs (express) que irá consumir duas APIs distintas e efetue o deploy na AWS Elastic Beanstalk.

**Especificações:**
- A aplicação terá basicamente duas rotas que irão retornar informações vindas de APIs externas formatadas de acordo com a especifícação a seguir.

## 


## Funcionalidades

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
- estrutura
![01](https://user-images.githubusercontent.com/94761781/212593640-7523887b-88f2-42bf-a107-84e72a8178fd.png)


- app.js

- apis/atividades_api.js

- apis/chucknorris_api.js

- format/atividades.js

- format/chucknorris.js
###

## Ferramentas utilizadas


###

## Acesso ao projeto


## Desenvolvedores









