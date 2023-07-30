/*
FINALLY
*/

try{
    //Executa quando não há erros
} catch (e){
    //Executa quando há erros
} finally {
    //Executa sempre
}


//EXEMPLO
function retornaHora(date){
    if (date && !(date instanceof Date)){ //Se a data foi enviada e a data não é uma instância de Date
        throw new TypeError('A variável não é uma instância de Date')
    }

    if (!date){ //Se a data não foi enviada
        date = new Date() //A função cria uma data automaticamente com a data atual
    }

    return date.toLocaleTimeString('pt-BR', {
        hour: '2-digit', //Garante que a hora terá dois dígitos
        minute: '2-digit',
        hour12: false //Isso transforma a hora no padrão 24h, caso contrário, ficará em 12h
    })
}

try {
    console.log(retornaHora())
} catch (e){
    console.log('Erro detectado')
    console.log(e)
} finally {
    console.log('Tenha um bom dia') //finally sempre será executado, havendo erro ou não 
}