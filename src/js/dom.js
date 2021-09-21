import Game from './app';

const myGame = new Game();

// создаем параграф
const p = document.createElement('p');
p.textContent = `This is my ${myGame.name}.`;

// создаем элемент заголовка
const heading = document.createElement('h1');
heading.className = 'title';
heading.textContent = 'Webpack5';

// добавляем параграф и заголовок в DOM
const root = document.querySelector('#root');
root.append(heading, p);
