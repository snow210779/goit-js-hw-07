const inputElement = document.querySelector('#name-input');
const titleElement = document.querySelector('#name-output');

inputElement.addEventListener('input', getUserName);

function getUserName(event) {
  const userName = event.target.value.trim();
  if (userName === '') {
    return (titleElement.textContent = 'Anonymous');
  }
  return (titleElement.textContent = userName);
}
