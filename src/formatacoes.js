module.exports = {
    formatDate(data){
        let date = data.slice(0,11)
        date = new Date(date).toLocaleDateString()
        return date
    },

    // Realizar verificações nessa função
    geraGUID(){
        function S4() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
        }
        return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
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

