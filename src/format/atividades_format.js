function formatar_accessibility(valor) { // função para formatar a acessibilidade
    valor = parseFloat(valor) * 100 // multiplicando o valor da acessibilidade por 100
    return valor + '%' // adicionando sinal de porcentagem ao valor
};

module.exports = {formatar_accessibility} // exportando a função para ser usada em outros arquivos
