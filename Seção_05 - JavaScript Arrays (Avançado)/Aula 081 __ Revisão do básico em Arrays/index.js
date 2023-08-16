//Existem duas maneiras de se criar um array
//Array literal
const literal = ['Eduardo', 'Roesler']
console.log(literal)
//Array criado por constructor
const construtor = Array('Eduardo', 'Roesler')
console.log(construtor)
//A criação por construtor funciona com todos os tipos de dados, porém é menos utilizada pois é menos intuitiva

//Copiar arrays
const array01 = [4, 5, 6]
const array02 = array01 //Arrays utilizam valores por referência, portanto, ao fazer isso, estou apontando ambos os arrays para o mesmo local da memória
console.log(array01, array02) 
array02.pop() //Como estou modificando o local da memória, ao alterar um, altero o outro
console.log(array01, array02)
//Para resolver isso, utilizo o spread operator
const array03 = [1, 2, 3, 4]
const array04 = [...array03] //Agora tenho dois arrays separados, com os mesmos valores
console.log(array03, array04)
array04.pop() //Ao modificar um, o outro não é modificado
console.log(array03, array04)

//POP e SHIFT
//POP remove o ultimo elemento, SHIFT remove o primeiro e desloca os seguintes para ocupar o lugar deixado pelo elemento removido
//É importante notar, que ambos os métodos retornam o elemento excluído
const removido = array03.pop()
console.log(removido)
