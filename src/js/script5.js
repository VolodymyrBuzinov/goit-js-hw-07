// Напиши скрипт
// который, при
// наборе текста
// в инпуте input#name -
//     input(событие input),
//     подставляет его текущее значение в
// span#name - output.Если
// инпут пустой, в
// спане должна отображаться строка 'незнакомец'.

let getInputValue = document.querySelector('#name-input');
let getOutputValue = document.querySelector('#name-output');

getInputValue.oninput = function () {
  if (getInputValue.value === '') {
    getOutputValue.innerHTML = 'незнакомец';
  } else {
    getOutputValue.innerHTML = getInputValue.value;
  }
};
