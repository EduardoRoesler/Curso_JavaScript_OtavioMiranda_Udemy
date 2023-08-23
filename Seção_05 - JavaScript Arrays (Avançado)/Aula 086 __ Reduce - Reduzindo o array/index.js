/*
REDUCE

1. Definição:
   - O método `reduce()` é um método nativo de arrays em JavaScript.
   - Ele é usado para reduzir os elementos de um array a um único valor, aplicando uma função acumuladora.

2. Funcionamento:
   - O método `reduce()` itera sobre cada elemento do array original.
   - Ele acumula um valor resultante ao aplicar uma função acumuladora a cada elemento, passando o resultado anterior.

3. Sintaxe:
   - O método `reduce()` é chamado na instância do array e recebe uma função acumuladora como argumento: 
   `array.reduce(funcaoAcumuladora)`

4. Função Acumuladora:
   - A função acumuladora é chamada para cada elemento do array, passando o acumulador e o elemento atual.
   - Ela deve retornar o novo valor do acumulador.

5. Valor Inicial do Acumulador:
   - É possível passar um segundo argumento opcional para o método `reduce()`, que será usado como o valor inicial do acumulador.

6. Resultado Final:
   - O método `reduce()` retorna o valor final do acumulador após a iteração em todos os elementos do array.

7. Uso Comum:
   - Somar todos os valores de um array.
   - Calcular a média ou total de um conjunto de números.
   - Concatenar strings de um array em uma única string.

8. Vantagens:
   - Redução de Dados: Permite reduzir uma sequência de valores a um único valor.
   - Flexibilidade: A função acumuladora pode realizar qualquer operação desejada.

9. Desvantagens:
   - Requer entendimento claro da lógica de acumulação para garantir resultados corretos.

10. Alternativas:
    - Laços `for` ou `forEach`: Permitem acumular valores manualmente, mas o código pode ser mais extenso.

11. Melhores Práticas:
    - Use o método `reduce()` quando precisar reduzir um array a um único valor através de uma operação acumuladora.
    - Certifique-se de entender claramente como a função acumuladora está sendo aplicada para obter resultados precisos.

O método `reduce()` é uma ferramenta útil para reduzir uma sequência de valores em um único resultado através de uma função acumuladora. Ele pode ser aplicado a várias operações diferentes, como soma, concatenação ou cálculos mais complexos.

- Divergindo um pouco de map e filter, reduce tem a seguinte estrutura: 
function(acumulador, valor, indice, array){
    *****Código*****
}, 200
- Este valor após as chaves será o valor inicial do acumulador
*/

//EXEMPLO BÁSICO DE USO
const numeros = [0, 1, 10, 30, 77, 20, 2, 6, 99, 40, 23, 11, 56]
const soma = numeros.reduce(function(acumulador, valor){
    acumulador += valor //Acumulador é 0 inicialmente, a cada iteração ele recebe em soma o valor do array
    console.log(acumulador)
    return acumulador //Retornamos o valor final do acumulador
}, 0) //Se eu não setar o acumulador inicial, ele será o primeiro ítem do array

//EXEMPLO DE USO DO REDUCE EM FUNÇÕES TIPICAMENTE DE FILTER (Não indicado)
const pares = numeros.reduce((acumulador, valor)=>{
   if (valor % 2 === 0){ //Se o resto da divisão por 2 for 0 (verifica se o número é par)
      acumulador.push(valor) //Adiciona o valor ao array do acumulador
   }
   return acumulador
}, []) //O valor inicial do acumulador é um array vazio

console.log(pares) //Não é indicado fazer isso com reduce, mas sim com filter. Porém é bom para entender o funcionamento do método

//EXEMPLO DE USO DO REDUCE EM FUNÇÕES TIPICAMENTE DE MAP (Não indicado)
const dobro = numeros.reduce((acumulador, valor)=>{
   acumulador.push(valor*2)
   return acumulador
}, [])

console.log(dobro)

//EXERCÍCIO COM OBJETOS
//Retorne a pessoa mais velha
const pessoas = [
   {nome: 'Luiz', idade: 62},
   {nome: 'Maria', idade: 23},
   {nome: 'Eduardo', idade: 55},
   {nome: 'Letícia', idade: 10},
   {nome: 'Rosana', idade: 64},
   {nome: 'Wallace', idade: 63}
]

const maisVelho = pessoas.reduce((acumulador, valor)=>{ 
   if(valor.idade > acumulador.idade) return valor
   return acumulador
}) //Neste caso, como não estou setando valor inicial para o acumulador, o acumulador será o primeiro elemento e o valor será o segundo elemento

console.log(maisVelho)