// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const button = {
  incr: document.querySelector("[data-action='increment']"),
  decr: document.querySelector("[data-action='decrement']"),
  span: document.querySelector('#value'),
};

let total = 0;
const increment = () => {
  total += 1;
  button.span.textContent = total;
};

const decrement = () => {
  total -= 1;
  button.span.textContent = total;
};

button.incr.addEventListener('click', increment);
button.decr.addEventListener('click', decrement);
