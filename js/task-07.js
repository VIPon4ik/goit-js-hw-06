const inputElem = document.querySelector('input');
const textElem = document.querySelector('#text');

inputElem.addEventListener('input', () => {
    textElem.style.fontSize = `${inputElem.value}px`;
})