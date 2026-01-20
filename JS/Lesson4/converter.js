const usdCourse = 90; // Задал курс валют
const euroCourse = 100;

const product = (a, b) => a * b; // Для практики ввел функцию произведения

const usdToRub = (usd) => { // Функция конвертации доллара
    return (` ${usd}$ = ${product(usdCourse, usd)} руб.`);
}

const euroToRub = (euro) => { // Функция конвертации евро
    return (`${euro}€ = ${product(euroCourse, euro)} руб.`);
}

console.log(usdToRub(10),'\n', euroToRub(20)); // Вывод калькуляций
