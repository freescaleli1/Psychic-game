var wins = 0;
var losses = 0;
var guessLeft = 9;
var YourGuessSoFar = [];
var possibleChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
var randomChoice = possibleChoice[Math.floor(Math.random()*possibleChoice.length)]

window.addEventListener("keydown", userInput, false);

function userInput(character){
    var userKeyCode = String.fromCharCode(character.keyCode).toLowerCase();
    //alert(userKeyCode.toLowerCase())
    YourGuessSoFar.push(userKeyCode);
    if (userKeyCode == randomChoice) {
        wins++;
        guessLeft = 9; 
        YourGuessSoFar.length = 0; 
    }
    else if (guessLeft == 0){
        losses++;
        guessLeft = 9;
        YourGuessSoFar.length = 0;
    }
    else if (userKeyCode !== randomChoice){
        guessLeft--; 
    }  

    var html = "<h1>The Psychic Game</h1>" + 
    "<p>Guess what letter I'm thinking of!</p>" +
    "<p>Total Wins: " + wins + "</p>" +
    "<p>Total Losses: " +  losses + "</p>" +
    "<p>Guesses Left: " + guessLeft + "</p>" +
    "<p>Your Guesses so far: " + YourGuessSoFar + "</p>";
    document.querySelector('#Psychic-Game').innerHTML = html;
}