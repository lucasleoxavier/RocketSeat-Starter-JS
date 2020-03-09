var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var toDos = JSON.parse(localStorage.getItem('list_toDos')) || [];

function renderizarToDos() {

    listElement.innerHTML = "";
    for (toDo of toDos) {
        console.log(toDo)
        var toDoElement = document.createElement('li');
        toDoElement.textContent = toDo;

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href','#');
        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);

        listElement.appendChild(toDoElement);
        toDoElement.appendChild(linkElement );

        var pos = toDos.indexOf(toDo);
        linkElement.setAttribute('onclick', 'removeToDo('+pos+')');
    }
}

function addToDo() {
    var textInputElement = inputElement.value;
    toDos.push(textInputElement);
    renderizarToDos();
    inputElement.value = "";
    saveToStorage();
}

function removeToDo(pos){
    toDos.splice(pos,1);
    renderizarToDos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_toDos',JSON.stringify(toDos));
}


renderizarToDos();

buttonElement.onclick = addToDo;