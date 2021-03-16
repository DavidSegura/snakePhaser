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
    create(){
        this.scene.stop("ui");

        this.add.dynamicBitmapText(
            this.sys.game.config.width/2, 
            this.sys.game.config.height/2 - 30, "pixel", "GAME OVER", 20).setOrigin(0.5);
        
         this.event = setTimeout(() => {
            this.exit();
        }, 5000);

        this.input.on("keydown-ENTER", () => {
            this.exit();
        });
        
        this.input.on("pointerdown", () =>{
            this.exit();
        });
    }
    exit(){
        clearTimeout(this.event);
        this.scene.start("menu");
    }
}