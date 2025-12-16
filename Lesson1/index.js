const totalPrice = 5000;
let accountBalance = 4500;
const isVip = true;
if (accountBalance >= totalPrice || (isVip && accountBalance >= totalPrice * 0.9)) {
    if(!isVip) {
    accountBalance -= totalPrice;
    console.log(`Оставшийся баланс: ${accountBalance}`);
    }
    else {
        accountBalance -= totalPrice * 0.9;
        console.log(`Оставшийся баланс: ${accountBalance}`);
    }
} else {
    console.log('Недостаточно средств');
}