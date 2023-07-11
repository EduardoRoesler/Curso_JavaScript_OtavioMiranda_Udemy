//Soma 
let num1 = 10
let num2 = 3
console.log('Soma:')
console.log(num1 + num2) //Soma
let num1String = '1'
let num2String = '2'
console.log('Concatenação:')
console.log(num1String + num2String) //Concatenação

//Subtração
console.log('Subtração:')
console.log(num1 - num2)

//Divisão
console.log('Divisão:')
console.log(num1 / num2)

//Multiplicação
console.log('Multiplicação:')
console.log(num1 * num2)

//Potenciação
console.log('Potenciação:')
console.log(num1 ** num2)

//Resto da divisão
console.log('Resto da divisão:')
console.log(num1 % num2)

//Operador de incremento
let contador = 2
console.log('Operador de incremento:')
console.log(contador)
console.log(++ contador) //Adiciona 1
console.log(contador ++) //Ao adicionar o incremento após a variável, ele primeiro retornará o valor e depois faz a soma. Repare no console.log com valor 3
console.log(contador) 

//Operador de decremento
let decontador = 2
console.log('Operador de deincremento:')
console.log(decontador)
console.log(--decontador)
console.log(--decontador)
console.log(--decontador)

//Operadores de atribuição
let contador1 = 0
console.log('Operador de incremento com valor variável:')
console.log(contador1 += 10) 
console.log(contador1 **= 2)
console.log(contador1 *= 30) //Essas operações podem ser realizadas com qualquer operador aritmético
console.log(contador1 /= 20)

//Conversão de string para number
let num3 = 10
console.log(typeof num3)
let num4 = '20'
console.log(typeof num4)
console.log(num3 + num4) //Concatenou
console.log(num3 + parseInt(num4)) //somou. parseInt retornará um número inteiro. Caso queira um float, preciso usar um parseFloat
console.log(num3 + Number(num4)) //somou