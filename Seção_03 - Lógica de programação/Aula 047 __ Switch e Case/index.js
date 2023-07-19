/*
Switch é uma alternativa ao if quando temos que checar diversos casos de uma mesma variável.

Abaixo temos a mesma operação sendo realizada com if e com switch
*/

const data = new Date()
const diaSemNum = data.getDay()
let diaSemText

//IF
/* if (diaSemNum === 0) {
    diaSemText = 'Domingo'
} else if (diaSemNum === 1) {
    diaSemText = 'Segunda-feira'
} else if (diaSemNum === 2) {
    diaSemText = 'Terça-feira'
} else if (diaSemNum === 3) {
    diaSemText = 'Quarta-feira'
} else if (diaSemNum === 4) {
    diaSemText = 'Quinta-feira'
} else if (diaSemNum === 5) {
    diaSemText = 'Sexta-feira'
} else if (diaSemNum === 6) {
    diaSemText = 'Sábado'
} else {
    diaSemText = 'Entrada inválida'
}

console.log(diaSemNum, diaSemText)
*/


//SWITCH
/* switch (diaSemNum) { //Variavel que quero checar
    case 0: //Após case, insere-se o valor. Aqui estou dizendo que: se o valor da variável checada for 0, ele executa o bloco
        diaSemText = 'Domingo'
        break; //Break deve ser inserido a cada final de bloco
    
    case 1:
        diaSemText = 'Segunda-feira'
        break

    case 2:
        diaSemText = 'Terça-feira'
        break

    case 3:
        diaSemText = 'Quarta-feira'
        break

    case 4: 
        diaSemText = 'Quinta-feira'
        break

    case 5:
        diaSemText = 'Sexta-feira'
        break

    case 6:
        diaSemText = 'Sábado'
        break

    default: // Valor padrão
        diaSemText = 'Entrada inválida'
        break; //Esse break não é necessário
}

console.log(diaSemNum, diaSemText)  */


//SWITCH EM FUNCTIONS
function getDiaSemText() {
    let diaSemText2
    
    switch (diaSemNum) { 

        case 0: 
            diaSemText2 = 'Domingo'
            return diaSemText2 //Tendo o switch dentro de uma function, posso eliminar o break e adicionar o return, visto que o JS para a função sempre que encontrar um return

        case 1:
            diaSemText2 = 'Segunda-feira'
            return diaSemText2
    
        case 2:
            diaSemText2 = 'Terça-feira'
            return diaSemText2
    
        case 3:
            diaSemText2 = 'Quarta-feira'
            return diaSemText2
    
        case 4: 
            diaSemText2 = 'Quinta-feira'
            return diaSemText2
    
        case 5:
            diaSemText2 = 'Sexta-feira'
            return diaSemText2
    
        case 6:
            diaSemText2 = 'Sábado'
            return diaSemText2
    
        default: // Valor padrão
            diaSemText = 'Entrada inválida'
            break; //Esse break não é necessário
    }
    
}

console.log(diaSemNum, getDiaSemText(diaSemNum))