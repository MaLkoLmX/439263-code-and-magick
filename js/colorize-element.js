'use strict';
(function () {
  window.colorizeElement = function (elem, things, callback) {
    if (typeof callback === 'function') {
      callback(elem, things);
    }
  };
})();
