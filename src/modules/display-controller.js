import { format } from 'date-fns';
import Project from './project'
import Todo from './todo';

const projects = [];

function pageLoad(){
    console.log("Page Load");
    modalEvent();
    
}

function createTodoList(){
    const heading = document.querySelector(".list-heading");

}

function modalEvent(){
    const addBtn = document.querySelector("#add-button");
    const modal = document.querySelector(".project-modal-container");
    const form = document.querySelector("form");

    form.onsubmit = (event) =>{
        event.preventDefault();
        projects.push(addNewProject());
        modal.style.visibility = "hidden";
        form.reset();
        updateDisplay();
    }

    window.onclick = (event) => { 
        if(event.target == modal){
            modal.style.visibility = "hidden";
            form.reset();
        }
    }
    addBtn.onclick = () =>{
        modal.style.visibility = "visible";
}

function addNewProject(){
    var title = document.getElementById('title').value;
    return new Project(title);
}

function updateDisplay()
{
    
    const sidebar = document.querySelector('.projects-list');
    sidebar.textContent = "";
    projects.forEach(project => {
        var li = document.createElement('li');
        li.classList.add('projects')
        li.textContent = project.name;
        var count = document.createElement('div');
        count.textContent = project.count;
        count.classList.add('todo-count');

        li.appendChild(count);
        sidebar.appendChild(li);
    });
}

function createAddButton(){


/*         const project = document.createElement('li');
        project.classList.add('projects')
        project.textContent = "test";
        const count = document.createElement('div');
        count.classList.add('todo-count');
        const sidebar = document.querySelector('.sidebar');
        project.appendChild(count);
        sidebar.appendChild(project); */
    };
}

export default pageLoad;