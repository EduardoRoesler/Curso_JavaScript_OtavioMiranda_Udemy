/*
RETURN
- Retorna um valor
- Termina a função
*/

//FUNÇÃO QUE RETORNA FUNÇÃO (FUNÇÕES CLOSURE)
function falaComeco(comeco){ //Recebe o parâmetro comeco, que representa o início da frase que queremos formar
    function falaResto(resto){ //Dentro da função falaComeço, temos uma outra função chamada falaResto(resto): Esta função interna recebe o parâmetro resto, que representa o restante da frase que queremos formar      

        return comeco + " " + resto //Dentro da função falaResto, temos uma instrução return comeco + " " + resto: Aqui, a função falaResto concatena o parâmetro comeco (que foi passado como argumento na função externa falaComeco) com um espaço em branco " " e o parâmetro resto.
        
        //Essa estrutura de função dentro de função é conhecida como "closure" (fechamento). Ela permite que a função interna (neste caso, falaResto) acesse variáveis da função externa (neste caso, falaComeco) mesmo após a função externa ter sido concluída e retornada. Isso é possível porque a função interna ainda "lembra" do escopo da função externa.
    }
    return falaResto //De volta à função falaComeco, ela retorna a função falaResto: Em vez de retornar um valor imediato, a função falaComeco retorna a função falaResto, que foi definida dentro dela. É importante notar que, quando retorno uma função sem executá-la, estou retornando a função como um todo, e não seu resultado
}

const helloWorld = falaComeco('Olá') //Quando fazemos const helloWorld = falaComeco('Olá'), estamos chamando a função falaComeco com o argumento 'Olá'. Isso significa que o parâmetro comeco dentro da função falaComeco será 'Olá'. No entanto, a função falaComeco não retorna um valor diretamente. Em vez disso, ela retorna a função interna falaResto, mas com uma peculiaridade: o valor de comeco foi "capturado" dentro dessa função interna. Isso cria uma espécie de função personalizada que sempre terá 'Olá' como seu comeco, independentemente de onde ou quando seja chamada.
console.log(helloWorld('Mundo!!')) //Agora, a constante helloWorld contém a função falaResto, com o valor 'Olá' fixado como comeco. No entanto, quando chamamos helloWorld('Mundo!!'), estamos na verdade chamando a função falaResto, passando 'Mundo!!' como o argumento resto. Isso acontece porque a função helloWorld foi criada a partir de falaResto, com comeco já definido como 'Olá'. Portanto, comeco permanece 'Olá' e apenas o resto pode ser modificado quando chamamos helloWorld.

//Em resumo, a função externa falaComeco cria uma função interna falaResto com parte da frase fixa (comeco) e a retorna. Ao criar uma constante como helloWorld com a função falaComeco('Olá'), estamos configurando uma função personalizada que sempre adicionará 'Olá' no começo e permitirá que adicionemos o que quisermos depois quando a chamarmos.


//USO PRÁTICO DA FUNÇÃO ANTERIOR
//Ireos criar funções de multiplicação sem o uso da ferramenta
function duplicar(n){
    return n*2
}

function triplicar(n){
    return n*3
}

function quadruplicar(n){
    return n*4
}

console.log(duplicar(2))
console.log(triplicar(2))
console.log(quadruplicar(2))

//Veja como fica complicado de escalar a função anterior caso eu precise de mais multiplicadores. Abaixo faremos usando a ferramenta explicada anteriormente
/*
function criaMultiplicador(multiplicador){
    function multiplicação(n){
        return n * multiplicador
    }

    return multiplicação
}

const m10 = criaMultiplicador(10)
console.log(m10(10))
*/

//Posso simplificar ainda mais a função acima
function criaMultiplicador(multiplicador){
    return function multiplicação(n){
        return n * multiplicador
    }
}

const m10 = criaMultiplicador(10)
console.log(m10(10))