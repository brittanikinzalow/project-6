const qwerty = document.querySelector('#qwerty');
const startButton = document.querySelector('.btn__reset');
const phrase = [{}]

//return a radom phrase 

const getRandomPhraseAsArrray = arr => [
    { question:'Who is Haunting Adeline?',
        answer: 'Zade'
    },

    { question:"What is Penellaphe Da'Neer?",
    answer: 'Goddess'
    },

    { question:'Who is the king in the Kingdom of the Wicked?',
    answer: 'Wrath'
    },

    { question:'Who is the bride of the shadow king?',
    answer: 'Princess Faraine'
    },

    { question:'What type off creature is Aria from Crown of Chaos series?',
    answer: 'Pheonix'
    },

    { question:'What did the woman from The Lost Apothecary sell?',
    answer: 'Pioson'
    },

    { question:'Who is the author of These Hollow Vows?',
    answer: 'Lexi Ryan'
    },

    { question:'Whos is the Cruel Prince?',
    answer: 'Carden'
    },

    { question:'Who is the author of Hooked?',
    answer: 'Emily McIntire'
    },

    { question:'What is the name of Eragons dragon?',
    answer: 'Saphira'
    },
];

//add letters of string to the display

const addPhraseToDisplay = arr => {}

//check if a letter is in the phrase

const checkLetter = button => {}

//check if the game has been won or lost

const checkWin = () => {}

//listen to see if the start game button has been pressed

startButton.addEventListener('click', () => {
    const overLay =document.querySelector('#overlay');
    overLay.style.display = 'none';
});

//listen for onscreen keyboard to be clicked

qwerty.addEventListener('click', e => {});
