// Lecture 130,135
// use windows.setTimeout(function() {},500); to pause your code such as a JS function
// Typically you can use this when your displaying alerts because when you display a alert
// chrome will not display the html page at the same time.

//Lecture 131 - ToDO list app
var todos = [];

var input = prompt("What would you like to do?");

while (input !== "quit") {

  if (input === "list") {
    listTodos();  //Simplying using function is using refactoring 
  } else if (input === "new") {
    insertTodo();
  } else if (input === "delete") {
    deleteTodo();
  }
  var input = prompt("What would you like to do?");
}
console.log("You quit the app");


function listTodos() {
  console.log("*************");
  todos.forEach(function todo(element, index) {

    console.log(index + ": " + element);

  });
  console.log("*************");
}

function insertTodo() {
  //ask for new todo
  var input = prompt("Enter a new Todo");
  todos.push(input);

}

function deleteTodo() {
  //ask for index of todo to be deleted
  var index = prompt("Enter index of todo list you want to delete?");
  //delete that todo
  todos.splice(index, 1);
  console.log("Deleted an element from todo");
}
