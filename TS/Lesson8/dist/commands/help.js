"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HelpCommand {
    commandName = '/help';
    execute() {
        console.log("Введи любую команду: /start или /balance");
    }
}
exports.default = HelpCommand;
