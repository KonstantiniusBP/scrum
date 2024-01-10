function allowDrop(event) {
    event.preventDefault();
}
  
function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}
  
function drop(event, columnId) {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("text/plain");
    const taskElement = document.getElementById(taskId);
    const columnElement = document.getElementById(columnId);

    columnElement.appendChild(taskElement);
}
  
function addTask() {
    const taskText = prompt("Enter task description:");
    if (taskText) {
        const taskElement = document.createElement("div");
        taskElement.id = "task_" + Date.now();
        taskElement.className = "task";
        taskElement.draggable = true;
        taskElement.addEventListener("dragstart", dragStart);

        taskElement.innerHTML = taskText + '<button onclick="editTask(\'' + taskElement.id + '\')">Edit</button>' +
        '<button onclick="deleteTask(\'' + taskElement.id + '\')">Delete</button>';

        document.getElementById("iceBox").appendChild(taskElement);
    }
}

function deleteTask(taskId) {
    const taskElement = document.getElementById(taskId);
    taskElement.parentNode.removeChild(taskElement);
}
  
function editTask(taskId) {
    const taskElement = document.getElementById(taskId);
    const newTaskText = prompt("Edit task description:", taskElement.textContent);
    if (newTaskText !== null) {
        taskElement.innerHTML = newTaskText + '<button onclick="editTask(\'' + taskId + '\')">Edit</button>' +
        '<button onclick="deleteTask(\'' + taskId + '\')">Delete</button>';
}
}
  