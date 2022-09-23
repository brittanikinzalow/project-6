const qwerty = document.querySelector('#qwerty');
const startButton = document.querySelector('.btn__reset');
const book = [ 
    'from blood and ash',
    'hooked',
    'cruel prince',
    'ashes of chaos',
];

let missed = 0;







//array random phrase
function getRandomPhraseAsArrray(arr) {
    const book = document.querySelector('.book');
    const randomNumber = Math.floor(math.random() * 4);
    const randomArr = arr[randomNumber];

    return getRandomAnswer;
    phrase.innerText = `${randomStrings}`;
};









//add letters of string to the display

function addPhraseToDisplay(arr) {
    const phraseUl = document.querySelector('#book ul');
    const randomArray = getRandomPhraseAsArrray(arr);
    const splitPhrase = randomArray.split('');

    for (const i = 0; phraseSplit.length; i++){
        const li = document.createElement('li');
        const HTML = `${phraseSplit[i]}`;

        if (phraseSplit[i] != ''){
            li.classList.add('letter');
        } else {
            li.classList.add('space');
        }

        phraseUL.appendChild(li);
    }
        };














//check if a letter is in the phrase

function checkLetter(button) { }

//check if the game has been won or lost

const checkWin = () => {}

//listen to see if the start game button has been pressed

startButton.addEventListener('click', () => {
    const overLay =document.querySelector('#overlay');
    overLay.style.display = 'none';
});

//listen for onscreen keyboard to be clicked

qwerty.addEventListener('click', e => {});

