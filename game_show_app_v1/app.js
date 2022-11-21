const qwerty = document.querySelector('#qwerty');
const startButton = document.querySelector('.btn__reset');
const phrase = document.querySelector('phrase');



function stub() {};


let missed = 0;


let phrases = [
    'merry christmas and happy new year',
    'have a blessed day',
    'catch me if you can',
    'knock knock whose there',
    'see you later alligator'
];



let getRandomPhraseAsArray = arr => {
    arr [Math.floor(Math.random() * phrases.length)];
};


let selectedPhrase = phrases[Math.floor(Math.random() * phrases.length)];









const addPhraseToDisplay = arr => {

}

//event listener for start game//

startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});