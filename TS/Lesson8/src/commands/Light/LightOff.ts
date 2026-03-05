import { ICommand } from "../../typings";
import Light from "../../structures/Light";

export default class LightOff implements ICommand {
    public buttonId = '2';
    
    constructor (private light: Light) {};

    execute(): void {
        this.light.turnOff();
    }
}