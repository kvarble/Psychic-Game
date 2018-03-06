var computerGuess;
        var playerGuess = 0;
        var Guesses = 9;
        var wins = 0;
        var losses = 0;
        var incorrect = [];

    function gameStart() {

// computer starts game by picking letter from array
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
            "z",
        ];
        var computerGuess = letters[Math.floor(Math.random()*letters.length)];
        var guesses = 9;
        console.log(computerGuess);
        // player guesses letter creates an event everytime key is pressed

        document.onkeyup = function(event) {
            var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
            incorrect.push(event.key);
            console.log(playerGuess);
        // create if/else statements for correct/incorrect letters guessed and restart game

        if (playerGuess === computerGuess)
        {wins++
            alert("you read my mind!")
            incorrect = [];
            gameStart(); 
        }
        else {
            guesses --;
            if (guesses === 0) {losses ++ 
            alert ("you cannot read minds!");
            incorrect = [];
            
            gameStart()
            }
           
        }
// display wins, losses, remaining guesses, and letters chosen
    var html = "<p> Can you read my mind? Guess a letter! </p>" +
                "<p> wins: " + wins + "</p>" +
                "<p> losses: " + losses + "</p>" +
                "<p> guesses: " + incorrect + "</p>" +
                "<p> remaining guesses: " + guesses + "</p>"

    document.querySelector("#game").innerHTML = html;

        };

    }
gameStart();
