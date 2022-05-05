import Project from './project'

function pageLoad(){
    console.log("Page Load");
    var proj = new Project("test");
    proj.addTodo("0");
    proj.addTodo("1");
    proj.addTodo("2");
    console.log(proj.todo);
    proj.removeTodo(1);
    console.log(proj.todo);
}
export default pageLoad;