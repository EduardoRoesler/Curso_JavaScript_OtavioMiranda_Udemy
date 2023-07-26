/*
- for of é específico para elementos iteráveis, como arrays, strings, maps, sets, etc.
- elementos não iteráveis, como objetos, por exemplo, gerarão erro
- for of retorna o VALOR do indice do elemento

- for each é utilizado para lidar com arrays

RESUMO SOBRE USO DAS ESTRUTURAS DE REPETIÇÃO:
__For clássico - Geralmente utilizado com iteráveis (array ou strings)
__For in - Retorna o índice ou chave (strings, array ou objetos)
__For of - Retorna o valor. Utilizado apenas com iteráveis 
*/

const nome = 'Eduardo Roesler'

//for clássico
/*
for (let i=0; i<nome.length; i++){
    console.log(nome[i])
}
*/

//for in
/*
for (let i in nome){
    console.log(nome[i])
}
*/

//for of
for (let letra of nome){ //O for of irá pegar o valor referente ao índice
    console.log(letra)
}

//for each
const nomes = ['Eduardo', 'Nicole', 'Valdenir', 'Eliane']

nomes.forEach(element => {
    console.log(element)
})

nomes.forEach((element, indice, array) => { //Posso, também, retornar o indice e o array completo
    console.log(`Indice: ${indice} Nome: ${element} Array Completo: ${array}`)
}) //Teremos aprofundamento em for each em aulas futuras