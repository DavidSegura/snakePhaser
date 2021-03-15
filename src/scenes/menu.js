export class Menu extends Phaser.Scene{
    constructor(){
        /* Call constructor parent */
        super( { key: "menu" } );
    }
    init(){
        console.log("init Menu");
    }
    preload(){
        console.log("preload Menu");
    }
}