export default class Project {
    constructor(name)
    {
        this.name = name;
        this.todo = [];
    }

    addTodo(todo){
        this._todo.push(todo);
    }

    removeTodo(index){
        this._todo.splice(index, 1);
    }
    get count(){
        return this._todo.length;
    }

    get todo(){
        return this._todo;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    set todo(todo){
        this._todo = todo;
    }
}