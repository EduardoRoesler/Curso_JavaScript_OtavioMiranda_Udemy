/*
Escreva uma função que recebe um número e retorne:
- Número divisível por 3 = Fizz
- Número divisível por 5 = Buzz
- Número divisível por 3 e 5 = FizzBuzz
- Número não divisível por 3 e 5 = Retorna o próprio número
- Checar se o número é realmente um número = Retorna o que for recebido
- Use a função com números de 0 a 100
*/

//MINHA SOLUÇÃO
function fizzBuzz (num){
    if (typeof num !== 'number'){return num}

    if ((num % 3 === 0) && (num % 5 === 0)){return 'FizzBuzz'} 
    
    else if (num % 3 === 0){return 'Fizz'} 
    
    else if (num % 5 === 0){return 'Buzz'} 
    
    else {return num}
}


for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}



//SOLUÇÃO DO PROFESSOR
function fizzBuzz2 (numero){
    if (typeof numero !== 'number') return numero //Como tenho return, não preciso do else/if, visto que o return já irá brekar o código

    if ((numero % 3 === 0) && (numero % 5 === 0)) return 'FizzBuzz'
    
    if (numero % 3 === 0) return 'Fizz'
    
    if (numero % 5 === 0) return 'Buzz'
    
    return numero
    
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz2(i))
}