export class UI extends Phaser.Scene{
    constructor(){
        /* Call constructor parent */
        super( { key: "ui" } );
    }
    init(){
        console.log("init UI");
    }
    preload(){
        console.log("preload UI");
    }
}