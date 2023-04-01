const qwerty = document.querySelector('#qwerty');
const startButton = document.querySelector('.btn__reset');
const phrase = document.querySelector('phrase');
const ul = document.querySelector('#phrase ul');
let missed = 0;
const overLay = document.querySelector("#overlay");

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
            if (arr[i] === " ") {
                li.className = 'space';
            } else {
                li.className = 'letter';
            }
            ul.appendChild(li);
        }
    };
        
addPhraseToDisplay(result);

// //check if the letter is in the phrase

const checkLetter = button => {
    let letter = document.getElementsByClassName('letter');
    let letterMatch = null;
    for (let i = 0; i < letter.length; i++) {
        if(letter[i].textContent.toLowerCase() === button.textContent){
            letter[i].classList.add('show');
            letterMatch = letter[i].textContent;
        }
    }
    return letterMatch;
};




//qwerty event listener for keyboard

qwerty.addEventListener('click', (e) => {

        if( e.target.tagName === 'BUTTON' && e.target.className !== 'chosen' ) {
          const phraseLetter = checkLetter(e.target);
          e.target.className += 'chosen';
          if( phraseLetter === null ) {
            
            let tries = document.getElementsByClassName('tries')[missed];
            missed += 1;
            tries.innerHTML = '<img src=images/lostHeart.png height="35px" width="30px">';
          }
        }
        checkWin();
      });


//check win

const checkWin = () => {
   
    let letter = document.getElementsByClassName('letter');
    let show = document.getElementsByClassName('show');
    const title = document.getElementsByClassName('#overlay');
    if(letter.length === show.length){
        startButton.innerText = "YOU WON!"
        overLay.className = 'win';
        overLay.style.display = 'flex';
    } else if (missed > 4){
        startButton.innerText = 'LOSER!';
        overLay.className = 'lose';
        overLay.style.display = 'flex';
    }
};



//event listener for start game//
const tries = document.getElementsByClassName('tries');
const buttons = document.getElementsByTagName('button');

startButton.addEventListener('click', () => {
    const item = getRandomPhraseAsArray(myPhrases);
    ul.innerHTML = "";
    //heart reset
    for (let i = 0; i < tries.length; i++) {
        tries[i].innerHTML = '<img src=images/liveHeart.png height="35px" width="30px">';
      }
     

    //keyboard reset
  
    for (let b = 0; b < buttons.length; b++) {
      const buttonElement = buttons[b];
      buttonElement.className = "";
    }

    addPhraseToDisplay(item);
    missed = 0;
    overLay.style.display = "none";
  });
