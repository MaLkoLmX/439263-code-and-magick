'use strict';
(function () {
  function renderWizard() { // функция для случайного определения параметров и копирования персонажа
    var firstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристов', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
    var surname = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
    var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var wizardElement = similarWizardTemplate.cloneNode(true); // объявили глубокое копирование шаблона
    var coat = wizardElement.querySelector('.wizard-coat');
    var eyes = wizardElement.querySelector('.wizard-eyes');

    wizardElement.querySelector('.setup-similar-label').textContent = firstName[getRandom(firstName)] + surname[getRandom(surname)]; // копируем и добавляем значение к определенному классу
    window.randomColor(coat, coatColor);
    window.randomColor(eyes, eyesColor);

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
