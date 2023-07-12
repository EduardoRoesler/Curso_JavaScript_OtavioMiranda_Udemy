/*
- Valores primitivos: string, number, boolean, undefined, null, bigint, symbol
- Valores de dados primitivos são imutáveis. Quando reatribuimos ou designamos outro valor para um dado primitivo, estamos na verdade alterando o valor da variável, não do dado


- Valores de referência: array, object, function
*/


//Exemplo de imutabilidade de um dado primitivo
let nome = 'Eduardo'
nome[0] = 'V'
console.log(nome)


//Atribuição entre variáveis
let a = 'A'
let b = a //No caso de dados primitivos, isso funcionará como uma cópia do valor 
console.log(a,b)
a = 'alterado'
console.log(a,b)

let c = [1,2,3]
let d = c //No caso de valores por referência, ambos irão apontar para o mesmo lugar na memória
let e = [...c] //Ao usar o spread operator, evita-se que isso ocorra, pois este fará uma cópia de c
console.log(c,d,e)
c.push("a")
console.log(c,d,e) //Quando um é alterado o outro também será

