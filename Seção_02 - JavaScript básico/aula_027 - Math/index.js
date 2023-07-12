//O objeto Math é utilizado para realizar operações matemáticas, sejam elas aritméticas, funções trigonométricas, funções de arredondamento e comparações
//Lembrete: uma função, quando está dentro de um objeto é chamada de método
let num1 = 9.4567
let num2

num2 = Math.floor(num1) //Arredondamento para baixo
console.log(num2)

num2 = Math.ceil(num1) //Arredondamento para cima
console.log(num2)

num2 = Math.round(num1) //Arredondamento
console.log(num2)

console.log(Math.max(1,3,4,5,6,7,20,2)) //Retorna maior valor

console.log(Math.random()) //Retorna número aleatório entre 0 e 1
const aleatorio = Math.round(Math.random() * (10 - 1) + 1) // Retorna numero aleatório entre 10 e 1
console.log(aleatorio)