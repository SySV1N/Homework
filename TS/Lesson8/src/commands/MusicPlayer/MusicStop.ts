import { ICommand } from "../../typings";
import MusicPlayer from "../../structures/MusicPlayer";

export default class MusicStop implements ICommand {
    public buttonId = '4';
    
    constructor (private musicPlayer: MusicPlayer) {};

    execute(): void {
        this.musicPlayer.stop();
    }
}