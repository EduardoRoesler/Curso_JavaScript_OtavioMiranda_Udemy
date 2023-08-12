/*
Claro! Aqui está a explicação sobre Funções Recursivas em JavaScript em um formato sem exemplos de código:

FUNÇÕES RECURSIVAS

1. Definição:
   - Uma função recursiva é uma função que chama a si mesma durante sua execução.
   - A recursão é uma técnica poderosa usada para resolver problemas complexos dividindo-os em subproblemas menores.

2. Casos Base:
   - Toda função recursiva deve ter um "caso base", um cenário onde a recursão para e a função retorna um valor ou resultado direto.
   - Sem um caso base, a recursão continuaria indefinidamente, resultando em um estouro de pilha (stack overflow).

3. Divisão de Problemas:
   - Funções recursivas dividem um problema maior em subproblemas mais simples, cada um resolvido da mesma maneira.
   - Cada chamada recursiva resolve um subproblema e, eventualmente, leva ao caso base.

4. Memória e Desempenho:
   - Recursão consome memória na pilha de chamadas (call stack), o que pode ser uma preocupação para problemas muito profundos.
   - Em alguns casos, uma abordagem iterativa (usando loops) pode ser mais eficiente em termos de memória e desempenho.

5. Exemplos de Uso:
   - Cálculos de fatorial, onde n! é calculado recursivamente.
   - Busca em árvores e estruturas de dados recursivas.
   - Algoritmos de ordenação, como o quicksort, que usam recursão para dividir e conquistar.

6. Recursão Direta e Indireta:
   - A recursão direta ocorre quando uma função chama a si mesma.
   - A recursão indireta ocorre quando duas ou mais funções chamam uma à outra em um ciclo.

7. Melhores Práticas:
   - Certifique-se de ter um caso base bem definido para evitar recursões infinitas.
   - Pense em como o problema pode ser dividido em subproblemas menores.
   - Considere a eficiência em termos de memória e desempenho, especialmente para problemas com profundidade significativa.

8. Recursão em JavaScript:
   - JavaScript suporta recursão, mas é importante lembrar das limitações de pilha (call stack) ao usar recursão profunda.
   - Recursão pode ser uma ferramenta poderosa, mas deve ser usada com cuidado e consideração.

Funções recursivas são uma técnica fundamental em programação, usada para resolver problemas de maneira elegante, dividindo-os em partes menores e tratando cada subproblema da mesma maneira. Compreender a recursão é importante para abordar problemas complexos de forma eficaz.
*/

function recursiva(max){
    if (max>=50) return //Caso o número recebido seja maior que 50, para o código
    max++ //incremento
    console.log(max) //retorno
    recursiva(max) //recursividade
}

recursiva(1) //Chamada

//O Node breca funções recursivas muito grandes como erro: Maximum call stack size exceeded
//O Node faz isso para brecar loops infinitos, os navegadores também fazem