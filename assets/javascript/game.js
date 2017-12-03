
// Establish variables

var wins = 0; 
var winsPar = document.getElementById("wins");
winsPar.innerHTML = "Wins: " + wins;

// When player correctly guesses word, wins++


var wordBank = ["galaxy", "alien", "pluto", "astronaut", "mercury", "star"];
var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];

var lettersGuessed = 0;

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

// Display letters guessed by user
	




