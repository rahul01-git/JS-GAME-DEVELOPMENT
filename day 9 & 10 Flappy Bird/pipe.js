class Pipe {
  constructor() {
    this.position = {
      x: canvas.width,
      y: Math.random() * (0 - -250) + -250,
    };

    this.size = {
      width: 50,
      height: 320,
    };

    this.velocity = {
      x: -1.6,
      y: 0,
    };

    this.pipeDown = new Image();
    this.pipeUp = new Image();
    this.pipeDown.src = "./pipe-down.png";
    this.pipeUp.src = "./pipe-up.png";
  }
  draw() {
    c.beginPath();
    c.drawImage(
      this.pipeDown,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }
  drawBelowPipe() {
    c.beginPath();
    c.drawImage(
      this.pipeUp,
      this.position.x,
      this.position.y + this.size.height + 125,
      this.size.width,
      this.size.height
    );
  }

  move() {
    if (this.position.x + this.size.width <= 0) {
      this.position.x = canvas.width;
      this.position.y = Math.random() * (0 - -250) + -250;
    }
    this.position.x += this.velocity.x;
  }

  checkBirdCollision() {
    //collided with upper pipe
    if (
      this.position.x + this.size.width >=
        bird.position.x - bird.size.width / 2 &&
      this.position.x <=
        bird.position.x - bird.size.width / 2 + bird.size.width &&
      this.position.y + this.size.height >= bird.position.y &&
      this.position.y <= bird.position.y + bird.size.height
    ) {
      bird.isDead = true;
    }

    //collided with down pipe
    if (
      this.position.x + this.size.width >=
        bird.position.x - bird.size.width / 2 &&
      this.position.x <=
        bird.position.x - bird.size.width / 2 + bird.size.width &&
      this.position.y + this.size.height + 150 + this.size.height >=
        bird.position.y &&
      this.position.y + this.size.height + 150 <=
        bird.position.y + bird.size.height
    ) {
      bird.isDead = true;
    }
  }

  update() {
    this.draw();
    this.drawBelowPipe();
    if (!bird.isDead) {
      this.checkBirdCollision();
      this.move();
    }
  }
}
