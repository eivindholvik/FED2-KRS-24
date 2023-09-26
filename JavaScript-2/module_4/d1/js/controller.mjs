import { bird as modelBird, game as modelGame, enemy as modelEnemy } from "./model.mjs"

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    if (modelBird.alive) {
      modelBird.dy = - modelGame.gravity * modelBird.jumpConst;
    } else {
      reset();
    }
  }
})

function reset() {
  modelBird.alive = true;
  modelBird.posY = modelBird.startPosY;
  modelBird.dy = 0;
  modelBird.overEnemy = false;
  modelGame.score = 0;
  modelGame.speed = 1;
  modelEnemy.pos = [-100, 0];
}