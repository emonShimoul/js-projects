document.querySelector('#push').onclick = function(){

    // adding validation for empty input field
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task");
    }
    else{
        // adding a task
        document.querySelector('#tasks').innerHTML += 
        `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
        `;

        // deleting a task
        const current_tasks = document.querySelectorAll(".delete");
        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        const tasks = document.querySelectorAll(".task");
        for(let i = 0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        // clearing the input field after each entry
        document.querySelector("#newtask input").value = "";
    }
}