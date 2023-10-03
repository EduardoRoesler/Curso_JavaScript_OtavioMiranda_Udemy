/*
Abaixo temos a maneira de utilizar prototype com funções factory, desacoplando os métodos dos objetos
Porém, por questões de herança, o método abaixo ainda não pode ser considerado 100% desacoplado
*/

function criaPessoa(nome, sobrenome){
    const pessoPrototype = {
        falar(){
            console.log(`${this.nome} está falando`)
        },

        beber(){
            console.log(`${this.nome} está bebendo`)
        }
    }

    return Object.create(pessoPrototype, {
        nome: {
            value: nome,
            enumerable: true
        },
        sobrenome: {
            value: sobrenome,
            enumerable: true
        }
    })
}

const eduardo = criaPessoa('Eduardo', 'Roesler')
console.log(eduardo)
eduardo.beber()


/*
O método abaixo é 100% desacoplado
*/

const falar2 = {
    falar2(){
        console.log(`${this.nome} está falando`)
    }
}

const beber2 = {
    beber2(){
        console.log(`${this.nome} está bebendo`)
    }
}

const pessoaPrototype2 = {...falar2, ...beber2} //Aqui posso utilizar object.assign também 

function criaPessoa2(nome, sobrenome){

    return Object.create(pessoaPrototype2, {
        nome: {
            value: nome,
            enumerable: true
        },
        sobrenome: {
            value: sobrenome,
            enumerable: true
        }
    })
}

const eduardo2 = criaPessoa('Eduardo2', 'Roesler2')
console.log(eduardo2)
eduardo2.falar()

/*
Quando compomos um objetos com vários outros objetos, chamamos, na programação, de composição

Neste caso, como estamos colocando métodos aleatórios, sem herança entre eles, em uma composição, chamamos de mixing
*/