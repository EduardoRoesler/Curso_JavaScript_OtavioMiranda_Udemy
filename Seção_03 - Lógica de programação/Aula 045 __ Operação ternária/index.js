/*
São operadores ternários:
- :
- ?

Pode ser usado para encurtar códigos de consição if/else

Segue a seguinte sintaxe:

condição ? valor para verdadeiro : valor para falso
*/

const usuario = 999
if (usuario >= 1000) {
    console.log('Usuário VIP')
} else {
    console.log('Usuário normal')
}

const usuario2 = 1001
usuario2 >= 1000 ? console.log('Usuário VIP') : console.log('Usuário normal')