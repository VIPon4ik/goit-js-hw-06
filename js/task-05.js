const inputElem = document.querySelector('input');
const textElem = document.querySelector('#name-output');

inputElem.addEventListener('input', () => {
    if (!inputElem.value) {
        textElem.textContent = 'Anonymous';
        return;
    }

    textElem.textContent = inputElem.value;
})