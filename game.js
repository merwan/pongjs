var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    ball = {
      x: 150,
      y: 250,
      velocityX: -3.2,
      velocityY: 3.5,
      radius: 5,
      color: 'rgba(255,255,0,1)',
      fillStyle: 'pink'
    },
    players = [{
      x: 10,
      y: 250,
      height: 50,
      width: 5,
      fillStyle: 'black'
    },{
      x: canvas.width - 10,
      y: 250,
      height: 50,
      width: 5,
      fillStyle: 'black'
    }
];

function windowToCanvas(x, y) {
  var canvasRectangle = canvas.getBoundingClientRect();
  return { x: x - canvasRectangle.left,
    y: y - canvasRectangle.top };
}

document.onkeypress = function(e) {
  if (e.keyCode === 97) {
    players[0].y -= 5;
  } else if (e.keyCode === 113) {
    players[0].y += 5;
  }
  e.preventDefault(e);
}

function drawBackground() {
  context.fillStyle = 'red';
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function draw() {
  var player = null;

  context.beginPath();
  context.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2, false);
  context.fillStyle = ball.fillStyle;
  context.fill();

  for (var i = 0; i < players.length; i++) {
    player = players[i];
    context.fillStyle = player.fillStyle;
    context.fillRect(player.x, player.y, player.width, player.height);
  }
}

function update() {
  if (ball.x + ball.velocityX + ball.radius > context.canvas.width ||
      ball.x + ball.velocityX - ball.radius < 0) {
    ball.velocityX = -ball.velocityX;
  }

  if (ball.y + ball.velocityY + ball.radius > context.canvas.height ||
      ball.y + ball.velocityY - ball.radius < 0) {
    ball.velocityY = -ball.velocityY;
  }

  ball.x += ball.velocityX;
  ball.y += ball.velocityY;
}

function animate(time) {
  context.clearRect(0,0,canvas.width,canvas.height);
  drawBackground();
  update();
  draw();
  // Update and draw animation objects
  window.requestAnimationFrame(animate); // Sustain the animation
}

window.requestAnimationFrame(animate); // Start the animation

