"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bot {
    commands = new Map();
    registerCommand(command) {
        this.commands.set(command.commandName, command);
    }
    onMessage(text) {
        const command = this.commands.get(text);
        if (command) {
            command.execute();
        }
        else {
            console.log("Неизвестная команда");
        }
    }
}
exports.default = Bot;
