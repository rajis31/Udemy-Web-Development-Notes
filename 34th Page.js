//Lecture 127-128 - Arrays
// index starts at 0
// can have arrays with arrays
//example
var friends=["raji","digno","haha","bara"];


//Updating arrays
friends[0]="chuck";
friends[1]="Peter";

//adding new data to Arrays
//add a new index that does not exist and then set it equal to a valye
friends[4]="Updated"; //adds a value in the 5th position
console.log(friends[4]);

//How to initlaize an empty array? 2 ways
var e1 = [];
var e2 = new Array();

//Arrays can hold any type of data
var e3 = ["blach",2,"halo",3,4,5];

//arrays have a length property
console.log(e3.length);

//lecture 128 - Array methods
//push - add elements to end of arrays

var colors=["red","orange","yellow"];
colors.push("green");
console.log(colors);

//pop removes the last element of an arrays
var col=colors.pop();
console.log(col);

//unshift() - adds to front of an arrays
//shift() - to remove the end of the arrays

colors.unshift("infrared");
colors.shift();

//indexOf(element) -returns the index of the element in the array. Returns -1 if element is not found
colors.indexOf("orange");

//slice(<start,end>) can copy the array.
//you can specify slice() which copy the entire array over
//slice(2,) will copy everything after 2nd index
