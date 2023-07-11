//Primeira solução (antiga)
let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A

const varAtemp = varA

varA = varB
varB = varC
varC = varAtemp

console.log(varA, varB, varC)


//Segunda solução (moderna - destructuring) -- Por algum motivo precisa colocar ponto e virgula
let varA2 = 'A'; //B
let varB2 = 'B'; //C
let varC2 = 'C'; //A

[varA2, varB2, varC2] = [varB2, varC2, varA2];

console.log(varA2, varB2, varC2)
