module.exports = {
    formatDate(data){
        let date = data.slice(0,11)
        date = new Date(date).toLocaleDateString()
        return date
    },

    geraGUID(){
        const { Guid } = require('js-guid');
        let guid = new Guid().toString()
        return guid
    },

    caixaAlta(frase){
        frase = frase.replace("Chuck", "CHUCK")
        frase = frase.replace("Norris", "NORRIS")
        return frase
    },

    acessibilidade(numero){
        numero = parseFloat(numero)
        numero *= 100
        return `${numero}%`
    }
}

