"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StartCommand {
    userService;
    commandName = '/start';
    constructor(userService) {
        this.userService = userService;
    }
    ;
    execute() {
        console.log("Привет от Бота, начинаем работу.");
        this.userService.register();
    }
}
exports.default = StartCommand;
