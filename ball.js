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
    };

