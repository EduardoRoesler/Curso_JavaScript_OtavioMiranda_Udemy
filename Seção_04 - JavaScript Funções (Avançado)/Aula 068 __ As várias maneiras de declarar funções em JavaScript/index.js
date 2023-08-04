/*
Declaração literal de função
- Somente com essa forma de declaração que ocorre o hoisting da função, ou seja, posso chamar a função antes de declará-la
*/
declaracaoLiteral()

function declaracaoLiteral(){
    console.log('Declaracao literal de função')
}

/*
First-class objects
- Em JavaScript, funções são consideradas objetos de primeira classe. Isso significa que elas podem ter propriedades e métodos como qualquer outro objeto e podem ser atribuídas a variáveis, passadas como argumentos para outras funções, retornadas como resultado de uma função e possuir propriedades que podem ser atribuídas dinamicamente
- Abaixo temos um exemplo de function expression, é uma maneira de definir uma função dentro de uma expressão. É muito semelhante a uma declaração literal de função (function declaration), mas a principal diferença é que o nome da função pode ser omitido, criando assim uma função anônima
*/
const functionExpression = function(){ //Neste caso não ocorre hoisting, portanto a chamada deve ocorrer após a declaração
    console.log('Function Expression')
}

functionExpression() //A chamada da variável é feita como se fosse uma função normal

//Abaixo temos um exemplo de uso de first-class object, no qual uma função executa uma função recebida como dado
function executarFunção(funcao){
    funcao()
}

executarFunção(declaracaoLiteral) //Funciona para declaração literal
executarFunção(functionExpression) //Funciona para function expression

/*
Arrow Function
- É uma forma de function expression, porém mais curta
- Importante notar que, independente da maneira com a qual a função é declarada, ela sempre será tratada como um objeto de primeira classe
*/

const arrowFunction = () => console.log('Arrow Function')//Neste caso não ocorre hoisting, portanto a chamada deve ocorrer após a declaração

arrowFunction()

executarFunção(arrowFunction)

/*
Função em objetos
- Posso ter uma função dentro de um objeto
*/

const objeto = {
    falarClassico: function(){ //Declaração clássica de função dentro de objeto
        console.log('Função dentro de objeto, por meio de declaração clássica')
    },

    falarModerno(){ //Declaração mais nova de função dentro de objeto
        console.log('Função dentro de objeto, por meio de declaração moderna')
    }
}

objeto.falarClassico()
objeto.falarModerno()