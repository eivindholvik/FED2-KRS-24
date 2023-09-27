const draw = document.querySelector('#drawing');

const canWidth = 600;

draw.height = 400;
draw.width = canWidth;

let playerInput = 0;
let currentKeystroke = "";
const distance = 5;

// left ArrowLeft
// right ArrowRight
// a KeyA
// d KeyD


window.addEventListener("keydown", (e) => {
  if (e.code === "ArrowLeft" || e.code === "KeyA") {
    playerInput = -distance;
    currentKeystroke = e.code;
  } else if (e.code === "ArrowRight" || e.code === "KeyD") {
    playerInput = distance;
    currentKeystroke = e.code;
  }
})

window.addEventListener("keyup", (e) => {
  if (e.code === currentKeystroke) {
    playerInput = 0;
  }
})

const ctx1 = draw.getContext("2d");

document.querySelector('#draw').addEventListener("click", () => {
  drawBackground();
})
document.querySelector('#clear').addEventListener("click", (e) => {
  clear();
})



function drawBackground(i) {


  ctx1.fillStyle = "lightblue";
  ctx1.fillRect(0, 0, 600, 350);


  ctx1.lineWidth = 5;
  ctx1.strokeStyle = 'yellow';
  ctx1.beginPath();
  ctx1.arc(450 - i, 50 + (i * i / 2), 40, 0, Math.PI * 2);
  ctx1.stroke();

  ctx1.fillStyle = "orange";
  ctx1.fill();

  ctx1.fillStyle = "green";
  ctx1.fillRect(0, 350, 600, 50);

  ctx1.fillStyle = "#cc5a29";
  ctx1.fillRect(200, 200, 200, 150);

  ctx1.fillStyle = "blue";
  ctx1.fillRect(275, 275, 50, 75);


  // this is the roof
  ctx1.beginPath();
  ctx1.moveTo(200, 200);
  ctx1.lineTo(300, 100);
  ctx1.lineTo(400, 200);
  ctx1.closePath();

  ctx1.lineWidth = 10;
  ctx1.strokeStyle = 'grey';
  ctx1.stroke();

  ctx1.fillStyle = "brown";
  ctx1.fill();


  ctx1.lineWidth = 1;
  ctx1.beginPath();
  ctx1.arc(310, 314, 3, 0, Math.PI * 2);
  ctx1.stroke();

  ctx1.fillStyle = "black";
  ctx1.fill();
}


function clear() {
  ctx1.clearRect(0, 0, 600, 400);
}


const player = {
  x: 0,
  y: 300,
  width: 20,
  height: 50,
  hp: 10,
  color: "black"
}

function drawPlayer() {
  const { color, x, y, width, height } = player;

  ctx1.fillStyle = color;
  ctx1.fillRect(x, y, width, height);
}

let i = 0;
setInterval(() => {
  console.log(playerInput, player.x);
  player.x = Number(player.x) + playerInput;
  if (player.x > canWidth - player.width) {
    player.x = canWidth - player.width;
  } else if (player.x < 0) {
    player.x = 0;
  }
  clear();
  drawBackground(i);
  drawPlayer();
  i = i + 0.1;
}, 20);