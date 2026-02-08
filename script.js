// Твой исходный код, но без строк, портящих качество кнопки
let hearts = 0;
const heartsElement = document.getElementById('hearts');
const clickButton = document.getElementById('clickButton');

// Функция обновления счётчика
function updateHearts() {
    heartsElement.textContent = hearts + ' hearts';
}

// Обработчик клика - ТОЛЬКО увеличивает счётчик
clickButton.addEventListener('click', function() {
    hearts += 1; // Одно сердце за клик
    updateHearts();
});

// Обработчик для мобильных устройств
clickButton.addEventListener('touchstart', function(event) {
    event.preventDefault(); // Чтобы не было выделения
    hearts += 1;
    updateHearts();
});

// Инициализация
updateHearts();

