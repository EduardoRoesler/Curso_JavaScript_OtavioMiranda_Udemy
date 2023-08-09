/*
FUNÇÕES IMEDIATAS (IIFE)

1. Definição:
   - Uma IIFE (Immediately Invoked Function Expression) é uma função que é definida e executada imediatamente após sua criação.
   - Ela é envolta em parênteses e chamada imediatamente.

2. Objetivos:
   - Isolar o escopo: As variáveis dentro de uma IIFE não poluem o escopo global.
   - Execução única: Garante que o código dentro da IIFE seja executado apenas uma vez.

3. Sintaxe:
   - A IIFE é definida como uma expressão de função dentro de parênteses: 
    (function() {
        ''código''
    })()

4. Uso Comum:
   - Encapsulamento: Ajuda a evitar conflitos de nomes de variáveis entre bibliotecas ou módulos.
   - Modularização: Cria um escopo isolado para partes específicas do código.
   - Execução única: Útil para inicializações ou configurações que só precisam ser feitas uma vez.

5. Vantagens:
   - Evita poluir o escopo global: Variáveis dentro da IIFE não vazam para fora dela.
   - Controle de contexto: Permite controlar quais variáveis são acessíveis e onde.

6. Desvantagens:
   - Legibilidade: Pode tornar o código mais complexo se usado em excesso.
   - Debugging: Depurar uma IIFE pode ser mais complicado.

7. Alternativas Modernas:
   - Módulos ES6: Introduziram um padrão mais claro para modularização de código, tornando o uso de IIFE menos necessário.

8. Melhores Práticas:
   - Use quando necessário: IIFE é útil em situações específicas, como para criar módulos independentes ou evitar poluição global.
   - Mantenha a legibilidade: Use com moderação e mantenha o código claro para facilitar a manutenção.

As IIFE são uma técnica antiga que foi amplamente usada no JavaScript para isolar o escopo e criar execuções únicas. Com a evolução do padrão de módulos ES6, seu uso diminuiu um pouco, mas ainda podem ser úteis em certos cenários.
*/

(function(){ //Crio a função envolta em parênteses

    //Posso encapsular, por exemplo, todo o código de um projeto aqui, protegendo-o do escopo global

})() //Ao final da função, abro e fecho parenteses para chamá-la