document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalAudio = document.getElementById('modal-audio');
    const audioSource = document.getElementById('audio-source');
    const closeBtn = document.querySelector('.close');

    // Генерация цифр и привязка фото и музыки
    for (let i = 1; i <= 69; i++) {
        const numberElement = document.createElement('div');
        numberElement.className = 'number';
        numberElement.textContent = i;

        numberElement.addEventListener('click', () => {
            openModal(i, numberElement);
        });

        grid.appendChild(numberElement);
    }

    // Открытие модального окна
    function openModal(number, element) {
        const photoPath = `./фотокарточки/${number}.jpg`;
        const audioPath = `./аудиоСАЙТ/${number}.mp3`;

        modalImage.src = photoPath;
        modalImage.onload = () => {
            const maxWidth = window.innerWidth * 0.9;
            const maxHeight = window.innerHeight * 0.9;

            if (modalImage.width > maxWidth || modalImage.height > maxHeight) {
                modalImage.style.width = `${maxWidth}px`;
                modalImage.style.height = `${maxHeight}px`;
            } else {
                modalImage.style.width = '';
                modalImage.style.height = '';
            }
        };

        audioSource.src = audioPath;
        modalAudio.load();  // Загрузка нового аудио
        modal.style.display = 'flex';
        element.classList.add('clicked'); // Отмечаем цифру как выбранную
    }

    // Закрытие модального окна
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        modalAudio.pause();  // Остановить музыку при закрытии
    });

    // Закрытие модального окна при клике вне окна
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            modalAudio.pause();
        }
    });
});
