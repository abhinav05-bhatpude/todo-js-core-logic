

function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(task) {
    let tasks = getTasks();
    tasks.push(task);
    saveTasks(tasks);
    console.log(`${task} added ✅`);
}

function deleteTask(task) {
    let tasks = getTasks();
    let index = tasks.indexOf(task);

    if (index !== -1) {
        tasks.splice(index, 1);
        saveTasks(tasks);
        console.log(`${task} removed ✅`);
    } else {
        console.log("Task not found ❌");
    }
}

function showTasks() {
    let tasks = getTasks();
    console.log("Current Tasks:", tasks);
}


addTask("Gym");
addTask("Coding");

showTasks();

deleteTask("Gym");

showTasks();