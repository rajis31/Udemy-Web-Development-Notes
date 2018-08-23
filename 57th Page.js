//Lecture 239 Express exercise
var express=require("express");
var app=express();

app.get("/",function(request,response){
  console.log("Hi there");
});

app.get("/speak/:animal", function(request,response){
  var params=request.params;
  if(params["animal"]==="pig")
  {
    response.send("The pig says Oink");
  }
  else if (params["animal"]==="cow")
  {
    response.send("The cow says moo");
  }
  else if (params["animal"]==="dog")
  {
    response.send("The dog says woof");
  }
});

app.get("/repeat/:word/:times",function(request,response){
  var word = request.params["word"]; //Or request.params.word
  var times = Number(request.params["times"]); //or request.params.times
  var res="";
  for(var i=0;i<times;i++)
  {
    res+=word+" ";
  }
    response.send(res);

});


app.get("*",function(request,response){
  response.send("Vistited wrong page");
});



//Tell express to listen to requests
app.listen(5000,"127.0.0.1",function(){
  console.log("Server has started!!");
});
