import { ICommand } from "../../typings";
import Light from "../../structures/Light";

export default class LightOn implements ICommand {
    public buttonId = '1';
    
    constructor (private light: Light) {};

    execute(): void {
        this.light.turnOn();
    }
}
