function Calculadora(){
    this.display = document.querySelector('.display')

    this.inicia = ()=>{
        this.btnClick()
        this.pressEnter()
    }

    this.btnClick = ()=>{
        document.addEventListener('click', e=>{ //Ao usar arrow function deixa de ser necessário bind(this)
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
        })
    }

    this.pressEnter = ()=>{
        document.addEventListener('keydown', e=>{
            if(e.keyCode === 13){
                this.operate()
            }
        })
    }

    this.btnToDisplay = (valor)=> {
        this.display.value += valor
        this.display.focus()
    }

    this.clearDisplay = ()=> this.display.value = ''

    this.deleteLast = ()=> this.display.value = this.display.value.slice(0, -1)

    this.operate = ()=>{
        try {
            if(this.display.value===''){
                alert('Display em Branco')
                return
            }
            this.display.value = eval(this.display.value)
        } catch (error) {
            alert('Conta Inválida')
        }

    }
}

const calculadora = new Calculadora()
calculadora.inicia()