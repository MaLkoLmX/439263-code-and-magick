window.renderStatistics = function (ctx, names, times) { // windows присваимваем метод с параметрами канвас, имя и время
  names.sort(); // сортировка по строкам, где "вы" больше всех остальных имен. Пузырчатый метод для меня показалася сложным, а indexOf не смог понять, как применить
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'; //цвет тени
  ctx.fillRect(110, 20, 420, 270); // координаты и размер тени
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)'; // цвет поля
  ctx.strokeRect(100, 10, 420, 270); // рамки
  ctx.fillRect(100, 10, 420, 270); // поле

  ctx.fillStyle = '#000'; // цвет текста
  ctx.font = '16px PT Mono'; // параметры текста
  ctx.fillText('Ура вы победили!', 120, 40); // текс и его координаты
  ctx.fillText('Список результатов:', 120, 60); // текст и его координаты

  var max = -1; //  создаем переменную, для хранения максимального значения

  for(var i = 0 ; i < times.length; i++) { // Повторяющийся цикл, где если i меньше длины массива(4), к i прибавляется 1
    var time = times[i]; // Объявили новую переменную, где times[i] - одно из четерых значений времени игроков
    if (time > max) { // Условине. Если time больше max, то...
      max = time; // max получает значение time
    }
  }
  var histogramHeight = 150; // высота полоски
  var step = -histogramHeight / (max - 0); // Относительны высота полоски
  var indent = 50; // отступ между полосками
  var initialX = 120; // координата по x
  var initialY = 250; // координата по y
  var lineWidth = 40; // ширина полоски

  for(var i = 0; i < times.length; i++) { // Цикл для нахождения высоты полоски
    if (names[i] === 'Вы') { // условие. Если значение names[i] равно "вы", то...
      ctx.fillStyle = 'rgba(255, 0, 0, 1)'; // цвет красный
    }
    else { // иначе...
      ctx.fillStyle = 'rgba(0, 0, 255,' + Math.random().toFixed(1) + ')'; // у синего меняется прозрачность случанйым образом
    }
    ctx.fillRect(initialX  + indent * i, initialY, lineWidth, times[i] * step); // полоска со значениями (x, y, ширина, высота). Высота зависит от времени игрока и относительной высоты
    ctx.fillText(names[i], initialX  + indent * i, initialY + 20); // текст, где имя завсити от значения цикла
    ctx.fillText(Math.round(times[i]), initialX  + indent * i, histogramHeight - 60) // результат игроков округлил до близжайшего значения
  }
};
