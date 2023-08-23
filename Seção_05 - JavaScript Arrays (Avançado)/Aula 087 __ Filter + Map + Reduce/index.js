const numeros = [0, 1, 10, 30, 77, 20, 2, 6, 99, 40, 23, 11, 56]
const arrayTratado = numeros.filter(valor=>{
    return valor % 2 === 0
}).map(valor=>{
    return valor * 2
}).reduce((acumulador, valor)=>{
    acumulador += valor
    return acumulador
}, 0)

console.log(arrayTratado) //Basca encadear os métodos


//Abaixo temos uma maneira mais organizada de utilizar as arrow functions nesse caso
const numeros02 = [0, 1, 10, 30, 77, 20, 2, 6, 99, 40, 23, 11, 56]
const arrayTratado02 = numeros02
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador += valor)

console.log(arrayTratado02)