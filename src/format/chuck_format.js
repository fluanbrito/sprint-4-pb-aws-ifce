const moment = require('moment') // importando a biblioteca moment para trabalhar com datas

function upperName(nome){ // função para formatar o nome para caixa alta
    nome = nome.replace("Chuck Norris", "CHUCK NORRIS")
    return nome
};

function formatar_data(valor_data){ // função para formatar a data
    const new_data = moment(valor_data).format("DD-MM-YY") // usando moment para formatar a data
    return new_data
}

module.exports = {upperName, formatar_data} // exportando as funções para serem usadas em outros arquivos
