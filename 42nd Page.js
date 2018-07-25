//Lecture 159 - Intro to events
// basically add an element and then a listener like click, hover, etc
//How to add listener?
// use element.addEventListener(type, functionToCall);

//Example
// var button = document.querySelector("button");
// button.addEventListener("click", function() {console.log("SOMEONE CLICKED!")};
var button = document.querySelector("button");
var paragraph=document.querySelector("p");

button.addEventListener("click", function(){
  paragraph.textContent="Someone clicked the button!";
});
