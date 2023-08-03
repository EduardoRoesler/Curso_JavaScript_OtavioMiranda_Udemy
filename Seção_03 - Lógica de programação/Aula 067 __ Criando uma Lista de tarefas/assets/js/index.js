const taskContainer = document.querySelector('.taskContainer')
const addTaskEvent = document.querySelector('.addTaskBtn').addEventListener('click', function(){
    addTask(taskInput.value)
})
const taskInput = document.querySelector('.taskInput')
taskInput.addEventListener('keypress', function(e){ //função para enviar ao pressionar enter
    if (e.keyCode === 13){addTask(taskInput.value)} //13 é o keycode referente ao enter
})

taskContainer.addEventListener('click', function(e){
    const taskRemoveBtn = e.target

    if (taskRemoveBtn.classList.contains('removeBtn')) {
        taskRemove(taskRemoveBtn)
    }
})

const taskList = []

//ADICIONAR TAREFA
function addTask(taskSave){ //REVISAR CODIGO, ALTERAR ESSA VARIAVEL
    console.log(taskSave)
    let task = taskSave //Cria task com o valor do input

    if (!task) return //Verifica se existe conteudo no input

    taskList.push(task) //Adiciona task à taskList
    saveTaskList()

    uiUpdate(task) //Envia task para uiUpdate

    taskInputCleaner() //Chama função para limpar input e adicionar focus ao input

}

//LIMPAR INPUT
function taskInputCleaner (){
    taskInput.value = '' //Limpa input
    taskInput.focus() //Focus é uma função nativa do JS que coloca o cursor novamente no input
}

//ATUALIZAR UI
function uiUpdate(task){

    const taskRow = createTaskRow()
    const taskRemoveBtn = createTaskRemoveBtn()
    const taskContent = createTaskContent(task)

    taskRow.appendChild(taskRemoveBtn) //Adiciona botão ao li
    taskRow.appendChild(taskContent) //Adiciona span ao li
    taskContainer.appendChild(taskRow) //Adiciona li ao ul
}

//CRIAR TASK ROW
function createTaskRow(){
    const taskRow = document.createElement('li') //Cria li
    taskRow.classList.add('taskRow') //Adiciona à li - class = "taskRow" 

    return taskRow
}

//CRIAR TASK REMOVE BTN
function createTaskRemoveBtn(){
    const taskRemoveBtn = document.createElement('button') //Cria botão apagar
    taskRemoveBtn.innerText = 'Apagar' //Adiciona o texto do botão apagar
    taskRemoveBtn.setAttribute('class', 'removeBtn') //Adiciona ao botão apagar - class = "remobeBtn" //Com SetAtribute, posso adicionar qualquer atributo, seja classe, id, name...

    return taskRemoveBtn
}

//CRIAR TASK CONTENT
function createTaskContent(task){
    const taskContent = document.createElement('span') //Cria span
    taskContent.textContent = task //Adiciona task como texto para o span

    return taskContent
}

//REMOVE TAREFA
function taskRemove(element){
    const task = element.nextElementSibling.textContent //Proximo elemento irmão do botão
    const taskIndex = taskList.indexOf(task) //Busca índice do array referente à task
    taskList.splice(taskIndex, 1) //Remove a task do array
    saveTaskList()
    console.log(taskList)

    element.parentElement.remove() //Remove a Task Row
}

function saveTaskList(){
    const taskListJSON = JSON.stringify(taskList) //Converte array para JSON
    localStorage.setItem('taskList', taskListJSON) //Salva no localStorage o JSON (Só posso salvar JSON no localStorage)
}

function handleSaveTaskList(){
    const saveTaskList = localStorage.getItem('taskList')
    const taskList = JSON.parse(saveTaskList)

    for (taskSave of taskList){
        addTask(taskSave)
    }
}

handleSaveTaskList()