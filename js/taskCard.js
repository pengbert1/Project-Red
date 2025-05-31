const template = document.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
<style>
    .card {
        margin: 30px;
        box-shadow: 0 4px 8px 0 rgba(245, 7, 27, 0.2);
        border-radius: 10px;
        border-color: #D50D1E;
    }

    .card-title{
        color:rgb(28, 227, 61);
    

</style>
<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h3 class="card-title" id="title">Task Title</h3>
        <p class="card-text" id="description">Task Description</p>
        <p class="card-text" id="dueDate">Task Due Date</p>
        <p class="card-text" id="dueTime">Task Due Time</p>
        <p class="card-text" id="priority">Task Priority</p>
        <p class="card-text" id="goalDuration">Goals Duration</p>
        <p class="card-text" id="timeElasped"></p>


        <button id="completeButton">
            <img src="assets/images/blue-check.jpg" style="width: 50px; height: 50px; border-radius: 2px;">
        </button>
        
        
        
        <button id="deleteButton">
            <img src="assets/images/red-x.png" style="width: 50px; height: 50px; ">
        </button>
        
        <button id = "timerButton">
            <img src="assets/images/timer.png" style="width: 50px; height: 50px; ">
        </button>
    </div>
</div>
`;

class TaskCard extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));



    }

    displayTaskCard(){
        this.shadowRoot.querySelector('#title').textContent = this.getAttribute('title');
        this.shadowRoot.querySelector('#description').textContent = this.getAttribute('description');
        this.shadowRoot.querySelector('#dueDate').textContent = this.getAttribute('dueDate');
        this.shadowRoot.querySelector('#dueTime').textContent = this.getAttribute('dueTime');
        this.shadowRoot.querySelector('#priority').textContent = this.getAttribute('priority');
        //this.shadowRoot.querySelector('#status').textContent = this.getAttribute('status');
        this.shadowRoot.querySelector('#goalDuration').textContent = this.getAttribute('goalDuration');
    }
}

window.customElements.define('task-card', TaskCard);