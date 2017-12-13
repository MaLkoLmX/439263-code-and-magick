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

(function () {
  window.randomBackground = function (elem, things) {
    elem.style.backgroundColor = things[window.getRandom(things)];
  };
})();
