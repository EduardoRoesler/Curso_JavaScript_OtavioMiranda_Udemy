//Bem como strings, o JS ja possui uma biblioteca nativa de funções para trabalhar com Numbers
let num1 = 19
let num2 = 10.555

console.log(num1.toString() + num2) //Por exemplo: Transformação em componente e concatenação
console.log(num1.toString(2)) //Transformação em binário
console.log(num2.toFixed(2)) //Arredonda casas decimais

//Por conta do padrão IEEE 754-2018, operações de números decimais podem representar certa imprecisão no JS
let num3 = 0.2
let num4 = 0.1
console.log(num3)
num3 += num4
console.log(num3)
num3 += num4
//Para solucionar o problema, preciso atribuir os valores a parseFloat ou Number
//num3 = Number(num3.toFixed(2))
num3 = parseFloat(num3.toFixed(2))
console.log(num3)
//Outra maneira de resolver seria multiplicar por 10 as variáveis e realizar as operações com numeros inteiros e ao final dividir por 10 novamente

console.log(10/0) //É necessário tomar cuidado, pois o js entende que um número dividido por 0 tende à infinito, portanto retorna infinito. Em um resultado booleano, por exemplo, pode retornar true e gerar problemas de lógica