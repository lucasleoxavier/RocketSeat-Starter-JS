var inputElement = document.getElementById('nome');
var tagName = document.getElementsByTagName('input');
var querySelector = document.querySelector('body div#app input');
var querySelector2 = document.querySelector('input[name=nome]');

var btnelement = document.querySelector('button.botao');

btnelement.onclick = function() {
    alert('texto do input= '+querySelector2.value);
}

console.log(inputElement);
console.log(tagName);
console.log(querySelector);
