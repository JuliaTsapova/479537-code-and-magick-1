'use strict';

var COUNT = 4;
var wizardParams = {
  FIRST_NAME: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристов', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  SURNAME: [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'],
  COAT_COLOR: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYES_COLOR: ['black', 'red', 'blue', 'yellow', 'green']
};
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomNumber = function (number) {
  return Math.floor(Math.random() * number);
};

var renderWizard = function (data) {
  var wizard = similarWizardTemplate.cloneNode(true);
  wizard.querySelector('.setup-similar-label').textContent = data.name;
  wizard.querySelector('.wizard-coat').style.fill = data.coatColor;
  wizard.querySelector('.wizard-eyes').style.fill = data.eyesColor;
  return wizard;
};

var getWizard = function () {
  return {
    name: wizardParams.FIRST_NAME[getRandomNumber(wizardParams.FIRST_NAME.length)] + wizardParams.SURNAME[getRandomNumber(wizardParams.SURNAME.length)],
    coatColor: wizardParams.COAT_COLOR[getRandomNumber(wizardParams.COAT_COLOR.length)],
    eyesColor: wizardParams.EYES_COLOR[getRandomNumber(wizardParams.EYES_COLOR.length)]
  };
};

var getWizardsArray = function (arrLength) {
  var wizards = [];
  for (var i = 0; i < arrLength; i++) {
    wizards.push(getWizard());
  }
  return wizards;
};

var createFragment = function (arr) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < arr.length; i++) {
    fragment.appendChild(renderWizard(arr[i]));
  }
  return fragment;
};

similarListElement.appendChild(createFragment(getWizardsArray(COUNT)));

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
