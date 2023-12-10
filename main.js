$(document).ready(function() {
    $(".header__burger").click(function(event) {
        $(".header__burger,.header__menu").toggleClass("active");
        $("body").toggleClass("lock");
    })
})


document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('button');

    // Добавляем обработчики событий на каждую кнопку
    buttons.forEach(function(button, index) {
        button.addEventListener('click', function () {
            activateButton(index);
        });
    });

    // Функция для активации кнопки
    function activateButton(index) {
        // Деактивируем все кнопки
        buttons.forEach(function(button) {
            button.classList.remove('active');
        });

        // Активируем выбранную кнопку
        buttons[index].classList.add('active');

        // Ваш дополнительный код при активации кнопки
        // Например, изменение содержимого какого-то элемента
        var resultElement = document.getElementById('result');
        resultElement.textContent = 'Кнопка ' + (index + 1) + ' активирована!';
    }
});



$(document).ready(function() {
    // Устанавливаем активное состояние по умолчанию для .reproduct__block__info1
    $(".reproduct__block__info1").addClass("active");

    // ... (ваш существующий код)

    $(".reproduct__france").click(function(event) {
        $(".reproduct__block__info1").addClass("active");
        $(".reproduct__block__info2, .reproduct__block__info3").removeClass("active");
    });

    $(".reproduct__germany").click(function(event) {
        $(".reproduct__block__info2").addClass("active");
        $(".reproduct__block__info1, .reproduct__block__info3").removeClass("active");
    });

    $(".reproduct__england").click(function(event) {
        $(".reproduct__block__info3").addClass("active");
        $(".reproduct__block__info1, .reproduct__block__info2").removeClass("active");
    });
});
