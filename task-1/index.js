// Задание 1
// На странице есть верстка:
//
// <div id="container"></div>
// <input id="add-item-btn" type="button" value="+">
//
// Необходимо написать скрипт, который при нажатии кнопки "+" добавляет в контейнер новый <div> с классом element и текстом Element.
//
// Результат в инспекторе после трех кликов:
//
// <div id="container">
// 	<div class="element">Element</div>
// 	<div class="element">Element</div>
// 	<div class="element">Element</div>
// </div>
// <input id="btn" type="button" value="+">

function addDiv(){
    let container = document.getElementById('container');
    let div = document.createElement('div');
    div.className = 'element';
    div.innerHTML = 'Element';
    container.append(div)
}
addDiv()






