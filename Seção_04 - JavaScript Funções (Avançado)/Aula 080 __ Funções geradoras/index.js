/*
FUNÇÕES GERADORAS

1. Definição:
   - As Funções Geradoras são uma construção em JavaScript que permite pausar e retomar a execução de uma função.
   - Elas produzem uma sequência de valores sob demanda, em vez de calcular todos de uma vez.

2. Sintaxe:
   - As Funções Geradoras são definidas usando a palavra-chave `function*` (com um asterisco).
   - Dentro da função geradora, você usa a palavra-chave `yield` para produzir valores.

3. Pausa e Retomada:
   - Uma função geradora pode ser pausada usando `yield` e depois retomada, continuando a partir do ponto onde foi pausada.
   - Isso é útil para gerar valores sob demanda, economizando memória e melhorando o desempenho.

4. Uso de "yield":
   - Ao chamar `yield`, a função geradora retorna o valor especificado e fica em um estado pausado.
   - Quando a função geradora é chamada novamente, ela retoma a execução a partir do ponto de pausa.

5. Valores Recebidos:
   - Além de produzir valores usando `yield`, as funções geradoras podem receber valores de fora através de `yield` também.

6. Iteração:
   - Para iterar sobre os valores gerados, você pode usar um loop `for...of`.
   - A cada iteração, a função geradora é chamada novamente, produzindo o próximo valor.

7. Vantagens:
   - Eficiência: Permite gerar valores sob demanda, economizando recursos.
   - Código Limpo: Facilita a criação de sequências complexas de valores de maneira clara.

8. Desvantagens:
   - Complexidade: O uso de `yield` e a retomada da execução podem ser confusos para iniciantes.
   - Limitações: Não é ideal para todos os cenários; outras abordagens podem ser mais simples.

9. Alternativas:
   - Promises: Para operações assíncronas, as Promises ou async/await podem ser mais apropriadas.
   - Arrays: Para sequências estáticas de valores, arrays podem ser mais simples de usar.

10. Melhores Práticas:
    - Use funções geradoras quando precisar produzir uma sequência de valores sob demanda.
    - Entenda como o `yield` e a pausa/retomada funcionam para evitar erros.

Funções geradoras são uma ferramenta poderosa para criar sequências de valores sob demanda e melhorar a eficiência do seu código, especialmente quando você não precisa calcular todos os valores de uma vez. Porém, seu uso pode ser mais avançado e requer um entendimento sólido da sua mecânica.
*/

function* geradora01(){
    //Código qualquer
    yield 'Valor 01' //yield vai funcionar como um retun, porém não finaliza a função por completo
    //Código qualquer
    yield 'Valor 02' 
    //Código qualquer
    yield 'Valor 03' 
}

//Para conseguir os valores, precisarei utilizar o método next, dentro da função geradora
//FUNCIONAMENTO
const g01 = geradora01()
console.log(g01.next()) //{ value: 'Valor 01', done: false }
console.log(g01.next()) //{ value: 'Valor 02', done: false }
console.log(g01.next()) //{ value: 'Valor 03', done: false }
console.log(g01.next()) //{ value: undefined, done: true }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//EXTRAÇÃO DO VALOR
function* geradora02(){
    yield 'Valor 01'
}

const g02 = geradora02()
console.log(g02.next().value) //Utilizando .value, extraio apenas o valor do yield ao invés do objeto completo

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ITERAÇÃO FOR
function* geradora03(){
    yield 'V01'
    yield 'V02' 
    yield 'V03' 
}

const g03 = geradora01()

for (let valor of g03){
    console.log(valor)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//GERADOR INFINITO
function* geradora04(){
    let i = 0
    while (true){
        yield i
        i++
    }
}

const g04 = geradora04()
console.log(g04.next().value)
console.log(g04.next().value)
console.log(g04.next().value)
console.log(g04.next().value)
console.log(g04.next().value)
console.log(g04.next().value)
console.log(g04.next().value)
console.log(g04.next().value)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//DELEGAR AÇÕES ENTRE GERADORAS
function* geradora05(){
    yield 'd1'
    yield 'd2'
    yield 'd3'
}

function* geradora06(){
    yield* geradora05()
    yield 'D4'
    yield 'D5'
    yield 'D6'
}

const g06 = geradora06()
for (valor of g06){
    console.log(valor)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FUNÇÕES DENTRO DE FUNÇÕES GERADORAS
function* geradora07(){
    yield function(){
        console.log('Yield function 01')
    }

    yield function(){
        console.log('Yield function 02')
    }
}

const g07 = geradora07()
const funcao01 = g07.next().value
const funcao02 = g07.next().value

funcao01()
funcao02()