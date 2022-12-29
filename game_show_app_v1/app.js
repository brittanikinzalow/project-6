const qwerty = document.querySelector('#qwerty');
const startButton = document.querySelector('.btn__reset');
const phrase = document.querySelector('phrase');



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
        
const randomPhrases = getRandomPhraseAsArray(myPhrases);
// addPhraseToDisplay(result);


//event listener for start game//

startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});