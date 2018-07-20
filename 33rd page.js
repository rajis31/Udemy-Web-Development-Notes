//Lecture 123-125 - Scope
// Variables inside a function has its own scope
// any variables declared outside a function its on the global scope
// Functions have access to things in the global scope
//Cant use variables declared inside the Functions
//Example
var phrase = "goodbye";

function doSometthin(){
  var phrase="hello"; //prints hello since we are delclaring a new variable
  console.log(phrase);
}
console.log(phrase); //prints goodbye


// lecture 125 - higher lebel functions
//passing other functions into other Functions which is called higher level function
function sing() {
  console.log("blah blak twinkle twinkle");
  console.log("blah blak twinkle twinkle");
}

setInterval(sing,500); //This calls the sing function every 500 ms
clearInterval(2); //This is to stop setInterval

//setInterval(function(){
//console.log("blah blak twinkle twinkle");
//console.log("blah blak twinkle twinkle");
//
//},500) <-- This is an anonymous function which are available in javascript
