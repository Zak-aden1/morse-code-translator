"use strict";

var _englishData = require("./englishData.js");

var userEnglishInput = document.querySelector('.userEnglish');
var englishButton = document.querySelector('.englishButton');
var returnEngTranslation = document.querySelector('.returnEngTranslation');
var userMorseInput = document.querySelector('.userMorse');
var morseButton = document.querySelector('.morseButton');
var returnMorseTranslation = document.querySelector('.returnMorseTranslation');
userEnglishInput.addEventListener('submit', function (e) {
  e.preventDefault();
  var english = userEnglishInput.english.value.trim();
  var translation = english.toLowerCase().split("").map(function (letter) {
    return _englishData.alphabet[letter] ? _englishData.alphabet[letter] : letter;
  }).join(" ");
  console.log(translation);
  returnEngTranslation.innerHTML = translation;
});
userMorseInput.addEventListener('submit', function (e) {
  e.preventDefault();
  var morseTranslation = userMorseInput.morse.value;
  var translation = morseTranslation.split(" ").map(function (dot) {
    return _englishData.morse[dot];
  }).join('');
  returnMorseTranslation.innerHTML = translation;
});