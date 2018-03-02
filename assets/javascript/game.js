function GetLetter()
{
    var letters= new Array(
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
    "z");
    var random = letters[Math.floor(Math.random() * letters.length)];
    
    document.getElementById("message").innerHTML=random;
}

for (i=0; i<10; i++){

}