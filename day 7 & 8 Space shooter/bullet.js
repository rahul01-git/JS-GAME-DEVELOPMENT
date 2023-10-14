class Bullet {
    constructor(X=0,Y=0){
        this.position = {
            x: X,
            y: Y
        }

        this.velocity = {
            x: 0,
            y: -1
        }
        this.size = 40
        this.image = new Image()
        this.image.src = './bullet.png'
    }

    draw() {
        c.beginPath();
        c.drawImage(this.image,this.position.x, this.position.y, this.size, this.size);
    }

    move(){
        this.position.y += this.velocity.y
    }

    update(){
        this.draw()
        this.move()
    }
}