//Exemplo prático
const hora = 11

function saudacao(){
    if (hora<6){
        console.log('Bom dia!')
    } else if (hora<=11 && hora<18){
        console.log('Boa tarde!')
    } else { 
        console.log('Boa noie!')
    }
}

saudacao()


//Exemplo prático
const tenhoDinheiro = true

if (tenhoDinheiro) { //Utiliza apenas a variável como condição
    console.log('Vou sair!')
} else {
    console.log('Não vou sair.')
}