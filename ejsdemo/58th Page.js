//:ecutre 242
// Rendering HTML and templates
//use res.sender() to render html(from EJS file)
//reponder lives on repoonse to render html files
//Node rqequires the html files to be stored in an ejs file or embedded js files which are dynamic
//EJS needs to be stored in  views file
//requires ejs package

//Lecture 243
//You must wrap all js statements in individual <%= %> or <% %>. The first is used if you want to actually output something while 2nd is used for eecuting logic
// Such as This
// <% if(thingVar.toLowerCase() === "rusty"){ %>
//   <p> Good choise! RUSTY IS THE BEST </p>
// <% } else { %> <--- Make sure your else statement continues to flow after the closing bracket of the if statement.
// <p> Reached a bad page </p>
// <% } %>
//The difference between <% %> is not supposed to display anything and its just for logic. It jsut runs the code

//Lecture 244-245
//We are going to show how to proeprly include public assets
//Properly configure our app to use EJS
//Use partials to dry up code
//Templates prevent you from repeatng code on several html pages.
// We usually put all css files in a folder called public. THe link reference wont be able to find it since its in a different folder.



//Another useful thing is the idea of templates.  We used to create take apart the html boilerplate in half in each ejs file for completion.
//Essentially the first half was called the header and bottom the footer. To load the template within other .ejs like posts.ejs files use
//  <% include partials/header %> and  <% include partials/footer %>. This will include the header and footer.ejs files.
//One thing to note is the filepath. We typed in partials/header to ensure express knew to look in there.
//Also we changed in the link <link rel="stylesheet" href="app.css"> to <link rel="stylesheet" href="/app.css"> by adding a forward slash to tell express to find the
//app.css file in the root directory and not in the current working directory. Else it will load an empty app.css file.




var express = require("express");
var app=express();

app.use(express.static("public"));//This will tell express to serve the content in the public folder. This way it can access the css file.
app.set("view engine","ejs");//This will tell express that you wull use ejs files ahead of time. Allows you to drop .ejs from the filenames in the render method.
app.get("/",function(request,response){
  response.send("<h1>Welcome to home page</h1>");
});


app.get("/home",function(request,response){
  response.render("home"); //Renders ejs page
});

app.get("/fallinlove/:thing",function(request,response){
    var thingVar = request.params.thing;
    response.render("love",{thingVar:thingVar}); //The  {} specifies the data to pass through. It will link to the thinkVar on the love.ejs page
    //Ensure wherever the data is passed through on the ejs file use the <%= var_name %> and this syntax is for outputting
    // and ensire the the variable name passed in here on this js page  is the same as the var_name in the ejs file.


});


app.get("/posts",function(request,response){
  var posts=[
    {title:"Post 1", author:"Susy"},
    {title:"Addoradtop", author:"Ronsi"},
    {title:"Pokemon", author:"Vapor"},

  ];
  response.render("posts",{post:posts});
});


app.listen(5000,"127.0.0.1",function(){
  console.log("Server has started!!");
});
