/*
GETTERS E SETTERS

1. Definição:
   - Getters e setters são métodos especiais usados para acessar e modificar propriedades de um objeto em JavaScript.

2. Getters:
   - Um getter é um método que é usado para obter o valor de uma propriedade.
   - Ele é chamado quando a propriedade é acessada como se fosse um atributo.

3. Setters:
   - Um setter é um método que é usado para definir o valor de uma propriedade.
   - Ele é chamado quando a propriedade é definida como se fosse um atributo.

4. Uso de Getters:
   - Útil quando você quer executar lógica ou cálculos antes de retornar o valor de uma propriedade. (Trataremos disso nessa aula)
   - Permite abstrair o acesso à propriedade para fornecer mais controle ou segurança.

5. Uso de Setters:
   - Útil quando você quer executar lógica ou validações antes de definir o valor de uma propriedade.
   - Ajuda a manter o controle sobre como os valores são atribuídos a uma propriedade.

6. Sintaxe:
   - Getters são definidos usando o prefixo `get`, seguido pelo nome da propriedade e uma função.
   - Setters são definidos usando o prefixo `set`, seguido pelo nome da propriedade e uma função.

7. Vantagens:
   - Encapsulamento: Getters e setters permitem definir a lógica de acesso e atribuição de propriedades de forma centralizada. 
   - Controle: Você pode aplicar validações ou lógica específica antes de acessar ou definir propriedades.

8. Desvantagens:
   - Complexidade: O uso excessivo de getters e setters pode tornar o código mais complexo e difícil de entender.

9. Alternativas:
   - Para propriedades simples que não requerem lógica especial, o acesso direto a propriedades é mais simples e direto.

10. Melhores Práticas:
    - Use getters e setters quando precisar controlar o acesso ou a atribuição de propriedades com lógica adicional.
    - Mantenha a lógica de getters e setters simples e claras para facilitar a manutenção.

Getters e setters são uma ferramenta poderosa para controlar como as propriedades de um objeto são acessadas e definidas, permitindo a execução de lógica personalizada durante essas operações. No entanto, é importante usá-los com moderação para manter o código claro e legível.
*/

function Produto (estoque){ //Função construtora que está sendo utilizada para criar um objeto com atributo de estoque

   let estoquePriv = estoque //Esta variável privada é utilizada para evitar um loop infinito advindo do uso do this. Ao tentar acessar ou definir diretamente a propriedade estoque, criamos um ciclo infinito, pois o getter ou setter seria chamado novamente ao tentar acessar, levando a uma recursão infinita.
   Object.defineProperty(this, 'estoque', {

       enumerable: true,

       configurable: true,

       get: function(){ //Em uma função factory, eu faria esse processo dentro do próprio objeto
         return estoquePriv
       },

       set: function(valor){ //Observe a sintaxe de : e função anônima
         if (typeof valor !== 'number'){ //Aqui estamos utilizando uma lógica simples para proteger a variável estoque de entradas indevidas
            console.log('Erro de entrada.')
            return
         }

         estoquePriv = valor
       }
   })
}

const p1 = new Produto(3)

console.log(p1)
console.log(p1.estoque)

p1.estoque = 'Teste'
console.log(p1.estoque)

p1.estoque = 1000
console.log(p1.estoque)










