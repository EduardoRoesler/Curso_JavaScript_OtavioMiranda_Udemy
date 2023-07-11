const nome = 'Eduardo'
const sobrenome = 'Roesler'
const peso = 93
const altura = 1.79
const anoNascimento = 1997
const imc = (peso/(altura**2))
const date = new Date()
const idade = date.getUTCFullYear() - anoNascimento;


console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${altura}m de altura e seu IMC é de ${imc}`)