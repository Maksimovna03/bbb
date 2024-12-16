let tg = window.Telegram.WebApp;

// Функция, отправляющая данные при клике на кнопки
document.getElementById('btn_women').addEventListener('click', () => {
    tg.sendData('Женский парфюм');
    alert('Информация о женском парфюме отправлена!');
});

document.getElementById('btn_men').addEventListener('click', () => {
    tg.sendData('Мужской парфюм');
    alert('Информация о мужском парфюме отправлена!');
});

document.getElementById('btn_unisex').addEventListener('click', () => {
    tg.sendData('Унисекс парфюм');
    alert('Информация об унисекс парфюме отправлена!');
});