/*
A atribuição por desestruturação em arrays é uma técnica do JavaScript que permite extrair valores de um array e atribuí-los a variáveis individuais de forma direta. Essa abordagem torna o código mais conciso e legível, pois evita a necessidade de acessar os elementos do array por seus índices. Em vez disso, é possível declarar as variáveis diretamente entre colchetes [], associando-as aos valores correspondentes do array. Essa funcionalidade é útil para trabalhar com funções que retornam arrays ou para manipular seus elementos de maneira mais eficiente.
*/

//Relembrando o exercício de lógica da aula 023
let a = 'A' //B
let b = 'B' //C
let c = 'C' //A

console.log(a, b, c)

const letras = [b, c, a]; //Por algum motivo, precisa do ;
[a, b, c] = letras

console.log(a, b, c)

//COMPARAÇÃO DE METODOS:
//Sem destructuring
const num = [1, 2, 3, 4, 5] //Posso usar tanto const quanto let aqui. A diferença se dará nas atribuições. Usando const, todas as atribuições serão const. Usando let, todas as atribuições serão let

const primeiroNumero = num[0]
const segundoNumero = num[1]
const terceiroNumero = num[2]
const quartoNumero = num[3]
const quintoNumero = num[4]

console.log(primeiroNumero, segundoNumero, terceiroNumero, quartoNumero, quintoNumero)

//Com destructuring
const numD = [1, 2, 3, 4, 5]

const [primeiroNumeroD, segundoNumeroD, terceiroNumeroD, quartoNumeroD, quintoNumeroD] = numD

console.log(primeiroNumero, segundoNumero, terceiroNumero, quartoNumero, quintoNumero)

//resto do array
const letters = ['a', 'b', 'c', 'd', 'e']

const [primeiraLetra, segundaLetra, ...outrasLetras] = letters //outrasLetras irá capturar o resto do array
//Quando usado nesse contexto, o operador se chama rest operator
//Quando usado para espalhar algo, se chama spread operator

console.log(outrasLetras) 

//pular valores
const val = [1, 2, 3, 4, 5, 6]

const [val1, val2, , val4, , val6] = val //Para saltar valores, basta usar uma vírgula

console.log(val1, val2, val4, val6) 

//Destructuring em array de arrays
//              1          2          3
//           1  2  3    4  5  6    7  8  9
const aa = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const [, [,,aa6]] = aa //A primeira virgula pula o primeiro array, a segunda e terceira pulam os primeiros numeros
console.log(aa6)