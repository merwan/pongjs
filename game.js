var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    sprites = [ new Sprite('ball', ballPainter) ],
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

canvas.onmousemove = function(e) {
  var loc = windowToCanvas(canvas, e.clientX, e.clientY);

  // TODO: update paddle position
  if (loc.y < 0) loc.y = 0;
  if (loc.y > canvas.height - players[0].height) loc.y = canvas.height - players[0].height;

  players[0]. y = loc.y;
};

function windowToCanvas(canvas, x, y) {
  var bbox = canvas.getBoundingClientRect();
  return { x: x - bbox.left * (canvas.width / bbox.width),
    y: y - bbox.top * (canvas.height / bbox.height)
  };
}

function drawBackground() {
  context.fillStyle = 'red';
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function draw() {
  var player = null,
      i;

  for (i = 0; i < sprites.length; i++) {
    sprites[i].paint(context);
  }

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
  context.clearRect(0, 0, canvas.width, canvas.height);

  drawBackground();

  update();

  draw();

  window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);

