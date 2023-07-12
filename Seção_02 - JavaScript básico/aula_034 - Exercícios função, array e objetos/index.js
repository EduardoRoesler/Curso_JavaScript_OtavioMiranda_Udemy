function enviar(pessoa){
    const nomeInput = window.document.getElementById('nome').value
    const sobrenomeInput = window.document.getElementById('sobrenome').value
    const pesoInput = window.document.getElementById('peso').value
    const alturaInput = window.document.getElementById('altura').value

    pessoa = {
        nomeInput,
        sobrenomeInput,
        pesoInput,
        alturaInput
    }

    console.log(pessoa)
}