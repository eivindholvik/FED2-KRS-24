import { enemy as modelEnemy, base as modelBase, bird as modelBird, canvasSize, game as modelGame } from "./model.mjs";
import { submitScore } from "./handleScores/api.mjs";
import { updateHighscore } from "./script.mjs";

export const canvas = document.querySelector('#flappy-canvas');


[canvas.width, canvas.height] = canvasSize;

const ctx = canvas.getContext("2d");

const imageUrls = [
  `background-day`,
  `pipe-green`,
  `pipe-green-down`,
  `gameover`,
  `base`,
  `bluebird-downflap`,
  `bluebird-midflap`,
  `bluebird-upflap`
];

for (let i = 0; i < 10; i++) {
  imageUrls.push(`${i}`);
}



const loadImagesPromises = imageUrls.map(url => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = `../resources/sprites/${url}.png`;
  });
})

const preloadImages = () => {
  return Promise.all(loadImagesPromises);
}

const loadedImages = new Map();

preloadImages().then(images => {
  images.forEach((image, i) => loadedImages.set(imageUrls[i], image));
  frame();
});


console.log(loadedImages);

function drawBackground() {
  const background = loadedImages.get("background-day");
  ctx.drawImage(background, 0, 0, ...canvasSize);
}

function drawEnemy() {
  const [x, y] = modelEnemy.pos;
  const enemy = loadedImages.get("pipe-green");
  ctx.drawImage(enemy, x, y, ...modelEnemy.size);
  const enemyDown = loadedImages.get("pipe-green-down");
  ctx.drawImage(enemyDown, x, y - modelBird.size[1] - modelEnemy.size[1] - modelEnemy.gap, ...modelEnemy.size);
}

function drawGameOver() {
  const gameOver = loadedImages.get("gameover");
  ctx.drawImage(gameOver, (canvasSize[0] - 192) / 2, canvasSize[1] / 4, 192, 42);
}

function drawBase() {

  let base = loadedImages.get("base");
  ctx.drawImage(base, modelBase.posX, canvasSize[1] - modelBase.height, canvasSize[0], modelBase.height);
  ctx.drawImage(base, modelBase.posX + canvasSize[0], canvasSize[1] - modelBase.height, canvasSize[0], modelBase.height);

}

function drawScore() {
  const scoreStr = modelGame.score.toString();
  for (let i = 0; i < scoreStr.length; i++) {
    const score = loadedImages.get(scoreStr.charAt(i));
    ctx.drawImage(score, (canvasSize[0] - canvasSize[0] / 8) - (20 * (scoreStr.length - i)), canvasSize[1] / 16, 16, 36);
  }
}

function drawBird() {

  ctx.save();

  ctx.translate((modelBird.posX + (modelBird.size[0] / 2)), (modelBird.posY + (modelBird.size[1] / 2)));
  ctx.rotate((modelBird.dy * 5 * Math.PI) / 180);
  ctx.translate(-(modelBird.posX + (modelBird.size[0] / 2)), -(modelBird.posY + (modelBird.size[1] / 2)));
  if (modelBird.animationCounter.counter > modelBird.animationCounter.limit / modelGame.speed) {
    modelBird.currentFrame++;
    modelBird.animationCounter.counter = 0;
  }
  modelBird.animationCounter.counter++;

  if (modelBird.currentFrame > 3) modelBird.currentFrame = 0;
  const bird = loadedImages.get(modelBird.urls[modelBird.currentFrame === 3 ? 1 : modelBird.currentFrame])
  // bird.src = modelBird.urls[modelBird.currentFrame === 3 ? 1 : modelBird.currentFrame];
  ctx.drawImage(bird, modelBird.posX, modelBird.posY, ...modelBird.size);
  ctx.restore();

}

function updateStates() {
  modelGame.speed = 1 + modelGame.score / 10;
  modelEnemy.gap = 150 - modelGame.score / 10;
  modelBase.posX -= modelGame.speed;
  if (modelBase.posX <= (canvasSize[0] * -1) + modelGame.speed) {
    modelBase.posX = modelGame.speed;
  }

  modelEnemy.pos[0] -= modelGame.speed;
  if (modelEnemy.pos[0] < 0 - modelEnemy.size[0]) {
    modelEnemy.pos = [canvasSize[0], (Math.random() * modelEnemy.size[1]) + canvasSize[1] - modelEnemy.size[1] - modelBase.height];
  }

  modelBird.dy += modelGame.gravity;
  modelBird.posY += modelBird.dy;
}

function checkColitions() {
  if (modelBird.posY + modelBird.size[1] >= canvasSize[1] - modelBase.height) {
    gameOver();
  }
  if (modelBird.posY <= 0) {
    gameOver();
  }
  if (modelBird.posX + modelBird.size[0] >= modelEnemy.pos[0] && modelBird.posX <= modelEnemy.pos[0] + modelEnemy.size[0]) {
    modelBird.overEnemy = true;
    if (modelBird.posY + modelBird.size[1] > modelEnemy.pos[1] || modelBird.posY < modelEnemy.pos[1] - modelBird.size[1] - modelEnemy.gap) {
      gameOver();
    }
  } else {
    if (modelBird.overEnemy) {
      modelBird.overEnemy = false;
      modelGame.score++;
    }
  }
}

async function gameOver() {
  if (!modelBird.alive) return;
  modelBird.alive = false;
  modelGame.playing = false;
  await submitScore(modelGame.score);
  await updateHighscore();

}

function render() {
  if (modelBird.alive && modelGame.playing) {
    updateStates();
  }
  checkColitions();
  ctx.clearRect(0, 0, ...canvasSize);
  drawBackground();
  drawEnemy();
  drawBase();
  drawBird();
  drawScore();
  if (!modelBird.alive) {
    drawGameOver();
  }
}



function frame() {
  render();
  requestAnimationFrame(frame);
}
