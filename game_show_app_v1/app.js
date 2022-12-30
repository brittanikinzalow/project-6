const qwerty = document.querySelector('#qwerty');
const startButton = document.querySelector('.btn__reset');
const phrase = document.querySelector('phrase');
const ul = document.querySelector('#phrase ul');
let heartLives = document.querySelectorAll('img');

function stub() {};


 let missed = 0;


var myPhrases = [
    'merry christmas and happy new year',
    'have a blessed day',
    'catch me if you can',
    'knock knock whose there',
    'see you later alligator'
];


//math.floor to return a random phrase to the DOM check by console.log(result) to see the random phrase

const getRandomPhraseAsArray = arr => {
    var myPhrases = [Math.floor(Math.random()*arr.length)];
    const item = arr[myPhrases];
    return item;
};

const result = getRandomPhraseAsArray(myPhrases);



//adding the phrases to the display with a for loop 

    const addPhraseToDisplay = arr => {
        for (let i = 0; i < arr.length; i++) {
            let li = document.createElement('li');
            li.textContent = arr[i];
            ul.appendChild(li);
            if (arr[i] === " ") {
                li.className = 'space';
            } else {
                li.className = 'letter';
            }
        }
    }
        
addPhraseToDisplay(result);

//check if the letter is in the phrase

const checkLetter = button => {
    let keyboard = document.getElementsByClassName('keyboard');
    let key = null;
    for (let i = 0; i < keyboard.length; i++) {
        if(keyboard[i].toLowerCase() === button){
            keyboard[i].classList.add('show');
            key = button;
        }
    }
    return key;
}


//qwerty event listener for keyboard

qwerty.addEventListener('click', (event) => {
    const chosenButton = event.target;
    if(chosenButton.tagName === 'button' && chosenButton.className !== 'chosen'){
        chosenButton.className = 'chosen';
        let correctLetter = checkLetter(chosenButton);
        if (correctLetter === null){
            heartLives[missed].src = 'images/lostHeart.png';
            missed++;
    }
  } return checkWin();
});


//check win

const checkWin = () => {
    let letter = document.getElementsByClassName('letter');
    let show = document.getElementsByClassName('show');
    const results = document.getElementsByClassName('title');
    if(letter.length === show.length){
        results.textContent = 'WINNER!';
        overlay.classList.add('win');
        overlay.style.display = 'flex';
    } else if (missed < 4){
        results.textContent = 'LOSER!';
        overlay.classList.add('lose');
        overlay.style.display = 'flex';
    }
}









//event listener for start game//

startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});