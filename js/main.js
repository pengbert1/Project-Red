let tasks = [];
console.log("Started");
let taskId = 0;
taskList = getTasks();
console.log(taskList)
if(taskList != null){
    for(let i = 0; i < taskList.length; i++){
        let taskData = taskList[i];
        let taskObj = new Task(taskId, taskData, "old");
        tasks.push(taskObj);
        taskId++;
    }
}
console.log(tasks);
displayTasks();
const intervalID = setInterval(() => {

  storeTasks();

}, 1000);

function addTask() {

    let task = new Task(taskId);
    tasks.push(task);
    console.log("Task %s added", task.name);
    task.displayTask();
    taskId++;
   
    

}


function storeTasks() {
  
 
  //clear deleted tasks from tasks array
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        if (task.status.toLowerCase() === "deleted") {
            tasks.splice(i, 1);
        }
        //update stored timeElaspedMilliseconds
        if(task.timer != null){
          task.timeElaspedMilliseconds = task.timer.getTimeElaspedMilliseconds();
      }
    }

    

    //clear tasks from local storage
    //clearTasks();
    //store tasks back in local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  
  }
  
  function getTasks() {
    return JSON.parse(localStorage.getItem("tasks"));
  }

  function clearTasks() {
    localStorage.removeItem("tasks");
  }
  

  function displayTasks() {
    if( tasks == null || tasks.length == 0) {
        return;
    }
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        task.displayTask();
        console.log("displaying:", task.name);
    }
  }


