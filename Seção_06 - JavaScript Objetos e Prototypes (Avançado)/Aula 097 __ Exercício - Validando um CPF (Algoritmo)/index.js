function validarCPF(cpfString){
    cpfLimpo = cpfString.replace(/\D+/g, '')
    console.log(cpfLimpo)

    cpfArray = Array.from(cpfLimpo)
    console.log(cpfArray)


}

validarCPF('036.432.240-36')