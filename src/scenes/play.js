import Snake from '../gameobjects/snake.js';

export class Play extends Phaser.Scene {
    constructor() {
        super( { key: 'play' } );
    }
    
    preload() {
        console.log('Escena play');
        this.snake = new Snake(this);
    }

    create() {
        console.log("create Play");
        //this.cursors = this.input.keyboard.createCursorKeys();

        this.input.keyboard.on('keydown-RIGHT', () => {
            this.snake.changeMov('derecha');
        });

        this.input.keyboard.on('keydown-LEFT', () => {
            this.snake.changeMov('izquierda');
        });

        this.input.keyboard.on('keydown-UP', () => {
            this.snake.changeMov('arriba');
        });

        this.input.keyboard.on('keydown-DOWN', () => {
            this.snake.changeMov('abajo');
        });
    }

    update(time) {
        this.snake.update(time);

        /* Optional controler cursors */
        /*if(this.cursors.left.isDown){
            this.snake.changeMov('izquierda');
        }

        if(this.cursors.right.isDown){
            this.snake.changeMov('derecha');
        }

        if(this.cursors.up.isDown){
            this.snake.changeMov('arriba');
        }

        if(this.cursors.down.isDown){
            this.snake.changeMov('abajo');
        }*/
    }
}