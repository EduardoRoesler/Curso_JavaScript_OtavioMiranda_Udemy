//PRIMEIRA SOLUÇÃO
function getActualDate1(){
    const resp = document.querySelector('.resp1')
    const date = new Date()

    resp.innerHTML = getFormatedDate1(date)
}

function getFormatedDate1 (date){
    const dayNum = date.getDay()
    const dayMonth = date.getDate()
    const monthNum = date.getMonth()
    const year = date.getFullYear()
    const hour = date.getHours()
    const min = date.getMinutes()
    
    const dayText = getDayText1(dayNum)
    const monthText = getMonthText1(monthNum)

    return (
        `${dayText}, ${dayMonth} de ${monthText} de ${year} 
        <br/>
        <br/> 
        ${hour}:${min}`
    )
}

function getDayText1(day){
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

function getMonthText1(month){
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

getActualDate1()  

//SEGUNDA SOLUÇÃO
function getActualDate2(){
    const resp = document.querySelector('.resp2')
    const date = new Date()
    const dateOptions = {
        dateStyle: 'full', //Formato da data
    }

    const timeOptions = {
        timeStyle: 'short', //Formato da hora
    }

    resp.innerHTML = `${date.toLocaleDateString('pt-BR', dateOptions)} 
        <br/>
        <br/>
        ${date.toLocaleTimeString('pt-BR', timeOptions)}`
    
    /* 
    - Posso retirar essas constantes e colocar o seu conteúdo diretamente no segundo argumento. Da seguinte forma:
    resp.innerHTML = date.toLocaleDateString('pt-BR', {dateStyle:'full'})  
    */
}

getActualDate2()

//TERCEIRA SOLUÇÃO
function getActualDate3(){
    const resp = document.querySelector('.resp3')
    const date = new Date()

    resp.innerHTML = getFormatedDate3(date)
}

function getFormatedDate3(date){
    const dayNum = date.getDay()
    const dayMonth = date.getDate()
    const monthNum = date.getMonth()
    const year = date.getFullYear()
    const hour = date.getHours()
    const min = date.getMinutes()
    
    const dayText = getDayText3(dayNum)
    const monthText = getMonthText3(monthNum)

    return (
        `${dayText}, ${dayMonth} de ${monthText} de ${year} 
        <br/>
        <br/> 
        ${hour}:${min}`
    )
}

function getMonthText3(month){
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return months[month]
}

function getDayText3(day){
    const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    return daysOfWeek[day]
}

getActualDate3()