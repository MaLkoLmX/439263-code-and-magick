'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  function onPopupEscPress(evt) {
    window.util.isEscEvent(evt, closePopup);
  }

  function openPopup() {
    setup.classList.remove('hidden'); // удаляем класс
    document.addEventListener('keydown', onPopupEscPress); // при нажатии на кнопку
  }
  // добавления класса
  function closePopup() {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  }

  setupOpen.addEventListener('click', function () {
    openPopup();
  });
  // при нажатии enter удаляем класс .hidden
  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });
  // при клике добавляем класс
  setupClose.addEventListener('click', function () {
    closePopup();
  });
  // добавляем класс при нажатии enter
  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });
})();

(function () {
  var setup = document.querySelector('.setup');
  var setupWizard = setup.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');

  var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = window.randomColor(wizardCoat, coatColor);
  });
  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = window.randomColor(wizardEyes, eyesColor);
  });
  wizardFireball.addEventListener('click', function () {
    wizardFireball.style.background = fireballColor[window.getRandom(fireballColor)];
  });
})();
