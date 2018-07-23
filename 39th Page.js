//Lectures 146-151
//lecture 146 - When interacting with html via JS ensure that the js script is loaded after the html /
//as shown below
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Test</title>
// </head>
// <body>
//     <h1>Some HTML Code Here</h1>
//
//     <script src="scriptfile.js"></script><------- Right here
// </body>
// </html>

//lecture 147-148 - We interact with HTML via DOM
// DOM stands for document object model and is the interface between js and html+class css
// The browser turns every html tag into a javascript object which is stored in a document object. It is the root node
//where everything else lives

//Lecture 151 - Select and manipulate
//Basically select the object and change it with js Code
//Example below

var h1 = document.querySelector("h1"); //Select h1 tag
h1.style.color="pink"; //manipulate
