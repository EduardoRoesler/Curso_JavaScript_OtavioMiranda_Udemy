/*
Um closure em JavaScript é uma função que mantém acesso às variáveis definidas em seu escopo externo, mesmo após a conclusão da execução desse escopo. Isso é possível porque a função "captura" as referências das variáveis externas e as armazena dentro de si mesma. Dessa forma, quando a função é invocada posteriormente, ela pode acessar e manipular essas variáveis externas, mesmo que o contexto original não esteja mais ativo. Os closures são úteis para criar funções com estados internos persistentes e para criar funções de callback que lembram o ambiente em que foram criadas. Eles são amplamente usados para garantir a encapsulação de dados e comportamentos em JavaScript.
*/

function retornaFuncao(){
    const nome = 'Eduardo'
    return function(){
        return nome
    }
}

const funcao = retornaFuncao() //O closure de funcao será sempre {nome: 'Eduardo'}, visto que a função retornaFuncao já está fechada. Daí vem o nome closure (fechamento)
console.dir(funcao) 

/*
No Node retorna: [Function (anonymous)] (retorna o mesmo que retornaria console.log())

No navegador retorna:
ƒ anonymous()
    arguments: null
    caller: null
    length: 0
    name: ""
    prototype: {constructor: ƒ}
    [[FunctionLocation]]: index.js:6
    [[Prototype]]: ƒ ()
    [[Scopes]]: Scopes[3]
        0: Closure (retornaFuncao) {nome: 'Eduardo'}
        1: Script {funcao: ƒ}
        2: Global {window: Window, self: Window, document: document, name: '', location: Location, …}
*/