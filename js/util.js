'use strict';
(function () {
  window.getRandom = function (rand) { // функция получения случайного значения
    return Math.floor(Math.random() * rand.length);
  };
})();

(function () {
  window.randomColor = function (elem, things) {
    elem.style.fill = things[window.getRandom(things)];
  };
})();

window.util = (function () {
  var esc = 27;
  var enter = 13;

  return {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === esc) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === enter) {
        action();
      }
    }
  };
})();
