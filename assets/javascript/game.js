// Run this function whenever user presses a key
document.onkeyup = function(event) {
// Determine which key was pressed
var userGuess = event.key;
}
	//while (guessesLeft > 0) {
		//var i = 0;
		//if userGuess===chosenArray[i] {
			//guessesLeft--;

		//}
	//}
//}

//if (userGuess===chosenArray[i]) 

var wordBank = ["galaxy", "alien", "pluto", "astronaut", "mercury", "star"];
var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var chosenArray = chosenWord.split("");

//.split chosen word into an array, compare userGuess to array

// Establish variables

var wins = 0; 
var winsPar = document.getElementById("wins");
winsPar.innerHTML = "Wins: " + wins;

// When player correctly guesses word, wins++


// Show remaining guesses as numbers of letters in current word
	var guessesLeft = chosenWord.length;

	var remainingGuesses  = document.getElementById("remainingguesses");

	remainingGuesses.innerHTML = "Number of Guesses Remaining: " + guessesLeft;
	//var guessesPar = document.createElement("p");
	//guessesPar.innerHTML = guessesLeft;
	//remainingGuesses.appendChild(guessesPar);


// Show appropriate number of dashes for current word
	var currentWord = document.getElementById("currentword");

	var answerArray = []

	for (var i = 0; i < chosenWord.length; i++) {
	answerArray[i] = "_";
	}

	currentWord.innerHTML = "Current Word: " + answerArray.join(" ");
	//var wordPar = document.createElement("p");
	//wordPar.innerHTML = answerArray;
	//currentWord.appendChild(wordPar);

	
// Show letters that user has guessed

var lettersGuessed = [];
var letters = document.getElementById("lettersguessed");
letters.innerHTML = "Letters Already Guessed: " + lettersGuessed;



