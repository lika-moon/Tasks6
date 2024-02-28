// Управление атрибутами
// Вызовспециальныхвызовов (hasAttribute, setAttribute, removeAttributeиgetAttribute)

const buttonPic = document.querySelector('.button-picture');
console.log(buttonPic);
let pictureOnPage = document.querySelector('.picture');
console.log(pictureOnPage);
let buttonDelite = document.querySelector('.button-delite');
console.log(buttonDelite);
let link = document.querySelector('.link');
console.log(link);
let a = document.querySelectorAll('a');
console.log(a);
let buttonAtrebute = document.querySelector('.button-atrebute');
console.log(buttonAtrebute);
let photoCat = document.querySelector('.photo-cat');
console.log(photoCat);
let input = document.querySelector('.input');
console.log(input);
let imgKitty = document.querySelector('.img-kitty');
console.log(imgKitty);
let buttonUpdate = document.querySelector('.button-update');
console.log(buttonUpdate);
let marker = document.querySelectorAll('.marker');
console.log(marker);
let buttonCopy = document.querySelector('.button-copy');
console.log(buttonCopy);
let zoo = document.querySelector('.zoo');
console.log(zoo);
let animal = document.querySelector('.animal');
console.log(animal);

// 1. Проверка наличия атрибута
// Задача: при клике на кнопку проверьте, 
// имеет ли изображение атрибут alt, и выводите результат проверки в консоль.

buttonPic.addEventListener('click', function () {
    console.log(pictureOnPage.hasAttribute('alt'))
})

// 2. Добавление атрибута
// Задача: если у изображения нет атрибута alt, добавьте его с помощью JavaScript,
//  установив значение "Описание изображения".

pictureOnPage.setAttribute('alt', 'Описание изображения');
console.log(pictureOnPage);

//3. Удаление атрибута
// Задача: Добавьте кнопку, которая при нажатии будет удалять атрибут 
// style у заданного элемента, если он существует.
buttonDelite.addEventListener('click', function () {
    console.log(link.hasAttribute('href'))
    console.log(link.removeAttribute('href'))
    console.log(link.hasAttribute('href'))
})

// 4. Получение значения атрибута
// Задача: при нажатии на элемент списка (<li>), выводите в консоль значение его 
// атрибута data-value.

//вытащили все элементы списка маркер
for (let i = 0; i < marker.length; i++) {
    //присвоили эл li слушателя click 
    marker[i].addEventListener('click', function () {
        //вывели значение атрибута 
        console.log(marker[i].getAttribute('data-value'))
    })
}

// 5. Изменение атрибута
// Задача: Реализуйте функционал, который изменяет значение атрибута href у всех ссылок
//  на странице на #.
for (let i = 0; i < a.length; i++) {
    //вытащили все ссылки
    a[i].href;
    //всем ссылкам присвоили значение
    a[i].href = '#';
    console.log(a[i]);
}


// 6. Установка нескольких атрибутов
// Задача: установите одновременно атрибуты width и height для изображения, используя 
// метод setAttribute.
photoCat.setAttribute('class', 'img-cat');
console.log(photoCat);

// // 7. Сброс всех атрибутов элемента
// // Задача: при нажатии на кнопку удаляйте все атрибуты у заданного элемента.
buttonAtrebute.addEventListener('click', function () {
    if (photoCat.classList.contains("img-cat")) {
        photoCat.classList.remove("img-cat");
    }
})
// 8. Изменение атрибута в зависимости от условия
// Задача: если текстовое поле пустое, установите его атрибут placeholder в 
// значение "Введите текст", иначе уберите данный атрибут.
if (input.hasAttribute('placeholder') === false) {
    input.setAttribute('placeholder', 'Введите текст')
}
else { input.removeAttribute('placeholder') }

// 9. Автоматическое обновление изображения
// Задача: Реализуйте кнопку для обновления изображения, изменяя его атрибут src на новый
//  URL-адрес.
// let imgKitty = document.querySelector('.img-kitty');
// console.log(imgKitty);
// let buttonUpdate = document.querySelector('.button-update');
// console.log(buttonUpdate);
buttonUpdate.addEventListener('click', function () {
    console.log(imgKitty.hasAttribute('src'))
    console.log(imgKitty.setAttribute('src', './img/жирный рыжий кот.jpg'))
    console.log(imgKitty.hasAttribute('src'))
    console.log(imgKitty.getAttribute('src'))
})

// 10. Копирование атрибута между элементами
// Задача: при нажатии на кнопку скопируйте значение атрибута data-info из одного 
// элемента в другой.


buttonCopy.addEventListener("click", function () {
    let dataValueZoo
    //проверили есть ли и какое значение у атрибута zoo
    console.log(zoo.hasAttribute('data-info'))
    console.log(zoo.getAttribute('data-info'))
    //проверили есть ли и какое значение у атрибута animal
    console.log(animal.hasAttribute('data-info'))
    console.log(animal.getAttribute('data-info'))
    // создали переменную со значением атрибута zoo
    dataValueZoo = zoo.getAttribute('data-info');
    console.log(dataValueZoo)
    // присвоили атрибуту animal значение атрибута zoo
    console.log(animal.setAttribute('data-info', dataValueZoo))
    // проверили работает ли новое значение
    console.log(animal.getAttribute('data-info'))
});

// 11. Всплывающая подсказка через атрибут title
// Задача: Добавьте всем кнопкам на странице всплывающую подсказку (атрибут title), 
// отображающую их функционал.

buttonPic.addEventListener("mouseover", function () {
    buttonPic.getAttribute('title')
});

buttonDelite.addEventListener("mouseover", function () {
    buttonDelite.getAttribute('title')
});

buttonAtrebute.addEventListener("mouseover", function () {
    buttonAtrebute.getAttribute('title')
});;

buttonUpdate.addEventListener("mouseover", function () {
    buttonUpdate.getAttribute('title')
});

buttonCopy.addEventListener("mouseover", function () {
    buttonCopy.getAttribute('title')
});