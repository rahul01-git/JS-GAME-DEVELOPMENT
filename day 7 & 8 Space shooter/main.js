const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

const player = new Player();
let allBullets = [];
let enemies = [];

setInterval(() => {
  enemies.push(new Enemy());
}, 1000);

//gameLoop
function loop() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  player.update();

  for (let i = 0; i < enemies.length; i++) {
    enemies[i].update();
    enemies[i].playerCollision(player);
    enemies[i].bulletCollision(allBullets);
  }

  for (let i = 0; i < allBullets.length; i++) {
    allBullets[i].update();
  }

  requestAnimationFrame(loop);
}

loop();

//all event listeners in this game
document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowUp") player.velocity.y = -1;
  if (e.code === "ArrowDown") player.velocity.y = 1;
  if (e.code === "ArrowLeft") player.velocity.x = -2;
  if (e.code === "ArrowRight") player.velocity.x = 2;
  if (e.code === "Space")
    allBullets.push(new Bullet(player.position.x + 5, player.position.y));
});
document.addEventListener("keyup", (e) => {
  if (e.code === "ArrowUp") player.velocity.y = 0;
  if (e.code === "ArrowDown") player.velocity.y = 0;
  if (e.code === "ArrowLeft") player.velocity.x = 0;
  if (e.code === "ArrowRight") player.velocity.x = 0;
});
