//Objeto literal
const pessoa1 = {
    nome: 'Eduardo',
    sobrenome: 'Roesler',
    idade: 25
}
console.log(pessoa1)
console.log(pessoa1.nome) //Posso buscar dentro do objeto por meio dos seus identificadores internos


//Criação de Objeto por meio de função
function criaPessoa (nome,sobrenome,idade){ //Essa função é chamada de factory, visto que cria objetos
    return { //Importante: O retorno é um objeto, repare nas chaves
        nome,
        sobrenome,
        idade

        //A forma acima é uma simplificação da forma abaixo
        //nome: nome,
        //sobrenome: sobrenome,
        //idade:idade
    }
}

const pessoa2 = criaPessoa( 'Nicole', 'Franco', 35 )
console.log(pessoa2)


//Métodos
const pessoa3 = {
    nome: 'Eliane',
    sobrenome: 'Roesler',
    idade: 76,

    fala(){ //Não preciso da palavra function aqui
        console.log(`Meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`)
    }, //O this será aprofundado mais a frente no curso, mas ele referencia o próprio objeto

    incrementalIdade(){ //incrementa o idade a cada chamada
        this.idade += 10
    }
}
pessoa3.fala()

pessoa3.incrementalIdade()

pessoa3.fala()