//Primeira solução (trabalhosa)
/* function getActualDate(){
    const resp = document.querySelector('.resp')
    const date = new Date()

    resp.innerHTML = getFormatedDate(date)
}

function getFormatedDate (date){
    const dayNum = date.getDay()
    const dayMonth = date.getDate()
    const monthNum = date.getMonth()
    const year = date.getFullYear()
    const hour = date.getHours()
    const min = date.getMinutes()
    
    const dayText = getDayText(dayNum)
    const monthText = getMonthText(monthNum)

    return (
        `${dayText}, ${dayMonth} de ${monthText} de ${year} 
        <br/>
        <br/> 
        ${hour}:${min}`
    )
}

function getDayText(day){
    let getDayText

    switch (day) {
        case 0:
            getDayText = 'Domingo'
            return getDayText
        case 1:
            getDayText = 'Segunda-Feira'
            return getDayText
        case 2:
            getDayText = 'Terça-Feira'
            return getDayText
        case 3:
            getDayText = 'Quarta-Feira'
            return getDayText
        case 4:
            getDayText = 'Quinta-Feira'
            return getDayText
        case 5:
            getDayText = 'Sexta-Feira'
            return getDayText
        case 6:
            getDayText = 'Sábado'
            return getDayText
    }
}

function getMonthText(month){
    let getMonthText

    switch (month) {
        case 0:
            getMonthText = 'Janeiro'
            return getMonthText
        case 1:
            getMonthText = 'Fevereiro'
            return getMonthText
        case 2:
            getMonthText = 'Março'
            return getMonthText
        case 3:
            getMonthText = 'Abril'
            return getMonthText
        case 4:
            getMonthText = 'Maio'
            return getMonthText
        case 5:
            getMonthText = 'Junho'
            return getMonthText
        case 6:
            getMonthText = 'Julho'
            return getMonthText
        case 7:
            getMonthText = 'Agosto'
            return getMonthText
        case 8:
            getMonthText = 'Setembro'
            return getMonthText
        case 9:
            getMonthText = 'Outubro'
            return getMonthText
        case 10:
            getMonthText = 'Novembro'
            return getMonthText
        case 11:
            getMonthText = 'Dezembro'
            return getMonthText
    }
}

getActualDate() 
*/

//Segunda solução
const resp = document.querySelector('.resp')
const date = new Date()
const options = {
    dateStyle:'full', //Formato da data
    timeStyle:'short' //Formato da hora
}

resp.innerHTML = date.toLocaleDateString('pt-BR', options)