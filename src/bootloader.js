class Bootloader extends Phaser.Scene{
    constructor(){
        /* Call constructor parent */
        super("Bootloader");
    }
    preload(){
        console.log("preload BOOTLOADER");

        /* Load images assets */
        this.load.image("cuerpo", "./assets/body.png");
        this.load.image("comida", "./assets/food.png");
        this.load.image("tablero", "./assets/tablero.png");

        this.load.on("complete", () =>{
            this.scene.start("Play");
        });
    }
}

export default Bootloader;