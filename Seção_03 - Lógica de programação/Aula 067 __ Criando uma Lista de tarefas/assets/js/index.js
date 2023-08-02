const taskContainer = document.querySelector('.taskContainer')
const addTaskEvent = document.querySelector('.addTaskBtn').addEventListener('click', addTask)
const taskInput = document.querySelector('.taskInput')
taskInput.addEventListener('keypress', function(e){ //função para enviar ao pressionar enter
    if (e.keyCode === 13){addTask()} //13 é o keycode referente ao enter
})

const taskList = []

function addTask(){
    let task = taskInput.value //Cria task com o valor do input

    if (!task) return //Verifica se existe conteudo no input

    taskList.push(task) //Adiciona task à taskList

    uiUpdate(task) //Envia task para uiUpdate

    taskInputCleaner() //Chama função para limpar input e adicionar focus ao input

}

function taskInputCleaner (){
    taskInput.value = '' //Limpa input
    taskInput.focus() //Focus é uma função nativa do JS que coloca o cursor novamente no input
}

function uiUpdate(task){

    const taskRow = document.createElement('li') //Cria li
    taskRow.classList.add('taskRow') //Adiciona à li - class = "taskRow"

    const taskRemove = document.createElement('button') //Cria botão apagar
    taskRemove.classList.add('removeBtn') //Adiciona ao botão apagar - class = "remobeBtn"
    taskRemove.innerText = 'Apagar' //Adiciona o texto do botão apagar

    const taskItem = document.createElement('span') //Cria span
    taskItem.textContent = task //Adiciona task como texto para o span

    taskRow.appendChild(taskRemove) //Adiciona botão ao li
    taskRow.appendChild(taskItem) //Adiciona span ao li
    taskContainer.appendChild(taskRow) //Adiciona li ao ul
    
}