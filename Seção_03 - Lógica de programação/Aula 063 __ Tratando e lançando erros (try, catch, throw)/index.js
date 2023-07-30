/*
TRY
- O bloco `try` em JavaScript é usado para envolver um trecho de código que pode gerar exceções (erros). Ele permite testar esse código em busca de erros, sem quebrar a execução do programa caso uma exceção ocorra. O bloco `try` é seguido pelo bloco `catch`, que contém o código para lidar com a exceção caso ocorra.

CATCH
- O bloco `catch` em JavaScript é usado em conjunto com o bloco `try`. Se uma exceção (erro) ocorrer dentro do bloco `try`, o fluxo do programa será desviado para o bloco `catch`, que contém o código para lidar com a exceção de maneira apropriada. O `catch` captura informações sobre a exceção, permitindo que você tome medidas adequadas para tratar o erro e evitar que o programa quebre abruptamente.
*/

/*
//EXEMPLO DE try/catch
try {
    console.log(varNaoExistente) 
} catch (err) { //Caso ocorra o erro, ele cairá no bloco catch
    console.log('Variável inexistente')
    console.log(err) //A var err agora contém o log do erro completo
}
*/


/*
//EXEMPLO DE throw
function soma (x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw ('x e y precisam ser números') //Caso o throw seja acionado, ele já breka a função
    }

    return x + y
}

console.log(soma(1, '1')) //Fazendo esse uso básico de throw, ele já irá parar o código e enviar o erro, porém, mesmo usando o try/catch aqui, não conseguirei capturar o erro, apenas a mensagem. Abaixo temos a maneira correta de capturar e tratar um erro criado
*/


//EXEMPLO 02 DE throw
function soma2 (x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser números') //Agora criamos um erro
    } //Em Error, eu poderia substituir por outra classe de erro, como ReferenceError, por exemplo, ou construir um novo erro, através de uma função construtora

    return x + y
}

try {
    console.log(soma2(1, '1'))
} catch(err){ //Consigo capturar e tratar esse erro
    console.log(err)
}
