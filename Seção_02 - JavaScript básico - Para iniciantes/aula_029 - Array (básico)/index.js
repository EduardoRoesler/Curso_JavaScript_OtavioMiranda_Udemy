//Um array é uma lista 
//Para criar utiliza-se um colchete com os itens separados por vírgula
const exemplo = ['texto', 1, true, null] //Não é boa prática de programação misturar tipos de dados dentro de um array, porém, o js não restringe tal prática
console.log(exemplo)
console.log(typeof exemplo) //O tipo de um array é Objeto
console.log(exemplo instanceof Array) //Para garantir que estou trabalhando com arrays posso perguntar se o exemplo é uma instancia de array. Retorna booleano

const itens = ['item1', 'item2', 'item3', 'item4', 'item5']
console.log(itens)
console.log(itens[3]) //Os arrays são indexados por elemento, portanto posso buscar um item específico pelo índice
console.log(itens[1][2]) //Posso tambem buscar pelo indice interno do elemento

itens[0] = 'item1Editado'
console.log(itens) //Posso alterar os valores internod do array atribuindo diretamente ao seu índice

itens[5] = 'item5Inserido' 
console.log(itens) //Posso inserir um item utilizando um indice maior do que o ultimo

itens[7] = 'item7Inserido' 
console.log(itens) //Caso insira um item maior do que indice+1, ele gerará espaços vazios dentro do array

console.log(itens.length) //Posso retornar o NUMERO TOTAL DE ITENS, não confundir com o valor do indice, pois este começa em 1 e o índice em 0

itens.push('Item8Inserido')
console.log(itens) //Para inserir itens ao final de um array, utilizo push

itens.unshift('ItemInicial') //Insere item no início do array
console.log(itens) //É boa prática evitar unshift, pois pode trazer problemas de performace

const removido = itens.pop() //Remove item final do array
console.log(removido) //Não é necessário utilizar uma variável, mas é interessante pois posso ver qual item foi removido
console.log(itens)

itens.shift() //Remove item inicial do array
console.log(itens)

delete itens[1] //Remove item específico do array via indice
console.log(itens) //É importante notar, que a remoção causa um item vazio

console.log(itens.slice(0, 3)) //Posso fatiar o array
console.log(itens.slice(0, -1)) //Fazendo uso de negativo, a contagem inicia pelo final
