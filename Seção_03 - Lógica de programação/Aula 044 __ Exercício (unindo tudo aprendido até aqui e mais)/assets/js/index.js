const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const button = document.querySelector('button')
const resp = document.querySelector('.resp')

function calcular(event){
    event.preventDefault()
    console.log('clicked')
}

button.addEventListener('click', calcular)