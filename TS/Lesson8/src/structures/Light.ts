import { ICommand } from "../typings";

export default class Light {
    turnOn(){
        console.log(`Свет включен!`)
    };

    turnOff() {
        console.log(`Свет выключен`);
    }
}