"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LightOnMusicOff {
    musicPlayer;
    light;
    buttonId = '7';
    constructor(musicPlayer, light) {
        this.musicPlayer = musicPlayer;
        this.light = light;
    }
    ;
    execute() {
        this.musicPlayer.stop();
        this.light.turnOn();
    }
}
exports.default = LightOnMusicOff;
