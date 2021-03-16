import Snake from '../gameobjects/snake.js';
import { Food } from "../gameobjects/food.js";

export class Play extends Phaser.Scene {
    constructor() {
        super( { key: 'play' } );
    }
    
    preload() {
        console.log('Escena play');
        this.snake = new Snake(this);
        this.food = new Food(this);
    }

    create() {
        this.scene.launch("ui");
        const sceneUI = this.scene.get("ui");

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

        /* Collision Header Snake to Food */
        this.physics.add.collider(this.snake.body[0], this.food.food, () => {
            this.food.addfood();
            this.snake.bodyAddSection();
            sceneUI.addPoint();
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