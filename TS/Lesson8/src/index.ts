import LightOn from "./commands/Light/LightOn";
import LightOff from "./commands/Light/LightOff";

import MusicPlay from "./commands/MusicPlayer/MusicPlay";
import MusicStop from "./commands/MusicPlayer/MusicStop";


import Light from "./structures/Light";
import MusicPlayer from "./structures/MusicPlayer";
import RemoteControl from "./structures/RemoteControl";

const musicPlayer = new MusicPlayer();
const light = new Light();
const remoteControl = new RemoteControl();


const commands = [

    //Команды на свет
    new LightOn(light), 
    new LightOff(light), 

    //Команды на музыку
    new MusicPlay(musicPlayer),
    new MusicStop(musicPlayer)

];

for (const command of commands) {
    remoteControl.setCommand(command.buttonId, command);
}

remoteControl.pressButton('4');