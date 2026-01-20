const http = require("node:http");
const PORT = 3000;

const server = http.createServer(async(request, response) => {
    if (request.method === 'GET' && request.url === '/') {

        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        response.writeHead(200); //Можно и response.statusCode, одно и то же

        //Кнопка отправить
        response.end(`                              
            <form action="/save" method="POST">
                <input name="username" placeholder="Ваше имя" />
                <button type="submit">Отправить</button>
            </form>
        `);
    } else if (request.method === `POST` && request.url ===`/save`) {
        const body = []; //Сделали массив для сборки чанков

        request.on('data', (chunk) => {
            body.push(chunk); //Метод для закидывания чанков в массив
            const decodedChunk = decodeURIComponent(chunk); //Антишиза в сервер для чанка
            console.log(`Прилетел кусочек данных: ${decodedChunk}`);
        });

        request.on('end', () => {

            // chunk1 + chunk 2... [chunk1 (Buffer {4e, 5t}), chunk2]
            const parsedBody = Buffer.concat(body).toString('utf-8'); //Прилетело в 16-ном коде, надо превратить в строку. Функция конкат соединяет массив в лист, а tostring - потом в строку
            const decodedString = decodeURIComponent(parsedBody); //Декодирует шизу в кириллицу

            console.log(`Полное тело запроса будет ${decodedString}`); //Антишиза в сервер

            response.setHeader('Content-Type', 'text/plain; charset=utf-8');
            response.writeHead(200);

            response.end(`Данные получены! Вы прислали: ${decodedString}`); //Антишиза в браузер
        });
    } else if (request.method === 'GET' && 
        (request.url === '/weather')) {

        const data = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true'); //Берем данные с API
        const jsonData = await data.json(); //Превращаем json-строчку в js-объект {temperature: ..., windspeed: ...}

        console.log(jsonData); //Можем узнать поля объектов, чтобы потом запросить
        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        response.statusCode = 200;

        //console.log(jsonData.temperature);
        //console.log(jsonData.windspeed);

        response.end(`<h1>В Берлине сейчас ${jsonData.current_weather.temperature} градусов, ветер ${jsonData.current_weather. windspeed} км/ч</h1>`);

        //response.end(`<h1>Количество серверов на данный момент: ${jsonData.servers}</h1>`);
    }
});

server.listen(PORT);
console.log(`Сервер был запущен по адресу: http://localhost:${PORT}`);