import { base as modelBase, bird as modelBird, canvasSize, game as modelGame } from "./model.mjs";

const canvas = document.querySelector('#flappy-canvas');


[canvas.width, canvas.height] = canvasSize;

const ctx = canvas.getContext("2d");

function drawBackground() {
  let background = new Image();
  background.src = `../resources/sprites/background-day.png`;
  background.onload = function () {
    ctx.drawImage(background, 0, 0, ...canvasSize);
  }
}

function drawBase() {

  let base = new Image();
  base.src = `../resources/sprites/base.png`;
  base.onload = function () {
    ctx.drawImage(base, modelBase.posX, canvasSize[1] - modelBase.height, canvasSize[0], modelBase.height);
    ctx.drawImage(base, modelBase.posX + canvasSize[0], canvasSize[1] - modelBase.height, canvasSize[0], modelBase.height);
  }
}

function drawBird() {
  let bird = new Image();
  bird.src = `../resources/sprites/bluebird-midflap.png`;
  bird.onload = function () {
    ctx.drawImage(bird, canvasSize[0] / 3, modelBird.posY, ...modelBird.size);
  }
}

function updateStates() {
  modelBase.posX -= modelGame.speed;
  if (modelBase.posX <= (canvasSize[0] * -1) + modelGame.speed) {
    modelBase.posX = modelGame.speed;
  }

  modelBird.dy += modelGame.gravity;
  modelBird.posY += modelBird.dy;
}

function render() {
  ctx.clearRect(0, 0, ...canvasSize);
  drawBackground();
  drawBase();
  drawBird();
  updateStates();
  console.log("her");
}

function frame() {
  render();
  requestAnimationFrame(frame);
}

frame();

// setInterval(() => {
//   render();
//   updateStates();
// }, 1000 / modelGame.fps);