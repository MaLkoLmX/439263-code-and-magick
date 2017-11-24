'use strict';
var firstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристов', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surname = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
function getRandom(rand) { // функция получения случайного значения
  return Math.floor(Math.random() * rand.length);
}
var userDialog = document.querySelector('.setup'); // Объявили  переменную окно настроек
userDialog.classList.remove('hidden'); // Удалили класс .hidden у блока с настройками
var similarListElement = document.querySelector('.setup-similar-list'); // шаблон
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); // Элемент в которым вставляем персонажа

var wizards = [ // массив с волшебниками
  {
    name: firstName[getRandom(firstName)] + surname[getRandom(surname)],
    coatColor: coatColor[getRandom(coatColor)],
    eyesColor: eyesColor[getRandom(eyesColor)]
  },
  {
    name: firstName[getRandom(firstName)] + surname[getRandom(surname)],
    coatColor: coatColor[getRandom(coatColor)],
    eyesColor: eyesColor[getRandom(eyesColor)]
  },
  {
    name: firstName[getRandom(firstName)] + surname[getRandom(surname)],
    coatColor: coatColor[getRandom(coatColor)],
    eyesColor: eyesColor[getRandom(eyesColor)]
  },
  {
    name: firstName[getRandom(firstName)] + surname[getRandom(surname)],
    coatColor: coatColor[getRandom(coatColor)],
    eyesColor: eyesColor[getRandom(eyesColor)]
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');

