/*
PROTOTYPES

1. Definição:
   - Protótipos são um mecanismo fundamental em JavaScript que permite a herança de propriedades e métodos entre objetos.

2. Herança Prototipal:
   - Em vez de usar classes como em linguagens orientadas a objetos tradicionais, JavaScript usa protótipos para compartilhar comportamentos entre objetos.

3. Objeto Prototype:
   - Todo objeto em JavaScript tem uma propriedade chamada `prototype`.
   - Ela é uma referência ao objeto a partir do qual o objeto atual herda propriedades e métodos.

4. Herança por Cadeia de Protótipos:
   - Quando uma propriedade ou método não é encontrado em um objeto, JavaScript procura na cadeia de protótipos até encontrar ou chegar ao topo.

5. Herança e Construtores:
   - Funções construtoras e classes podem ser usadas para criar objetos com protótipos.
   - Quando um objeto é criado a partir de uma função construtora, ele herda propriedades do protótipo dessa função.

6. Prototype Chain:
   - É a sequência de objetos protótipos usada para buscar propriedades e métodos.
   - O último elo na cadeia é o objeto global (geralmente `Object.prototype`).

7. Método `Object.create()`:
   - Permite criar um novo objeto com um protótipo especificado.
   - Usado para estabelecer protótipos de forma mais direta.

8. Vantagens:
   - Reutilização de Código: Permite compartilhar comportamentos entre objetos sem duplicação.
   - Flexibilidade: Permite adicionar ou substituir propriedades e métodos em protótipos.

9. Desvantagens:
   - Pode ser mais complexo de entender em comparação com a herança baseada em classes.

10. Melhores Práticas:
    - Use protótipos quando desejar compartilhar propriedades e métodos entre objetos.
    - Entenda a cadeia de protótipos ao acessar propriedades e métodos.

O uso de protótipos é uma parte fundamental da linguagem JavaScript. Entender como a herança prototípica funciona é crucial para criar objetos que compartilham comportamentos e propriedades de maneira eficiente e flexível.
*/

// FUNÇÃO CONSTRUTORA (Pode ser imaginada como um molde para as instâncias)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = ()=>`${this.nome} ${this.sobrenome}` - Criando um método desta maneira, cada instância de objeto criada a partir desta função terá sua própria cópia do método, o que pode ser ineficiente. Uma solução melhor é adicionar o método ao prototype, tornando-o acessível a todas as instâncias.
}

// Adicionando o método nomeCompleto ao protótipo da função construtora Pessoa
Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}

// INSTÂNCIA
const pessoa01 = new Pessoa('Eduardo', 'Roesler');

console.log(pessoa01);
console.log(pessoa01.nomeCompleto); // Mostra a definição da função nomeCompleto
console.log(pessoa01.nomeCompleto()); // Invoca o método nomeCompleto para obter o nome completo
// É importante observar a cadeia de pesquisa (prototype chain) do JavaScript. Neste caso, será: pessoa01 -> Pessoa.prototype -> Object.prototype

