//FUNÇÕES DE FORMATAÇÃO DA API "ATIVIDADES"

//formatando o dados de acessibilidade
function formatar_accessibility(acc) {
    newAcc = `${(parseFloat(acc)) * 100}%`
    return newAcc
};

module.exports = {formatar_accessibility}