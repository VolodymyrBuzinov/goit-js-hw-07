// Напиши скрипт, который бы при потере фокуса на инпуте, проверял
// его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

const getInputValue = document.querySelector('#validation-input');
let totalLenght = getInputValue.getAttribute('data-length');
const isInputValueEntered = document.addEventListener('input', event => {
  event.target.selectionStart >= event.target.dataset.length
    ? getInputValue.classList.add('valid') ||
      getInputValue.classList.remove('invalid')
    : getInputValue.classList.add('invalid');
});
