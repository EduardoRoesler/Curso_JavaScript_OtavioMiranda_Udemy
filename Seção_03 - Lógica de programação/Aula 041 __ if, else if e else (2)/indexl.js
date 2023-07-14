//O código não é analisado após o JS encontrar um parâmetro true, mesmo que outro parâmero abaixo também seja true
const num = 20

if (num>=0 && num<=10){
    console.log('Num está entre 0 e 10')
} else if (true){
    console.log('código inerrompido')
} else if (num>10 && num<=20) {
    console.log('Num está entre 10 e 20')
} else {
    console.log('Num fora dos parâmetros')
}

