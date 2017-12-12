'use strict';
(function () {
  function renderWizard() { // функция для случайного определения параметров и копирования персонажа
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var wizardElement = similarWizardTemplate.cloneNode(true); // объявили глубокое копирование шаблона
    var coat = wizardElement.querySelector('.wizard-coat');
    var eyes = wizardElement.querySelector('.wizard-eyes');

    wizardElement.querySelector('.setup-similar-label').textContent = window.firstName[window.getRandom(window.firstName)] + window.surname[window.getRandom(window.surname)]; // копируем и добавляем значение к определенному классу
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

  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName === 'IMG') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
  });

  var artifactsElement = document.querySelector('.setup-artifacts');

  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  var star = document.querySelector('.setup-artifacts-cell');

  star.addEventListener('mousedown', function () {
    artifactsElement.style.outline = '2px dashed red';
  });

  star.addEventListener('mouseup', function () {
    artifactsElement.style.outline = '';
  });

  artifactsElement.addEventListener('drop', function (evt) {
    if (evt.target.children.length === 0) {
      evt.target.style.backgroundColor = '';
      evt.target.appendChild(draggedItem.cloneNode(true));
      evt.preventDefault();
      artifactsElement.style.outline = '';
    }
  });

  artifactsElement.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });
})();

