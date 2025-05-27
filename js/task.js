class Task {
    constructor(id) {
        console.log("constructor");
        this.name = document.getElementById("taskName").value;
        this.description = document.getElementById("taskDescription").value;
        this.dueDate = document.getElementById("taskDueDate").value;
        this.dueTime = document.getElementById("taskDueTime").value;
        this.priority = document.getElementById("taskPriority").value;
        this.status = "Active";
        console.log(this.name);
        this.id = id;
        this.div = null;
        this.timer = null;

    


    }
    displayTask() {
     console.log("Displaying task");
     
      let cardContainer = document.createElement('div');
      
      cardContainer.classList.add('card');
      cardContainer.style.width = '18rem';

      this.div = document.createElement('div');
      this.div.classList.add('card-body');
      if(this.timer == null){
        this.timer = new Timer(this.div);
      }

      
      let nameElement = document.createElement('h2');
      nameElement.classList.add('card-title');
      nameElement.textContent = this.name;
      let descriptionElement = document.createElement('p');
      descriptionElement.classList.add('card-text');
      descriptionElement.textContent = "Description: " + this.description;
      let dueDateElement = document.createElement('p');
      dueDateElement.classList.add('card-text');
      dueDateElement.textContent = "Due Date: " + this.dueDate;
      let dueTimeElement = document.createElement('p');
      dueTimeElement.classList.add('card-text');
      dueTimeElement.textContent = "Due Time: " + this.dueTime;
      let priorityElement = document.createElement('p');
      priorityElement.classList.add('card-text');
      priorityElement.textContent = "Priority: " + this.priority;
      let statusElement = document.createElement('p');
      statusElement.classList.add('card-text');
      statusElement.textContent = "Status: " + this.status;
      
      //Add elements to the div
      cardContainer.appendChild(this.div);
      this.div.appendChild(nameElement);
      this.div.appendChild(descriptionElement);
      this.div.appendChild(dueDateElement);
      this.div.appendChild(dueTimeElement);
      this.div.appendChild(priorityElement);
      this.div.appendChild(statusElement);
      this.div.appendChild(this.timer.getDisplayElement());
      
      let completeButton = document.createElement('button');
      completeButton.textContent = "Complete";
      completeButton.addEventListener("click", () => {
        this.status = "Completed";
        deleteButton.remove();
        completeButton.remove();
        timerButton.remove();
        cardContainer.remove();
        this.completeTask();
        
        
      });
      
      let deleteButton = document.createElement('button');
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        this.status = "Deleted";
        this.deleteTask();
        completeButton.remove();
        deleteButton.remove();
        cardContainer.remove();
        timerButton.remove();
        
        
      });

     

      let timerButton = document.createElement('button');
      timerButton.textContent = "Start Timer";
      timerButton.addEventListener("click", () => {
        if(timerButton.textContent === "Start Timer"){  
          this.timer.start();
          timerButton.textContent = "Stop Timer";
        }
        else{
          this.timer.stop();
          timerButton.textContent = "Start Timer";
        }
        this.timer.display();
    
      });
      

      if(this.status === "Active"){
        document.getElementById("activeTaskList").appendChild(cardContainer);
        document.getElementById("activeTaskList").appendChild(completeButton);
        document.getElementById("activeTaskList").appendChild(deleteButton);
        document.getElementById("activeTaskList").appendChild(timerButton);
        this.timer.display();
        this.timer.continousDisplay();
      }
      else{
        document.getElementById("completedTaskList").appendChild(cardContainer);
        document.getElementById("completedTaskList").appendChild(deleteButton);
        this.timer.display();
        this.timer.continousDisplay();
        
      }
      
   
}
    

    completeTask() {
        this.timer.stop();
        this.status = "Completed";
        this.div.remove();
        this.displayTask();
        
    }
    deleteTask() {
        this.status = "Deleted";
        this.div.remove();
        if (this.completedDiv) {
            this.completedDiv.remove();
        }


    }
}
