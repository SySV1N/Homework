import LightOn from "./commands/Light/LightOn";
import LightOff from "./commands/Light/LightOff";

import MusicPlay from "./commands/MusicPlayer/MusicPlay";
import MusicStop from "./commands/MusicPlayer/MusicStop";

import TurnEverythingOn from "./commands/Global/TurnEverythingOn";
import TurnEverythingOff from "./commands/Global/TurnEverythingOff"

import LightOffMusicOn from "./commands/Reverse/LightOffMusicOn";
import LightOnMusicOff from "./commands/Reverse/LightOnMusicOff";

import Help from "./commands/help";

import Light from "./structures/Light";
import MusicPlayer from "./structures/MusicPlayer";
import RemoteControl from "./structures/RemoteControl";


const musicPlayer = new MusicPlayer();
const light = new Light();
const remoteControl = new RemoteControl();


const commands = [

    //Общие команды
    new TurnEverythingOn(musicPlayer, light),
    new TurnEverythingOff(musicPlayer, light),

    //Реверсивные команды
    new LightOffMusicOn(musicPlayer, light),
    new LightOnMusicOff(musicPlayer, light),

    //Команды на свет
    new LightOn(light), 
    new LightOff(light), 

    //Команды на музыку
    new MusicPlay(musicPlayer),
    new MusicStop(musicPlayer),

    //Вызвать подсказку по кнопкам
    new Help()

];

for (const command of commands) {
    remoteControl.setCommand(command.buttonId, command);
}

remoteControl.pressButton('0');