var wordBank = ["galaxy", "alien", "pluto", "astronaut", "mercury", "star"];
var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var chosenArray = chosenWord.split("");

var guessesLeft = chosenWord.length;
var lettersGuessed = [];
var answerArray = []
var remainingGuesses  = document.getElementById("remainingguesses");
var letters = document.getElementById("lettersguessed");
var currentWord = document.getElementById("currentword");
var wins = 0; 
var winsPar = document.getElementById("wins");

// create dashes for the chosen word
for (var i = 0; i < chosenWord.length; i++) {
	answerArray[i] = "_";
}

// starts the game play
// calls a bunch of functions
startGame();

function updateGuesses() {
	remainingGuesses.innerHTML = "Number of Guesses Remaining: " + guessesLeft;
}
	
function lettersGuess () {
	letters.innerHTML = "Letters Already Guessed: " + lettersGuessed.join(" ");
}

document.onkeypress = function(e) {
  	updateUserGuess(e.key);
}

function updateUserGuess (userGuess) {
	// if statement to block multiple
	// of the same letter
	lettersGuessed.push(userGuess);
	lettersGuess();
}

function currentWords () {
	currentWord.innerHTML = "Current Word: " + answerArray.join(" ");
}

function updateScore() {
	winsPar.innerHTML = "Wins: " + wins;
}	

// Create Game Loop Here

// while (guessesLeft > 0) {
	// take user input
	// compare user guess to letters in array
	// replace _ with letter if guessed correctly
	// display updated array
	// guessesLeft--
	// wins++ when user guesses entire word
	// show new word
//}




// Ask why this isn't working
//window.addEventListener('keypress', function (event) {
    //if (event.keyCode !== 13) {
        //lettersGuessed.push(event.key);
    //}
//}, false);

// Calling functions to start game
function startGame() {
	updateGuesses();
	lettersGuess();
	currentWords();
	updateScore();
	updateUserGuess();
}




