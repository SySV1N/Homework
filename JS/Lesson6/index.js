//В этом репозитории лежит картинка-пруф того, что с телефона я смог зайти на сайт

const http = require("http"); //Вызвал библиотеку
const PORT = 3000; //Задал порт
const git = `https://github.com/SySV1N`; // Задал ссылку на гит

let serverInfo = { //Создал объект с информацией
    serverName: "MyPC",
    version: "1.0.0",
    status: "working"
};

const server = http.createServer(async (request, response) => { //Задал сервер
    response.setHeader("Content-Type", "text/plain; charset=utf-8"); //Задал название и значение заголовка

    if (request.url === `/`) { //Указал ссылку
        response.statusCode = 200; //Задал ответ код "ОК"
        response.write(`Меня зовут Глеб\n`); //Задал ответ строкой
        response.write(`Ссылка на мой гит:  ${git}`); //Задал ответ строкой
        response.end(); //Завершил ответ

    } else if (request.url === `/api/info`) { //Указал ссылку
        
        response.setHeader("Content-Type", "application/json; charset=utf-8"); //Задал название и значение заголовка для конкретного if
        
        response.statusCode = 200; //Задал ответ код "ОК"
        response.write(JSON.stringify(serverInfo)); //Переделал переменную в строку, чтобы браузер меня понял
        response.end(); //Завершил ответ
    } else {
        response.statusCode = 404; //Задал ответ код "Страница не найдена"
        response.write('Страница не найдена'); //Задал ответ строкой
        response.end(); //Завершил ответ
    }
});
server.listen(PORT); //Поднял сервер, указав порт
console.log(`Сервер был успешно запущен`); //Сообщение о запуске сервера