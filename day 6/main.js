const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

//load music
const bgMusic = new Audio();
const gunSound = new Audio();
bgMusic.src = "./sounds/bg.ogg";

//load image
const spaceShip = new Image()
spaceShip.src = './images/ship.png'

//play music
function play() {
  bgMusic.play();
  bgMusic.loop = true
}


function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.drawImage(spaceShip,10,10,45,31);
  requestAnimationFrame(animate);
}

canvas.addEventListener("click", () => {
  gunSound.src = "./sounds/fire.mp3";
  gunSound.volume = 0.2;
  gunSound.play();
});

animate();
