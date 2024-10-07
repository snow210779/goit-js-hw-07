const bodyColor = document.querySelector('body');
const spanColor = document.querySelector('.color');

const btnClick = document.querySelector('.change-color');

btnClick.addEventListener('click', getRandomHexColor);

function getRandomHexColor(event) {
  const randomColor = `#${Math.floor(Math.random() * 16777215)}`;
  bodyColor.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;

  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
