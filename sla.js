var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = ''; //limpa tudo que estiver na arvore do html

    for(todo of todos){

        var liElement = document.createElement('li');
        var textNode = document.createTextNode(todo);
        liElement.appendChild(textNode);

        var pos = todos.indexOf(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
        liElement.appendChild(linkElement);

        listElement.appendChild(liElement);
    }
}

renderTodos();

function addTodo(){
    var textTodo = inputElement.value;

    todos.push(textTodo); //adiciona no final do array
    inputElement.value = '';

    renderTodos();
    saveToStorage();
}

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

buttonElement.onclick = addTodo;
