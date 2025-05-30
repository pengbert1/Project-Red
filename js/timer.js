 class Timer {
    constructor(taskId, timeElaspedMilliseconds = 0) {
        this.startTime = null;
        this.endTime = null;
        this.totalDurationMilliseconds = timeElaspedMilliseconds;
        this.timerDisplay = null;
        this.active = false;
        this.taskId = taskId;

    }
    start() {
        this.startTime = new Date();
        this.active = true;
    }
    stop() {
        this.endTime = new Date();
        this.active = false;
        this.durationMilliseconds = this.endTime - this.startTime;
        this.totalDurationMilliseconds = this.totalDurationMilliseconds + this.durationMilliseconds;

    }


    

    display() {
        let tempSeconds = Math.floor((this.totalDurationMilliseconds) / 1000) % 60;
        let tempMinutes = Math.floor((this.totalDurationMilliseconds) / 60000) % 60;
        let tempHours = Math.floor((this.totalDurationMilliseconds) / 3600000);
        this.taskCard = document.getElementById(this.taskId);
        console.log("this.taskCard: " + this.taskCard.id);
        this.timerDisplay = this.taskCard.shadowRoot.querySelector('#timeElasped');
        this.timerDisplay.textContent = "";
        if(tempHours > 0){
        this.timerDisplay.textContent = this.timerDisplay.textContent + " Hours: " + tempHours
        }
        if(tempMinutes > 0){
            this.timerDisplay.textContent = this.timerDisplay.textContent + " Minutes: " + tempMinutes
        }
        if(tempSeconds > 0){
            this.timerDisplay.textContent = this.timerDisplay.textContent + " Seconds: " + tempSeconds
        }
    }
    reset() {
        this.startTime = null;
        this.endTime = null;
        this.durationMilliseconds = 0;
        this.totalHours = 0;
        this.totalMinutes = 0;
        this.totalSeconds = 0;
    }

    getDisplayElement() {
        return this.timerDisplay;
    }

    //constant display every 1s while active 
    continousDisplay() {
            let intervalID = setInterval(() => {
            let currentTime = new Date();
            if(this.startTime != null && this.active){
            let durationMilliseconds = currentTime - this.startTime;
            let tempSeconds = Math.floor((durationMilliseconds + this.totalDurationMilliseconds) / 1000) % 60;
            let tempMinutes = Math.floor((durationMilliseconds + this.totalDurationMilliseconds) / 60000) % 60;
            let tempHours = Math.floor((durationMilliseconds + this.totalDurationMilliseconds) / 3600000);
            //clean formating for the display
            console.log("this.taskId: " + this.taskId);
            this.taskCard = document.getElementById(this.taskId);
            console.log("this.taskCard: " + this.taskCard.id);
            this.timerDisplay = this.taskCard.shadowRoot.querySelector('#timeElasped');
            this.timerDisplay.textContent = "";
            if(tempHours > 0){
                this.timerDisplay.textContent = this.timerDisplay.textContent + " Hours: " + tempHours
                }
                if(tempMinutes > 0){
                    this.timerDisplay.textContent = this.timerDisplay.textContent + " Minutes: " + tempMinutes
                }
                if(tempSeconds > 0){
                    this.timerDisplay.textContent = this.timerDisplay.textContent + " Seconds: " + tempSeconds
                }
        
            }
        }, 1000);



    }

    getTimeElaspedMilliseconds() {
        return this.totalDurationMilliseconds;
    }

}