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

/*
THIS

1. Definição:
   - A palavra-chave "this" em JavaScript se refere ao contexto de execução atual.
   - Ela é usada para acessar objetos, propriedades e métodos em diferentes situações.

2. Valor do "this":
   - O valor de "this" é determinado pelo modo como uma função é chamada, não onde ela é definida.
   - O valor de "this" pode variar dependendo do contexto de execução.

3. Situações comuns:
   - Métodos de objetos: "this" se refere ao objeto que invocou o método.
   - Funções regulares: "this" pode se referir ao objeto global (no navegador, geralmente é "window").
   - Eventos: Em manipuladores de eventos, "this" frequentemente se refere ao elemento que disparou o evento.

4. Uso em Funções Construtoras:
   - Em funções construtoras, "this" se refere ao objeto que está sendo criado.
   - É usado para definir propriedades específicas de cada instância do objeto.

5. Uso em Arrow Functions:
   - Arrow functions não têm um "this" próprio; elas herdam o valor de "this" do contexto que as envolve.
   - Isso pode ser útil para evitar confusões com a dinâmica do "this" em funções regulares.

6. Uso com Cuidado:
   - O comportamento do "this" pode ser confuso, especialmente em funções assíncronas ou quando usado dentro de funções aninhadas.
   - É importante entender o contexto em que uma função é chamada para determinar o valor correto de "this".

7. Amarrando o "this":
   - Para garantir que "this" tenha um valor específico em uma função, você pode usar métodos como "bind", "call" ou "apply".

8. Melhores Práticas:
   - Entenda o contexto de execução de uma função para saber qual será o valor de "this".
   - Use arrow functions quando quiser herdar o "this" do escopo superior.
   - Em funções regulares, é uma boa prática usar "strict mode" para evitar que "this" aponte para o objeto global acidentalmente.

"this" é uma parte fundamental do JavaScript e é crucial para acessar e manipular objetos de maneira eficaz. Compreender como "this" se comporta em diferentes contextos é importante para escrever código robusto e evitar erros relacionados ao escopo.
*/

function criaPessoa(nome, sobrenome, altura, peso){
   return {
      nome,

      sobrenome,

      get nomeCompleto(){
         return `${this.nome} ${this.sobrenome}`
      },

      set nomeCompleto(valor){ //Quando uso um getter, não consigo atribuir um valor à propriedade fora da função construtora com: p1.nomeCompleto = `Eduardo Roesler`, por exemplo.
      //Agora, imaginemos uma maneira de não só atribuir um valor a uma propriedade, mas também desconstruir esse valor e utilizá-lo para outras propriedades. Para isso utillizamos o setter.
      //Um setter em JavaScript é um método especial que permite definir o valor de uma propriedade de um objeto como se estivesse atribuindo um valor a uma variável simples. Ele é usado para controlar a atribuição de valores a propriedades específicas, o que permite a validação, transformação ou execução de lógica adicional sempre que um valor é definido. Ao usar um setter, você pode ter mais controle sobre as mudanças nas propriedades de um objeto, garantindo que as operações associadas sejam realizadas de maneira consistente e segura. Isso ajuda a modularizar a lógica e a tornar o código mais legível, ao mesmo tempo que mantém a integridade dos dados do objeto.

      valor = valor.split(' ') //Retorna um array, dividindo as palavras em espaços
      this.nome = valor.shift() //retorna primeiro valor e o exclui do array
      this.sobrenome = valor.join(' ') //Substitui as virgulas por espaços
      },

      fala(assunto){
         return `${this.nome} está ${assunto}` //O this está sempre se referindo à quem o chamou, se pessoa1 chamar, se refere a ela, se pessoa2 chamar, se referirá a ela.
      }, 

      altura,

      peso, 

      get imc(){ //O get é um exemplo de um getter em JavaScript. Um getter é um método especial que permite que você obtenha o valor de uma propriedade de um objeto como se fosse uma propriedade direta, mas na verdade, o valor é calculado sob demanda. Isso é útil quando você deseja encapsular um cálculo ou uma lógica complexa por trás de uma propriedade.
         const indice = this.peso / (this.altura**2)
         return indice.toFixed(2)
      }
   }
}

const pessoa1 = criaPessoa('Eduardo', 'Roesler', 1.8, 95) 
const pessoa2 = criaPessoa('Nicole', 'Franco', 1.60, 50) 
console.log(pessoa1.fala('sobre JS'))//Nesse caso, this está se referindo a pessoa1
console.log(pessoa1.imc) //Utilizando o getter, a função imc atua como se fosse uma propriedade do objeto
console.log(pessoa1.nomeCompleto) //Nome completo advindo do getter
pessoa1.nomeCompleto = `Eliane de Lourdes Quenutt Roesler` //Utilizando setter para reatribuir os valores
console.log(pessoa1.nomeCompleto) //Nome completo advindo do getter, modificado pelo setter
console.log(pessoa1.nome) //Nome modificado pelo setter
console.log(pessoa1.sobrenome) //Sobrenome modificado pelo setter

console.log(pessoa2.fala('sobre JS'))//Nesse caso, this está se referindo a pessoa2
console.log(pessoa2.imc)
