const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
let color = "black";

const box1 = {
  x: 100,
  y: 100,
  width: 100,
  height: 100,
};

const box2 = {
  x: 250,
  y: 250,
  width: 100,
  height: 100,
};

document.addEventListener("mousemove", (e) => {
  box1.x = e.clientX;
  box1.y = e.clientY;
});

function checkCollision() {
  if (box1.x + box1.width >= box2.x && box1.x < box2.x + box2.width && box1.y + box1.height >= box2.y && box1.y < box2.y + box2.height) {
    color = "red";
  } else {
    color = "green";
  }
}

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);

  c.beginPath();
  c.fillRect(
    box1.x - box1.width / 2,
    box1.y - box1.height / 2,
    box1.width,
    box1.height
  );

  c.beginPath();
  c.fillStyle = color;
  c.fillRect(box2.x - box2.width / 2, box2.y - box2.height/2, box2.width, box2.height);

  checkCollision();
  window.requestAnimationFrame(animate);
}

animate();
