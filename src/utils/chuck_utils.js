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