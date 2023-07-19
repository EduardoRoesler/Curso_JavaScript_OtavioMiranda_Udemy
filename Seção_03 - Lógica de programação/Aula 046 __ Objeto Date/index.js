/*
- Função date é uma função construtora, portanto, exige a palavra new
- Ao gerar new Date(), o Js constroi um novo objeto de data com os dados de data atuais


Link do mdn sobre date, contendo todas as funções:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

const data = new Date() 
console.log(data) 
console.log(data.toString()) //Exibe a data por extenso

console.log(new Date(0).toString()) //Primeiro método: utilizando milisegundos
//Essas datas são baseadas nos milisegundos desde 01/01/1970 (Timestamp Unix), para ter este valor, utilizo 0 entre os parenteses, para um anterior, utilizo valor negativo, para um posterior, valor positivo. E para o valor atual, não utilizo nada

console.log(new Date(2019, 3, 20, 15, 14, 27, 500).toString()) //Segundo método: separação em vírgulas
//ano - mês (iniciando em 0) - dia - hora - minuto - segundo - milesimos de segundo
//É obrigatório utilizar, pelo menos, ano e mês. Se colocar só o ano, ele vai considerar como milésimos de segundo

console.log(new Date('2019-04-20 20:20:59.100').toString()) //Terceiro método: utilizando string
//Aqui os meses iniciam em 1, pois é o padrão ISO

console.log('Dia', data.getDate()) //getDate obtém o número do dia
console.log('Mês', data.getMonth()) //Inicia em 0
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Minuto', data.getMinutes())
console.log('Segundo', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('Dia da semana', data.getDay()) //Domingo = 0

console.log('Data atual em milesimos de segundo', Date.now())
const dataAtualEmMS = new Date(1689646945039) //Milesimos de segundo da linha acima
console.log(dataAtualEmMS.toString())

//Exemplo prático: função para formatar datas
function formataData(data){
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth() + 1) //Adiciona 1, pois o js retorna os meses de 0 - 11
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const seg = zeroAEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

const dataFormatada = formataData(data)
console.log(dataFormatada)