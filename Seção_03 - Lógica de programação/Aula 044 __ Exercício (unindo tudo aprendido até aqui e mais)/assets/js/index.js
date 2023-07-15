const button = document.querySelector('button')
const resp = document.querySelector('#resp')

//TODO: VERIFICAR COMO ALTERAR O FUNDO DA RESP COM O JS PADRÃO

function calcular(event){
    event.preventDefault()

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

    if (res==='Peso inválido' || res==='Altura inválida' ){
        resp.toggleAttribute('class', 'fail')
    }

    resp.innerHTML = res

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

button.addEventListener('click', calcular)