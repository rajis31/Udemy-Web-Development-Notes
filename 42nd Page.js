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

var h1 = document.querySelector("h1");
h1.addEventListener("click",function(){ //Add click to h1 tag
  alert("h1 is clicked");
});

//Adding alsitenter to LI
var li = document.querySelectorAll("li");
for(var i=0; i<li.length;i++)
{
    li[i].addEventListener("click", function(){
        this.style.color="blue"; //We use the word this to refer to the li just clicked
    });
}
