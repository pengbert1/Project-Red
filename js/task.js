class Task {
    constructor(id, taskData, status = "new") {
        
        if(status === "new"){
        this.name = document.getElementById("taskName").value;
        this.description = document.getElementById("taskDescription").value;
        this.dueDate = document.getElementById("taskDueDate").value;
        this.dueTime = document.getElementById("taskDueTime").value;
        this.priority = document.getElementById("taskPriority").value;
        this.goalDuration = document.getElementById("taskGoalDuration").value;
        this.goalDurationMilliseconds = document.getElementById("taskGoalDuration").value * 60 * 60 * 1000;
        this.status = "Active";
        console.log(this.name);
        this.id = id;
        this.div = null;
        this.timer = new Timer(this.id,this.timeElaspedMilliseconds);
        this.timeElaspedMilliseconds = 0;
        }
        else{
            this.name = taskData.name;
            this.description = taskData.description;
            this.dueDate = taskData.dueDate;
            this.dueTime = taskData.dueTime;
            this.priority = taskData.priority;
            this.status = taskData.status;
            this.id = taskData.id;
            this.div = null;
            this.timeElaspedMilliseconds = taskData.timeElaspedMilliseconds;
            this.timer = new Timer(this.id,this.timeElaspedMilliseconds);
            this.goalDuration = taskData.goalDuration;
            this.goalDurationMilliseconds = taskData.goalDurationMilliseconds;
        }

    


    }

    DisplayTask(){
      let taskCard = document.createElement('task-card');
      taskCard.setAttribute('id', this.id);
      taskCard.setAttribute('title', this.name);
      taskCard.setAttribute('description', "Description: " + this.description);
      taskCard.setAttribute('dueDate', "Due Date: " + this.dueDate);
      taskCard.setAttribute('dueTime', "Due Time: " + this.dueTime);
      taskCard.setAttribute('priority', "Priority: " + this.priority);
      taskCard.setAttribute('status', "Status: " + this.status);
      taskCard.setAttribute('goalDuration', "Goal Duration (hrs): " + this.goalDuration );
      
      if(this.status === "Active"){
        document.getElementById("activeTaskList").appendChild(taskCard);
      }
      else{
        document.getElementById("completedTaskList").appendChild(taskCard);
      }
      
      let completeButton = taskCard.shadowRoot.querySelector('#completeButton');
      if(this.status === "Active"){
        completeButton.style.display = "inline";
      }
      else{
        completeButton.textContent = "Set as Active";
      }
        completeButton.addEventListener('click', () => {
          console.log("Complete button clicked");
        if(this.status === "Active"){
        this.status = "Completed";
        this.DisplayTask();
        taskCard.remove();
        return;
        }
        else{
          this.status = "Active";
          this.DisplayTask();
          taskCard.remove();
          return;
        }
      });

      let deleteButton = taskCard.shadowRoot.querySelector('#deleteButton');
      deleteButton.addEventListener('click', () => {
        console.log("Delete button clicked");
        taskCard.remove();
        this.status = "deleted";
        return;
      });

      let timerButton = taskCard.shadowRoot.querySelector('#timerButton');
      timerButton.addEventListener('click', () => {
        if(!this.timer.active){
        console.log("Timer button clicked");
        this.timer.start();
        this.timer.continousDisplay();
      }
      else{
        this.timer.stop();
        this.timer.display();
      }
      });


      taskCard.displayTaskCard();
      this.timer.display();
    }

    


    
}


