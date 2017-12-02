//http://apprize.info/javascript/kids/7.html
//What we need to do:
//Pick a random word
//Take the player's guess
//Check that player's guess is valid
//Keep track of letters that player has guessed
//Show player progress, guesses left, etc
//Finish when player has guessed word
//Restart

//Establish an array of words
var wordBank = ["galaxy", "alien", "pluto", "astronaut", "mercury", "star"];

//Computer uses math floor and math random to choose from array
var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];

var answerArray = [];
for (var i = 0; i < chosenWord.length; i++) {
	answerArray[i] = "_";
}

var remainingGuesses = chosenWord.length;
var lettersGuessed = event.key // ???

// Whenever a key is pressed, alert "pressed a button".
document.onkeyup = function(event) {
console.log(event);

var playerMove = event.key; //holds the key entered

// if player choice is valid, update the blanks
// otherwise, update letters already used & update remainingGuesses


