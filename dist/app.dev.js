"use strict";

var userEnglishInput = document.querySelector('.userEnglish');
var englishButton = document.querySelector('.englishButton');
var returnEngTranslation = document.querySelector('.returnEngTranslation');
var userMorseInput = document.querySelector('.userMorse');
var morseButton = document.querySelector('.morseButton');
var returnMorseTranslation = document.querySelector('.returnMorseTranslation');
var morse = {
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '/': ' ',
  '-·-·--': '!',
  '·-·-·-': '.',
  '--··--': ','
};
var alphabet = {
  0: '-----',
  1: '.----',
  2: '..---',
  3: '...--',
  4: '....-',
  5: '.....',
  6: '-....',
  7: '--...',
  8: '---..',
  9: '----.',
  'a': '.-',
  'b': '-...',
  'c': '-.-.',
  'd': '-..',
  'e': '.',
  'f': '..-.',
  'g': '--.',
  'h': '....',
  'i': '..',
  'j': '.---',
  'k': '-.-',
  'l': '.-..',
  'm': '--',
  'n': '-.',
  'o': '---',
  'p': '.--.',
  'q': '--.-',
  'r': '.-.',
  's': '...',
  't': '-',
  'u': '..-',
  'v': '...-',
  'w': '.--',
  'x': '-..-',
  'y': '-.--',
  'z': '--..',
  ' ': '/',
  '!': '-·-·--',
  '.': '·-·-·-',
  ',': '--··--'
};
userEnglishInput.addEventListener('submit', function (e) {
  e.preventDefault();
  var english = userEnglishInput.english.value.trim();
  var engArray = [];

  for (var i = 0; i < english.length; i++) {
    var eng = english[i];
    engArray.push(eng);
  }

  var translation = engArray.map(function (letter) {
    return alphabet[letter];
  });

  if (engArray == []) {
    returnEngTranslation.innerHTML = 'Please Type in a word';
  }

  console.log(returnEngTranslation.innerHTML);
  returnEngTranslation.innerHTML = translation;
});
userMorseInput.addEventListener('submit', function (e) {
  e.preventDefault();
  var morse = userMorseInput.morse.value.trim();
  var morseArray = [];

  for (var i = 0; i < morse.length; i++) {
    var mor = morse[i];
    morseArray.push(mor);
  }

  var engTranslation = morseArray.map(function (dot) {
    return morse[dot];
  });
  console.log(alphabet['.-']);
  returnMorseTranslation.innerHTML = engTranslation;
});