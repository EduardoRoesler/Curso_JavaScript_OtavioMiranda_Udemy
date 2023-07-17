const form = document.querySelector('#form')

function calcular(){

    const peso = Number(document.querySelector('#peso').value)
    const altura = Number(document.querySelector('#altura').value)
    const imc=(peso/(altura**2))

    let res

    if (peso>600 || peso<2 || typeof peso !== 'number' ){
        res='Peso inválido'
    } else if( altura<0.5 || altura>2.5 ){
        res='Altura inválida'
    } else {
        let decRes = declaracao(imc)
        res = (`Seu IMC é ${imc.toFixed(1)} (${decRes})`)
    }
    
    resultado(res)
}


function resultado(res){
    const resp = document.querySelector('#resp')
    resp.innerHTML='' //Limpa resp
    
    if (res==='Peso inválido' || res==='Altura inválida' ){
        resp.classList.remove('sucess')
        resp.classList.add('fail')
    } else {
        resp.classList.remove('fail')
        resp.classList.add('sucess')
    }

    const paragrafo = document.createElement('p') //Cria paragrafo
    paragrafo.innerHTML = res //Insere res em paragrafo
    resp.appendChild(paragrafo) //Insere p em resp
}


function declaracao(imc){
    let dec

    if (imc<=18.5){
        dec = 'Abaixo do peso'
    } else if (imc>18.5 && imc<=24.9){
        dec = 'Peso normal'
    } else if (imc>=25 && imc<=29.9){
        dec = 'Sobrepeso'
    } else if (imc>=30 && imc<=34.9){
        dec = 'Obesidade I'
    } else if (imc>=35 && imc<=39.9){
        dec = 'Obesidade II'
    } else {
        dec = 'Obesidade III'
    }

    return dec
}

form.addEventListener('submit', function (e){ //posso adicionar uma função anônima aqui, e desenvolvo no próprio bloco
    e.preventDefault()
    console.log('evento prevenido')
    calcular()
})