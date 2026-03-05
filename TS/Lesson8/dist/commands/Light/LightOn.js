"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LightOn {
    light;
    buttonId = '1';
    constructor(light) {
        this.light = light;
    }
    ;
    execute() {
        this.light.turnOn();
    }
}
exports.default = LightOn;
