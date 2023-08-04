/*
OBJETO ARGUMENTS
- Caso eu declare argumentos em uma função que não solicita argumentos, não terei erro no JS. O que ocorre é que existe um argumento oculto, chamado arguments, que capta todos os argumentos enviados para a função.
- Em funções com declaração literal ou function expressions, posso usar o arguments. Porém, em funções como arrow functions, não é possível utilizar
- Mesmo que existam parâmetros na função, todos os parâmetros, solicitados ou não, se encontram dentro de arguments
*/
function funcao(){ //Repare que a função não solicita um argumento
    console.log(arguments)
    console.log(arguments[0]) //Por arguments ser um objeto, posso buscar um argumento pelo indice
    console.log(arguments[5])
}

funcao(1, 2, 3, 'a', 'b', 'c')

//Exemplo utilizando o objeto arguments
function somaArguments(){
    let total = 0
    for (const argument of arguments) {
        total += argument
    }

    console.log(total)
}

somaArguments(1, 2, 3, 4, 5, 20, 10)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
ENVIAR MENOS PARÂMETROS DO QUE UTILIZADO PELA FUNÇÃO
- Quando divergir o número de parâmetros solicitados do número de parâmetros apresentados, não ocorrerá erro. O JS irá definir os parâmetros não solicitados como undefined
- Observe que, caso a função fizer uso desses argumentos para uma soma, por exemplo, ela tentará somar um número com um undefined, gerando NaN
*/
function funcao2(a, b, c, d){ //'d' será definido como undefined
    console.log(a, b, c, d)
}

funcao2(2, 3, 4)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
PULAR PARÂMETRO DE FUNÇÃO
- Só é possível pular o argumento de uma função usando undefined no lugar do parâmetro solicitado
*/
function funcao3(a, b=100, c=2){
    console.log(a + b + c)
}

funcao3() //Retorna NaN, pois a função está tentando somar undefined
funcao3(1) //Retorna 103, pois a soma está envolvendo os valores padrão dos parâmetros b e c
funcao3(1, undefined, 1) //Retorna 102, pois a=1, b assume o valor padrão, pois recebeu undefined e c=1
//Nesse caso, a função assumiria null como 0

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
PARÂMETROS EM DESTRUCTURING
*/

function funcao4({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)
}

funcao4({ nome: 'Eduardo', sobrenome: 'Roesler', idade: '25' }) //Posso enviar um objeto literal sanando os parâmetros

const objeto = { nome: 'Eduardo', sobrenome: 'Roesler', idade: '25' }
funcao4(objeto) //Posso enviar um objeto em uma variável

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
REST OPERATOR
*/
function conta(operador, acumulador, ...numeros) { //Lógicamente, o rest precisa ser o último parâmetro
    for (const numero of numeros) {
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '*') acumulador *= numero
        if (operador === '/') acumulador /= numero
    }

    console.log(acumulador)
}

conta('+', 0, 20, 30, 40, 60) //O primeiro parâmetro será o operador, o segundo o acumulador e todos os outros serão os números

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
SOLUÇÃO PARA ARGUMENTS EM ARROW FUNCTIONS
- Posso usar o rest operator para atuar como se fosse um arguments
*/

const funcao5 = (...args)=>console.log(args)

funcao5(1, 2, 3, 4, 5, 6, 7, 8)