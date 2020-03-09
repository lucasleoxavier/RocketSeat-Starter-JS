// Exercicio 01

/*
var btnElement = document.querySelector('.botaoBox');
console.log(btnElement);

btnElement.onclick = function () {
    console.log(btnElement);
    var div = document.querySelector('.box');

    var box = document.createElement('div');
    box.setAttribute('class','button box');

    box.style.width = 100;
    box.style.height = 100;
    box.style.backgroundColor = 'red';

    div.appendChild(box)
}
*/

// Exercício 02
/*
var btnElement = document.querySelector('.botaoBox');

btnElement.onclick = function () {
    var div = document.querySelector('.box');

    var box = document.createElement('div');
    box.setAttribute('class', 'button box');

    box.style.width = 100;
    box.style.height = 100;
    box.style.backgroundColor = 'red';

    div.appendChild(box)
    div.appendChild(document.createElement('br'));

    box.onmouseover = function () {
        box.style.backgroundColor = getRandomColor();
    }
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
*/

// Exercício 03
/*
var nomes = ["Diego", "Gabriel", "Lucas"];
var div = document.querySelector('.lista');
var list = document.createElement('ul');

div.appendChild(list);

for (var i = 0; i < nomes.length; i++) {
    var nomeElement = document.createElement('li');
    nomeElement.textContent = nomes[i];
    list.appendChild(nomeElement);
}
*/

// Exercício 04
// Exercício 03
var nomes = ["Diego", "Gabriel", "Lucas"];
var div = document.querySelector('.lista');
var list = document.createElement('ul');

div.appendChild(list);

for (var i = 0; i < nomes.length; i++) {
    var nomeElement = document.createElement('li');
    nomeElement.textContent = nomes[i];
    list.appendChild(nomeElement);
}

function adicionar() {
    var nomeElement = document.createElement('li');
    var nomeInput = document.getElementsByName("nome")[0];
    nomeElement.textContent = nomeInput.value;
    list.appendChild(nomeElement);
    nomeInput.value = "";
}

