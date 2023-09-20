const decrementButt = document.querySelector('button[data-action="decrement"]');
const incrementButt = document.querySelector('button[data-action="increment"]');
const textElem = document.querySelector('#value');
let counterValue = 0;

decrementButt.addEventListener('click', () => {
    counterValue--;
    textElem.textContent = counterValue;
});

incrementButt.addEventListener('click', () => {
    counterValue++;
    textElem.textContent = counterValue;
})
