var linkElement = document.createElement('a');
linkElement.href = "www.google.com"

var textElement = document.createTextNode('site daora');
linkElement.appendChild(textElement)

var container = document.getElementById('app');
container.appendChild(linkElement);