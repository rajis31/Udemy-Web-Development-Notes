//All this is lecture 246-247

var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true})); //This is to turn the req.body to a JS object.
var friends = ["miranda","justin","raji"]; //Moved friends out to global scope becuz it cant be accessed locally


app.get("/",function(req,res){
  res.render("home");
});

app.get("/friends",function(req,res){
  res.render("friends",{friends:friends});
});
//What is happening is user goes to the friends page, enters info on form and data gets transferred through post request to addfiend page.

app.post("/addfriend",function(req,res){
  var newFriend =req.body.addfriend; //req.body has all the form data and then we want to pull it out
  //req.body is not created so we have to tell express to explicitly turn it into a JS object.
  //Have to use the body-parser package
  friends.push(newFriend);
  res.redirect("/friends"); //Goes back to the friends page when a new data friend has been added via form
});  //This is for sending data to the server side






app.listen(5000,"127.0.0.1",function(){
  console.log("Server has started.");
});
