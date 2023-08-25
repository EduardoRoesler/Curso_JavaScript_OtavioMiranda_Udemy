/*
DESCRITORES DE PROPRIEDADES

1. Objetivo:
   - Ambos os métodos são usados para definir propriedades em objetos JavaScript de maneira mais detalhada e controlada.

2. Object.defineProperty():
   - Permite definir uma única propriedade em um objeto.
   - Você especifica o objeto alvo, o nome da propriedade e um descritor de propriedade contendo suas características.

3. Object.defineProperties():
   - Permite definir várias propriedades em um objeto de uma vez.
   - Você especifica o objeto alvo e um objeto que contém múltiplos descritores de propriedades.

4. Descritores de Propriedades:
   - Um descritor de propriedade é um objeto que contém configurações para a propriedade, como "value", "writable", "enumerable" e "configurable".

5. Características Principais:
   - value: O valor da propriedade.
   - writable: Se a propriedade pode ser alterada.
   - enumerable: Se a propriedade pode ser percorrida em um loop.
   - configurable: Se as características da propriedade podem ser alteradas posteriormente.

6. Uso Comum:
   - `Object.defineProperty()`: Útil quando você precisa definir uma única propriedade com configurações específicas.
   - `Object.defineProperties()`: Útil quando precisa definir várias propriedades ao mesmo tempo.

7. Vantagens:
   - Controle Preciso: Permite definir propriedades com características específicas, como imutabilidade ou não percorribilidade.
   - Encapsulamento: Útil para criar objetos com propriedades protegidas ou restritas.

8. Desvantagens:
   - Sintaxe Mais Complexa: A sintaxe com descritores de propriedades pode ser mais complicada do que simplesmente atribuir valores a propriedades.

9. Alternativas:
   - Quando você não precisa de configurações avançadas de propriedades, pode usar a atribuição simples de valores a propriedades.

10. Melhores Práticas:
    - Use `Object.defineProperty()` e `Object.defineProperties()` quando precisar de controle granular sobre as propriedades de um objeto.
    - Mantenha a sintaxe de descritores de propriedades organizada e clara para facilitar a manutenção do código.

Esses métodos são ferramentas úteis para definir propriedades em objetos com controle preciso sobre suas características. Eles permitem criar objetos com propriedades específicas e controlar seu comportamento, proporcionando maior flexibilidade e encapsulamento.
*/

function Produto (nome, precoDeCompra, precoDeVenda, estoque){
    this.nome = nome, //Estas são variaveis públicas (posso acessá-la por notação de ponto, por exemplo, fora do objeto)
    
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
    }) //(objeto, propriety descriptor (Contém também a declaração das chaves))

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //A chave será exibida
        value: estoque, //O valor atribuido a ela será o do atributo estoque (posso adicionar um método diretamente aqui)
        writable: false, //Valor não pode ser alterado posteriormente
        configurable: false //Não é configurável posteriormente (também não permite apagar a chave)
    }) //(objeto, chave, propriety descriptor)
}

const p1 = new Produto('Camiseta', 20, 25, 3)
console.log(p1)
console.log(Object.keys(p1)) //Retorna um array com as chaves setadas como 'Enumerable'