const userEnglishInput = document.querySelector('.userEnglish')
const englishButton = document.querySelector('.englishButton')
const returnEngTranslation = document.querySelector('.returnEngTranslation')

const userMorseInput = document.querySelector('.userMorse')
const morseButton = document.querySelector('.morseButton')
const returnMorseTranslation = document.querySelector('.returnMorseTranslation')


const morse = {
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
	',': '--··--',
}

userEnglishInput.addEventListener('submit',  (e) => {
    e.preventDefault()
    const english = userEnglishInput.english.value.trim()

    const engArray = []
    for (let i = 0; i < english.length; i++) {
        const eng = english[i];
        engArray.push(eng)
        console.log(engArray);
    }

	const translation = engArray.map((letter) => {
		return morse[letter]
	})
	returnEngTranslation.innerHTML = translation
})

userMorseInput.addEventListener('submit', (e) => {
	e.preventDefault()
	const morse = userMorseInput.morse.value.trim()
	
	const morseArray = []
	for (let i = 0; i < morse.length; i++) {
		const mor = morse[i];
		morseArray.push(mor)
	}

	const engTranslation = morseArray.map((dot) => {
    dot.toString()
    // return Object.keys(morse)[Object.values(morse).indexOf(dot)]
	let kobe = Object.keys(morse)
	return kobe[Object.values(morse).indexOf(dot)]
  })

	returnMorseTranslation.innerHTML = engTranslation
})