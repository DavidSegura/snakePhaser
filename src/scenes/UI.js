class UI extends Phaser.Scene{
    constructor(){
        /* Call constructor parent */
        super("UI");
    }
    init(){
        console.log("init UI");
    }
    preload(){
        console.log("preload UI");
    }
}

export default UI;