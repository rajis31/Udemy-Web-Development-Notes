//Lecture 151
//methods for selecting elements
// 1. document.getElementById()

var tag= document.getElementById("highlight");
console.log(tag);
console.dir(tag); //This will show all the attributes with tag

// 2. document.getElementsByClassName()
var tags=document.getElementsByClassName("bolded");
console.log(tags);

//3. ocument.getElementsByTagName()

var tags=document.getElementsByTagName("li");
console.log(tags)
//4.document.querySelector() only returns the 1st match

var tags=document.querySelector("li");
console.log(tags);

var tags=document.querySelector("#highlight");
console.log(tags);

//5. document.querySelectorAll() returns all matches
