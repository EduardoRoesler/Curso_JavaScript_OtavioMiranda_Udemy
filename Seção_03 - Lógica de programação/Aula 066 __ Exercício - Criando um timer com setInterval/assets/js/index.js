const timer = document.querySelector('.timer')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.pausar')

const initialHours = 0
const initialMins = 0
const initialSecs = 0

let hours
let mins
let secs

function zeroPad(value) {
    if (value<10)
    {return `${value}0`}
}

function zeroTimer (){
    hours = zeroPad(initialHours)
    mins = zeroPad(initialMins)
    secs = zeroPad(initialSecs)

    let zeroTimer = `${hours}:${mins}:${secs}`
    timer.innerHTML = zeroTimer

    return zeroTimer
}

zeroTimer()