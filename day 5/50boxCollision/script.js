const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

class Box {
  constructor() {
    this.size = { width: 30, height: 30 };
    this.position = {
      x: Math.random() * (canvas.width - this.size.width),
      y: Math.random() * (canvas.height - this.size.height),
    };

    this.velocity = {
      x: Math.random() * (1 - -1) + -1,
      y: Math.random() * (1 - -1) + -1,
    };
    this.color = "black";
  }

  draw() {
    c.beginPath();
    c.fillStyle = this.color;
    c.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }

  move() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  checkWallCollision() {
    if (
      this.position.x + this.size.width >= canvas.width ||
      this.position.x < 0
    )
      this.velocity.x = -this.velocity.x;

    if (
      this.position.y + this.size.height >= canvas.height ||
      this.position.y < 0
    )
      this.velocity.y = -this.velocity.y;
  }

  //changes color on collision
  checkBoxCollision(otherBoxes, index) {
    otherBoxes.forEach((element, idx) => {
      if (index == idx) return;

      if (
        this.position.x + this.size.width >= element.position.x &&
        this.position.x < element.position.x + element.size.width &&
        this.position.y + this.size.height >= element.position.y &&
        this.position.y < element.position.y + element.size.height
      ) {
        this.color = "red";
        element.color = "red";
        this.velocity.x = -this.velocity.x
        this.velocity.y = -this.velocity.y
      } else {
        this.color = "blue";
      }
    });
  }

  //collision effects between box
  // checkBoxCollision(otherBoxes, index) {
  //   otherBoxes.forEach((box, idx) => {
  //     if (idx == index) return;
      
  //     const horizontalCollision = (
  //       this.position.x + this.size.width >= box.position.x && this.position.x <= box.position.x + box.size.width
  //     )

  //     const verticalCollision = (
  //       this.position.y + this.size.height >= box.position.y && this.position.y <= box.position.y + box.size.height
  //     )
  //   });
  // }

  update() {
    this.draw();
    this.move();
  }
}

let boxArr = [];
for (let i = 0; i < 5; i++) {
  boxArr.push(new Box());
}

function loop() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  boxArr.forEach((item, idx) => {
    item.update();
    item.checkBoxCollision(boxArr, idx);
    item.checkWallCollision();
  });
  requestAnimationFrame(loop);
}

loop();
