import { format } from 'date-fns';
import Project from './project'
import Todo from './todo';

const projects = [];
const forms = {};
var currSelection;

function pageLoad(){
    currSelection = document.querySelector(".alltodo");
    displaySelection();
    console.log("Page Load");
    createModal();
    modalEvent();
}

function displaySelection()
{
    const heading = document.querySelector('.list-heading');
    const alltodo = document.querySelector(".alltodo");
    heading.textContent = currSelection.getAttribute("data-name");
    console.log(currSelection.getAttribute("data-name"));

    const projects = document.querySelectorAll(".projects");
    projects.forEach((project) => {
        project.classList.remove("current-selection");
    })

    alltodo.classList.remove("current-selection");

    currSelection.classList.add("current-selection");
    currSelection.classList.remove("hover");

}

function addNewProject() {
    var name = document.getElementById('name').value;
    var project;
    if(checkProjectName(name)){
        alert("Project already exists")
        project = null;
    }
    else{
        project = new Project(name);
    }
    return project;
}

//Used to check if a project with matching name exists already
function checkProjectName(name){
    return (projects.filter(e => e.name.toUpperCase() === name.toUpperCase()).length > 0)
}

function updateDisplay()
{
    const sidebar = document.querySelector('.projects-list');
    sidebar.textContent = "";
    projects.forEach(project => {
        var li = document.createElement('li');
        li.classList.add('projects')
        li.classList.add('hover')
        li.textContent = project.name;
        li.setAttribute("data-name", project.name);
        var count = document.createElement('div');
        count.textContent = project.count;
        count.classList.add('todo-count');

        li.onclick = () =>{
            currSelection = li;
            displaySelection();
        }

        li.appendChild(count);
        sidebar.appendChild(li);
    });
}

//Used to create modals to add or edit projects or todo items
function createModal(){
    createNewProject();
    createEditProject();
    createNewTodo();
    createEditTodo();
}

function loadList(name){
    changeSelection(name);

}

function changeSelection(li, name){
    if(currSelection != name)
    {
        const lists = document.querySelectorAll(".projects");
        currSelection = name;
    }

};

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

    projectForm.appendChild(heading);
    projectForm.appendChild(nameInput);
    projectForm.appendChild(submitBtn);
    forms['new-project'] = projectForm
}

function createEditProject(){

};

function createNewTodo(){

};

function createEditTodo(){

};



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

    forms['new-project'].onsubmit = (event,) =>{
        event.preventDefault();
        var proj = addNewProject();
        if(proj != null){
            projects.push(proj);
            updateDisplay();
        }
        modal.style.visibility = "hidden";
        forms['new-project'].reset();

    }
}

export default pageLoad;