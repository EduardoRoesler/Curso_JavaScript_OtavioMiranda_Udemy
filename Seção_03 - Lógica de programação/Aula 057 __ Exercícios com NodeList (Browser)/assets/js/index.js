const containerParagrafos = document.querySelector('.paragrafos')
const paragrafos = containerParagrafos.querySelectorAll('p')
console.log(paragrafos) //Essa seleção retorna uma nodeList
/*
Node lists
- Uma "NodeList" em JavaScript é uma coleção de nós do DOM, obtida ao selecionar elementos através de métodos como querySelectorAll(). Ela é indexada e atualiza-se automaticamente quando o DOM muda. Apesar de se parecer com um array, não possui todos os métodos do array, mas pode ser convertida para um. É útil para acessar e manipular elementos do DOM.
- Pode ser manipulada com for, por exemplo, assim como um array
*/

const bodyStyles = getComputedStyle(document.body) //Captura em variável o estilo css aplicado no body
const bodyBackgroundColor = bodyStyles.backgroundColor //Captura background color de body

for (let p of paragrafos){
    console.log(p)

    p.style.backgroundColor = bodyBackgroundColor //Adiciona a cada parágrafo o background color
    p.style.color = '#fff'
    p.style.padding = '10px'
}

//Por ser uma nodeList, não temos a propriedade style diretamente na variável parágrafos. Sendo necessário percorrer cada parágrafo individualmente e, em seguida, definir o estilo para cada um deles