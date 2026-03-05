"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TurnEverythingOn {
    musicPlayer;
    light;
    buttonId = '5';
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
exports.default = TurnEverythingOn;
