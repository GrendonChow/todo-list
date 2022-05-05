export default class Todo{
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    get title(){
        return this._title;
    }

    get description(){
        return this._description;
    }

    get dueDate(){
        return this._dueDate;
    }

    get priority(){
        return this._priority;
    }

    set title(title){
        this._title = title;
    }

    set description(description){
        this._description = description;
    }

    set dueDate(dueDate){
        this._dueDate = dueDate;
    }

    set priority(priority){
        this._priority = priority;
    }
}