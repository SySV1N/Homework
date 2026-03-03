"use strict";
//Паттерн Factory Method
Object.defineProperty(exports, "__esModule", { value: true });
;
class PayPalProcessor {
    pay(amount) {
        console.log(`Оплата ${amount} через PayPal (комиссия 5%)`);
    }
    ;
}
;
class StripeProcessor {
    pay(amount) {
        console.log(`Оплата ${amount} через Stripe (комиссия 2%)`);
    }
    ;
}
;
class PaymentGateway {
    processorOrder(amount) {
        const processor = this.createProcessor();
        processor.pay(amount);
    }
    ;
}
;
class PayPalGateway extends PaymentGateway {
    createProcessor() {
        return new PayPalProcessor();
    }
    ;
}
;
class StripeGateway extends PaymentGateway {
    createProcessor() {
        return new StripeProcessor();
    }
    ;
}
;
const checkOut = (gateway, amount) => {
    gateway.processorOrder(amount);
};
checkOut(new PayPalGateway(), 10);
checkOut(new StripeGateway(), 100);
