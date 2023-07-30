/*
setInterval
- Define um intervalo de tempo

setTimeout
- Executada apenas uma vez, após tempo definido
*/

function horaAtual(){
    let date = new Date()

    return date.toLocaleTimeString('pt-BR',{ hour12:false })
}

const timer = setInterval( //Coloquei em uma variável para poder cessar a execução com setTimeout
    function(){ //Função anônima para executar a função horaAtual. Eu poderia, por exemplo, criar uma nova função, cuja a única funcionalidade é executar a função anterior, exatamente como é essa função anônima, e chamá-la diretamente dentro de setTimeout. Nesse caso, eu não poderia colocar os parênteses ao lado da função, apênas citá-la, sem executá-la
        console.log(horaAtual())
    }, 1000) //Tempo em milisegundos para a execução

    setTimeout(function(){
        clearInterval(timer) //Essa função limpa o intervalo de tempo de setInterval
    }, 5100) //Cessará a execução do timer em 5 segundos
