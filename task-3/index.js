//Задание 3
// Есть такая верстка:
//
// <div>
//   <span id="minutes">00</span>:
//   <span id="seconds">00</span>
// </div>
// <button id="start">Start</button>
// <button id="pause">Pause</button>
// <button id="pause">Reset</button>
//
// Необходимо написать "таймер", который будет запускаться при нажатии кнопки "Start",
// приостанавливаться на "Pause", и сбрасываться на "Reset".
//
// Указания:
// ●	Один раз в секунду будет запускаться функция, которая должна обновлять текст в div id="seconds", прибавлять единицу.
// ●	Вы можете пользоваться функцией "дополнить нулями" из одного из прошлых примеров в раздатках,
// чтобы выводить числа "01, 02, 03" и т.п.
// ●	Когда число в секундах станет равным 60, нужно увеличить счетчик "минут" на единицу, а счетчик секунд сбросить на 0.
// ●	Кнопка "сброса" сбрасывает таймер на 00:00
// ●	Можете дополнительно стилизовать таймер и кнопки, чтобы выглядело красиво. Если нужно,
// можно модифицировать разметку как угодно.

// const min = document.querySelector('#minutes');
// const sec = document.querySelector('#seconds');
// const Start = document.getElementById('start');
// const Pause = document.getElementById('pause');
// const Reset = document.getElementById('reset');

// function tick() {
//     seconds.textContent = (+seconds.textContent + 1).toString().padStart(2, "0");
//     if (+seconds.textContent === 60) {
//         minutes.textContent = (+minutes.textContent + 1).toString().padStart(2, "0");
//         seconds.textContent = "00";
//     }
// }
//
// let intervalId,
//     minutes = document.getElementById("minutes"),
//     seconds = document.getElementById("seconds"),
//     start = document.getElementById("start"),
//     pause = document.getElementById("pause"),
//     reset = document.getElementById("reset");
//
// start.addEventListener("click", start_click);
// pause.addEventListener("click", pause_click)
// reset.addEventListener("click", reset_click);
// pause.disabled = true;
// reset.disabled = true;
// minutes.nextSibling.textContent = ":"; // Удалить лишний пробел
//
// function start_click() {
//     intervalId = setInterval(tick, 1000);
//     start.disabled = true;
//     pause.disabled = false;
//     reset.disabled = false;
// }
// function pause_click() {
//     clearInterval(intervalId);
//     start.disabled = false;
//     pause.disabled = true;
//     reset.disabled = true;
//     document.getElementById("start").classList.remove("disabled");
// }
// function reset_click() {
//     clearInterval(intervalId);
//     minutes.textContent = "00";
//     seconds.textContent = "00";
//     start.disabled = false;
//     pause.disabled = true;
//     reset.disabled = true;
// }