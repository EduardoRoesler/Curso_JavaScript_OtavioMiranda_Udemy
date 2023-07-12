//Funções são executores de ação

//Função sem parâmetros
function helloWorld (){ //Com a abertura dos parenteses, abrimos o corpo da função
    console.log('Hello Wold') //Tudo que estiver dentro da função, a ela pertence, esta dentro de seu escopo, e não pode ser acessado fora dela
}

helloWorld() //A chamada de função deve conter os parenteses, tendo ou não parâmetros


//Função com parâmetros
function saudacao(text){ //Dentro dos parenteses podem ser inseridos parâmetros. 
 console.log(text)
}

saudacao('Bom dia')//O preenchimento de parâmetro na chamada da função é chamado de argumento


//Retorno de função
function boaTarde(nome){
    return (`Bom dia ${nome}`) //Para que uma função retorne algo, preciso utlizar return.
//Abaixo de return, nada mais é lido
}

const retorno = boaTarde('Eduardo') //Caso não utilizar return, ela retornará undefined, mesmo que seja atribuida a uma variável
console.log(retorno)

//Função com operação interna e retorno de resultado
function soma(a,b=0){ //b está recebendo um valor padrão, será o valor utilizado caso não seja estipulado na chamada da função
    const resultado = a+b
    return resultado
}

console.log(soma(10,40))
console.log(soma(10))


//Função anônima
const somaAnonima = function(a,b=0){return a+b}
console.log(somaAnonima(10,40)) //A função anônima pode ser usada quando você precisa atribuir a função a uma constante ou quando a função é usada apenas em um escopo específico e não precisa ser chamada recursivamente.

//Arrow Function
const somaArrow = (a,b=0)=>{return a+b} //Nesse caso específico, poderia retirar o return e as chaves
console.log(somaArrow(10,40))

//Arrow Function simplificada
const raizArrow = n => n ** 0.5 //Quando tenho apensa um parâmetro, e uma linha após return, posso retirar as chaves, os colchetes e tudo que estiver após arrow é considerado return, portanto posso retirar return também
console.log(raizArrow(9))