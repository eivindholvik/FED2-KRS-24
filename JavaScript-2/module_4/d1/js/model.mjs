export const game = {
  fps: 60,
  speed: 1,
  score: 0,
  playing: false,
  gravity: 0.2
};


export const base = {
  height: 150,
  posX: 0
};

export const canvasSize = [480, 640];

export const enemy = {
  pos: [-100, 0],
  size: [52, 320],
  gap: 150,
}

export const bird = {
  overEnemy: false,
  animationCounter: {
    counter: 0,
    limit: 10
  },
  alive: true,
  currentFrame: 0,
  urls: ["bluebird-upflap", "bluebird-midflap", "bluebird-downflap"],
  jumpConst: 20,
  size: [30, 30],
  startPosY: (canvasSize[1] - base.height) / 2,
  posY: (canvasSize[1] - base.height) / 2,
  posX: canvasSize[0] / 5,
  dy: 0,
};

