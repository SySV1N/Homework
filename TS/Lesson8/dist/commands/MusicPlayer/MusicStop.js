"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MusicStop {
    musicPlayer;
    buttonId = '4';
    constructor(musicPlayer) {
        this.musicPlayer = musicPlayer;
    }
    ;
    execute() {
        this.musicPlayer.stop();
    }
}
exports.default = MusicStop;
