/*
FUNÇÕES CONSTRUTORAS

1. Definição:
   - Funções Construtoras são um padrão em JavaScript usado para criar objetos a partir de um molde ou modelo.
   - Permitem criar múltiplas instâncias de objetos com propriedades e comportamentos semelhantes.

2. Objetivo:
   - Abstrair a criação de objetos complexos e personalizados, como "classes".

3. Sintaxe:
   - Uma Função Construtora é uma função que, quando chamada com "new", cria um novo objeto: `function Construtor(parametros) { this.propriedade = valor; }`

4. Uso de "new":
   - Ao chamar uma Função Construtora com "new", o "this" dentro da função se refere ao novo objeto criado.
   - A função não precisa explicitamente retornar o objeto - o "new" faz isso automaticamente.

5. Propriedades e Métodos:
   - Dentro da Função Construtora, você pode definir propriedades e métodos que pertencem às instâncias criadas.

6. Herança Prototipal:
   - As instâncias criadas por uma Função Construtora herdam propriedades e métodos definidos em seu protótipo.

7. Padrão "Constructor":
   - Geralmente, Funções Construtoras têm nomes com inicial maiúscula para indicar que são construtoras (ex.: "Pessoa").
   - Isso ajuda a distinguir entre funções regulares e funções usadas como construtoras.

8. Vantagens:
   - Criação de Objetos Personalizados: Permite configurar propriedades de instâncias de objetos.
   - Reutilização: Facilita a criação de várias instâncias com a mesma estrutura.
   - Herança: As instâncias herdam propriedades do protótipo, permitindo compartilhar métodos e propriedades.

9. Desvantagens:
   - Herança Limitada: O padrão de herança em JavaScript é baseado em protótipos, que pode não ser tão intuitivo quanto em algumas linguagens com classes.

10. Alternativas Modernas:
    - Classes (introduzidas no ES6): Oferecem uma sintaxe mais familiar para criação de objetos e herança.

11. Melhores Práticas:
    - Use Funções Construtoras quando desejar criar várias instâncias de objetos com estrutura semelhante.
    - Considere a utilização de classes (ES6) para uma sintaxe mais clara e opções avançadas de herança.

As Funções Construtoras são uma maneira fundamental de criar objetos personalizados em JavaScript, permitindo definir propriedades e comportamentos específicos em suas instâncias. Com a introdução das classes no ES6, a sintaxe de classes tornou-se mais popular, mas entender como as Funções Construtoras funcionam é importante para compreender o conceito de herança prototipal.
*/

function Pessoa(nome, sobrenome){ //Essa notação é interessante, pois posso criar variáveis e métodos internos na função, como para validar um CPF, por exemplo, que será utilizado apenas dentro da função construtora
    //Atributos ou métodos privados
    const id = '#123'
    const validarCPF = ()=>{ //Esses métodos e variáveis internos (privadas), não podem ser acessados pela notação de ponto
        'Código'
    }

    //Atributos ou métodos públicos
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = ()=>{
        return `${this.nome} ${this.sobrenome}`
    }
}

const p1 = new Pessoa('Eduardo', 'Roesler') //A palavra new cria um novo objeto vazio, faz o this apontar para ele e cria atribui os valores da função construtora a ele
console.log(p1)
console.log(p1.nomeCompleto())