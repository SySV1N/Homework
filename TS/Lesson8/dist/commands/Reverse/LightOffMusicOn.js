"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LightOffMusicOn {
    musicPlayer;
    light;
    buttonId = '8';
    constructor(musicPlayer, light) {
        this.musicPlayer = musicPlayer;
        this.light = light;
    }
    ;
    execute() {
        this.musicPlayer.play();
        this.light.turnOn();
    }
}
exports.default = LightOffMusicOn;
