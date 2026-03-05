import { ICommand } from "../../typings";
import MusicPlayer from "../../structures/MusicPlayer";

export default class MusicPlay implements ICommand {
    public buttonId = '3';
    
    constructor (private musicPlayer: MusicPlayer) {};

    execute(): void {
        this.musicPlayer.play();
    }
}