//Lecture 154-155 - Manipulating by Style
//Go over the different ways to maninpulate css/html with js

//1. The Style property is one way to maninpulate an elements style
//Example
// var tag = document.getElementById("highlight");
//
// //Here we change things using style
// tag.style.color="blue";
// tag.style.border="10 px red solid";
// tag.style.fontSize="70px";

var h1 = document.querySelector("h1");
h1.style.color="yellow";
h1.style.border=".5px blue solid";

//Separation of concerns - We want to sepaarate the html, css, and js from each other as much
// html should be the structure, css is the presentation, and js is the behavior
//We want to turn css element on and off with js.

//2. The classList property is a readonly list that contains the classes for a given element
//It is not an array

// /*First you would define a class in your CSS file */
// .another-class{ color:purple;}

//Then
// var tag = document.querySelector("h1");

//  Add a class to the SELECTOR
// tag.classList.add("another-class");

//Remove a class
// tag.classList.remove("another-class");

//Toggle a class
//tag.classList.toggle("another-class");

//Example of classList

var p = document.querySelector("p");
p.classList.add("big");

//3. textContent - returns all the text containted in a given element
//Example
//<p> Hi I will be changed </p>

//var tag= document.querySelector("p");
// Retrieve the textContent
// tag.textContent

//alter the textContent
// tag.textContent="changed here"

var tag= document.querySelector("p");
console.log(tag.textContent);

var tag= document.querySelector("ul");
console.log(tag.textContent);

//4. innerHTML - similar to textContent but returns the inner html tags
// can also reset it to somethine else by setting it to something else
var tag= document.querySelector("p");
console.log(tag.innerHTML);


var tag= document.querySelector("ul");
console.log(tag.innerHTML);

console.log(document.body.textContent);

//document.body.innerHTML="<h1> This is changing it via innerHTML </h1>";

//5. user getAttribute() and setAttribute() to read and write attributes like src and href
//Exampl
var img1 = document.getElementsByTagName("img")[0];
console.log(img1);
console.log(img1.getAttribute("src"));

img1.setAttribute("src","http://a1.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnfl%2F500%2Foak.png");
