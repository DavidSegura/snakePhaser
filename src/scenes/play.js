import Snake from '../gameobjects/snake.js';

class Play extends Phaser.Scene {
    constructor() {
        super('Play');
    }
    preload() {
        console.log('Escena play');
        this.snake = new Snake(this);
    }
    create() {
        console.log("create Play");
        this.input.keyboard.on('keydown_RIGHT', () => {
            console.log("RIGHT");
            this.snake.changeMov('derecha');
        });
        this.input.keyboard.on('keydown_LEFT', () => {
            console.log("LEFT");
            this.snake.changeMov('izquierda');
        });
        this.input.keyboard.on('keydown_UP', () => {
            console.log("UP");
            this.snake.changeMov('arriba');
        });
        this.input.keyboard.on('keydown_DOWN', () => {
            console.log("DOWN");
            this.snake.changeMov('abajo');
        });
        this.input.keyboard.on('keydown_A', function (event) {
            console.log('Hello from the A Key!');
        });
    }
    update(time) {
        this.snake.update(time);
    }
}

export default Play;