import { Bootloader } from "./bootloader.js";
import { Play } from "./scenes/play.js";
import { Gameover } from "./scenes/gameover.js";
import { UI } from "./scenes/UI.js";
import { Menu } from "./scenes/menu.js";

const config = {
    type: Phaser.AUTO,
    title: "Snake",
    width: 320,
    height: 180,
    parent: 'container',
    backgroundColor: '#f9ca24',
    pixelArt: true,
    physics: {
        default: "arcade",
        /*arcade: {
            gravity: {y: 100}
        }*/
    },
    scene: [ Bootloader, Play, Gameover, UI, Menu ]
};

var game = new Phaser.Game(config);