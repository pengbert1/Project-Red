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
        this.activeDiv = null;
        this.completedDiv = null;
    }
    displayActiveTask() {
     console.log("Displaying task");
      this.activeDiv = document.createElement('div');
      let nameElement = document.createElement('h2');
      nameElement.textContent = this.name;
      let descriptionElement = document.createElement('p');
      descriptionElement.textContent = this.description;
      let dueDateElement = document.createElement('p');
      dueDateElement.textContent = this.dueDate;
      let dueTimeElement = document.createElement('p');
      dueTimeElement.textContent = this.dueTime;
      let priorityElement = document.createElement('p');
      priorityElement.textContent = this.priority;
      let statusElement = document.createElement('p');
      statusElement.textContent = this.status;

      //Add elements to the div
      this.activeDiv.appendChild(nameElement);
      this.activeDiv.appendChild(descriptionElement);
      this.activeDiv.appendChild(dueDateElement);
      this.activeDiv.appendChild(dueTimeElement);
      this.activeDiv.appendChild(priorityElement);
      this.activeDiv.appendChild(statusElement);
      document.getElementById("activeTaskList").appendChild(this.activeDiv);
      let completeButton = document.createElement('button');
      completeButton.textContent = "Complete";
      completeButton.addEventListener("click", () => {
        this.status = "Completed";
        this.completeTask();
        deleteButton.remove();
        completeButton.remove();
    
      });
      
      let deleteButton = document.createElement('button');
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        this.status = "Deleted";
        this.deleteTask();
        completeButton.remove();
        deleteButton.remove();
        
        
      });
    document.getElementById("activeTaskList").appendChild(completeButton);
    document.getElementById("activeTaskList").appendChild(deleteButton);
}
    displayCompletedTask() {
        console.log("Displaying task");
      this.completedDiv = document.createElement('div');
      let nameElement = document.createElement('h2');
      nameElement.textContent = this.name;
      let descriptionElement = document.createElement('p');
      descriptionElement.textContent = this.description;
      let dueDateElement = document.createElement('p');
      dueDateElement.textContent = this.dueDate;
      let dueTimeElement = document.createElement('p');
      dueTimeElement.textContent = this.dueTime;
      let priorityElement = document.createElement('p');
      priorityElement.textContent = this.priority;
      let statusElement = document.createElement('p');
      statusElement.textContent = this.status;

      //Add elements to the div
      this.completedDiv.appendChild(nameElement);
      this.completedDiv.appendChild(descriptionElement);
      this.completedDiv.appendChild(dueDateElement);
      this.completedDiv.appendChild(dueTimeElement);
      this.completedDiv.appendChild(priorityElement);
      this.completedDiv.appendChild(statusElement);
      document.getElementById("completedTaskList").appendChild(this.completedDiv);
      let deleteButton = document.createElement('button');
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        this.status = "Deleted";
        this.deleteTask();
        deleteButton.remove();
        
        
      });
      document.getElementById("completedTaskList").appendChild(deleteButton);
    }  

    completeTask() {
        this.status = "Completed";
        this.activeDiv.remove();
        this.displayCompletedTask();
    }
    deleteTask() {
        this.status = "Deleted";
        this.activeDiv.remove();
        if (this.completedDiv) {
            this.completedDiv.remove();
        }


    }
}
