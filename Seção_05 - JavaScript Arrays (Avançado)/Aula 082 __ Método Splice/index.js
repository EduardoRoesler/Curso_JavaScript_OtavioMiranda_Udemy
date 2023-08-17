/*
O método splice() é uma função embutida em JavaScript que permite modificar um array, adicionando, removendo ou substituindo elementos. 
Ele opera diretamente no array e pode ser usado para realizar várias operações diferentes, dependendo dos argumentos passados para ele.

ARGUMENTOS
- Primeiro argumento (startIndex): Indice inicial da operação
- Segundo argumento (deleteCount): Número de elementos que desejo remover, a partir do startIndex. Se deleteCount for 0, nenhum elemento será removido
- Próximos argumentos (itemsToAdd): Elementos que desejo adicionar, a partir do startIndex (separados por vírgula)

O método splice() também retorna um array contendo os elementos que foram removidos, se houver remoção. Se nenhum elemento for removido, ele retorna um array vazio (isso ocorre mesmo que elementos tenham sido adicionados).

Lembre-se de que o método splice() modifica o array original. Se você quiser criar uma cópia modificada do array sem alterar o original, é recomendável usar outros métodos, como slice() e concat().
*/

//Array utilizado como exemplo:
const array01 = [0, 2, 4, 6, 8]
console.log(`Array utilizado como exemplo: ${array01}`)

//Adicionar elementos
array01.splice(5, 0, 10, 12, 14, 16, 18, 20)
console.log(`Elementos adicionados: ${array01}`)

//Remover elementos
array01.splice(9, 2)
console.log(`Elementos removidos: ${array01}`)

//Retornar array removido
const array02 = array01.splice(6, 3)
console.log(`Array após remoção e realocação: ${array01}`)
console.log(`Array de elementos removidos: ${array02}`)

//Iniciar contágem pelo fim do array
array01.splice(-2, 1) //Essa operação iniciará pelo penultimo elemento e irá remover um elemento. A direção de remoção permanece sendo da esquerda para a direita
console.log(`Contágem com número negativo: ${array01}`)

//Remover todos os próximos elementos
array01.splice(1, Number.MAX_VALUE) //Quando digo isso, estou dizendo que deve ser removido do indice até o maior número suportado pelo JS
console.log(`Removendo todos os elementos após indice 01: ${array01}`)