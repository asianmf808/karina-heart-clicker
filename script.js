const girl = document.getElementById('girl');
const game = document.getElementById('game');

const heartImages = ['heart1.png', 'heart2.png'];

const meow = new Audio('meow.mp3');

girl.addEventListener('click', () => {
  // звук
  meow.currentTime = 0;
  meow.play();

  // создаём сердечко
  const heart = document.createElement('img');
  heart.classList.add('heart');

  // случайная картинка
  const randomHeart =
    heartImages[Math.floor(Math.random() * heartImages.length)];
  heart.src = randomHeart;

  // позиция кнопки
  const rect = girl.getBoundingClientRect();
  const gameRect = game.getBoundingClientRect();

  // РАЗБРОС
 const spreadX = (Math.random() - 0.5) * 80;
const spreadY = (Math.random() - 0.5) * 40;

  const x =
    rect.left - gameRect.left + rect.width / 2 + spreadX;
  const y =
    rect.top - gameRect.top + rect.height / 2 + spreadY;

  heart.style.left = x + 'px';
  heart.style.top = y + 'px';

  // размер
  const size = 20 + Math.random() * 30;
  heart.style.width = size + 'px';

  game.appendChild(heart);

  // удалить позже
  setTimeout(() => {
    heart.remove();
  }, 2500);
});
