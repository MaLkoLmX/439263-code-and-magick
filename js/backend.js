'use strict';
// data - объект, который необходимо отправить
// callback - функция, которая будет вызываться при успешной отправке

(function () {
  var URL = 'https://js.dump.academy/code-and-magick'; // сервер на который будут отправлятся данные

  function setup(callback, error) { // загрузить и отправить данные по сети
    var xhr = new XMLHttpRequest(); // объекст для запроса на сервер
    xhr.responseType = 'json'; // преобразует ответ сервера в формат json(объект)

    xhr.addEventListener('load', function () { // load - обработчик, который сробатывает, когда сервер отвечает
      return xhr.status === 200 ? callback(xhr.response) : error(xhr.response);
    });

    xhr.addEventListener('error', function () {
      error('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      error('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000;

    // xhr.open('POST', URL); // отправить данные на адрес
    // xhr.send(data); // запустить запрос
    return xhr;
  }

  window.backend = (function () {
    return {
      load: function (callback, error) { // загружает данные волшебников
        URL = 'https://js.dump.academy/code-and-magick/data'; // адрес с волшебниками
        var xhr = setup(callback, error);

        xhr.open('GET', URL); // загружаем волшебников
        xhr.send();
      },
      save: function (data, callback, error) {
        var xhr = setup(callback, error);

        xhr.open('POST', URL);
        xhr.send(data);
      },
    };
  })();
})();
