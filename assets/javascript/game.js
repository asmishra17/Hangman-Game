var wordBank = ["galaxy", "alien", "pluto", "astronaut", "mercury", "star"];
var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var chosenArray = chosenWord.split("");

var guessesLeft = chosenWord.length;
var remainingGuesses  = document.getElementById("remainingguesses");
	remainingGuesses.innerHTML = "Number of Guesses Remaining: " + guessesLeft;


var lettersGuessed = [];
var letters = document.getElementById("lettersguessed");
	letters.innerHTML = "Letters Already Guessed: " + lettersGuessed;



var currentWord = document.getElementById("currentword");
var answerArray = []

	for (var i = 0; i < chosenWord.length; i++) {
	answerArray[i] = "_";
	}

	currentWord.innerHTML = "Current Word: " + answerArray.join(" ");

var wins = 0; 
var winsPar = document.getElementById("wins");
winsPar.innerHTML = "Wins: " + wins;


//The Game Loop
while (guessesLeft > 0) {
}


// Ask why this isn't working
//window.addEventListener('keypress', function (event) {
    //if (event.keyCode !== 13) {
        //lettersGuessed.push(event.key);
    //}
//}, false);



