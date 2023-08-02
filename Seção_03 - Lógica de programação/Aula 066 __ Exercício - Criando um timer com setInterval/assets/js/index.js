//TIMER CONTAINER
const timer = document.querySelector('.timer')
const lapsContainer = document.querySelector('.lapsContainer')


//BOTÕES
const iniciarBtn = document.querySelector('.iniciar')
const pausarBtn = document.querySelector('.pausar')
const voltaBtn = document.querySelector('.volta')


//VARIÁVEIS INICIAIS
let min = 0
let sec = 0
let cent = 0
let mil = 0
let intervalId
let lapId = 0
let timerValue


//ZERO PAD
function zeroPad (value){
    return value < 10 ? `0${value}` : value
}


//TIMER ENGINE
function timerEngine(){
    mil++
    
    if (mil===10){ mil = 0; cent++ }
    if (cent===10){ cent = 0; sec++ }
    if (sec===60){ sec = 0; min++ }

    uiUpdate(min, sec, cent, mil)
}


//EVENTOS
document.addEventListener('click', function(e){ //Maneira apresentada pelo professor para gerir eventos
    const element = e.target //Captura o local do evento de click

    //INICIAR TIMER
    if (element.classList.contains('iniciar')){ //Caso o element contenha a classe iniciar...
        intervalId = setInterval( timerEngine, 10 )

        iniciarBtn.classList.add('hidden')
        voltaBtn.classList.remove('hidden')
    
        timer.classList.remove('pause')
        pausarBtn.classList.remove('invalid')
    } 

    //LAPS UPDATE
    if (element.classList.contains('volta')){
        lapId++
        
        const lapRow = document.createElement('p')
        const lapInfoId = document.createElement('span')
        const lapInfoTime = document.createElement('span')

        lapInfoId.innerHTML = `Volta: ${zeroPad(lapId)}`
        lapInfoTime.innerHTML = `Tempo: ${timerValue}`

        lapRow.appendChild(lapInfoId)
        lapRow.appendChild(lapInfoTime)

        lapRow.classList.add('lapRow')

        lapsContainer.prepend(lapRow)

    }
    
    //PAUSAR TIMER
    if (element.classList.contains('pausar')){
        clearInterval(intervalId)

        iniciarBtn.disabled = false

        iniciarBtn.classList.remove('hidden')
        voltaBtn.classList.add('hidden')
    
        timer.classList.add('pause')
        pausarBtn.classList.add('invalid')
    } 
    
    //ZERAR TIMER
    if (element.classList.contains('zerar')){
        clearInterval(intervalId)

        min = 0
        sec = 0
        cent = 0
        mil = 0
        lapId = 0

        iniciarBtn.classList.remove('hidden')
        voltaBtn.classList.add('hidden')
        pausarBtn.classList.add('invalid')

        lapsContainer.innerHTML = ''

        uiUpdate(min, sec, cent, mil)
    
        timer.classList.remove('pause')
    }
})


//UPDATE DA UI
function uiUpdate(min, sec, cent, mil){
    timerValue = `${zeroPad(min)}:${zeroPad(sec)}:${cent}${mil}`
    timer.innerHTML = timerValue
}
