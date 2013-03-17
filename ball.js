var 
    fillStyle = 'pink',
    ballPainter = {
      paint: function(sprite, context) {
               var x = sprite.left + sprite.width / 2,
               y = sprite.top + sprite.height / 2,
               radius = sprite.width / 2;

               context.save();
               context.beginPath();
               context.arc(x, y, radius, 0, Math.PI*2, false);
               context.fillStyle = fillStyle;
               context.fill();

               context.restore();
             }
    },
    moveBall = {
      executed: false,
      execute: function(ball, context, time) {
                 if (!this.executed) { console.log(ball); this.executed = true;}
                 if (ball.left + ball.velocityX + ball.width > context.canvas.width ||
                     ball.left + ball.velocityX < 0) {
                   ball.velocityX = -ball.velocityX;
                 }

                 if (ball.top + ball.velocityY + ball.height > context.canvas.height ||
                     ball.top + ball.velocityY < 0) {
                   ball.velocityY = -ball.velocityY;
                 }

                 ball.left += ball.velocityX;
                 ball.top += ball.velocityY;
               }
    };

