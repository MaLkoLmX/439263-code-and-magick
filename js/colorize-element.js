'use strict';
(function () {
  window.colorizeElement = function (elem, things, callback) {
    if (typeof callback === 'function') {
      callback(elem, things);
    }
  };
})();

window.randomColor = function (elem, things) {
  elem.style.fill = things[window.getRandom(things)];
};
