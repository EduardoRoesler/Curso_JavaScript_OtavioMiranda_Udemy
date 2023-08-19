/*
FILTER

1. Definição:
   - O método `filter()` é um método nativo de arrays em JavaScript.
   - Ele é usado para criar um novo array com todos os elementos que passam por um teste (função de filtro) especificado.

2. Funcionamento:
   - O método `filter()` itera sobre cada elemento do array original.
   - Ele aplica uma função de filtro para cada elemento e cria um novo array contendo apenas os elementos que passam no teste.

3. Sintaxe:
   - O método `filter()` é chamado na instância do array e recebe uma função como argumento: `array.filter(funcaoDeFiltro)`

4. Função de Filtro:
   - A função de filtro é chamada para cada elemento do array.
   - Ela deve retornar um valor booleano (`true` ou `false`) indicando se o elemento deve ou não ser incluído no novo array.

5. Criação de um Novo Array:
   - O método `filter()` não modifica o array original.
   - Ele retorna um novo array contendo apenas os elementos que passaram no teste da função de filtro.

6. Uso Comum:
   - Filtrar elementos com base em critérios específicos, como valores maiores que um número dado.
   - Criar subconjuntos de um array original com base em propriedades específicas dos elementos.

7. Vantagens:
   - Criação de Subconjuntos: Facilita a criação de arrays menores e mais específicos.
   - Legibilidade: O método `filter()` ajuda a escrever código mais claro e conciso.

8. Desvantagens:
   - Pode criar um novo array, o que pode consumir mais memória, especialmente com arrays grandes.

9. Alternativas:
   - Laços `for` ou `forEach`: Permitem filtrar elementos manualmente, mas o código pode ficar mais extenso.

10. Melhores Práticas:
    - Use o método `filter()` quando precisar criar um novo array com elementos que atendam a critérios específicos.
    - Mantenha a função de filtro clara e legível para facilitar a compreensão do código.

O método `filter()` é uma ferramenta útil para criar subconjuntos de um array com base em critérios específicos. Ele permite que você selecione os elementos que são relevantes para a sua tarefa e crie um novo array contendo esses elementos.
*/

//Método longo (criar função externa ao filter())
const numeros = [0, 1, 10, 30, 77, 20, 2, 6, 99, 40, 23, 11, 56]

function maiorQue10(valor){ //Por esta ser uma função callback, posso retornar também o indice e o array: function maiorQue10(valor, indice, array)
    if (valor>10){
        return true
    } else {
        return false
    }
}

const numMaior10 = numeros.filter(maiorQue10)
console.log(numMaior10)

//Otimização
const numMenor10 = numeros.filter(valor=>valor<10) //A própria avaliação retorna true ou false
console.log(numMenor10)

//Exercício de uso em objetos
/*
- F01: Retorne as pessoas que tem o nome com 5 letras ou mais
- F02: Retorne as pessoas com mais de 50 anos
- F03: Retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]
*/
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]

const f01 = pessoas.filter(valor => valor.nome.length > 5)
console.log(f01)

const f02 = pessoas.filter(valor => valor.idade > 50)
console.log(f02)

const f03 = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'))

console.log(f03)