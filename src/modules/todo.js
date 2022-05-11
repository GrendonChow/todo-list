export default class Todo{
    constructor(title, details, dueDate, priority){
        this.title = title;
        this.details = details;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    get title(){
        return this._title;
    }

    get details(){
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

    set details(details){
        this._details = details;
    }

    set dueDate(dueDate){
        this._dueDate = dueDate;
    }

    set priority(priority){
        this._priority = priority;
    }
}