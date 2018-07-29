//Lectures 168=176 Color Game App
// var colors = ["rgb(255, 0, 0)",
//   "rgb(255, 255, 0)",
//   "rgb(0, 255, 0)",
//   "rgb(0, 255, 255)",
//   "rgb(0, 0, 255)", //Needs spaces to compare properly
//   "rgb(255, 0, 255)"
// ]
var num_of_squares = 6;
var colors = generateRandomColors(num_of_squares); //return a list of random colors

var squares = document.querySelectorAll(".square");
var pickedColor = colors[pickColor()]; //Used to change the rgb in h1 to color that is chosen
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");



easyBtn.addEventListener("click", function() {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  num_of_squares = 3;
  colors = generateRandomColors(num_of_squares);
  pickedColor = colors[pickColor()];
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) //check to see if there is a color at that index
    {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }


});

hardBtn.addEventListener("click", function() {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  num_of_squares = 6;
  colors = generateRandomColors(num_of_squares);
  pickedColor = colors[pickColor()];
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});


resetButton.addEventListener("click", function() {
  //generate all new colors
  colors = generateRandomColors(num_of_squares);
  console.log(colors);
  //pick a new random color from array
  pickedColor = colors[pickColor()];
  //change rgb textContent
  colorDisplay.textContent = pickedColor;
  //change colors of quares
  changedColors(colors);
  //reset colorDisplay
  h1.style.backgroundColor = "steelblue";
});




for (var i = 0; i < colors.length; i++) {
  //add initial colors
  squares[i].style.backgroundColor = colors[i]; //backgroundColor works in more browswers then background

  //add eventListener
  squares[i].addEventListener("click", function() {

    //grab color of picked square
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      changedColors(pickedColor);
      messageDisplay.textContent = "Correct";
      h1.style.backgroundColor = pickedColor;
      resetButton.textContent = "Play Again?";

    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changedColors(color) {
  //loop through all squares and change color to the correctly picked color
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = color[i];
  }
}

function pickColor() { //Generate the random # for the random colors
  var colorsRandom = Math.floor(Math.random() * colors.length);
  return colorsRandom;
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //add num random clors tol array
  for (var i = 0; i < num; i++) {
    //get the random color
    arr.push(randomColor());

  }
  //return array
  return arr;
}

function randomColor() {
  //pick a red, green, and brlue from 0 to 255
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return ("rgb(" + r + ", " + g + ", " + b + ")");


}
