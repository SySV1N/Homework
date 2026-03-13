"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BalanceCommand {
    userService;
    commandName = '/balance';
    constructor(userService) {
        this.userService = userService;
    }
    ;
    execute() {
        this.userService.showBalance();
    }
}
exports.default = BalanceCommand;
