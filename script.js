// Step 1: DOM Selection
const button = document.getElementById("addTask");
const titleInput = document.getElementById("title-name");
const dateInput = document.getElementById("date");
const descInput = document.getElementById("description");
const taskList = document.getElementById("taskList");
const messagebtn = document.getElementById("message");
const showTaskBtn = document.getElementById("showTasksBtn");


//  ADD TASK (only save + message)
button.addEventListener("click", function() {
    const title = titleInput.value;
    const date = dateInput.value;
    const desc = descInput.value;

    if (!title || !date || !desc) {
        messagebtn.innerText = "Fill all fields ❌";
        return;
    }

    const task = {
        title: title,
        date: date,
        description: desc
    };

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Clear inputs
    titleInput.value = "";
    dateInput.value = "";
    descInput.value = "";

    // Message
    messagebtn.innerText = "Task added successfully ✅";
    setTimeout(() => {
        messagebtn.innerText = "";
    }, 2000);
});


// ✅ SHOW TASKS + DELETE LOGIC
showTaskBtn.addEventListener("click", function() {
    taskList.innerHTML = "";

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function(task, index) {

        const div = document.createElement("div");
        div.classList.add("task");

        div.innerHTML = `
            <strong>${index + 1}. ${task.title}</strong>
            <span>${task.date}</span>
            <p>${task.description}</p>
        `;

        // 🔥 Create delete button INSIDE loop
        const delBtn = document.createElement("button");
        delBtn.innerText = "Delete";

        // 🔥 Delete logic
        delBtn.addEventListener("click", function() {

            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

            tasks.splice(index, 1);

            localStorage.setItem("tasks", JSON.stringify(tasks));

            // Refresh list
            showTaskBtn.click();
        });

        div.appendChild(delBtn);
        taskList.appendChild(div);
    });
});