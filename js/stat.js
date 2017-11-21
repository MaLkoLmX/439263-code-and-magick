'use strict';
window.renderStatistics = function (ctx, names, times) { // windows присваимваем метод с параметрами канвас, имя и время
  var histogramHeight = 150; // высота полоски
  var indent = 50; // отступ между полосками
  var initialX = 120; // координата по x
  var initialY = 250; // координата по y
  var lineWidth = 40; // ширина полоски
  var field = function (x, y) { // Поле
    ctx.fillRect(x, y, 420, 270);
  };
  var letter = function (text, x, y) { // Текст
    ctx.fillText(text, x, y);
  };
  var getMaxElement = function () { // Максимальное время
    var max = -1; //  создаем переменную, для хранения максимального значения
    for (var i = 0; i < times.length; i++) { // Повторяющийся цикл, где если i меньше длины массива(4), к i прибавляется 1
      var time = times[i]; // Объявили новую переменную, где times[i] - одно из четерых значений времени игроков
      if (time > max) { // Условине. Если time больше max, то...
        max = time; // max получает значение time
      }
    }
    return max;
  };
  var step = -histogramHeight / (getMaxElement(times) - 0); // Относительны высота полоски

  names.sort(); // сортировка по строкам, где "вы" больше всех остальных имен. Пузырчатый метод для меня показалася сложным, а indexOf не смог понять, как применить

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'; // цвет тени
  field(110, 20); // координаты и размер тени
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)'; // цвет поля
  field(100, 10); // рамка
  field(100, 10); // поле

  ctx.fillStyle = '#000'; // цвет текста
  ctx.font = '16px PT Mono'; // параметры текста
  letter('Ура вы победили!', 120, 40); // текс и его координаты
  letter('Список результатов:', 120, 60); // текст и его координаты

  for (var j = 0; j < times.length; j++) { // Цикл для нахождения высоты полоски
    if (names[j] === 'Вы') { // условие. Если значение names[i] равно "вы", то...
      ctx.fillStyle = 'rgba(255, 0, 0, 1)'; // цвет красный
    } else { // иначе...
      ctx.fillStyle = 'rgba(0, 0, 255, ' + (Math.random() * (1 - 0.2) + 0.2) + ')'; // у синего меняется прозрачность случанйым образом
    }
    ctx.fillRect(initialX + indent * j, initialY, lineWidth, times[j] * step); // полоска со значениями (x, y, ширина, высота). Высота зависит от времени игрока и относительной высоты
    letter(names[j], initialX + indent * j, initialY + 20); // текст, где имя завсити от значения цикла
    letter(Math.round(times[j]), initialX + indent * j, histogramHeight - 60); // результат игроков округлил до близжайшего значения
  }
};
