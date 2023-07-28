/*
Usado quando não se sabe quantas vezes o laço precisará ser executado

- While: Executa o loop enquanto a condição for verdadeira. Primeiro checa e depois executa

- Do While: Executa o loop primeiro e depois verifica a condição. Primeiro executa e depois checa
*/

//EXEMPLO 01
let i = 0 //Variável é iniciada fora do while

while (i<=10) {
    console.log(i)
    i++ //Como dentro dos parênteses temos apenas a variável, preciso lembrar de incrementar dentro do laço, caso contrário, teremos um laço infinito, pois a variável permanecerá em 0
}

//EXEMPLO 02
let index = 0 //Variável é iniciada fora do while
const nome = 'Eduardo'

while (index < nome.length) {
    console.log(nome[index])
    index++
}

//Os exemplos acima não são usos adequados de while. mas sim de for. Agora vamos para um exemplo de uso real de while
//EXEMPLO 03
function random (max, min){ //Retorna numero aleatório
    const r = Math.random()*(max - min) + min
    return Math.floor(r)
}

const max = 50
const min = 1

let rand = random (max, min)
console.log(rand)

while (rand !== 10){ //Repete o código até que rand seja 10
    rand = random (max, min)
    console.log(`WHILE -- Condição: ${rand !==10} || Sorteio: ${rand}`)
}

//Abaixo teremos um exemplo de do while. Observe que o laço será executado mesmo com a condição falsa
//EXEMPLO 04
rand = 10
console.log(rand) //rand = 10, portanto, condição verdadeira. While não executaria o laço

do {
    rand = random (max, min)
    console.log(`DO WHILE -- Condição: ${rand !==10} || Sorteio: ${rand}`)
} while (rand !==10)//A condição é verificada no final, então independente dela, o laço sempre será executado pelo menos uma vez