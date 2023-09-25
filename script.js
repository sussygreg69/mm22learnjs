let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

ctx.fillStyle = 'blue';
ctx.fillRect(0, 0, 150, 53);

ctx.fillStyle = 'black';
ctx.fillRect(0, 53, 150, 53);

ctx.strokeStyle = 'black';
ctx.strokeRect(0, 106, 150, 53);


ctx.strokeStyle = 'black';
ctx.beginPath;
ctx.moveTo(225, 10);
ctx.lineTo(250, 60); ctx.lineTo(200, 30); ctx.lineTo(255, 30); ctx.lineTo(215, 60);
ctx.lineTo(225, 10);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.arc(225, 125, 30, 0, Math.PI/100*360);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(225, 125);
ctx.lineTo(210, 90); ctx.lineTo(240, 90);
ctx.lineTo(225, 125);
ctx.fill();

ctx.beginPath();
ctx.lineWidth = 19;
ctx.strokeStyle = 'white';
ctx.arc(225, 125, 40, 0, Math.PI/100*360);
ctx.closePath();
ctx.stroke();










