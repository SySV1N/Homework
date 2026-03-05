"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TurnEverythingOff {
    musicPlayer;
    light;
    buttonId = '6';
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
exports.default = TurnEverythingOff;
