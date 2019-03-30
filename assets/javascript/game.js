
//Variables to track

var wins = 0;
var losses= 0;
var turnsLeft=9;
var lettersGuessed= [];
var compLetter=[];
var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//possible choices
var computerGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



//function to reset game
function reset() {
    turnsLeft = 9;
    wins = 0;
    losses = 0;
    lettersGuessed.length = 0;
    var compGuess = computerGuess[Math.floor(Math.random() * computerGuess.length)];
	computerGuess.push(compGuess);
};

//computer makes a random guess
window.onload = function() { 
 var compGuess = computerGuess[Math.floor(Math.random() * computerGuess.length)];
 compLetter.push(compGuess);
console.log(compLetter[0]);
};

//players guess
document.onkeyup = function(event) {
	var playerGuess = event.key;
	lettersGuessed.push(playerGuess);
    console.log(lettersGuessed);


//Coniditions to play game

if(!alphabet.includes(playerGuess)){
   alert('please only choose letter keys');
   return;

}
if ((playerGuess === computerGuess[0]) && (turnsLeft > 0)) {
	wins++;
    reset();
}

else if((playerGuess !== computerGuess[0]) && (turnsLeft > 0)) {
    turnsLeft--;
    losses++;
} 

else{
    losses++
    reset();
}


//Push to html

var html ="<p>Guess what letter I'm thinking of!</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses left: " + turnsLeft + "</p>" +
          "<p>Your guesses so far: " + lettersGuessed + "</p>";
 
document.getElementById("game").innerHTML = html;
}
