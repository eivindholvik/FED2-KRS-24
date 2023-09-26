export const game = {
  fps: 60,
  speed: 1,
  score: 0,
  gravity: 0.1
};

export const base = {
  height: 100,
  posX: 0
};

export const canvasSize = [480, 640];

export const bird = {
  size: [30, 30],
  posY: (canvasSize[1] - base.height) / 2,
  dy: 0,
};

