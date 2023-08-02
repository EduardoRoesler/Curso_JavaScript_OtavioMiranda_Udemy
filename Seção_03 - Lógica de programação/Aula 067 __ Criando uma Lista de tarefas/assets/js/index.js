const taskContainer = document.querySelector('.taskContainer')
const addTaskEvent = document.querySelector('.addTaskBtn').addEventListener('click', addTask)
const taskInput = document.querySelector('.taskInput')

const taskList = []

function addTask(){
    taskContainer.classList.remove('hidden')

    let task = taskInput.value
    taskList.push(task)

    console.log(taskList)

    uiUpdate()

}

function uiUpdate(){
    taskContainer.innerHTML = ''

    taskList.forEach((element)=>{
        const taskRow = document.createElement('li')
        taskRow.classList.add('taskRow')
        const taskRemove = document.createElement('button')
        taskRemove.classList.add('removeBtn')
        taskRemove.innerText = 'Apagar'

        const taskItem = document.createElement('span')
        taskItem.textContent = element


        taskRow.appendChild(taskRemove)
        taskRow.appendChild(taskItem)
        taskContainer.appendChild(taskRow)

        
        
        
    })
    
}