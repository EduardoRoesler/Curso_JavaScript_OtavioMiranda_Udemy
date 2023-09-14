function validarCPF (cpf) {
    let cpfFormatado = formatarCPF(cpf)
    const base = cpfFormatado.slice(0,9)
    const verificador01 = calcularVerificador(base)
    const verificador02 = calcularVerificador([...base, verificador01])
    const cpfCalculado = [...base, verificador01, verificador02]
    const isValid = JSON.stringify(cpfFormatado) === JSON.stringify(cpfCalculado)
    
    isValid ? console.log('CPF Válido') : console.log('CPF Inválido')
}

function formatarCPF(cpf){
    const cpfLimpo = cpf.replace(/\D+/g, '')
    return Array.from(cpfLimpo)

}

function calcularVerificador(cpf){
    let operador = cpf.length + 1

    const cpfOperacao = cpf
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

    const verificador = cpfOperacao < 2 ? 0 : 11 - cpfOperacao

    return String(verificador)
}

validarCPF('036.432.240-36')
