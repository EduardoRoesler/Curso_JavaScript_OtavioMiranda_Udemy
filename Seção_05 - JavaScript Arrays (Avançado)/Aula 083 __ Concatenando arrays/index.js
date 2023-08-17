//Concatenar variáveis de array
const num01 = [1, 2, 3]
const num02 = [4, 5, 6]
const num03 = num01.concat(num02)
console.log(num03)

//Posso concatenar, na mesma operação, com diferentes dados, arrays e até mesmo arrays literais
const num04 = num03.concat(num01, ['a', 'b', 'c'], 'Eduardo')
console.log(num04)

//Concatenar com spread operator
const num05 = [...num02, 'Eduardo', ...num01, ...[10, 20, 30]] //Cria-se um novo array com os antigos em spread
console.log(num05)