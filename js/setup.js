'use strict';
function getRandom(rand) { // функция получения случайного значения
  return Math.floor(Math.random() * rand.length);
}
var userDialog = document.querySelector('.setup'); // Объявили  переменную окно настроек
userDialog.classList.remove('hidden'); // Удалили класс .hidden у блока с настройками
var similarListElement = document.querySelector('.setup-similar-list'); // шаблон
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); // Элемент в которым вставляем персонажа
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

function renderWizard() { // функция для случайного определения параметров и копирования персонажа
  var firstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристов', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var surname = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
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

// Кнопки
var esc = 27;
var enter = 13;
// Элементы с которыми будем работать
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
//
function onPopupEscPress(evt) { // удалить с помошью ESC
  if (evt.keyCode === esc) {
    closePopup();
  }
}
// Удаляем класс .hidden. функция удаления класса
function openPopup() {
  setup.classList.remove('hidden'); // удаляем класс
  document.addEventListener('keydown', onPopupEscPress); // при нажатии на кнопку
}
// добавления класса
function closePopup() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
}
// при клике удаляем класс .hidden
setupOpen.addEventListener('click', function () {
  openPopup();
});
// при нажатии enter удаляем класс .hidden
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === enter) {
    openPopup();
  }
});
// при клике добавляем класс
setupClose.addEventListener('click', function () {
  closePopup();
});
// добавляем класс при нажатии enter
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === enter) {
    closePopup();
  }
});
// обявили элементы с которыми будем работать
var setupWizard = setup.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = coatColor[getRandom(coatColor)];
});
wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = eyesColor[getRandom(eyesColor)];
});
wizardFireball.addEventListener('click', function () {
  wizardFireball.style.background = fireballColor[getRandom(fireballColor)];
});
