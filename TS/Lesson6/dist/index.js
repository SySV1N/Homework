"use strict";
//LoggerService (Singleton)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
class LoggerService {
    static instance;
    logs;
    constructor(logs) {
        this.logs = logs;
    }
    static getLogs() {
        if (!LoggerService.instance) {
            LoggerService.instance = new LoggerService([]);
        }
        return LoggerService.instance.logs;
    }
    ;
    static log(msg) {
        let current = new Date();
        LoggerService.instance.logs.push(`${msg} Дата: ${current.getDate()}.${current.getMonth()}.${current.getFullYear()} Время: ${current.getHours()}: ${current.getMinutes()}: ${current.getSeconds()}`);
    }
    ;
}
;
console.log(LoggerService.getLogs());
setTimeout(() => { LoggerService.log(`Log1`); }, 2000);
setTimeout(() => { LoggerService.log(`Log2`); }, 4000);
setTimeout(() => { LoggerService.log(`Log3`); }, 6000);
setTimeout(() => { console.log(LoggerService.getLogs()); }, 2100);
setTimeout(() => { console.log(LoggerService.getLogs()); }, 4100);
setTimeout(() => { console.log(LoggerService.getLogs()); }, 6100);
//Улучшенный ConfigService
const dotenv_1 = __importDefault(require("dotenv"));
class ConfigService {
    static instance;
    _config;
    constructor() {
        const cfg = dotenv_1.default.config();
        if (cfg.error) {
            throw new Error(`Не найден файл .env`);
        }
        ;
        if (!cfg.parsed) {
            throw new Error(`Пустой файл .env`);
        }
        this._config = cfg.parsed;
    }
    static getInstance() {
        if (!ConfigService.instance) {
            ConfigService.instance = new ConfigService();
        }
        return ConfigService.instance;
    }
    get(key) {
        const response = this._config[key];
        if (!response) {
            throw new Error(`Нет такого ключа: ${key}`);
        }
        return response;
    }
    getNumber(key) {
        const response = Number(this._config[key]);
        if (Number.isNaN(response)) {
            throw new Error(`Это не число`);
        }
        return response;
    }
}
console.log(ConfigService.getInstance().getNumber(`PORT`));
