const nome = window.prompt('Escreva seu nome:')

window.document.body.innerHTML = `Seu nome é: ${nome} <br/>`
window.document.body.innerHTML += `Seu nome tem ${nome.length} letras <br/>`
window.document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)} <br/>`
window.document.body.innerHTML += `O primeiro indice da letra "A" no seu nome é: ${nome.indexOf('a')} <br/>`
window.document.body.innerHTML += `O último indice da letra "A" no seu nome é: ${nome.lastIndexOf('a')} <br/>`
window.document.body.innerHTML += `As ultimas 3 letras do seu nome são: ${nome.slice(-3)} <br/>`
window.document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br/>`
window.document.body.innerHTML += `Seu nome com letras maiúsculas é: ${nome.toLocaleUpperCase()} <br/>`
window.document.body.innerHTML += `Seu nome com letras minúsculas é: ${nome.toLowerCase()} <br/>`

//Importane observar os operadores de atribuição, para adicionar mais de um innerHTML