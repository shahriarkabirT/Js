const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Draw the sky
ctx.fillStyle = '#6dc3d6';
ctx.fillRect(0, 0, canvas.width, canvas.height/2);

// Draw the grass
ctx.fillStyle = '#a6d785';
ctx.fillRect(0, canvas.height/2, canvas.width, canvas.height/2);

// Draw the house
ctx.fillStyle = '#f7d794';
ctx.fillRect(200, 100, 200, 200);

// Draw the roof
ctx.fillStyle = '#dfe6e9';
ctx.beginPath();
ctx.moveTo(200, 100);
ctx.lineTo(300, 20);
ctx.lineTo(400, 100);
ctx.fill();

// Draw the door
ctx.fillStyle = '#f5cd79';
ctx.fillRect(250, 200, 100, 100);

// Draw the doorknob
ctx.fillStyle = '#2d3436';
ctx.beginPath();
ctx.arc(340, 250, 5, 0, Math.PI*2);
ctx.fill();

// Draw the windows
ctx.fillStyle = '#569647';
ctx.fillRect(220, 120, 60, 60);
ctx.fillRect(320, 120, 60, 60);

// Draw the window frames
ctx.strokeStyle = '#2d3436';
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(220, 150);
ctx.lineTo(280, 150);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250, 120);
ctx.lineTo(250, 180);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(320, 150);
ctx.lineTo(380, 150);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(350, 120);
ctx.lineTo(350, 180);
ctx.stroke();

// Draw the chimney
ctx.fillStyle = '#dfe6e9';
ctx.fillRect(280, 60, 40, 40);

ctx.fillStyle = '#2d3436';
ctx.beginPath();
ctx.moveTo(300, 40);
ctx.lineTo(300, 80);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(280, 80);
ctx.lineTo(320, 80);
ctx.stroke();
