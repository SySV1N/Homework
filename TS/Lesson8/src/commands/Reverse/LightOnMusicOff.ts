import { ICommand } from "../../typings";
import MusicPlayer from "../../structures/MusicPlayer";
import Light from "../../structures/Light";

export default class LightOnMusicOff implements ICommand {
    public buttonId = '7';
    
    constructor (
        private musicPlayer: MusicPlayer,
        private light: Light,
    ) {};

    execute(): void {
        this.musicPlayer.stop();
        this.light.turnOn();
    }
}