const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listElem = document.querySelector('#ingredients');

ingredients.forEach((elem) => {
  const liElem = document.createElement('li');
  liElem.textContent = `${elem}`;
  liElem.classList.add('item');
  listElem.append(liElem);
})