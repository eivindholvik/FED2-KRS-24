const canvas = document.querySelector('#game');

canvas.height = 400;
canvas.width = 600;

const ctx = canvas.getContext("2d");

ctx.fillStyle = "purple";
ctx.fillRect(20, 30, 100, 50);

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(100, 300);
ctx.lineTo(300, 300);
ctx.closePath();

// the outline
ctx.lineWidth = 10;
ctx.strokeStyle = '#666666';
ctx.stroke();

// the fill color
ctx.fillStyle = "#FFCC00";
ctx.fill();


ctx.lineWidth = 40;
ctx.strokeStyle = 'pink';
ctx.beginPath();
ctx.arc(200, 300, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.globalAlpha = 0.7;
ctx.fillStyle = "green";
ctx.fill();
