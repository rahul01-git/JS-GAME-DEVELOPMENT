class Player {
  constructor() {
    this.position = {
      x: canvas.width / 2,
      y: canvas.height - 60,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };

    this.size = 50;
    this.isAlive = true;
    this.image = new Image();
    this.image.src = "./ship.png";
  }

  draw() {
    c.beginPath();
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }
  move() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
  update() {
    this.draw();
    if (this.isAlive) this.move();
  }
}
