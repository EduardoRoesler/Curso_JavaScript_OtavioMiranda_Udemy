//COPIAR VALORES//
//Spread Operator
const produto01 = {nome: 'Caneca', preco: 1.8}
const produto02 = {...produto01}

produto01.nome = 'Toalha'

console.log("Produto01:", produto01)
console.log("Outro Produto:", produto02)

//Object.assign()
const produto10 = {genero: 'Homem', idade: 20}
const produto11 = Object.assign({}, produto10, {concatenar: 'Fim do objeto'}) // O primeiro argumento é o alvo (um objeto vazio para copiar), o segundo é a fonte, o terceiro adiciona propriedades ao objeto resultante
// No primeiro argumento, você pode fornecer um objeto alvo para onde as propriedades são copiadas; neste exemplo, um objeto vazio é usado para criar um novo objeto com as propriedades da fonte
// As propriedades da fonte (segundo argumento) são copiadas para o objeto alvo; isso significa que o objeto alvo receberá cópias das propriedades da fonte
// No terceiro argumento, você pode adicionar mais propriedades ao objeto resultante; neste caso, está adicionando a propriedade 'concatenar' com o valor 'Fim do objeto'
// As propriedades adicionadas ao objeto resultante através do terceiro argumento são colocadas no final do objeto, após as propriedades já copiadas
// Se dois ou mais objetos tiverem chaves de mesmo nome, o valor final da chave será o do último objeto adicionado


produto10.genero = 'Mulher'

console.log("Produto10:", produto10)
console.log("Outro Produto11:", produto11)

//Cópia manual
const produto20 = {nome: 'Computador', preco: 4000} 
const produto21 = {nome: produto20.nome, preco: produto20.preco} //É a menos indicada, porém pode ser útil quando precisarmos copiar apenas algumas chaves

produto20.nome = 'Mouse'

console.log("Produto01:", produto20)
console.log("Outro Produto:", produto21)

//CONGELAR OBJETO
Object.freeze(produto11) //Agora é ipossível aterar os valores do objeto, bem como deletar ou inserir chaves

//RETORNAR PROPRIEDADES DO OBJETO
console.log('PROPRIEDADES DE TODO O OBJETO:', Object.getOwnPropertyDescriptors(produto01))

Object.defineProperty(produto01, 'nome', { //Alterei as propriedades dessa chave, abaixo exibirei apenas elas
    value: 'Valor alterado',
    writable: false,
    enumerable: false,
    configurable: false
})

console.log('PROPRIEDADES DA CHAVE "genero":', Object.getOwnPropertyDescriptor(produto01, 'nome'))

//EXIBIR AS CHAVES DO OBJETO
console.log('CHAVES:', Object.keys(produto20))

//EXIBIR OS VALORES DO OBJETO
console.log('VALORES:', Object.values(produto20))

//EXIBIR TODAS AS ENTRADAS DO OBJETO
console.log('ENTRADAS:', Object.entries(produto20)) //Retorna um array, com arrays para cada chave. Isso permite iterações

for(let entradas of Object.entries(produto20)){ //Iteração entre as entradas do objeto
    console.log(entradas)
}

for(let [chave, valor] of Object.entries(produto20)){ //Posso fazer destructuring direto no for
    console.log(valor)
}