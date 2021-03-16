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
    create(){
        this.add.image(this.sys.game.config.width/2, this.sys.game.config.height/2 - 50, "comida").setScale(6);

        this.add.dynamicBitmapText(this.sys.game.config.width/2, this.sys.game.config.height/2, "pixel", "SNAKE", 18).setOrigin(0.5);

        const pressButton = this.add.dynamicBitmapText(this.sys.game.config.width/2, this.sys.game.config.height -40, "pixel", "PRESS ANY BUTTON", 8).setOrigin(0.5);
        
        this.tweens.add({
            targets: pressButton,
            alpha: 0,
            ease: (x) => x < 0.5 ? 0 : 1,
            duration: 500,
            yoyo: true,
            repeat: -1
        });

        this.input.keyboard.on('keydown-RIGHT', () => {
            this.scene.start("play");
        });

        this.input.keyboard.on('keydown-LEFT', () => {
            this.scene.start("play");
        });

        this.input.keyboard.on('keydown-UP', () => {
            this.scene.start("play");
        });

        this.input.keyboard.on('keydown-DOWN', () => {
            this.scene.start("play");
        });

        this.input.on("keydown-ENTER", () => {
            this.scene.start("play");
        });
        
        this.input.on("pointerdown", () =>{
            this.scene.start("play");
        });
    }
}