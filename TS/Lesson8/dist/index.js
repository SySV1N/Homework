"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LightOn_1 = __importDefault(require("./commands/Light/LightOn"));
const LightOff_1 = __importDefault(require("./commands/Light/LightOff"));
const MusicPlay_1 = __importDefault(require("./commands/MusicPlayer/MusicPlay"));
const MusicStop_1 = __importDefault(require("./commands/MusicPlayer/MusicStop"));
const TurnEverythingOn_1 = __importDefault(require("./commands/Global/TurnEverythingOn"));
const TurnEverythingOff_1 = __importDefault(require("./commands/Global/TurnEverythingOff"));
const LightOffMusicOn_1 = __importDefault(require("./commands/Reverse/LightOffMusicOn"));
const LightOnMusicOff_1 = __importDefault(require("./commands/Reverse/LightOnMusicOff"));
const help_1 = __importDefault(require("./commands/help"));
const Light_1 = __importDefault(require("./structures/Light"));
const MusicPlayer_1 = __importDefault(require("./structures/MusicPlayer"));
const RemoteControl_1 = __importDefault(require("./structures/RemoteControl"));
const musicPlayer = new MusicPlayer_1.default();
const light = new Light_1.default();
const remoteControl = new RemoteControl_1.default();
const commands = [
    //Общие команды
    new TurnEverythingOn_1.default(musicPlayer, light),
    new TurnEverythingOff_1.default(musicPlayer, light),
    //Реверсивные команды
    new LightOffMusicOn_1.default(musicPlayer, light),
    new LightOnMusicOff_1.default(musicPlayer, light),
    //Команды на свет
    new LightOn_1.default(light),
    new LightOff_1.default(light),
    //Команды на музыку
    new MusicPlay_1.default(musicPlayer),
    new MusicStop_1.default(musicPlayer),
    //Вызвать подсказку по кнопкам
    new help_1.default()
];
for (const command of commands) {
    remoteControl.setCommand(command.buttonId, command);
}
remoteControl.pressButton('0');
