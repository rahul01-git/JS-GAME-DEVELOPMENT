class Bird {
  constructor() {
    this.position = {
      x: canvas.width / 2,
      y: 0,
    };

    this.velocity = {
      x: 0,
      y: 1,
    };

    this.size = {
      width: 50,
      height: 50,
    };

    this.isDead = false;
    this.acceleration = 0.1;
    this.image = new Image();
    this.image.src = "./bird.png";
  }
  draw() {
    c.drawImage(
      this.image,
      this.position.x - this.size.width / 2,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }

  borderCollision() {
    if (
      this.position.y + this.size.height >= canvas.height ||
      this.position.y <= 0
    )
      this.isDead = true;
  }

  move() {
    if (!this.isDead) {
      this.velocity.y += this.acceleration;
      this.position.y += this.velocity.y;
    }
  }
  jump() {
    this.velocity.y = -3;
  }
  update() {
    this.draw();
    this.move();
    this.borderCollision();
  }
}
