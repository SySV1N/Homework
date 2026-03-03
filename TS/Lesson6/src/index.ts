//LoggerService (Singleton)

class LoggerService {
  private static instance: LoggerService;
  private logs: string[];

  constructor(
    logs: string[],
  ) {
    this.logs = logs;
    }
  
  public static getLogs() {
    if (!LoggerService.instance) {
      LoggerService.instance = new LoggerService([]);
    } 
    return LoggerService.instance.logs;
  };

  public static log(msg: string) {
    let current: Date = new Date();
    LoggerService.instance.logs.push(`${msg} Дата: ${current.getDate()}.${current.getMonth()}.${current.getFullYear()} Время: ${current.getHours()}: ${current.getMinutes()}: ${current.getSeconds()}`)
  };
};


console.log(LoggerService.getLogs());

setTimeout(() => { LoggerService.log(`Log1`); }, 2000);
setTimeout(() => { LoggerService.log(`Log2`); }, 4000);
setTimeout(() => { LoggerService.log(`Log3`); }, 6000);

setTimeout(() => { console.log(LoggerService.getLogs()); }, 2100);
setTimeout(() => { console.log(LoggerService.getLogs()); }, 4100);
setTimeout(() => { console.log(LoggerService.getLogs()); }, 6100);

//Улучшенный ConfigService

import dotenv from 'dotenv';

class ConfigService {
  private static instance: ConfigService; 

  private _config: dotenv.DotenvParseOutput;

  private constructor() {
    const cfg = dotenv.config();

    if (cfg.error) {
      throw new Error(`Не найден файл .env`)
    };

    if  (!cfg.parsed) {
      throw new Error(`Пустой файл .env`)
    }

    this._config = cfg.parsed;
  }

  public static getInstance(): ConfigService {
    if (!ConfigService.instance) {
      ConfigService.instance = new ConfigService()
    }

    return ConfigService.instance;
  }

  public get(key: string): string {
    const response = this._config[key];

    if(!response) {
      throw new Error(`Нет такого ключа: ${key}`);
    }

    return response;
  }
  
  public getNumber(key: string): number {
    const response = Number(this._config[key]);

    if (Number.isNaN(response)) {
      throw new Error(`Это не число`)
    } 
    return response;
  }
}

console.log(ConfigService.getInstance().getNumber(`PORT`));




