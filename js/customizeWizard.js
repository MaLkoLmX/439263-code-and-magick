'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var setupWizard = setup.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = window.randomColor(wizardCoat, window.coatColor);
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = window.randomColor(wizardEyes, window.eyesColor);
  });

  wizardFireball.addEventListener('click', function () {
    wizardFireball.style.background = fireballColor[window.getRandom(window.fireballColor)];
  });
})();
