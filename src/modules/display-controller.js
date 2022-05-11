import { format } from 'date-fns';
import Project from './project'
import Todo from './todo';

const projects = [];
const forms = {};

function pageLoad(){
    console.log("Page Load");
    createModal();
    modalEvent();

    
}

function createTodoList(){
    const heading = document.querySelector(".list-heading");

}

function addNewProject() {
    var title = document.getElementById('name').value;
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

function createModal(){
    createNewProject();
}

function createNewProject()
{
    //Crates new project modal;
    const projectForm = document.createElement("form");
    const heading = document.createElement("h3");
    const nameInput = document.createElement("input");
    const submitBtn = document.createElement("button");

    heading.textContent = "New Project";
    heading.classList.add("new-project-heading");

    nameInput.classList.add("new-project-input")
    nameInput.required = true;
    nameInput.id = "name";
    nameInput.name = "name";
    nameInput.placeholder = "name";

    submitBtn.classList.add("new-project-btn")
    submitBtn.type = "submit";
    submitBtn.textContent = "Ok";

    projectForm.onsubmit = (event) =>{
        event.preventDefault();
        projects.push(addNewProject());
        modal.style.visibility = "hidden";
        projectForm.reset();
        updateDisplay();
    }
    projectForm.appendChild(heading);
    projectForm.appendChild(nameInput);
    projectForm.appendChild(submitBtn);
    forms['new-project'] = projectForm
}



function modalEvent(){
    const addBtn = document.querySelector("#add-button");
    const modal = document.querySelector(".modal-container");
    const modalContent = document.querySelector(".modal-content");


    window.onclick = (event) => { 
        if(event.target == modal){
            modal.style.visibility = "hidden";
            modalContent.textContent = "";
        }
    }

    addBtn.onclick = () =>{
        modalContent.appendChild(forms['new-project']);
        modal.style.visibility = "visible";
    }
}

export default pageLoad;