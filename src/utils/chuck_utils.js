//FUNÇÕES DE FORMATAÇÃO DA API CHUCK NORRIS

//deixando a palavra "Chuck Norris" em alta caixa
function upperName(valor) {
    new_valor = valor.replace('Chuck Norris', 'Chuck Norris'.toLocaleUpperCase())
    return new_valor
}

//formatando a piada
function formatar_piada(valor) {
    new_valor = valor.replace(/"/g, '`')
    return new_valor
}

//formatando data
function formatar_data(valor_data) {
    new_data = valor_data.slice(0, 10).split('-');
    return `${new_data[2]}-${new_data[1]}-${new_data[0]}`
};

module.exports = {upperName, formatar_data, formatar_piada}