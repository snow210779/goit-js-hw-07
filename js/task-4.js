const userForm = document.querySelector('.login-form');

userForm.addEventListener('submit', handleForm);

function handleForm(event) {
  event.preventDefault();

  const inputValue = event.currentTarget.elements;

  const emailValue = inputValue.email.value.trim();
  const passwordValue = inputValue.password.value.trim();
  if (emailValue === '' || passwordValue === '') {
    return alert('All form fields must be filled in');
  }

  const infoInputValue = {
    email: emailValue,
    password: passwordValue,
  };
  console.log(infoInputValue);

  event.target.reset();
}
