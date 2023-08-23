/*
forEach

1. Definição:
   - O método `forEach()` é um método nativo de arrays em JavaScript.
   - Ele é usado para executar uma função para cada elemento do array.

2. Funcionamento:
   - O método `forEach()` itera sobre cada elemento do array original.
   - Ele aplica uma função a cada elemento, mas não cria um novo array.

3. Sintaxe:
   - O método `forEach()` é chamado na instância do array e recebe uma função como argumento: `array.forEach(funcaoDeIteracao)`

4. Função de Iteração:
   - A função de iteração é chamada para cada elemento do array.
   - Ela não precisa retornar nada, apenas executa alguma ação com o elemento.

5. Não Modifica o Array:
   - O método `forEach()` não modifica o array original; ele apenas itera sobre os elementos.

6. Uso Comum:
   - Executar alguma ação para cada elemento do array, como exibir no console ou atualizar propriedades.
   - Não é usado quando a intenção é criar um novo array com transformações ou filtragens.

7. Vantagens:
   - Iteração Simples: Oferece uma maneira fácil de percorrer os elementos de um array.
   - Legibilidade: Ajuda a manter o código conciso e fácil de entender.

8. Desvantagens:
   - Limitado: Não é útil quando você precisa criar um novo array ou realizar uma transformação complexa.

9. Alternativas:
   - Métodos como `map()`, `filter()` ou `reduce()` podem ser mais apropriados para transformações e filtragens.

10. Melhores Práticas:
    - Use o método `forEach()` quando precisar executar uma ação para cada elemento de um array.
    - Se você precisar criar um novo array com transformações, considere usar métodos como `map()`.

O método `forEach()` é útil quando você deseja executar uma operação em cada elemento de um array, mas não precisa criar um novo array ou acumular valores. Ele permite que você itere sobre os elementos de forma simples e legível.
*/

//EXEMPLO BÁSICO
const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
a1.forEach((valor, indice, array) => console.log(valor, indice, array))

//SIMULANDO REDUCE
let acumulador = 0
const soma = a1.forEach((valor)=> acumulador += valor)

console.log(acumulador)