"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RemoteControl {
    commands = new Map();
    setCommand(buttonId, command) {
        this.commands.set(command.buttonId, command);
    }
    pressButton(buttonId) {
        const command = this.commands.get(buttonId);
        if (command) {
            command.execute();
        }
        else {
            console.log("Нет такой кнопки");
        }
    }
}
exports.default = RemoteControl;
