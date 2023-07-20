/* 
ESCOPO LET E VAR
- let tem escopo de bloco, portanto pode ser redeclarada em cada bloco
- var tem escopo de função

Em questão de escopo. O JS irá procurar do escopo maior para o global. Caso não encontre uma redeclaração dentro dos ecopos maiores, o valor da variável será a primeira encontrada
*/

const verdadeira = true
var sobrenome = 'Franco' //Primeira declaração
let nome = 'Nicole' //Primeira declaração
console.log(`Bloco 1: ${nome} ${sobrenome}`) 

if (verdadeira) {
    let nome = 'Eduardo' //Redeclaração
    var sobrenome = 'Roesler' //Redeclaração
    console.log(`Bloco 2: ${nome} ${sobrenome}`)

    if (verdadeira) {
        let nome = 'Valdenir' 
        var sobrenome = 'Silva' //Redeclaração
        console.log(`Bloco 2.1: ${nome} ${sobrenome}`)
    }
}

console.log(`Escopo Global: ${nome} ${sobrenome}`) 
//Veja que o JS puxa o let que está no bloco do escopo global, visto que seu escopo é de bloco, mas puxa var do bloco 2.1. Isso ocorre pois o escopo de var é de função. Portanto dentro da função irá puxar sua ultima declaração


/* 
HOISTING
- O hoisting em JavaScript é o comportamento que move as declarações de variáveis var e funções para o topo do escopo durante a compilação, tornando importante declarar as variáveis antes de usá-las.

- Com let e const isso não ocorre, foi corrigido. Ao tentar realizar o mesmo procedimento abaixo com let e const, será apresentado ReferenceError
 */

//O que é escrito:
console.log(nome2)
var nome2 = 'Eduardo'

//O que o JS faz:
var nome2
console.log(nome2)
nome2 = 'Eduardo'
