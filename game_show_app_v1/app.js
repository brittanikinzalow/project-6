const qwerty = document.querySelector('#qwerty');
const startButton = document.querySelector('.btn__reset');
const phrase = document.querySelector('phrase');



function stub() {};


let missed = 0;


const phrases = [
    'merry christmas and happy new year',
    'have a blessed day',
    'catch me if you can',
    'knock knock whose there',
    'see you later alligator'
];




const getRandomPhraseAsArray = arr => {
    return phrases[Math.floor(Math.random() * phrases.length)];
  
};

const randomPhrase = getRandomPhraseAsArray(phrases);



















const addPhraseToDisplay = () => {

}

//event listener for start game//

startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});