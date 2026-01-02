const girl = document.getElementById('girl');
const game = document.getElementById('game');
const meow = document.getElementById('meow');

// Массив сердечек
const hearts = ['heart1.png', 'heart2.png'];

girl.addEventListener('click', () => {
  const heart = document.createElement('img');
  heart.classList.add('heart');

  // Случайная картинка
  heart.src = hearts[Math.floor(Math.random() * hearts.length)];

  // Позиция в пределах кнопки
  const girlRect = girl.getBoundingClientRect();
  const gameRect = game.getBoundingClientRect();

  // Позиция относительно контейнера
  heart.style.left = Math.random() * (girlRect.width - 40) + 'px';
  heart.style.top = Math.random() * (girlRect.height - 40) + 'px';

  game.appendChild(heart);

  // Звук мяу
  meow.currentTime = 0;
  meow.play();

  // Удаление сердечка после анимации
  setTimeout(() => {
    heart.remove();
  }, 2000);
});
