//Quando atribuimos a uma const um array, por exemplo, ou qualquer outra variável mutável, temos liberdade para alterar seu valor
//Isso acontece porque quando alteramos um valor interno de um objeto, não ocorre a reatribuição da variável com sinal de atribuição = (a variável continua apontando para o mesmo local na memória), apenas a alteração de um valor interno do mesmo objeto.


//Isso pode
const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]

//Isso não pode
array = 'Legal'; // Assignment to constant variable.