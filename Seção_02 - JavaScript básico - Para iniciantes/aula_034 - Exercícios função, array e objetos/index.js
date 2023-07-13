function escopo(){
    const resp = document.querySelector('.resp')
    
    //Inicializa array
    const dados = []

    //Inicializa contador
    let contador = 0

    function enviarDados(){
        const nome = document.querySelector('.nome').value
        const sobrenome = document.querySelector('.sobrenome').value
        const peso = document.querySelector('.peso').value
        const altura = document.querySelector('.altura').value

        //Organiza o objeto
        let pessoa = { nome, sobrenome, peso, altura }

        //Push do objeto ao array
        dados.push(pessoa)

        //Atualiza resp
        resp.innerHTML += `<p>ID= ${contador++} | Nome: ${nome} | Sobrenome: ${sobrenome} | Peso: ${peso} | Altura: ${altura} <p/>`
    }

    //Adiciona event listener para submit
    document.addEventListener('submit', enviarDados)
}

escopo()
