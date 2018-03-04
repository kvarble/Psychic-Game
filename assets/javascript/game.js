function GetLetter()
{
    var letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"];
    console.log(letters[4]);
    var wins = 0;
    var losses = 0;
    var guesses = 0;

    document.onkeyup = function () {
        var playerGuess = String.fromCharCode(event.keyCode)
            toLowerCase();
            console.log(userguess);

    var computerGuess = options[Math.floor(Math.random()*letters.length)];
    
    document.getElementById("message").innerHTML=random;
    console.log(computerGuess);
}

for (i=0; i<9; i++) {
    guess = document.write("what's your guess?");
    if (answer == guess) {
        document.write("correct!");
        break;
    }else{
        guess = document.write("nope!");
    }
}

}