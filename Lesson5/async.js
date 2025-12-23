//Все разделил пробелами по блокам для наглядности

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); //Задали промис с задержкой

const cookDinner = async(isGasOn) => { //Задали функцию готовки
    
    try{ //Задали, что делать

        if (!isGasOn) { //Проверили газ (сделал с фигурными для наглядности)
        throw new Error(`Нет газа!`); //Вбросили ошибку на случай, если газа нет
        };
        
        console.log(`Включаю плиту...`);
        await sleep(1000);

        console.log(`Режу овощи...`);
        await sleep(2000);

        console.log(`Готовлю суп...`);
        await sleep(3000);

        console.log(`Ужин готов!`);
        
    } catch(err) { //Задали формат вывода сообщения с ошибкой

        console.log(`❌ Ошибка на кухне:`, err.message); 

    };
    
};

cookDinner(true); //Вызвали функцию