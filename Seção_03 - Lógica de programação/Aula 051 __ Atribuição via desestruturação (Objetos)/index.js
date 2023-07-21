const pessoa = {
    nome: 'Eduardo',
    sobrenome: 'Roesler',
    idade: 25,
    endereco: {
        rua: 'Rua X',
        numero: 123,
        bairro: 'Bairro Y'
    }
}

const {nome, idade} = pessoa //O js irá extrair o valor de acordo com o nome de cada variável do array (chave)
console.log(nome, idade)

//Valor padrão
const { cpf = 'inexistente', } = pessoa //É possível colocar um valor padrão, caso a chave não exista no array.
console.log(cpf)

//Alteração de nome de variável
const { sobrenome: segundoNome } = pessoa 
console.log(segundoNome)

//Atribuição no objeto do objeto
const {endereco : {rua}} = pessoa //Extrai rua de dentro do objeto interno
console.log(rua)

const {endereco: {numero}, endereco} = pessoa //Extrai numero como uma variável e o objeto completo como outra
console.log(numero, endereco)

//rest operator
const pessoa2 = {
    nome2: 'Nicole',
    sobrenome2: 'Franco',
    idade2: 34,
    endereco2: {
        rua2: 'Rua Z',
        numero2: 123456,
        bairro2: 'Bairro A'
    }
}

const {nome2, sobrenome2, ...resto} = pessoa2
console.log(resto)