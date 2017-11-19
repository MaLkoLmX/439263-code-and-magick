window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;
  var maxIndex = -1;

  for(var i = 0 ; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }
  var histogramHeight = 150;
  var step = -histogramHeight / (max - 0);
  var indent = 50;
  var initialX = 120;
  var initialY = 250;
  var lineWidth = 40;

  for(var i = 0; i < times.length; i++) {
    ctx.fillRect(initialX  + indent * i, initialY, lineWidth, times[i] * step);
    ctx.fillText(names[i], initialX  + indent * i, initialY + 20);
    ctx.fillText(Math.round(times[i]), initialX  + indent * i, histogramHeight - 60)
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + Math.random().toFixed(1) + ')';
    }
    console.log(times[i] * step * -1);
  }
};

