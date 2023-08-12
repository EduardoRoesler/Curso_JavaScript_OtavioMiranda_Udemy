function criaCalculadora(){
    return { //Funções fabrica retornam objetos
        display: document.querySelector('.display'), //Captura display



        inicia(){ //Método que inicia a calculadora
            this.btnClick()
            this.pressEnter()
        },

        btnClick(){
            document.addEventListener('click', function(e){
                const element = e.target

                if (element.classList.contains('btn__Num')){
                    this.btnToDisplay(element.innerText)
                }

                if (element.classList.contains('btn__Clear')){
                    this.clearDisplay()
                }

                if (element.classList.contains('btn__Del')){
                    this.deleteLast()
                }

                if (element.classList.contains('btn__Equal')){
                    this.operate()
                }
            }.bind(this)) //Estou usando o bind(this) para que a função utilize o this do objeto, e não de document, visto que o event listener está chamando o evento. Outra técnica seria utilizar uma arrow functiona ao invés de uma função anonima. As arrow functions não tem this próprio
        },

        pressEnter(){
            document.addEventListener('keydown', e=>{
                if(e.keyCode === 13){
                    this.operate()
                }
            })
        },

        btnToDisplay(valor){
            this.display.value += valor
            this.display.focus()
        },

        clearDisplay(){
            this.display.value = ''
        },

        deleteLast(){
            this.display.value = this.display.value.slice(0, -1)
        },

        operate(){

            try {
                if(this.display.value===''){
                    alert('Display em Branco')
                    return
                }

                this.display.value = eval(this.display.value) //A função eval irá receber uma string e interpretá-la como se fosse um JS. Muito cuidado, pois isso é algo extremamente perigoso, pois abre brecha para ataques maliciosos como Code Injection
            } catch (error) {
                alert('Conta Inválida')
            }

        },

    }
}

const calculadora = criaCalculadora() //Cria calculadora na variável calculadora
calculadora.inicia() //Inicia calculadora