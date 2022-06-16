import './scss/styles.scss';
import "./menu.json";
import './themes';
import './refs';
import './templates/menu.handlebars';

// let markup = handleBarMenu(menu);
// refs.jsMenu.innerHTML = markup;

// Импортируем шаблон
import cardsTemplate from './templates/menu.handlebars';
// Импортируем массив данных
import menu from './menu.json'

// Применяем шаблон для массива данных
const markup = cardsTemplate(menu);

// Находим элемент в DOM и добавляем разметку
const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);