var words = [
    "JIM",
    "PAM",
    "DWIGHT",
    "OSCAR",
    "TOBY"
];

// var el = document.getElementById("")//

var word = words[Math.floor(Math.random() + words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
//create variable of letters remaining//
var remainingLetters = word.length;

//Game functions//
while (remainingLetters > 0) {
    //show progress//
    var el = document.getElementById("HANGMAN");
    el.innerHTML = answerArray.join(" ");
    //user inputs guess//
    var guess = prompt("Select any letter");
    if(guess === null) {
        break;
    }
    else if (guess.length !== 1) {
        alert("please enter a single alphabetical letter");
    }
    else {
        //update game to take in new input//
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
//end of game loop
}
el.innerHTML = answerArray.join(" ");

