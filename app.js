import { morse, alphabet } from "./englishData.js"

const userEnglishInput = document.querySelector('.userEnglish')
const englishButton = document.querySelector('.englishButton')
const returnEngTranslation = document.querySelector('.returnEngTranslation')

const userMorseInput = document.querySelector('.userMorse')
const morseButton = document.querySelector('.morseButton')
const returnMorseTranslation = document.querySelector('.returnMorseTranslation')




userEnglishInput.addEventListener('submit',  (e) => {
    e.preventDefault()
    const english = userEnglishInput.english.value.trim()

	const translation = english
					.toLowerCase()
					.split("")
					.map((letter) => {
					return alphabet[letter] ? alphabet[letter] : letter;
					})
					.join(" ");
					console.log(translation);

	returnEngTranslation.innerHTML = translation
})

userMorseInput.addEventListener('submit', (e) => {
	e.preventDefault()
	const morseTranslation = userMorseInput.morse.value
	
	const translation = morseTranslation
					.split(" ")
					.map((dot) => {
						return morse[dot] 
						})
					.join('')
		
		

	returnMorseTranslation.innerHTML = translation
})