class Enemy {
  constructor() {
    this.position = {
      x: Math.random() * (canvas.width - 50 - 50) + 50,
      y: -50,
    };

    this.velocity = {
      x: 0,
      y: 1,
    };
    this.size = Math.random() * (70 - 20) + 20;
    this.image = new Image();
    this.image.src = "./enemy1.png";
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
    this.position.y += this.velocity.y;
  }

  bulletCollision(bullets) {
    for (let i = 0; i < bullets.length; i++) {
      if (
        this.position.x + this.size >= bullets[i].position.x &&
        this.position.x <= bullets[i].position.x + bullets[i].size &&
        this.position.y + this.size >= bullets[i].position.y &&
        this.position.y <= bullets[i].position.y + bullets[i].size
      ) {
        bullets[i].position.x = -100;
        bullets[i].position.y = -100;
        this.velocity.y = 0;
        this.position.x = -100;
        this.position.y = -100;
      }
    }
  }
  playerCollision(player) {
    if (
      this.position.x + this.size >= player.position.x &&
      this.position.x <= player.position.x + player.size &&
      this.position.y + this.size >= player.position.y &&
      this.position.y <= player.position.y + player.size
    )
      player.isAlive = false;
  }

  update() {
    this.draw();
    if (player.isAlive) this.move();
  }
}
