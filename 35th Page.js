// Lecture 130
// use windows.setTimeout(function() {},500); to pause your code such as a JS function
// Typically you can use this when your displaying alerts because when you display a alert
// chrome will not display the html page at the same time.

//Lecture 131 - To do list app
var todos = [];

var input = prompt("What would you like to do?");

while (input !== "quit") {
  if (input === "list") {
    console.log(todos);
  } else if (input === "new") {
    //ask for new todo
    var input = prompt("Enter a new Todo");
    todos.push("input");
  }
  var input = prompt("What would you like to do?");
}
console.log("You quit the app");
