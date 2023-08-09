/*
FACTORY FUNCTIONS

1. Definição:
   - Uma Factory Function (Função Fábrica) é uma função que cria e retorna objetos.
   - Ela atua como uma fábrica para criar instâncias de objetos de maneira personalizada.

2. Objetivos:
   - Encapsulamento: Permite criar objetos com propriedades e comportamentos específicos.
   - Reutilização: Facilita a criação de várias instâncias de objetos com base em um padrão.

3. Sintaxe:
   - Uma Factory Function é uma função que retorna um objeto personalizado: 
   `function criarObjeto(parametros) { 
        * lógica de criação * 
        return objeto; 
    }`

4. Vantagens:
   - Personalização: Cria objetos com propriedades específicas para cada instância.
   - Abstração: Isola a lógica de criação de objetos, tornando o código mais modular.
   - Reutilização: Pode criar várias instâncias com configurações diferentes.

5. Desvantagens:
   - Overhead: Pode haver algum custo computacional ao criar novos objetos usando Factory Functions.

6. Cenários de Uso:
   - Criação de Objetos Complexos: Para objetos que requerem configurações detalhadas ou várias propriedades.
   - Modularização: Para criar instâncias de objetos que encapsulam uma parte específica da lógica.

7. Padrões Relacionados:
   - Constructor Functions: Usadas para criar objetos semelhantes, mas com uma sintaxe mais semelhante à orientação a objetos.
   - Classes (ES6): Introduzidas como uma forma mais formal de criar objetos, permitindo herança e encapsulamento.

8. Melhores Práticas:
   - Dê nomes descritivos às Factory Functions para deixar claro qual tipo de objeto elas criam.
   - Evite criar Factory Functions muito complexas para manter o código legível.

As Factory Functions são uma técnica poderosa para criar objetos personalizados e encapsulados. Elas oferecem uma abordagem flexível e modular para a criação de instâncias de objetos, permitindo configurar propriedades e comportamentos de maneira eficaz.
*/

