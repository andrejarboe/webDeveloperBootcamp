//Create secrest number
var secrectNum = 4;

//Ask user for guess
var stringGuess = prompt('Guess a number!');
var guess = Number(stringGuess);

//Check if guess is right
if(guess === secrectNum){
  alert('You got it right!');
}

//Check if higher
else if (guess > secrectNum) {
  alert('Too high. Guess again!');
}
//check if lower
else{
  alert('Too low. Guess again!!');
}
