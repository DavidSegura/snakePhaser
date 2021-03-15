class Gameover extends Phaser.Scene{
    constructor(){
        /* Call constructor parent */
        super("Gameover");
    }
    init(){
        console.log("init Gameover");
    }
    preload(){
        console.log("preload Gameover");
    }
}

export default Gameover;