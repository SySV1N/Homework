const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const PORT = 3000;

const MIME_TYPES = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".json": "application/json",
    ".mp4": "video/mp4",
};

const server = http.createServer((request, response) => {
    
    console.log(`Запрос ${request.url}`);
    
    let url;

    if (request.url === `/`) {
        url = "/index.html";
    } else if (request.url === "/rules.html" || request.url === "/style.css" || request.url === "/video.mp4") {
        url = request.url;
    } else {
        url = "/404.html";
    };
    
    console.log(url)
    //Формируем путь к файлу на диске
    const filePath = path.join(__dirname, "public", url);
    //console.log(`1. Сформированный путь: ${filePath}`);

    //Определяем расширение файла(.css, .html, .js etc)
    const extname = path.extname(filePath);
    //console.log(`2. Расширение файла: ${extname}`);

    const contentType = `${MIME_TYPES[extname]}; charset=utf-8` || `text/plain; charset=utf-8`; //Сюда передаем из переменной, определяемой extname, обращаясь к ключу или просто текст
    //console.log(`3. Содержимое contentType: ${contentType}`);

    const fileStream = fs.createReadStream(filePath); //Создаем поток чтения

    response.setHeader('Content-Type', `${contentType}`); //Ставим правильный заголовок

    fileStream.pipe(response);

    fileStream.on('error', (err) => {
        response.statusCode = 404;
        response.end();
    });


});

server.listen(PORT);
console.log(`Сервер был запущен на адресе http://localhost:${PORT}`);
