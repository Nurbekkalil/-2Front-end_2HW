// Задание 2
// На странице есть верстка:
//
// <div id="container"></div>
// <a id="start">Start</a> |
// <a id="stop">Stop</a>
//
// Необходимо написать функцию, которая каждые пять секунд будет добавлять в контейнер
// тег <div> с классом element, текст элемента - случайное число от 0 до 20.
//
// Результат в инспекторе после 15-ти секунд (числа случайны и могут не совпадать с вашими):
//
// <div id="container">
// 	<div class="element">4</div>
// 	<div class="element">10</div>
// 	<div class="element">8</div>
// </div>
//
//
//
// Указания:
// ●	При нажатии на ссылку "Stop" элементы должны прекратить добавляться
// ●	При нажатии на ссылку "Start" элементы должны снова начать добавляться
// ●	При запуске программы сделать, чтобы элементы начали добавляться.


const list = document.querySelector('#container');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

let interval;

start.onclick = function() {
    interval = setInterval(() => {
        const element = document.createElement('div');
        element.className = 'element';
        const randomNumber = Math.floor(Math.random() * 20);
        element.innerHTML = randomNumber;
        list.append(element);
    }, 1000);
}

stop.onclick = function() {
    clearInterval(interval)
}