function validarCPF(cpfString){

    const cpfArray = limparCPF(cpfString)
    
    const base = cpfArray.slice(0,9)
    
    let primeiroVerificador = digitoVerificador(base)
    base.push(primeiroVerificador)

    let segundoVerificador = digitoVerificador(base)
    base.push(segundoVerificador)

    const isValid = JSON.stringify(base) === JSON.stringify(cpfArray)

    isValid ? console.log('CPF VÁLIDO') : console.log('CPF INVÁLIDO')
}

function limparCPF(cpf){
    cpfLimpo = cpf.replace(/\D+/g, '')
    cpfArray = Array.from(cpfLimpo)
    return cpfArray
}


function digitoVerificador(cpf){

    let operador = cpf.length + 1

    let cpfOperacao = cpf
    .map(valor => {
        valor = valor * operador
        operador--
        return valor
    })
    .reduce((acumulador, valor)=>{
        acumulador = valor + acumulador
        resto = acumulador%11
        return resto
    })

    console.log(resto)

    let verificador
    if(cpfOperacao<2){
        verificador = 0
    } else {
        verificador = 11 - cpfOperacao
    }

    console.log(verificador)
    return String(verificador)
}

validarCPF('036.432.240-36')
