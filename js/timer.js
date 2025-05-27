 class Timer {
    constructor(div) {
        this.startTime = null;
        this.endTime = null;
        this.durationMilliseconds = 0;
        this.totalHours = 0;
        this.totalMinutes = 0;
        this.totalSeconds = 0;
        this.div = div;
        this.timerDisplay = document.createElement('p');
        this.active = false;

    }
    start() {
        this.startTime = new Date();
        this.active = true;
    }
    stop() {
        this.endTime = new Date();
        this.active = false;
        this.durationMilliseconds = this.endTime - this.startTime;
        this.totalSeconds =  this.totalSeconds + Math.floor(this.durationMilliseconds / 1000);
        this.totalMinutes = this.totalMinutes + Math.floor(this.totalSeconds / 60);
        this.totalHours = this.totalHours + Math.floor(this.totalMinutes / 60);
    }
    display() {
        
        this.timerDisplay.textContent = this.totalHours + ":" + this.totalMinutes + ":" + this.totalSeconds;
        this.div.appendChild(this.timerDisplay);
        
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
            let tempSeconds =  this.totalSeconds + Math.floor(durationMilliseconds / 1000);
            let tempMinutes = this.totalMinutes + Math.floor(tempSeconds / 60);
            let tempHours = this.totalHours + Math.floor(tempMinutes / 60);
            
            this.timerDisplay.textContent = tempHours + ":" + tempMinutes + ":" + tempSeconds;
            }
        }, 1000);



    }

}