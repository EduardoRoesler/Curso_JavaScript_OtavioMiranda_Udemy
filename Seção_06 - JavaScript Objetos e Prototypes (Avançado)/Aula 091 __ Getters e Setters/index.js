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

function Produto (nome, precoDeCompra, precoDeVenda, estoque){
   this.nome = nome,
   
   Object.defineProperties(this, {
       precoDeCompra: {
           enumerable: true,
           value: precoDeCompra,
           writable: true,
           configurable: true
       },
       precoDeVenda: {
           enumerable: true,
           value: precoDeVenda,
           writable: true,
           configurable: true
       }
   })

   Object.defineProperty(this, 'estoque', { //Imagine que podemos apenas receber números nessa propriedade
       enumerable: true,
       configurable: true,
       get: function(){
         return estoque
       },
       set: 
   })
}

const p1 = new Produto('Camiseta', 20, 25, 3)
console.log(p1)
console.log(p1.estoque)