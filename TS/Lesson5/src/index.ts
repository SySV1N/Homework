//Рефакторинг по принципам SOLID

//Что рефакторим?

class OrderSystem {
  processOrder(
    orderId: number,
    paymentType: string,
  ) {
    // 1. Проверка наличия товара
    console.log(`Checking inventory...`);
    // 2. Оплата
    if (paymentType === `card`) {
      console.log(`Charging credit card...`);
    } else if (paymentType === `paypal`) {
      console.log(`Redirecting to PayPal`);
    };
    // 3. Отправка уведомления
    console.log(`Sending email to user...`);
  };
};

//Результат

class InventoryService {
  constructor(
    public orderId?: number,
  ) {};

  check(orderId: number) {
    console.log(`Checking inventory ${orderId}`);
  };
};

interface IPaymentProcessor {
  paymentType: string | number,
};

interface IPayment {
  pay(number: string | number): void;
};

class CardPayment implements IPayment {
  pay(number: string | number) {
    console.log(`Charging credit card ${number}`);
  };
};

class PayPalPayment implements IPayment {
  pay(number: string | number) {
    console.log(`Redirecting to PayPal ${number}`);
  };
};

class NotificationService {
  send(email: string) {
    console.log(`Sending email to user: ${email}`)
  };
};

class OrderHandler {

  constructor(private _inventory: InventoryService, 
              private _payment: IPayment, 
              private _notification: NotificationService,
            ) {};

  handleOrder(orderId: number, paymentType: string | number, email: string) {
    this._inventory.check(orderId);
    this._payment.pay(paymentType);
    this._notification.send(email);
  };
};

const orderTestCard = new OrderHandler(
  new InventoryService(),
  new CardPayment(),
  new NotificationService(),
);

orderTestCard.handleOrder(1, 1, `Hello!`);
