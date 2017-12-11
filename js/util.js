'use strict';
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
