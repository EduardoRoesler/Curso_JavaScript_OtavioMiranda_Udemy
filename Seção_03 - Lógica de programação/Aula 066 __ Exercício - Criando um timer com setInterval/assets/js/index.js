//TIMER CONTAINER
const timer = document.querySelector('.timer')
const lapsContainer = document.querySelector('.lapsContainer')


//BOTÕES
const iniciarBtn = document.querySelector('.iniciar')
const pausarBtn = document.querySelector('.pausar')
const voltaBtn = document.querySelector('.volta')


//VARIÁVEIS INICIAIS
let hour = 0
let min = 0
let sec = 0

let intervalId

let volta = 0
let laps = {}
let timerValue


//ZERO PAD
function zeroPad (value){
    return value < 10 ? `0${value}` : value
}


//TIMER ENGINE
function timerEngine(){
    sec++
     
    if (sec>=60){ sec = 0; min++ }
    if (min>=60){ min = 0; hour++ }

    uiUpdate(hour, min, sec)
}


//EVENTOS
document.addEventListener('click', function(e){ //Maneira apresentada pelo professor para gerir eventos
    const element = e.target //Captura o local do evento de click

    //INICIAR TIMER
    if (element.classList.contains('iniciar')){ //Caso o element contenha a classe iniciar...
        intervalId = setInterval( timerEngine, 1000 )

        iniciarBtn.disabled = true
        iniciarBtn.classList.add('hidden')
        voltaBtn.classList.remove('hidden')
    
        timer.classList.remove('pause')
        pausarBtn.classList.remove('invalid')
    } 

    //LAPS UPDATE
    if (element.classList.contains('volta')){
        volta++
        let lap = [volta, timerValue]

        lap.push(laps)
        console.log(laps)
    
        lapsContainer.innerHTML += laps
    }
    
    //PAUSAR TIMER
    if (element.classList.contains('pausar')){
        clearInterval(intervalId)

        iniciarBtn.disabled = false
        iniciarBtn.classList.remove('invalid')

        iniciarBtn.classList.remove('hidden')
        voltaBtn.classList.add('hidden')
    
        timer.classList.add('pause')
        pausarBtn.classList.add('invalid')
    } 
    
    //ZERAR TIMER
    if (element.classList.contains('zerar')){
        hour, min, sec = [0]

        uiUpdate(hour, min, sec)
    
        pausarBtn.classList.remove('invalid')
        timer.classList.remove('pause')
    }
})


//UPDATE DA UI
function uiUpdate(hour, min, sec){
    timerValue = ` ${zeroPad(hour)}:${zeroPad(min)}:${zeroPad(sec)} `
    timer.innerHTML = timerValue
    
}
