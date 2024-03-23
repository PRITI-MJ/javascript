let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

//let prevGuess = [] //to show user about the previous guesses
let numGuess = 1; //it will increase after every guess, once the guess has cross the limit, it will start over

let playGame = true; //to start a game we took a variable

if(playGame){
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    //this method will check whether the guessed value is in the valid range or not
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess < 1){
        alert('Please enter a number greater than 1');
    }else if(guess > 100){
        alert('Please enter a number less than 100')
    }else{
        //prevGuess.push(guess);
        if(numGuess === 10){
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNumber}`);
            endGame()
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
            //we don't have to call display message as we will decide the guessed value high or low in the "checkGuess" function
        }
    }
}

function checkGuess(guess){
    //to check if the guess is correct or not, if not then print low or high
    if(guess === randomNumber)
    {
        displayMessage(`You guessed it right! The random number is ${guess}`)
        endGame();
    }
    else if(guess < randomNumber)
    {
        displayMessage(`Number is Too Low`);
    }
    else if(guess > randomNumber)
    {
        displayMessage(`Number is Too High`);
    }
}

function displayGuess(guess){
    //to clear the input box value for the next user-input, update the previous guesses and guess remaining
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}` //11 because we don't have to reach till 0

}

function displayMessage(message){
    // it will print the low and hi messages after the guess
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}


function endGame(){
    //to end the game
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    //to start a new game
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', (e) => {
        randomNumber = parseInt(Math.random() * 100 + 1);
        //prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);
        playGame = true;
        displayMessage('');
    })
}
