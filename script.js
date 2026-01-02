const girl = document.getElementById('girl');
const game = document.getElementById('game');
const meow = document.getElementById('meow');

girl.addEventListener('click', () => {
  // воспроизведение звука
  meow.currentTime = 0;
  meow.play();

  // создаём сердечко
  const heart = document.createElement('img');
  heart.classList.add('heart');

  // случайный выбор сердечка
  heart.src = Math.random() < 0.5 ? 'heart1.png' : 'heart2.png';

  // случайная позиция внутри кнопки
  const x = Math.random() * girl.offsetWidth - 20;
  const y = Math.random() * girl.offsetHeight - 20;
  heart.style.left = `${girl.offsetLeft + x}px`;
  heart.style.top = `${girl.offsetTop + y}px`;

  game.appendChild(heart);

  // удаляем сердечко через 2 секунды
  setTimeout(() => {
    heart.remove();
  }, 2000);
});
