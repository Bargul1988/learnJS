let t = -1;
if (t >= 0 && t < 6) {
    console.log('Доброй ночи');
} else if (t >= 6 && t < 12) {
    console.log('Доброе утроа');
} else if (t >= 12 && t < 18) {
    console.log('Добрый день');
} else if (t >= 18 && t <= 24) {
    console.log('Добрый вечер');
} else {
    console.log('Введите значение t от 0 до 24ч. чтобы узнать какое сейчас время суток');
}