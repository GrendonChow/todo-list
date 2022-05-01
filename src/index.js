console.log("test");
const butt = document.querySelector("#add-button");
butt.onclick = () =>{
    const test = document.createElement('li');
    test.classList.add('projects')
    test.textContent = "test";
    const test2 = document.createElement('div');
    test2.classList.add('todo-count');
    const container = document.querySelector('.sidebar');
    test.appendChild(test2);
    container.appendChild(test);
};
