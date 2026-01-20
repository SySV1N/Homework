const pinCodes = ['1111', '5678', '1234', '9999'];
const myPin = '1234';

for (const pinCode of pinCodes) {
    if (pinCode === myPin) {
        console.log(`Пин-код найден!`);
        break;
    }
    console.log(`Неверный пин: ${pinCode}`);
}
