let tasks = [];
console.log("Started");
let taskId = 0;


function addTask() {

    let task = new Task(taskId);
    tasks.push(task);
    console.log("Task %s added", task.name);
    task.displayTask();
    taskId++;
   

}


