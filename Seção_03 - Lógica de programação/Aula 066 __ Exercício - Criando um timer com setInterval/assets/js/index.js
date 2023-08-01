//TIMER CONTAINER
const timer = document.querySelector('.timer')


//BOTÕES
const iniciarBtn = document.querySelector('.iniciar')
const pausarBtn = document.querySelector('.pausar')


//VARIÁVEIS INICIAIS
let hour = 0
let min = 0
let sec = 0
let intervalId


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
        iniciarBtn.classList.add('invalid')
    
        timer.classList.remove('pause')
        pausarBtn.classList.remove('invalid')
    } 
    
    //PAUSAR TIMER
    if (element.classList.contains('pausar')){
        clearInterval(intervalId)

        iniciarBtn.disabled = false
        iniciarBtn.classList.remove('invalid')
    
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
    timer.innerHTML = ` ${zeroPad(hour)}:${zeroPad(min)}:${zeroPad(sec)} `
}