const ages = [10, 18, 55, 3, 20]; // Задали массив

const checkAccess = (ages) => { // Задали функцию
    for (const age of ages) { // Прогоняем аргументы из массива
        if (age > 18) {
            console.log (`Возраст: ${age}. Доступ разрешен`);
        } else {
            console.log (`Возраст ${age}. Доступ запрещен`);
        } 
    }
}

checkAccess(ages) // Вызвали функцию