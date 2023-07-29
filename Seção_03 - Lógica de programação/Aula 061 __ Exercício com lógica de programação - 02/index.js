/*
Escreva uma função chamada ePaisagem que recebe dois argumentos: largura e altura de uma imágem.
Retorne true se a imágem estiver no modo paisagem
*/

//MINHA SOLUÇÃO
function ePaisagem(larg, alt){ 
    return larg > alt ? true : false
}

console.log(ePaisagem(1080, 1920))


//SOLUÇÃO DO PROFESSOR
const ePaisagem2 = (largura, altura) => largura > altura //retorna o teste lógico

console.log(ePaisagem2(1920, 1080))