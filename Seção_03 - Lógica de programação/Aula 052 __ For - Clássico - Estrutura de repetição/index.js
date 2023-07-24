/*
Nesta aula percorreremos a estrutura clássica de for, porém existem outras variantes 

for (){
}

Dentro do parênteses do for, preciso:
- Criar uma variável e inicializá-la;
- Criar uma condição;
- Incrementar ou decrementar a variável

O JS irá repetir o laço até que a variável seja julgada como falsa

A separação dentro dos parênteses deve ocorrer com ponto e vírgula
*/

//Exemplo simples (contágem)
for (let i = 0; i <= 5; i++){
    console.log(i)
}

//Percorrer array
const frutas = ['Maçã', 'Banana', 'Abacaxi']
for (let index = 0; index < frutas.length; index++){
    console.log(`Índice ${index}: ${frutas[index]}`)
}