const inputElement = document.querySelector('#controls input');
const createBth = document.querySelector('#controls button[data-create]');
const destroyBtn = document.querySelector('#controls button[data-destroy]');

const boxesElement = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  boxesElement.innerHTML = '';
  let boxSize = 30;
  const elements = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxSize += 10;
    elements.push(box);
  }
  boxesElement.append(...elements);
}
function destroyBoxes() {
  boxesElement.innerHTML = '';
}
createBth.addEventListener('click', createBthValidation);
function createBthValidation(event) {
  const amount = Number(inputElement.value.trim());

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputElement.value = '';
  }
}

destroyBtn.addEventListener('click', destroyBoxes);
