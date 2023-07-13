/* 
- Em JavaScript, a "short circuit evaluation" é uma técnica de avaliação de expressões lógicas que permite interromper a avaliação assim que o resultado final for determinado. Isso significa que, em certas situações, o JavaScript não avaliará todas as partes de uma expressão lógica se o resultado já puder ser determinado.

- Os operadores que podem ser usados para tais avaliações são: && e ||

- Com o operador "&&" (AND), a expressão será avaliada da esquerda para a direita. Se qualquer um dos operandos for avaliado como falso (ou seja, uma expressão com resultado falso), a avaliação é interrompida e o valor falso é retornado. Se todos os operandos forem avaliados como verdadeiros, o valor do último operando é retornado. Isso ocorre porque se um dos operandos for falso, a expressão lógica inteira será falsa, independentemente do valor dos operandos restantes.

- Com o operador "||" (OR), a expressão também é avaliada da esquerda para a direita. Se qualquer um dos operandos for avaliado como verdadeiro (ou seja, uma expressão com resultado verdadeiro), a avaliação é interrompida e o valor verdadeiro é retornado. Se todos os operandos forem avaliados como falsos, o valor do último operando é retornado. Isso ocorre porque se um dos operandos for verdadeiro, a expressão lógica inteira será verdadeira, independentemente do valor dos operandos restantes.

- Quando é dito que é retornado o valor, é de fato o valor da variavel que é retornado
*/


console.log('Eduardo' && 0 && 'Nicole') //Retorna 0, pois é o resultado false.
console.log('Eduardo' && 'Nicole' && 'Valdenir') //Retorna valdenir, pois avaliou todos os resultados, todos foram true e retornou o ultimo

console.log(0 || false || null) //Retorna null pois o resultado é false, então avalia até o fim
console.log(0 || false || 'Eduardo' || null) //Retorna 'Eduardo' pois o resultado é true



/*
FALSY VALUES
- Em JavaScript, "falsy values" são valores que são considerados falsos quando avaliados em um contexto booleano. Isso significa que, quando usados em uma expressão lógica, esses valores são tratados como falsos. Os falsy values em JavaScript são:

- false: O valor booleano false. Falso literal.
- null: Um valor nulo, que representa a ausência intencional de qualquer objeto ou valor.
- undefined: Um valor indefinido, atribuído a variáveis que foram declaradas, mas não inicializadas.
- 0: O número zero.
- NaN: Representa um valor inválido do tipo número, ou seja, "Not-a-Number".
- '' (string vazia): Uma string vazia.
*/


//Uso prático
function falaOi(){
    return console.log('Oi')
}

let vaiExecutar = true
vaiExecutar && falaOi()

vaiExecutar = false
vaiExecutar && falaOi()

vaiExecutar = 0
vaiExecutar && falaOi()

vaiExecutar = ''
vaiExecutar && falaOi()

//Exemplo prático
//Imagine um sistema onde o usuário deve selecionar uma cor, mas caso não selecione, a cor padrão deve ser estipulada
const corUsuario = null
const corUtilizada = corUsuario || 'preto' //retornará preto