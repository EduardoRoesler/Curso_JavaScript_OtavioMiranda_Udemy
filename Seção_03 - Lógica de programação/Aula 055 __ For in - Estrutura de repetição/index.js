/*
OBS: Quando se tem apênas um array simples, de uma única dimensão, ou seja, sem conter objetos ou outros arrays dentro dele, ele pode ser chamado de vetor

-For in retorna o INDICE do elemento
*/

const num = [1, 2, 3, 4, 5]

//Método for clássico
for (let i=0; i<num.length; i++){
    console.log(num[i])
}

//Método for in
const letras = ['A', 'B', 'C', 'D', 'E']

for (let i in letras){
    console.log(letras[i])
}

for (let i in letras){
    console.log(i) // Interessante notar, que a variável não está contando, mas sim recebendo o indice do array
}

//for in em arrays compostos
const pessoas = {
    nome: 'Eduardo',
    sobrenome: 'Roesler',
    idade:25
}

for (let chave in pessoas){
    console.log(chave) // A variável irá capturar as chaves
}

//Informação importante sobre arrays
console.log(pessoas.nome)
console.log(pessoas['nome']) //Outra maneira de capturar o valor da chave

for (let chave in pessoas){
    console.log(pessoas[chave]) // Conforme a informação acima
}
