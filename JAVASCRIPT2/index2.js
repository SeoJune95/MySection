var button = document.querySelector(selectors:'button');

button.onclick = function () {
    var name = prompt(message: 'What ios your name?');
    alert('Hello ' + name) + ', nice to see you');
};