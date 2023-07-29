/*
TRY
- O bloco `try` em JavaScript é usado para envolver um trecho de código que pode gerar exceções (erros). Ele permite testar esse código em busca de erros, sem quebrar a execução do programa caso uma exceção ocorra. O bloco `try` é seguido pelo bloco `catch`, que contém o código para lidar com a exceção caso ocorra.


CATCH
- O bloco `catch` em JavaScript é usado em conjunto com o bloco `try`. Se uma exceção (erro) ocorrer dentro do bloco `try`, o fluxo do programa será desviado para o bloco `catch`, que contém o código para lidar com a exceção de maneira apropriada. O `catch` captura informações sobre a exceção, permitindo que você tome medidas adequadas para tratar o erro e evitar que o programa quebre abruptamente.
*/


try {
    console.log(varNaoExistente) 
} catch (err) { //Caso ocorra o erro, ele cairá no bloco catch
    console.log('Variável inexistente')
    console.log(err) //A var err agora contém o log do erro completo
}