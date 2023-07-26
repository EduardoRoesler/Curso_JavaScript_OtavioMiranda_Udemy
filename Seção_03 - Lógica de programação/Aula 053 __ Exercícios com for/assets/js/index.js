const section = document.querySelector('section')

const elements = [
    {tag: 'p', texto: 'Frase 01'},
    {tag: 'div', texto: 'Frase 02'},
    {tag: 'section', texto: 'Frase 03'},
    {tag: 'footer', texto: 'Frase 04'}
]

for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    let {tag, texto} = element

    let child = document.createElement(tag)
    child.innerHTML = texto

//    child.innerText = texto  -  Alternativa 01 ao innerHTML   
  
/* 
    let text = document.createTextNode(texto)  -  Alternativa 02 ao innerHTML. Este método cria um nó de texto
    child.appendChild(text) 

O que está escrito dentro de uma tag é um nó de texto. Ex:
<h1>Nó de texto</h1>
*/

    section.appendChild(child)
}