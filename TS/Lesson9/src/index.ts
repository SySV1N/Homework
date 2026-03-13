//Паттерн Strategy

interface IDiscountStrategy {
    applyDiscount(amount:number): number;
};

class NoDiscount implements IDiscountStrategy {
    applyDiscount(amount: number): number {
        const result = amount;
        console.log(result);
        return result;
    };
};

class BlackFridayDiscount implements IDiscountStrategy {
    applyDiscount(amount: number): number {
        const result = amount * 0.5;
        console.log(result);
        return result;
    };
};

class VipClientDiscount implements IDiscountStrategy {
    applyDiscount(amount: number): number {
        const result = amount * 0.8;
        console.log(result);
        return result;
    };
};

class Cart {
    constructor(
        private _discount: IDiscountStrategy,
    ) {};

    setDiscount(discount: IDiscountStrategy) {
        this._discount = discount;
    };

    checkout(amount:number) {
        this._discount.applyDiscount(amount);
    };
};

const myCart = new Cart(new NoDiscount());


myCart.checkout(100);
myCart.setDiscount(new BlackFridayDiscount());
myCart.checkout(100);
myCart.setDiscount(new VipClientDiscount());
myCart.checkout(100);

//Паттерн Observer 

//Что под капотом?

interface ISubscriber {
    publishNews(headLine: string): void;
};

interface IPublisher {
    subscribe(observer: ISubscriber): void;
    unsubscribe(observer: ISubscriber): void;
    publishNews(headLine: string): void;
};

class NewsAgency implements IPublisher {

    private _subscribers: ISubscriber[] = []; //Добавил поле подписчиков

    public subscribe(observer: ISubscriber): void {
        this._subscribers.push(observer);
    };
    public unsubscribe(observer: ISubscriber): void {
        this._subscribers = this._subscribers.filter((sub) => sub !== observer);
    };
    public publishNews(headLine: string): void {
        for (const sub of this._subscribers) {
            sub.publishNews(headLine);
        }
    };
};

class TelegramBotSubscriber implements ISubscriber {
    publishNews(headLine: string): void {
        console.log(`Рассылка в ТГ: ${headLine}`);
    };
};

class WebsiteSubscriber implements ISubscriber {
    publishNews(headLine: string): void {
        console.log(`Обновление на сайте: ${headLine}`);
    };
};

const newsAgency = new NewsAgency();
const telegramBotSubscriber = new TelegramBotSubscriber();
const websiteSubscriber = new WebsiteSubscriber();

newsAgency.subscribe(telegramBotSubscriber); //Подписали обоих 
newsAgency.subscribe(websiteSubscriber);

newsAgency.publishNews(`Подписали обоих`); //Опубликовали новость

newsAgency.unsubscribe(telegramBotSubscriber); //Отписали телегу

newsAgency.publishNews(`Отписали телегу`); //Опубликовали новость уже без телеги:(

//Реализация паттерна Observer через тулсы, которые для нас заботливо написали другие прогеры

import {EventEmitter} from "events";



