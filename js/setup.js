'use strict';
(function () {
  function renderWizard() { // функция для случайного определения параметров и копирования персонажа
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var wizardElement = similarWizardTemplate.cloneNode(true); // объявили глубокое копирование шаблона
    var coat = wizardElement.querySelector('.wizard-coat');
    var eyes = wizardElement.querySelector('.wizard-eyes');

    wizardElement.querySelector('.setup-similar-label').textContent = firstName[window.getRandom(window.firstName)] + surname[window.getRandom(window.surname)]; // копируем и добавляем значение к определенному классу
    window.randomColor(coat, window.coatColor);
    window.randomColor(eyes, window.eyesColor);

    return wizardElement; // выводим скопированный элемент
  }

  var wizards = 4;
  var fragment = document.createDocumentFragment();
  var userDialog = document.querySelector('.setup'); // Объявили  переменную окно настроек
  var similarListElement = document.querySelector('.setup-similar-list'); // шаблон

  for (var i = 0; i < wizards; i++) {
    fragment.appendChild(renderWizard(i));
  }

  userDialog.classList.remove('hidden'); // Удалили класс .hidden у блока с настройками

  similarListElement.appendChild(fragment); // добавили в div-список с персонажами
  userDialog.querySelector('.setup-similar').classList.remove('hidden'); // удалили класс
})();
