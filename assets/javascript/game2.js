"use strict";

//list of possible words//
var selectableWords = [
    "DWIGHT", "JIM", "PAM", "MICHAEL", "JAN", "PHYLLIS", "STANLEY", "OSCAR", "KEVIN", "TOBY", "ANDY", "ANGELA", "ERIN", "RYAN", "KELLY", "HOLLY", "MEREDITH", "CREED", "DARRYL", "GABE", "ROBERT", "KAREN", "PACKER", "DAVID", "DEANGELO", "NELLIE", "CLARK", "PETE", "CHARLES"
];

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// console.log(words);
//# of incorrect guesses allowed//
const maxTries = 10;

//stores user guesses//
var guessedLetters = [];

//the place of the chosen word in the character array//
var currentWordIndex;

//the answer/ the random word chosen by computer//
var word;

//stores the word being created by guessing//
var guessingWord = [];

//keeps track of how many tries the user has left//
var remainingGuesses = 0;

//boolean when player has finished building the word//
var hasFinished = false;

//counter for number of wins user has//
var wins = 0;

// //function to choose the answer//
// var word = selectableWords[Math.floor(Math.random() * selectableWords.length)];
// console.log(word);


//Game sounds//
//TO BE ADDED IF TIME//

//Functions//
//refresh the 
function resetGame() {
    remainingGuesses = maxTries;

    currentWordIndex = Math.floor(Math.random() * (selectableWords.length));

    guessedLetters = [];
    guessingWord = [];

    //computer generates a random number which corresponds with the index number from selectableWords - then translates it into a string//
    for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
        guessingWord.push(" ");
    }
    //reveal "you win" and "game over" images when applicable//
    document.getElementById("tryAgain").style.cssText = "display: none";
    document.getElementById("game-over").style.cssText = "display: none";
    document.getElementById("you-win").style.cssText = "display: none";

    //clears screen//
    updateDisplay();

};
//keeps score and updates the counters//

function updateDisplay() {
    document.getElementById("totalWins").innerHTML = wins;

    //show the correct letters as they are guessed//
    //create a string without commas - use 
    var guessingWordText = "";
    for (var j = 0; j < guessingWord.length; j++) {
        guessingWordText += guessingWord[j];
    }

    document.getElementById("currentWord").innerHTML = guessingWordText;
    document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
    document.getElementById("guessedLetters").innerHTML = guessedLetters;


    // console.log(guessingWordText);
    // console.log(remainingGuesses);
    // console.log(guessedLetters);
};

//function to fill in all occurrences of a valid letter in the word//
function evaluateGuess(letter) {
    //stores where to put the letter in order//
    var positions = [];

    //for loop to find all occurrences of a letter in the random word and store it in an array//
    for (var k = 0; k < selectableWords[currentWordIndex].length; k++) {
        if (selectableWords[currentWordIndex][k] === letter) {
            positions.push(k);
        }
    }

    //this subtracts one from the list of remaining guesses each time the user makes an incorrect guess (if the function did not find any occurrences of the letter in the random word)//
    if (positions.length <= 0) {
        remainingGuesses--;
    }
    else {
        //if there is an occurrence, replace the correct underscore with the letter//
        for (var i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] = letter;
        }

    }
};
//checking for remaining underscores, displays You Win image, displays "Press any Key to start again" text, updates the number of wins in the counter and returns true to hasFinished//
function checkWin() {
    if (guessingWord.indexOf("_") === -1) {
        document.getElementById("you-win").style.cssText = "display: block";
        document.getElementById("tryAgain").style.cssText = "display: block";
        wins++;
        hasFinished = true;
    }
};
function checkLoss() {
    if (remainingGuesses <= 0) {
        document.getElementById("game-over").style.cssText = "display: block";
        document.getElementById("tryAgain").style.cssText = "display: block";
        hasFinished = true;
    }
}
//user Guess function//
function makeGuess(letter) {
    if (remainingGuesses > 0) {
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }
};
// event listener

document.onkeydown = function (event) {
    //if "hasFinished" is true, refresh screen and clear the arrays//
    if (hasFinished) {
        resetGame();
        hasFinished = false;
    } else {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toUpperCase());
            updateDisplay();
            checkWin();
            checkLoss();

        }
    }
};




















    // //add underscores to answer array//
    // //number of underscores equals number of letters in random word//
    // function startGame() {
    //     for (var i = 0; i < randomWord.length; i++) {
    //         answerArray[i] = "_";
    //         // string = answerArray.join(" ");

    //         console.log("_");
    //     }

    //     //put underscores into a string//
    //     document.getElementById("answer").innerText = string;
    //     console.log(string);

    // }

    // function Letter() {

    //     // This gets the letter that the user types in the box//
    //     var letter = document.getElementById("letter").value;

    //     //this checks to make sure something was entered//
    //     if (letter.length > 0); {
    //         for (var i = 0; i < randomWord.length; i++) {

    //             //if letter that the user typed in matches one of the letters in the randomWord//
    //             if (randomWord[i] === letter) {
    //                 //then assign it to a letter//
    //                 answerArray[i] = letter;

    //             }

    //         }
    //         count++;
    //         document.getElementById("counter").innerHTML = "Number of clicks: " + count;
    //         document.getElementById("answer").innerHTML = answerArray.join(" ");
    //         console.log("answer");
    //     }


    // }
