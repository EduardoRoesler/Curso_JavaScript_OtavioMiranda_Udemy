/*
FORMATO DO CPF
- Um CPF válido deve ter 11 dígitos numéricos, sem caracteres especiais como pontos ou traços. Qualquer CPF que não atenda a esse critério é automaticamente considerado inválido.

CÁLCULO DO DÍGITO VERIFICADOR
- O último dígito do CPF é chamado de "dígito verificador." Ele é calculado com base nos 9 primeiros dígitos do CPF. Para calcular esse dígito, segue-se o seguinte processo:
- Cada um dos 9 primeiros dígitos tem um peso associado a ele, começando com 10 e diminuindo a cada dígito subsequente (de 10 até 2).
- Multiplica-se cada dígito pelo seu peso correspondente.
- Soma-se o resultado dessas multiplicações.
- O valor obtido é dividido por 11.
- O dígito verificador é calculado a partir do resto dessa divisão. Se o resto for menor que 2, o dígito verificador é 0; caso contrário, é 11 menos o resto.

VERIFICAÇÃO DO DÍGITO VERIFICADOR
- O dígito verificador calculado no passo anterior é comparado com o último dígito do CPF original. Se eles forem iguais, o CPF é considerado válido; caso contrário, é considerado inválido.
*/

//ELEMENTOS QUE DEVEM SER UTILIZADOS NO CÓDIGO
//Expressão regular
let cpfString = '026.421.865-86' //Receberei o CPF como uma string
let cpfStringLimpo = cpfString.replace(/\D+/g, '') //Essa é uma expressão regular que represanta tudo que não for número
console.log(cpfStringLimpo)

//Array.from
console.log(Array.from(cpfString)) //método usado para criar um novo array a partir de um objeto iterável, como uma string. Isso é útil quando você deseja realizar operações em cada caractere individual da string usando métodos de array, como map, forEach, filter, etc.