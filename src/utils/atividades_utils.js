//FUNÇÕES DE FORMATAÇÃO DA API "ATIVIDADES"

//formatando o dados de acessibilidade
function formatar_accessibility(valor) {

    valor = parseFloat(valor)
    valor *= 100
    
    return `${valor}%`
    
};

module.exports = {formatar_accessibility}