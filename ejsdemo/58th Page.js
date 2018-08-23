//:ecutre 242
// Rendering HTML and templates
//use res.sender() to render html(from EJS file)
//reponder lives on repoonse to render html files
//Node rqequires the html files to be stored in an ejs file or embedded js files which are dynamic
//EJS needs to be stored in  views file
//requires ejs package
var express = require("express");
var app=express();

app.get("/",function(request,response){
  response.send("<h1>Welcome to home page</h1>");
});


app.get("/home",function(request,response){
  response.render("home.ejs"); //Renders ejs page
});

app.get("/fallinlove/:thing",function(request,response){
    var thingVar = request.params.thing;
    response.render("love.ejs",{thingVar}); //The  {} specifies the data to pass through. It will link to the thinkVar on the love.ejs page
    //Ensure wherever the data is passed through on the ejs file use the <%= var_name %> and this syntax is for outputting
    // and ensire the the variable name passed in here on this js page  is the same as the var_name in the ejs file. 


});








app.listen(5000,"127.0.0.1",function(){
  console.log("Server has started!!");
});
