/*
OBJETOS

1. Definição:
   - Um objeto é uma coleção de propriedades. Uma propriedade é uma associação entre um nome (chave) e um valor.
   - Um valor de propriedade pode ser uma função (método).

2. Criação de Objetos:
   - Existem várias maneiras de criar objetos em JavaScript, incluindo:
     - Notação literal de objeto: `var meuObjeto = {chave1: valor1, chave2: valor2};`
     - Construtor `Object`: `var meuObjeto = new Object(); meuObjeto.chave1 = valor1; meuObjeto.chave2 = valor2;`
     - Função construtora: `function MeuObjeto() { this.chave1 = valor1; this.chave2 = valor2; } var meuObjeto = new MeuObjeto();`

3. Acesso às Propriedades:
   - As propriedades de um objeto podem ser acessadas usando a notação de ponto (`objeto.propriedade`) ou a notação de colchetes (`objeto["propriedade"]`).
   - A notação de colchetes é útil quando o nome da propriedade é armazenado em uma variável ou quando o nome da propriedade não é um identificador válido.

4. Métodos:
   - Os métodos são funções associadas a um objeto.
   - Eles podem ser chamados usando a notação de ponto (`objeto.metodo()`) ou a notação de colchetes (`objeto["metodo"]()`).

5. Herança:
   - Em JavaScript, todos os objetos têm um protótipo.
   - Quando uma propriedade é acessada em um objeto, se ela não for encontrada no próprio objeto, o mecanismo de herança procura por ela no protótipo do objeto, e assim por diante até encontrar a propriedade ou chegar ao final da cadeia de protótipos.

6. Uso Comum:
   - Os objetos são usados para armazenar dados estruturados e fornecer funcionalidades relacionadas a esses dados.
   - Eles são amplamente utilizados para modelar coisas do mundo real e fornecer abstrações para facilitar o desenvolvimento de software.

7. Vantagens:
   - Flexibilidade: Os objetos podem ser criados e modificados dinamicamente em tempo de execução.
   - Reutilização: A herança permite reutilizar código e comportamento entre objetos relacionados.

8. Desvantagens:
   - Complexidade: O uso excessivo de objetos e herança pode tornar o código mais complexo e difícil de entender.

9. Alternativas:
   - Outras estruturas de dados, como arrays e conjuntos, podem ser usadas para armazenar dados estruturados.
   - Funções puras podem ser usadas para fornecer funcionalidades relacionadas aos dados sem depender de objetos.

10. Melhores Práticas:
    - Use objetos quando precisar armazenar dados estruturados e fornecer funcionalidades relacionadas a esses dados.
    - Evite o uso excessivo de herança e mantenha a cadeia de protótipos curta para facilitar o entendimento do código.

Os objetos em JavaScript são uma maneira poderosa e flexível de armazenar dados estruturados e fornecer funcionalidades relacionadas a esses dados. Eles permitem modelar coisas do mundo real e fornecer abstrações para facilitar o desenvolvimento de software.
*/

//DECLARAÇÃO DE OBJETOS//
//DECLARAÇÃO LITERAL
const pessoaLiteral = {
    nome: 'Eduardo',
    sobrenome: 'Roesler',
    idade: 25
}

console.log(pessoaLiteral)

//DECLARAÇÃO POR CONSTRUCTOR
const pessoaConstructor = new Object()
pessoaConstructor.nome = 'Eduardo'
pessoaConstructor.sobrenome = 'Roesler'
pessoaConstructor.idade = 25

console.log(pessoaConstructor)

//DECLARAÇÃO POR FUNÇÃO CONSTRUTORA
function funcConstrutora(nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade,
        get nomeCompleto(){ //Posso criar métodos getter já dentro da constructor function
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const pessoaFuncConstrutora = funcConstrutora('Eduardo', 'Roesler', 25)
console.log(pessoaFuncConstrutora)
console.log(pessoaFuncConstrutora.nomeCompleto)

//DECLARAÇÃO POR FUNÇÃO FÁBRICA
function PessoaFactory(nome, sobrenome, idade){
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.idade = idade
}

const pessoaFactory = new PessoaFactory('Eduardo', 'Roesler', 25)
console.log(pessoaFactory)

//NOTAÇÕES DE ACESSO À CHAVES//
//Notação de ponto
console.log(pessoaLiteral.nome)

//Notação de colchetes
console.log(pessoaLiteral['nome']) //Essa notação é interessante quando se utiliza de valores dinâmicos, por exemplo

//APAGAR CHAVES//
delete pessoaLiteral.nome
console.log(pessoaLiteral)

//ITERAÇÕES//
//BUSCAR CHAVES
for (chave in pessoaConstructor){
    console.log(chave)
}

//BUSCAR VALORES
for (chave in pessoaConstructor){
    console.log(pessoaConstructor[chave])
}

//TRAVAR ALTERAÇÕES//
//DE OBJETOS
pessoaConstructor.nome = 'Maria'
console.log(pessoaConstructor)

Object.freeze(pessoaConstructor) //Impede alterações futuras. Isso funciona também com arrays

pessoaConstructor.nome = 'Douglas' //Essa alteração será descartada
console.log(pessoaConstructor)

//DE FÁBRICAS
function PessoaFactory02(nome){
    this.nome = nome
    Object.freeze(this) //Agora não conseguirei alterar nenhum objeto criado por essa fábrica
}
const pessoaFactory02 = new PessoaFactory02('Eduardo')
console.log(pessoaFactory02)

pessoaFactory02.nome = 'Mariozinho'
console.log(pessoaFactory02)