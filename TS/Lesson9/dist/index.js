"use strict";
//Паттерн Strategy
Object.defineProperty(exports, "__esModule", { value: true });
;
class NoDiscount {
    applyDiscount(amount) {
        const result = amount;
        console.log(result);
        return result;
    }
    ;
}
;
class BlackFridayDiscount {
    applyDiscount(amount) {
        const result = amount * 0.5;
        console.log(result);
        return result;
    }
    ;
}
;
class VipClientDiscount {
    applyDiscount(amount) {
        const result = amount * 0.8;
        console.log(result);
        return result;
    }
    ;
}
;
class Cart {
    _discount;
    constructor(_discount) {
        this._discount = _discount;
    }
    ;
    setDiscount(discount) {
        this._discount = discount;
    }
    ;
    checkout(amount) {
        this._discount.applyDiscount(amount);
    }
    ;
}
;
const myCart = new Cart(new NoDiscount());
myCart.checkout(100);
myCart.setDiscount(new BlackFridayDiscount());
myCart.checkout(100);
myCart.setDiscount(new VipClientDiscount());
myCart.checkout(100);
;
;
class NewsAgency {
    _subscribers = []; //Добавил поле подписчиков
    subscribe(observer) {
        this._subscribers.push(observer);
    }
    ;
    unsubscribe(observer) {
        this._subscribers = this._subscribers.filter((sub) => sub !== observer);
    }
    ;
    publishNews(headLine) {
        for (const sub of this._subscribers) {
            sub.publishNews(headLine);
        }
    }
    ;
}
;
class TelegramBotSubscriber {
    publishNews(headLine) {
        console.log(`Рассылка в ТГ: ${headLine}`);
    }
    ;
}
;
class WebsiteSubscriber {
    publishNews(headLine) {
        console.log(`Обновление на сайте: ${headLine}`);
    }
    ;
}
;
const newsAgency = new NewsAgency();
const telegramBotSubscriber = new TelegramBotSubscriber();
const websiteSubscriber = new WebsiteSubscriber();
newsAgency.subscribe(telegramBotSubscriber); //Подписали обоих 
newsAgency.subscribe(websiteSubscriber);
newsAgency.publishNews(`Подписали обоих`); //Опубликовали новость
newsAgency.unsubscribe(telegramBotSubscriber); //Отписали телегу
newsAgency.publishNews(`Отписали телегу`); //Опубликовали новость уже без телеги:(
//Реализация паттерна Observer через тулсы, которые для нас заботливо написали другие прогеры
const events_1 = require("events");
const eventBus = new events_1.EventEmitter();
eventBus.on('TelegramBot', (headLine) => {
    console.log(`Рассылка в ТГ: ${headLine}`);
});
eventBus.on('Website', (headLine) => {
    console.log(`Обновление на сайте: ${headLine}`);
});
class NewsAgencyEmitter {
    tgPost(headLine) {
        eventBus.emit('TelegramBot', headLine);
    }
    ;
    wsPost(headLine) {
        eventBus.emit('Website', headLine);
    }
    ;
}
;
const newsAgencyEmitter = new NewsAgencyEmitter();
newsAgencyEmitter.tgPost(`Телега`);
newsAgencyEmitter.wsPost(`Сайт`);
