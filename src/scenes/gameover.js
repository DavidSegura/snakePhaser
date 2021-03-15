export class Gameover extends Phaser.Scene{
    constructor(){
        /* Call constructor parent */
        super( { key: "gameover" } );
    }
    init(){
        console.log("init Gameover");
    }
    preload(){
        console.log("preload Gameover");
    }
}