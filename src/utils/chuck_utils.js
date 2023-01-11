//FUNÇÕES DE FORMATAÇÃO DA API CHUCK NORRIS

//deixando o nome "Chuck Norris" em alta caixa
function upperName(nome){
    nome = nome.replace("Chuck Norris", "CHUCK NORRIS")
    return nome
};

//formatando data
function formatar_data(valor_data) {
    new_data = valor_data.slice(0, 10).split('-');
    return `${new_data[2]}-${new_data[1]}-${new_data[0]}`
};

module.exports = {upperName, formatar_data}