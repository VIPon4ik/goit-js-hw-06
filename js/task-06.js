const inputElem = document.querySelector('input');
const inputLength = inputElem.dataset.length;

inputElem.addEventListener('blur', () => {
    if (inputElem.value.length === Number(inputLength)) {
        inputElem.classList.remove('invalid');
        inputElem.classList.add('valid')
        return;
    }

    inputElem.classList.add('invalid');
})