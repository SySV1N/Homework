import { ICommand } from "../../typings";
import MusicPlayer from "../../structures/MusicPlayer";
import Light from "../../structures/Light";

export default class LightOffMusicOn implements ICommand {
    public buttonId = '8';
    
    constructor (
        private musicPlayer: MusicPlayer,
        private light: Light,
    ) {};

    execute(): void {
        this.musicPlayer.play();
        this.light.turnOn();
    }
}