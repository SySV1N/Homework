//Паттерн Factory Method

interface IPaymentProcessor { //Сделали интерфейс
  pay(amount: number): void;
};


class PayPalProcessor implements IPaymentProcessor { //Первый продукт для дальнейшей фабрики
  pay(amount: number) {
    console.log(`Оплата ${amount} через PayPal (комиссия 5%)`);
  };
};

class StripeProcessor implements IPaymentProcessor { //Второй продукт для дальнейшей фабрики
  pay(amount: number) {
    console.log(`Оплата ${amount} через Stripe (комиссия 2%)`);
  };
};

abstract class PaymentGateway { //Фабрика по созданию экземпляров классов, реализованная через абстрактный класс
  public abstract createProcessor(): IPaymentProcessor;

  public processorOrder(amount:number) {
    const processor= this.createProcessor();

    processor.pay(amount);
  };
};

class PayPalGateway extends PaymentGateway { //Реализация фабрики (первый продукт)
  public createProcessor(): IPaymentProcessor {
    return new PayPalProcessor();
  };
};

class StripeGateway extends PaymentGateway { //Реализация фабрики (второй продукт)
  public createProcessor(): IPaymentProcessor {
    return new StripeProcessor();
  };
};


const checkOut = (gateway: PaymentGateway, amount: number) => { //Клиентский код (фукнция вызова, зависящая от шлюза в пропсе)
  gateway.processorOrder(amount);
};

checkOut(new PayPalGateway(), 10); //Проверяем первый шлюз
checkOut(new StripeGateway(), 100); //Проверяем второй шлюз 
