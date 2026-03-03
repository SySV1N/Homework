//Система уведомлений

abstract class Notification { //Сделали абстрактный класс (шаблон для классов)
  protected recipient: string
  constructor(recipient:string) {
    this.recipient = recipient;
  };
  abstract send(message:string):void;
};

class EmailNotification extends Notification {
  constructor(recipient: string) {
    super(recipient);
  };
  send(message: string) {
    console.log(`Отправка email на ${this.recipient}: ${message} `)
  };
};

class SmsNotification extends Notification {
  constructor(recipient:string) {
    super(recipient);
  };
  send(message:string) {
    if (message.length > 100) {
      console.log(`Ошибка: SMS слишком длинное!`)
    } else {
      console.log(`Отправка SMS на ${this.recipient}: ${message}`)
    };
  };
};

const emailNotification = new EmailNotification('system3224@gmail.com');
const smsNotification = new SmsNotification(`+72283224939`);

emailNotification.send(`Проверка почты`);
smsNotification.send(`Проверка номера`);

//Полиморфизм

const notifications: Notification [] = [ 
  new EmailNotification(`system3224@gmail.com`), 
  new SmsNotification(`+72283224939`),
];

notifications.forEach(n => n.send(`Привет! Это тест!`));
