var fillStyle = 'black',
    paddlePainter = {
      paint: function(sprite, context) {
               context.save();

               context.fillStyle = fillStyle;
               context.fillRect(sprite.left, sprite.top, sprite.width, sprite.height);

               context.restore();
             }
    },
    movePaddle = {
      execute: function(sprite, context, time) {
               }
    };
