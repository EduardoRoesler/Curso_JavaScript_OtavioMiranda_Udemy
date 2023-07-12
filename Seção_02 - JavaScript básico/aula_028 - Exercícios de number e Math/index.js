const num = Number(window.prompt('Digite um número:'))

const titulo = window.document.getElementById('titulo')
const paragrafo = window.document.getElementById('paragrafo')

titulo.innerHTML = num
paragrafo.innerHTML = `A raiz quadrada é: ${num*(1/2)} <br/>`
paragrafo.innerHTML += `${num} é inteiro? ${Number.isInteger(num)} <br/>` 
paragrafo.innerHTML += `É NaN? ${Number.isNaN(num)} <br/>`
paragrafo.innerHTML += `Arredondando para baixo: ${Math.floor(num)} <br/>`
paragrafo.innerHTML += `Arredondando para cima: ${Math.ceil(num)} <br/>`
paragrafo.innerHTML += `Com duas casas decimais: ${num.toFixed(2)} <br/>`