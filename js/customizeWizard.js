'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var setupWizard = setup.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');

  wizardCoat.addEventListener('click', function () {
    window.colorizeElement(wizardCoat, window.coatColor, window.randomColor);
  });

  wizardEyes.addEventListener('click', function () {
    window.colorizeElement(wizardEyes, window.eyesColor, window.randomColor);
  });

  wizardFireball.addEventListener('click', function () {
    window.colorizeElement(wizardFireball, window.fireballColor, window.randomBackground);
  });
})();

