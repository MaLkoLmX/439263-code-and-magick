'use strict';
function getRandom(rand) { // функция получения случайного значения
  return Math.floor(Math.random() * rand.length);
}
var userDialog = document.querySelector('.setup'); // Объявили  переменную окно настроек
userDialog.classList.remove('hidden'); // Удалили класс .hidden у блока с настройками
var similarListElement = document.querySelector('.setup-similar-list'); // шаблон
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); // Элемент в которым вставляем персонажа

function renderWizard() { // функция для случайного определения параметров и копирования персонажа
  var firstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристов', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var surname = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
  var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
  var wizardElement = similarWizardTemplate.cloneNode(true); // объявили глубокое копирование шаблона

  wizardElement.querySelector('.setup-similar-label').textContent = firstName[getRandom(firstName)] + surname[getRandom(surname)]; // копируем и добавляем значение к определенному классу
  wizardElement.querySelector('.wizard-coat').style.fill = coatColor[getRandom(coatColor)];
  wizardElement.querySelector('.wizard-eyes').style.fill = eyesColor[getRandom(eyesColor)];
  return wizardElement; // выводим скопированный элемент
}

function wizardCount(wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards; i++) {
    fragment.appendChild(renderWizard());
  }
  return fragment;
}

similarListElement.appendChild(wizardCount(4)); // добавили в div-список с персонажами
userDialog.querySelector('.setup-similar').classList.remove('hidden'); // удалили класс
