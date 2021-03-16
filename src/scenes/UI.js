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
    create(){
        this.add.image(0, 0, "tablero").setOrigin(0);
        this.add.dynamicBitmapText(10, 7, "pixel", "PUNTOS", 8);
        this.points = this.add.dynamicBitmapText(this.sys.game.config.width - 60, 7, "pixel", Phaser.Utils.String.Pad(0, 6, 0, 1), 8);
    }
    addPoint(){
        let actualPoints = parseInt(this.points.text);

        this.points.setText( Phaser.Utils.String.Pad((actualPoints + 10), 6, 0, 1));
    }
}