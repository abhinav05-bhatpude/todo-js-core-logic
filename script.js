//Step-1 DOM MANIPULATION

const button=document.getElementById("addTask");
const titleInput=document.getElementById("title-name");
const dateInput=document.getElementById("date");
const descInput=document.getElementById("description");
const taskList=document.getElementById("taskList");
const messagebtn=document.getElementById("message");
const showTaskBtn=document.getElementById("showTasksBtn")

button.addEventListener("click",function(){
    const title=titleInput.value;
    const date=dateInput.value;
    const desc=descInput.value;

    const task={
        title:title,
        date:date,
        description:desc
    }

    let tasks=JSON.parse(localStorage.getItem("tasks"));
    if(tasks===null){
        tasks=[];
    }
    tasks.push(task);
    localStorage.setItem("tasks",JSON.stringify(tasks));

    const div=document.createElement("div");
    div.classList.add("task")
    div.innerHTML=`<strong>${title}</strong><span>${date}</span><p>${desc}</p>`
    
    titleInput.value = "";
    dateInput.value = "";
    descInput.value = "";

    messagebtn.innerText="Task added successfully ✅";
    setTimeout(()=>{
        messagebtn.innerText=""
    },2000)

})

showTasksBtn.addEventListener("click", function() {
    taskList.innerHTML = ""; // clear old list

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function(task, index) {
        const div = document.createElement("div");
        div.classList.add("task");

        div.innerHTML = `
            <strong>${index + 1}. ${task.title}</strong>
            <span>${task.date}</span>
            <p>${task.description}</p>
        `;

        taskList.appendChild(div);
    });
});