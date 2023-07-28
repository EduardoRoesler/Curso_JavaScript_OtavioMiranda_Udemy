/* 
- Funcionam dentro de todos os laços de repetição

BREAK
- Para o laço

CONTINUE
- Pula um laço e continua com a próxima iteração
*/

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let numero of num){

    if (numero===2 || numero===5){
        console.log('Número pulado')
        continue //Caso o número seja 2 ou 5, ele pula o laço
    }

    if (numero === 9){
        console.log('Laço interrompido')
        break //Caso o número seja 9, ele para o laço
    }
    console.log(numero)
}