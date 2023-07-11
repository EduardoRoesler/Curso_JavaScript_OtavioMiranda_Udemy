//Notação com barra invertida (escape notation)
console.log("Hello World!")
console.log("Hello \"World!\"") //Posso usar barra invertida para "escapar" um caractere e usar aspas dentro da strig sem precisar intercalar aspas

console.log("Hello \World!") 
console.log("Hello \\World!") //Caso deseje uma barra invertida no texto, preciso usar duas, pois uma será escapada

const texto = 'Um texto'
console.log(texto[0]) //No JS as strings são indexadas, portanto cada caractere tem seu indice, iniciando em 0. Posso buscar o indice atravez dos colchetes. Os espaços são indexados também e caso eu aponte para um indice inexistente, retornará undefined

//Interface disponibilizada pelo JS para trabalhar com strings
//Ao colocar um ponto após uma variavel string, posso ver a lista de funções
console.log(texto.indexOf('texto')) //Este exemplo retorna o indice inicial da palavra ou letra solicitada
