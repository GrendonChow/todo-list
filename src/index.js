import pageLoad from './modules/display-controller'

const projects = [];

loadData()
pageLoad();
//Probably dont need dependng on how storage is handled
function loadData(){
    
    console.log("LOAD from local storage");
}
