import { ICommand } from "../../typings";
import MusicPlayer from "../../structures/MusicPlayer";
import Light from "../../structures/Light";

export default class TurnEverythingOff implements ICommand {
    public buttonId = '6';
    
    constructor (
        private musicPlayer: MusicPlayer,
        private light: Light,
    ) {};

    execute(): void {
        this.musicPlayer.stop();
        this.light.turnOff();
    }
}