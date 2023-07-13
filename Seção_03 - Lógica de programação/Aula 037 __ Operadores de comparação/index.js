/*
OPERADORES DE COMPARAÇÃO:
>       Maior que
>=      Maior ou igual a
<       Menor que
<=      Menor ou igual a
==      Igualdade - Não é recomendado seu uso - Checa valor - Não confundir com atribuição (=)
===     Igualdade estrita - Checa valor e tipo
!=      Diferença - Não é recomendado seu uso - Checa valor
!==     Diferença estrita - Checa valor e tipo
*/

//Operadores de comparação retornam valores booleanos
const num1 = 10
const num2 = 10
const stg1 = '10'
let comp = num1 < num2
console.log(comp)

//Porque não usar igualdade simples e diferença simples?
console.log(num1 == stg1) //O JS costuma deduzir coisas, e por vezes isso leva a erros. Nesse caso, a falta da comaparação de tipos da igualdade simples resulta em erro
console.log(num1 === stg1)