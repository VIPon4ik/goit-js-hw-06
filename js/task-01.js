const listElem = document.querySelector('#categories');
const liElemList = document.querySelectorAll('.item');

console.log(`Number of categories: ${listElem.childElementCount}`);

liElemList.forEach((elem) => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${elem.lastElementChild.childElementCount}`);
})