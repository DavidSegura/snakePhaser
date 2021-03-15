class Menu extends Phaser.Scene{
    constructor(){
        /* Call constructor parent */
        super("Menu");
    }
    init(){
        console.log("init Menu");
    }
    preload(){
        console.log("preload Menu");
    }
}

export default Menu;