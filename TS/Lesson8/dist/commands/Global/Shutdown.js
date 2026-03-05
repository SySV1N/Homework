"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShutDown {
    musicPlayer;
    light;
    buttonId = '5';
    constructor(musicPlayer, light) {
        this.musicPlayer = musicPlayer;
        this.light = light;
    }
    ;
    execute() {
        this.musicPlayer.stop();
        this.light.turnOff();
    }
}
exports.default = ShutDown;
