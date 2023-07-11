//As funções abaixo são abreviadas, sua forma inteira seria, por exemplo, window.alert, portanto são elementos que funcionam somente na tela do navegador, não no console

alert('Hello World') //Alert - mensagem
confirm('Hello World?') //Confirm - mensagem de confirmação - retorna valor booleano
prompt('Hello...') //prompt - mensagem com input de texto - Retorna string


//Uso prático de confirm
const confirmar = confirm('O valor booleano retornado será atribuido à variavel')
console.log(confirmar)

//Uso prático de prompt
const nome = prompt('Qual seu nome?')
console.log(nome)