const inputElem = document.querySelector('input');
const createButt = document.querySelector('button[data-create]');
const destroyButt = document.querySelector('button[data-destroy]');
const boxesElem = document.querySelector('#boxes');

let size = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  if (amount > 100) {
    alert('Число не може бути більше 100');
    return;
  }

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    const divElem = document.createElement('div');
    
    divElem.style = `width: ${size}px; height: ${size}px; background-color: ${color}`;
    boxesElem.append(divElem);
    size += 10;
  }
}

function destroyBoxes() {
  boxesElem.innerHTML = '';
  size = 30;
}

createButt.addEventListener('click', () => {
  createBoxes(inputElem.value);
})

destroyButt.addEventListener('click', destroyBoxes);