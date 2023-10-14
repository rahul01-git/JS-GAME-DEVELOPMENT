const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

let gameScore = 0;
const intervalId = setInterval(() => {
  gameScore++;
}, 1000);

const bird = new Bird();
const bg1 = new Background(0, 0);
const bg2 = new Background(bg1.size.width, 0);

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);

  bg1.update(bird.isDead);
  bg2.update(bird.isDead);
  bird.update();

  c.font = "30px sans serif";
  c.fillStyle = "white";
  c.fillText(gameScore, 10, 40);

  if (bird.isDead) {
    clearInterval(intervalId);
  }
  requestAnimationFrame(animate);
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") bird.jump();
});

animate();
