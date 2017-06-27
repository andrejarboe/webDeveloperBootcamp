/*


*/

var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode')

for (var i = 0; i < modeButtons.length; i++) {
  modeButtons[i].addEventListener('click', function(){
    modeButtons[0].classList.remove('selected');
    modeButtons[1].classList.remove('selected');
    this.classList.add('selected');

    this.textContent === 'Easy' ? numSquares = 3: numSquares = 6;
    // if (this.textContent === 'East') {
    //   numSquares = 3;
    // }else {
    //   numSquares = 6;
    // }

    reset();

    //figuge out num of squres to show
    //pick new color
    //pick a new pickedColor
    //update page to reset changes
  });
}

function reset(){
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick new random color form arr
  pickedColor = pickColor();
  //change coloy display to match picked color
  colorDisplay.textContent = pickedColor;

  messageDisplay.textContent = "";
  resetButton.textContent = 'New Colors';
  h1.style.backgroundColor = 'steelblue';

  //change colors of squares on page
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    }else {
      squares[i].style.display = 'none';
    }

  }
}


// easyBtn.addEventListener('click', function(){
//   numSquares = 3;
//   easyBtn.classList.add('selected');
//   hardBtn.classList.remove('selected');
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//
//   for (var i = 0; i < squares.length; i++) {
//     if(colors[i]){
//       squares[i].style.backgroundColor = colors[i];
//     }else {
//       squares[i].style.display = 'none';
//     }
//   }
// });
//
// hardBtn.addEventListener('click', function(){
//   numSquares = 6;
//   hardBtn.classList.add('selected');
//   easyBtn.classList.remove('selected');
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//
//   for (var i = 0; i < squares.length; i++) {
//       squares[i].style.backgroundColor = colors[i];
//       squares[i].style.display = 'block';
//   }
// });

resetButton.addEventListener('click', function(){
  reset();
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    console.log(clickedColor, pickedColor);
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
      resetButton.textContent = 'Play Again';
    }else {
      this.style.backgroundColor = '#232323';
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color){
  //loop thtough all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color
    squares[i].style.backgroundColor = color;
  }
};

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);

  return colors[random];
}

function generateRandomColors(num){
  //make array
  var arr = [];
  //repeat num times
  for (var i = 0; i < num; i++) {
    //get random color and push to arr
    arr.push(randomColor());
  }
  //return array
  return arr;
}

function randomColor(){
  //pick a "red" for 0 to 255
  var red = Math.floor(Math.random() * 256);
  //pick a "green" for 0 to 255
  var green = Math.floor(Math.random() * 256);
  //pick a "blue" for 0 to 255
  var blue = Math.floor(Math.random() * 256);
  //must be in this format: "rgb(r, g, b)"
  return "rgb(" +red+ ", " +green+ ", " +blue+ ")";

}














//
