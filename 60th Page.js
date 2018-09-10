//Lecutre 249 - APIs
// When we use the internet we make an HTTP request and get HTML back
//APIs dont repond with HTML. HTML has info about the structure of the page. APIs repond with data and not structure
// The use data formats like XML or JSON
//XML is similar to HTML
// Example
// <person>
// <age> 21 </age>
// <name> raji </name>
// </person>
//JSON looks like javascript objects except with the quotes around keys
//Usse JSON viewer chrome extension to view JSON

//Lecture 250 Making API requests with Node
//We wabt to grab info from an API thru a request and either store it or show to user.
//We gonna use a package called request or curl (commandline)
var request = require("request");

// request('http://www.google.com', function(error, response, body){
//   if(!error && response.statusCode==200){
//     console.log(body);
//
//   }
//   else{
//     console.log(error);//commone rros are 404 etc
//   }
// })

//request using yahoo weather api
request('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function(error, response, body){
  if(!error && response.statusCode==200){
    var parsedData=JSON.parse(body);
    //console.log(parsedData["query"]);
      console.log(Object.keys(parsedData["query"]));//drilling into JSON data
      console.log(Object.keys(parsedData["query"]["results"]["channel"])); //digging deeper into JSON using Object.keys
  }
  else{
    console.log(error);//commone rros are 404 etc
  }
});
