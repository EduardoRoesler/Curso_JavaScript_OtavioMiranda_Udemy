//ENCADEAMENTO DE PROTOTYPES//
//Quando crio um objeto literal, é o mesmo que utilizar "new Object". Ao criar um new Object teremos seu prototype diretamente em Object.prototype
const objetoA = {
    chaveA: 'A'
    //__proto__ de objetoA será igual a: Object.prototype
}

const objetoB = {
    chaveB: 'B'
    //__proto__ de objetoB será igual a: Object.prototype
}

const objetoC = {
    chaveC: 'C'
    //__proto__ de objetoC será igual a: Object.prototype
}

Object.setPrototypeOf(objetoB, objetoA) //Aqui estou dizendo que o prototype de objetoB será o objetoA
//__proto__ de objetoB será igual a: objetoA e objetoA permanece tendo Object.prototype como seu prototype, portanto, criamos uma cadeia de prototypes

console.log(objetoB.chaveA) //Como objetoA passou a ser prototype de objetoB, tenho acesso ao objetoA a partir do objetoB

Object.setPrototypeOf(objetoC, objetoB) //Aqui estou dizendo que o prototype de objetoC será o objetoB
//__proto__ de objetoC será igual a: objetoB, o de objetoB será objetoA e objetoA permanece tendo Object.prototype como seu prototype.

console.log(objetoC.chaveA) //Acessando chaveA via objetoC
console.log(objetoC.chaveB) //Acessando chaveB via objetoC


//BUSCAR PROTOTYPE DE OBJETO//
console.log(Object.getPrototypeOf(objetoC))//Essa função é importante, pois nunca se deve utilizar '__proto__' em um código


//APLICAR PROTOTYPE DE UMA CONSTRUTORA A UM OBJETO LITERAL//
function Produto(nome, valor){
    this.nome = nome
    this.valor = valor
}

Produto.prototype.acrescimo = function(percentual){
    this.valor = this.valor + (this.valor*(percentual/100))
}

const camiseta = new Produto('Camiseta', 50)
console.log(camiseta)

camiseta.acrescimo(10)
console.log(camiseta)

//Agora digamos que quero criar um objeto literal estoque, e quero que esse objeto aproveite os métodos de Produto
const estoqueCamiseta = {
    nome: 'Camiseta',
    valor: 10000
}
console.log(estoqueCamiseta)

Object.setPrototypeOf(estoqueCamiseta, Produto.prototype)
estoqueCamiseta.acrescimo(20)
console.log(estoqueCamiseta) //Note que o construtor será mostrado como produto, pois o prototype contém também essa informação


//ESPECIFICAR PROTOTYPE NA CRIAÇÃO DO OBJETO//
const produto02 = Object.create(Produto.prototype) //Com essa função posso setar o prototype do objeto durante sua criação.
produto02.valor = 100 //Como o objeto foi criado vazio, preciso adicionar as chaves que serão usadas no método acrescimo
produto02.acrescimo(10)
console.log(produto02)


//MAIS USOS DA FUNÇÃO OBJECT.CREATE
const produto03 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable: true,
        enumerable: true, 
        value: ''
    }
})