import { bird as modelBird, game as modelGame, enemy as modelEnemy } from "./model.mjs"

window.addEventListener("keydown", (e) => {
  if (!localStorage.getItem("player")) return;
  if (e.code === "Space") {
    e.preventDefault();
    if (modelGame.playing) {
      modelBird.dy = - modelGame.gravity * modelBird.jumpConst;
    } else {
      reset();
    }
  }
})

function reset() {
  if (!modelGame.playing) {
    modelBird.posY = modelBird.startPosY;
    modelBird.dy = - modelGame.gravity * modelBird.jumpConst;
    modelBird.overEnemy = false;
    modelGame.speed = 1;
    modelEnemy.pos = [-100, 0];
  }
  if (modelBird.alive) {
    modelGame.playing = true;
    modelGame.score = 0;
  }
  modelBird.alive = true;

}