/*
HERANÇA

A herança em JavaScript é baseada em protótipos e difere da herança baseada em classes encontrada em algumas outras linguagens de programação. Aqui está uma explicação sobre como a herança funciona em JavaScript, em um formato sem exemplos de código:

1. Herança Prototípica:
   - Em JavaScript, a herança é baseada em protótipos, não em classes como em algumas outras linguagens.
   - Cada objeto em JavaScript possui uma referência a um objeto protótipo, a partir do qual ele herda propriedades e métodos.

2. Objeto Protótipo:
   - Todo objeto em JavaScript tem uma propriedade chamada `prototype`, que aponta para o objeto a partir do qual ele herda.
   - Essa relação é usada para compartilhar propriedades e métodos entre objetos.

3. Cadeia de Protótipos:
   - Quando uma propriedade ou método não é encontrado em um objeto, JavaScript busca na cadeia de protótipos, seguindo a referência de `prototype` até encontrar ou chegar ao objeto global.

4. Construtores:
   - Funções construtoras podem ser usadas para criar objetos com protótipos.
   - Quando um objeto é criado a partir de uma função construtora, ele herda propriedades e métodos do protótipo dessa função.

5. `Object.create()`:
   - O método `Object.create()` permite criar um novo objeto com um protótipo especificado.
   - É uma maneira direta de estabelecer a herança prototípica.

6. `class` (a partir do ES6):
   - A introdução da palavra-chave `class` no ES6 trouxe uma sintaxe mais familiar para definir classes em JavaScript.
   - Por baixo dos panos, ainda está usando a herança prototípica.

7. Vantagens da Herança Prototípica:
   - Flexibilidade: Permite adicionar ou substituir propriedades e métodos em objetos existentes sem afetar a estrutura global.
   - Reutilização de Código: Permite compartilhar comportamentos entre objetos sem duplicação.

8. Desvantagens da Herança Prototípica:
   - Complexidade: Pode ser mais complexo de entender, especialmente para desenvolvedores acostumados com a herança baseada em classes.

9. Melhores Práticas:
   - Use a herança prototípica quando quiser compartilhar propriedades e métodos entre objetos.
   - Entenda a cadeia de protótipos ao acessar propriedades e métodos.

A herança em JavaScript é um conceito essencial para criar estruturas de código reutilizáveis e flexíveis. Embora seja diferente da herança baseada em classes, a herança prototípica oferece benefícios significativos em termos de flexibilidade e eficiência.
*/

//Em um e-comerce, temos os produtos Camiseta e Caneca
//Todos os produtos devem ter métodos de aumento e desconto
//A camiseta pode ter cor e a caneca pode ter material
function Produto(nome, valor){
    this.nome = nome
    this.valor = valor
}

Produto.prototype.aumento = function(fator){
    this.valor = this.valor + (this.valor * fator/100)
}

Produto.prototype.desconto = function(fator){
    this.valor = this.valor - (this.valor * fator/100)
}

const produto = new Produto('Teste', 1200)
console.log(produto)


//Especialização das camisetas, pois, hipoteticamente, não queremos reescrever as funções Produto, aumento e desconto
function Camiseta(nome, valor, cor){
    Produto.call(this, nome, valor) //O primeiro argumento especifica  qual objeto será o valor de this dentro da função.
    this.cor = cor
}
/*
A função call em JavaScript é usada para chamar uma função e definir o valor do this dentro dessa função. É comumente usada para permitir que um construtor de uma classe derivada (subclasse) chame o construtor de uma classe base (superclasse) e herde suas propriedades e métodos.

Neste exemplo, temos duas classes: Produto e Camiseta. Camiseta é uma especialização de Produto, ou seja, herda propriedades e métodos de Produto, mas também adiciona algumas propriedades específicas, como a cor. Para chamar o construtor da classe base Produto a partir da classe derivada Camiseta, você utiliza Produto.call(this, nome, valor).

Nesse contexto:

- this: Refere-se à instância atual da classe Camiseta.
- nome e valor: São os argumentos que você passa para o construtor da classe Produto, que são necessários para inicializar as propriedades nome e valor da instância de Camiseta.
- O uso de Produto.call(this, nome, valor) permite que a classe Camiseta herde as propriedades nome e valor de Produto, além de adicionar a propriedade cor específica de Camiseta.

Essa é uma forma de reutilizar funcionalidades de uma classe base em uma classe derivada, permitindo uma hierarquia de herança em JavaScript. Note que esse é um exemplo de herança prototípica, pois você está adicionando métodos aos protótipos das classes, e a função call está sendo usada para inicializar a parte da instância da classe base dentro da classe derivada.
*/

//É importante notar que o prototype de Camiseta não será o mesmo de Produto. Portanto iremos sanar esse problema abaixo, para que seja possível utilizar os métodos de Produto
Camiseta.prototype = Object.create(Produto.prototype) //O problema agora é que o construtor de Camiseta será identificado como Produto
Camiseta.prototype.constructor = Camiseta //Sanado o problema

const camisa = new Camiseta('Camisa', 100, 'Azul')
console.log(camisa)



//Concluindo a tarefa, temos abaixo a função Caneca
function Caneca(nome, valor, material){
    Produto.call(this, nome, valor)
    this.material = material
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca 

const xicara = new Caneca('Xicara', 100, 'Cerâmica')
console.log(xicara)