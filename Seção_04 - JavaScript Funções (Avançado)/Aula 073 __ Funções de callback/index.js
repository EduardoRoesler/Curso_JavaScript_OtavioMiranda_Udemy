/*
FUNÇÕES CALLBACK

1. Definição:
   - Funções de callback são funções que podem ser passadas como argumentos para outras funções.
   - Elas são executadas quando um evento ou ação específica ocorre.

2. Uso:
   - São comumente usadas para lidar com tarefas assíncronas, como solicitações de rede e operações de arquivo.
   - Permitem personalizar ações em resposta a eventos, como cliques de botão ou respostas de servidor.

3. Vantagens:
   - Flexibilidade: Permitem a personalização das ações a serem tomadas após um evento.
   - Reutilização: As mesmas funções de callback podem ser usadas em diferentes contextos.

4. Desvantagens:
   - Callback Hell: Muitas chamadas de callback aninhadas podem dificultar a legibilidade do código.
   - Controle de Fluxo: Pode ser complicado controlar a sequência de execução com muitos callbacks.

5. Soluções Modernas:
   - **Promises:** Abstrações que tratam operações assíncronas de maneira mais estruturada e evitam o "Callback Hell".
   - **async/await:** Sintaxe mais amigável para lidar com código assíncrono, construída sobre Promises.

6. Exemplos de Uso:
   - Eventos de Interface: Responder a cliques de botões, envio de formulários etc.
   - Requisições de Rede: Lidar com respostas de servidores após uma solicitação AJAX.
   - Operações de Arquivo: Executar ações após ler ou gravar em um arquivo.

7. Callbacks vs. Promises/async-await:
   - Callbacks podem ser menos legíveis com muitos aninhamentos.
   - Promises e async/await oferecem um controle mais claro sobre o fluxo de código assíncrono.
*/

function tempoExec(min = 100, max=3000){ //Função geradora de números aleatórios, utilizada para simular um tempo de resposta entre o servidor e o client
    const num = Math.random() * (max-min) + min
    return Math.floor(num)
}

function e1(callback){
    setTimeout(() => { //SetTimeout está sendo utilizada para simular o tempo de resposta entre o servidor e o client
        console.log('Deve ser a PRIMEIRA a executar')
        if (callback) callback() //Caso exista uma função de calback, execute a função
    }, tempoExec());
}

function e2(callback){
    setTimeout(() => {
        console.log('Deve ser a SEGUNDA a executar')
        if (callback) callback()
    }, tempoExec());
}

function e3(callback){
    setTimeout(() => {
        console.log('Deve ser a TERCEIRA a executar')
        if (callback) callback()    
    }, tempoExec());
}

/*
Caso eu execute o código abaixo, terei a ordem das frases errada, visto que existe um tempo de resposta para que cada uma seja executada

e1()
e2()
e3()
console.log('Deve ser a QUARTA a executar')
*/

/*
O código abaixo já utiliza as funções de callback para gerenciar a ordem de execução, entretanto, ela é o que se chama de callback hell, que é o aninhamento exagerado de funções, e gera um código bagunçado

e1(function(){
    e2(function(){
        e3(function(){
            console.log('Deve ser a QUARTA a executar')
        })
    })
})
*/

//Abaixo temos um código um pouco mais organizado. No futuro trabalharemos com outras alternativas à ele, como promisses
e1(e1Callback)

function e1Callback(){
    e2(e2Callback)
}

function e2Callback(){
    e3(e3Callback)
}

function e3Callback(){
    console.log('Deve ser a QUARTA a executar')
}
