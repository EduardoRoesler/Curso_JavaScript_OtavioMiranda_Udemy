/*
MAP

1. Definição:
   - O método `map()` é um método nativo de arrays em JavaScript.
   - Ele é usado para criar um novo array com os resultados da aplicação de uma função em cada elemento do array original.

2. Funcionamento:
   - O método `map()` itera sobre cada elemento do array original.
   - Ele aplica uma função a cada elemento e cria um novo array com os resultados dessas aplicações.

3. Sintaxe:
   - O método `map()` é chamado na instância do array e recebe uma função como argumento: `array.map(funcaoDeMapeamento)`

4. Função de Mapeamento:
   - A função de mapeamento é chamada para cada elemento do array.
   - Ela deve retornar um novo valor, que será incluído no novo array.

5. Criação de um Novo Array:
   - O método `map()` não modifica o array original.
   - Ele retorna um novo array contendo os valores resultantes das aplicações da função de mapeamento.

6. Uso Comum:
   - Transformar os elementos de um array aplicando uma função específica.
   - Criar um novo array com propriedades específicas de um conjunto de objetos.

7. Vantagens:
   - Transformação de Dados: Permite criar um novo array com valores transformados a partir do array original.
   - Clareza: O método `map()` ajuda a tornar o código mais claro e conciso.

8. Desvantagens:
   - Pode criar um novo array, o que pode consumir mais memória, especialmente com arrays grandes.

9. Alternativas:
   - Laços `for` ou `forEach`: Permitem transformar elementos manualmente, mas o código pode ficar mais extenso.

10. Melhores Práticas:
    - Use o método `map()` quando precisar transformar os elementos de um array em um novo conjunto de valores.
    - Mantenha a função de mapeamento clara e legível para facilitar a compreensão do código.

O método `map()` é uma ferramenta útil para transformar os elementos de um array de acordo com uma função específica. Ele permite que você aplique uma operação a cada elemento e crie um novo array com os resultados dessas operações.

Diferente da função filter, que pode retornar um array igual ou menor que o original, map retorna um array com mesmo tamanho, porém com os elementos alterados
*/

//Exemplo de uso (dobrar valores)
const numeros = [0, 1, 10, 30, 77, 20, 2, 6, 99, 40, 23, 11, 56]
const numDobrados = numeros.map(valores=>valores*2)
console.log(numDobrados) //Importante notar que é criado um novo array, portanto o array original continua inalterado

//Exercício de uso em objetos
/*
- F01: Retorne apenas uma string com o nome da pessoa
- F02: Remova a chave "nome" do objeto
- F03: Adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]
*/
//F01
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]

const f01 = pessoas.map(objeto=>objeto.nome)
console.log(f01)

//F02
//SOLUÇÃO 01
/*
const f02 = pessoas.map(objeto=>{
    delete objeto.nome
    return objeto
})
console.log(f02)
*/

//SOLUÇÃO 02
const f02 = pessoas.map(objeto=> ({idade: objeto.idade})) //Preciso envolver o objeto em parenteses para poder reduzir essa arrow function para apenas uma linha. Caso contrário, precisarei usar return e utilizar duas linhas
console.log(f02)

//F03
//SOLUÇÃO 01
/*
let id = 0
const f03 = pessoas.map(objeto=>{
    id++
    objeto.id = id
    return objeto
})
console.log(f03)

//Importante notar que, no caso dos objetos, que são valores por referência, ao utilizar a função map, estarei sim alterando o array original
console.log(pessoas)
*/

//SOLUÇÃO 02
let id = 0
const f03 = pessoas.map(objeto=>{
    id++
    return {id, ...objeto} //Isso fará com que ID seja a primeira chave
})
console.log(f03) //Neste caso, o array original não será alterado, pois usei o spread operator

