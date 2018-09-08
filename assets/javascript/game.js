// // PLAYER VARIABLES
// Define variables (wins, losses, guessesLeft, guessesSoFar, wordList, validGuesses, currentWord)
// Define functions (restartGame, checkLetter, roundCompleted)

var checkString = ''
function checkLetter(letter){
    for(var i = 0; i < splitWord.length; i++){
        checkString += '_'
        if(letter.toUpperCase() === splitWord[i].toUpperCase()){
            console.log('Letter matched');
        }
    }
    
}
document.onkeyup = function(event){
    console.log(event)
}
var start;
var wins = 0;
var losses = 0;
errorCount = 0;

var maxErrors = 9;

var wordDisplay = document.getElementById("word-display-letters");
var guessedLetters = document.getElementById("guessed-letters");
var errorCount = document.getElementById("error-count");
var winCount = document.getElementById("win-count");
var lossCount = document.getElementById("loss-count");

var correct = document.getElementsByClassName("correct");
var alertLineElements = document.getElementsByClassName("alert-line");

var validGuesses = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

var pressAnyKeyToStart = [
    " ___ START AGAIN "
];

var pressAnyKeyToReset = [
    " ___ RESET "
];

var youWin = [
    " YOU WIN"
];

var youLose = [
    " GAME OVER "
];

var emptyAlert = [
    " ", " ",
]
//  var game = new Hangman();

// This determines which key was pressed and stores it for later use.

//get user's guess//

// document.onkeyup = function(event) {
// 	var userGuess = event.key;

// 	if (!game.gameOver) {
// 		if (validGuesses.includes(userGuess) && !game.guessedLetters.includes(userGuess)) {
// 			game.checkGuess(userGuess);
// 		}
// 	} else {
// 		game = new Hangman();
// 		game.updatePageData();
// 	}
  
// }

var word;
var splitWord;
var wordList = [
    "dwight", "jim", "PAM", "MICHAEL", "JAN", "PHYLLIS", "STANLEY", "OSCAR", "KEVIN", "TOBY", "ANDY", "ANGELA", "ERIN", "RYAN", "KELLY", "HOLLY", "MEREDITH", "CREED", "DARRYL", "GABE", "ROBERT", "KAREN", "PACKER", "DAVID", "DEANGELO", "NELLIE", "CLARK", "PETE", "CHARLES"
];

function restartGame(){
    word = wordList[Math.floor(Math.random() * wordList.length)];
    splitWord = word.split('');
}
 
//create a variable and array of word choices//
// function Hangman() {
//     this.wordList = [
//         "dwight", "jim", "PAM", "MICHAEL", "JAN", "PHYLLIS", "STANLEY", "OSCAR", "KEVIN", "TOBY", "ANDY", "ANGELA", "ERIN", "RYAN", "KELLY", "HOLLY", "MEREDITH", "CREED", "DARRYL", "GABE", "ROBERT", "KAREN", "PACKER", "DAVID", "DEANGELO", "NELLIE", "CLARK", "PETE", "CHARLES"
//     ]

// //choose word randomly//

// this.
// this.guessedLetters = [];
// this.errors = 0;
// this.visibleLetters = [];
// this.gameOver = false;
// this.alertLines = emptyAlert;
// for (var i = 0; i < this.word.length; i++) {
//     this.visibleLetters[i] = (false);
//     }
// }

// Hangman.prototype.checkGuess = function(char) {
//     this.guessedLetters.push(char);

//     var isInWord = false;
//     for (var i = 0; i < this.word.length; i++) {
//         if (this.word.charAt(i) === char) {
//         isInWord = true;
//         this.visibleLetters[i] = true;
//     }
// }
// if (!isInWord) {
//     this.errors++;
// }

// if (this.errors >= maxErrors) {
//     losses++;
//     this.alertLines = youLose;
//     this.gameOver = true;
// }

// if (!this.visibleLetters.includes(false)) {
//     wins++;
//     this.alertLines = youWin;
//     this.gameOver = true;
// }

// game.updatePageData();
// };

// Hangman.prototype.updatePageData = function() {
// var tempString = "";
// for (var i = 0; i < this.visibleLetters.length; i++) {
//     tempString += ((this.visibleLetters[i] || this.gameOver) ? this.word.charAt(i).toUpperCase() : "_");
//     if (i < (this.visibleLetters.length - 1)) tempString += " ";
//     console.log("tempString");
// }
// wordDisplayLettersElement.textContent = tempString;

// tempString = "";
// for (var i = 0; i < this.guessedLetters.length; i++) {
//     tempString += (this.guessedLetters[i].toUpperCase());
//     if (i < (this.guessedLetters.length - 1)) tempString += " ";
// }
// for (var i = tempString.length; i < 51; i++) {
//     tempString += " ";
// }
// guessedLettersElement.textContent = tempString;

errorString = "error-count".errors + " / " + maxErrors;
for (var i = errorString.length; i < 32; i++) {
    errorString += " ";
}
errorCount.textContent = errorString;

// tempString = wins + "";
// for (var i = tempString.length; i < 45; i++) {
//     tempString += " ";
// }
// winCountElement.textContent = tempString;

// lossString = losses + "";
// for (var i = lossString.length; i < 43; i++) {
//     lossString += " ";
// }
// lossCountElement.textContent = tempString;

// for (var i = 0; i < correctElements.length; i++) {
//     correctElements[i].textContent = (this.gameOver ? pressAnyKeyToReset[i] : pressAnyKeyToStart[i]);
// }

// for (var i = 0; i < alertLineElements.length; i++) {
//     alertLineElements[i].textContent = (this.alertLines[i]);
// }
// }

// game.updatePageData();

// function newFunction() {
//     return true;
// }
//     var remainingLetters = character.length;


// //loop that runs as long as there are letters remaining//

// //while (remaining

// var alphabetArray =["A", "B"]

// $alpha = range('a', 'z');
// console.log(range);

// for (i = 0; i < 26; i++) {


//     var li = document.createElement("li");
//     li.innerHTML = " " + (i+10).toString(36) + " ";
//     li.style.listStyle = "none";
//     li.style.display = "inline";
//     document.getElementById("letter-main").appendChild(li);

//   }


// // This function is run whenever a user presses a key
