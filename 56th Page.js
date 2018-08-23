//Lecture 234: Intro to Express

// 1. What is a framework? How is it different from a library?
//
// 2. What is express?
// IT is a web development framework
// 3. Why are we using express?

//Lecture 235 - First express app
var express=require("express");
var app=express();

//.get() is the route and in thise case to "/"
// request contains the info we want
// response contains the ansser to request

app.get("/",function(request,response){
  response.send("Hi there!");

});

//Go the the bye page and get a bye message
app.get("/bye",function(request,response){
  response.send("Bye!");

});





//Lecture 237 - package.json
//npm --save will create a json file of dependecies
// To create this use npm init in the working directory



//Lecture 238
// The * in the route is a catchall for any other route not specified
// Route parameters or patter variables to handle general routes or make it a pattern rather then programming each route in which is impossible
// Generally the route with * is placed at the very bottom to allow the other routes to run before it
// One of th wildcards for route parameters is the : which allwos
//Example. What /r/:subredditName means match anything to /r/ and a subreddit name
app.get("/r/:subredditName",function(request,response){
  response.send("A new subreddit using route parameters");
});

app.get("/r/:subredditName/:subName/:id",function(request,response){
  response.send(request.params);
  console.log("A more complex subreddit URL using route parameters");
});

app.get("*",function(request, response){
  console.log("page not found");
})

//Tell express to listen to requests
app.listen(5000,"127.0.0.1",function(){
  console.log("Server has started!!");
});
