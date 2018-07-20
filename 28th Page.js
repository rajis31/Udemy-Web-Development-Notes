//Lecture 104 - Guessing Game
//# to guesss
var secretNumber=4;
//Ask user for his guess
var guess = Number(prompt("Guess a number"));

//Check the guess
if(guess===secretNumber)
{
  alert("You guess right");
}
else if (guess<secretNumber) {
  alert("Guessed too low");
}
else if (guess>secretNumber) {
  alert("Guessed too high");
}
