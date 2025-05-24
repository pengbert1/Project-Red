let tasks = [];
console.log("Started");
function addTask() {
    let task = new Task();
    tasks.push(task);
    task.displayActiveTask();
}

