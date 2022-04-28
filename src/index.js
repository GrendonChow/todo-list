console.log("test");
const test = document.createElement('div');
test.classList.add('side-heading')
test.innerHTML = "test";
const test2 = document.createElement('div');
test2.classList.add('todo-count');
const list = document.createElement('li');
const container = document.querySelector('.projects-container');
list.appendChild(test);
list.appendChild(test2);
container.appendChild(list);