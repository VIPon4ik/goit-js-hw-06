const colorText = document.querySelector('.color');
const buttonElem = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonElem.addEventListener('click', () => {
  const color = getRandomHexColor();

  colorText.textContent = color;
  document.body.style.backgroundColor = color;
})
