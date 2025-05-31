class Task {
    constructor(id, taskData, status = "new") {
        
        if(status === "new"){
        this.name = document.getElementById("taskName").value;
        document.getElementById("taskName").value = "";
        this.description = document.getElementById("taskDescription").value;
        document.getElementById("taskDescription").value = "";
        this.dueDate = document.getElementById("taskDueDate").value;
        document.getElementById("taskDueDate").value = "";
        this.dueTime = document.getElementById("taskDueTime").value;
        document.getElementById("taskDueTime").value = "";
        this.priority = document.getElementById("taskPriority").value;
        document.getElementById("taskPriority").value = "";
        this.goalDuration = document.getElementById("taskGoalDuration").value;
        document.getElementById("taskGoalDuration").value = "";
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

      if(this.name != null && this.name != ''){
        taskCard.setAttribute('title', this.name);
      }else{
        taskCard.setAttribute('title', "Unnamed Task");
      }

      if(this.description != '' && this.description != null){
        taskCard.setAttribute('description', "Description: " + this.description);
      }

      if(this.dueDate != null && this.dueDate != ''){
        taskCard.setAttribute('dueDate', "Due Date: " + this.dueDate);
      }

      if(this.dueTime != null && this.dueTime != ''){
        taskCard.setAttribute('duetime', "Due Time: " + this.dueTime);
      }

      if(this.priority != null && this.priority != '' && this.priority != 'None'){
        taskCard.setAttribute('priority', "Priority: " + this.priority);
      }


      if(this.goalDuration != null && this.goalDuration != ''){
        taskCard.setAttribute('goalDuration', "Goal Duration: " + this.goalDuration + " hours");
        console.log("goalDuration: " + this.goalDuration);
      }

      if(this.status === "Active"){
        document.getElementById("activeTaskList").appendChild(taskCard);
        taskCard.shadowRoot.querySelector('.card-title').style.color = "red";
      }
      else{
        document.getElementById("completedTaskList").appendChild(taskCard);
        taskCard.shadowRoot.querySelector('.card-title').style.color = "green";
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
        
        if(this.timer.active){
          this.timer.stop();
        }
        taskCard.remove();
        this.DisplayTask();
       
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
      if(this.status === "Completed"){
        timerButton.style.display = "none";
      }
      else{
        timerButton.addEventListener('click', () => {
        if(!this.timer.active){
          console.log("Timer button clicked");
          this.timer.start();
          this.timer.continousDisplay();
          timerButton.textContent = "Stop Timer";
          timerButton.style.backgroundColor = "red";
          timerButton.style.color = "white";
        }
      else{
          this.timer.stop();
          this.timer.display();
          timerButton.textContent = "Start Timer";
          timerButton.style.backgroundColor = "white";
          timerButton.style.color = "blue";
          }  
        
      });
      }


     
      taskCard.displayTaskCard();
      this.timer.display();
      
      
    }

    


    
}


