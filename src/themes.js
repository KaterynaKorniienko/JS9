// Тема
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };


const inputRef = document.querySelector('#theme-switch-toggle');
inputRef.addEventListener('change', changeInput);

// Проверка переключателя
function changeInput(event) {
  event.currentTarget.checked ? checkedInput() : notCheckedInput();
}

  // Тема по умолчанию
function currentTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === Theme.LIGHT || savedTheme === null) {
    notCheckedInput();
    return;
  }

  if (savedTheme === Theme.DARK) {
    checkedInput();
    return;
  }
}

  //Темная тема
function checkedInput() {
  document.body.classList.add(Theme.DARK);
  document.body.classList.remove(Theme.LIGHT);
  localStorage.setItem('theme', Theme.DARK);
  inputRef.checked = true;
}

//Светлая тема
function notCheckedInput() {
  document.body.classList.add(Theme.LIGHT);
  document.body.classList.remove(Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
  inputRef.checked = false;
}

currentTheme();