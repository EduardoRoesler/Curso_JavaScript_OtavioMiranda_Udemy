function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        get: function(){
            return cpfEnviado.replace(/\D+/g, '')
        }
    })
}

ValidaCPF.prototype.valida = function(){
    if (typeof this.cpfLimpo === 'undefined') return false
    if (this.cpfLimpo.length !== 11) return false
    if (this.isSequencia()) return false
    
    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito01 = this.criaDigito(cpfParcial)
    const digito02 = this.criaDigito([...cpfParcial, digito01])


    const novoCPF = cpfParcial + digito01 + digito02

    return this.cpfLimpo === novoCPF
}

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial)

    let regressivo = cpfArray.length + 1

    const total = cpfArray.reduce((acumulador, valor)=>{
        acumulador += (Number(valor) * regressivo--)
        return acumulador
    }, 0)

    const digito = 11 - (total % 11)
    
    return digito> 9 ? 0 : digito
}

ValidaCPF.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
}

const cpf = new ValidaCPF('036.432.240-36')
//const cpf = new ValidaCPF('111.111.111-11')
console.log(cpf.valida())