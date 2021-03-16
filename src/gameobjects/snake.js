class Snake{
    constructor(scene){
        this.scene = scene;
        this.body = [];
        this.dir = "izquierda";
        this.prevDir = "derecha";
        this.timmer = 0;

        /* Initial number section snake body */
        for(let i=0; i < 3; i++){
            this.body.push(this.scene.physics.add.image(100 + i * 10, 100, "cuerpo").setOrigin(0));
        }

        /* System collision section body */
        for(let i = 1; i < 10; i++){
            this.scene.physics.add.collider(this.body[0], this.body[i], () => this.bodyCollision());
        }
    }
    bodyAddSection(){
        const obj = this.body[this.body.length - 1];
        const newObj = this.scene.physics.add.image(obj.x, obj.y, "cuerpo").setOrigin(0);

        this.body.push(newObj);

        this.scene.physics.add.collider(this.body[0], newObj, () => this.bodyCollision());
    }
    bodyCollision(){
        this.scene.scene.start("gameover");
    }
    changeMov(dir){
        if(this.prevDir !== dir){
            this.dir = dir;
        }
    }
    update(time){
        if(time > this.timmer){
            
            for(let i = this.body.length - 1; i > 0; i--){
                this.body[i].x = this.body[i - 1].x;
                this.body[i].y = this.body[i - 1].y;

                this.body[this.body.length - 1 - i].x = Phaser.Math.Wrap(this.body[this.body.length - 1 - i].x, 0, this.scene.sys.game.config.width);
                this.body[this.body.length - 1 - i].y = Phaser.Math.Wrap(this.body[this.body.length - 1 - i].y, 20, this.scene.sys.game.config.height);
            }

            switch (this.dir) {
                case "derecha":
                    this.body[0].x += 10;
                    this.prevDir = "izquierda";
                    break;
                case "izquierda":
                    this.body[0].x -= 10;
                    this.prevDir = "derecha";
                    break;
                case "arriba":
                    this.body[0].y -= 10;
                    this.prevDir = "abajo";
                    break;
                case "abajo":
                    this.body[0].y += 10;
                    this.prevDir = "arriba";
                    break;
            }

            /* Insert retard 150ms to change direction */
            this.timmer = time + 150;
        }
    }
}
export default Snake;