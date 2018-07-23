//Lectures 139 - 145  OOP
//An example of a javascript object is
//Everything element is a key value pair
//Objects have no built in array like arry

var person = {
  name: "Cindy",
  age: 32,
  city: "Missoula"
}

//How to retreieve data? use brakcet or dot notation
//cannot use dot noation if name begins with a number
console.log(person["name"])
//or using dot noatation
console.log(person.name);

//How to update objects?
person["name"] = "raj";
console.log(person["name"])
//or using dot notation
person.name = "raji";
console.log(person["name"])

//Creating Objects
// create a blank one as below
var names = {};
names.name = "raji";
names.age = 26;
names.city = "selma";

//or
names = {
  name: "raji",
  age: 26,
  city: "selma"
};

//or
var person = new Object();
person.name = "raji";
person.age = 26;
person.city = "selma"

//objects can hold all kinds of data
var everything = {
  names: ["raj", "halo", "fire"],
  age: 34,
  person: {
    city: "selma",
    zip: 93662,
    area: 559
  }
};
console.log(everything["person"]);

//Arrays and Objects

//In this example we set up an array with objects
var posts = [{
    title: "Cats are crazy",
    author: "colt"
  },
  {
    title: "Cats are awesome",
    author: "Cat luvr"
  }
];
//different ways to access the data
console.log(posts[0]);
console.log(posts[0].title);
console.log(posts[0]["title"]);

//movies DB esxercise
var movies = [{
    movie: "In Bruges",
    rating: 5,
    seen: true
  },
  {
    movie: "Frozen",
    rating: 4.5,
    seen: false
  },
  {
    movie: "Mad Max Fury Road",
    rating: 5,
    seen: true
  },
  {
    movie: "Les Miserables",
    rating: 3.5,
    seen: false
  }
];

for (var count = 0; count < movies.length; count++) {
  if (movies[count].seen === true) {
    console.log("You have watched " + "\"" + movies[count].movie + "\"" + " - " + movies[count].rating + " stars");
  } else {
    console.log("You have not seen " + "\"" + movies[count].movie + "\"" + " - " + movies[count].rating + " stars");

  }
}
//Add methods to Objects
//Advantages
// 1. prevents namespace collisions
var obj = {
  name: "chuck",
  age: 45,
  isCool: false,
  friends: ["bob", "tina"],
  add: function(x, y) {//method added
    return x + y;
  }
}
console.log(obj.add(5,6));

//This Keyword
//Is there a way to share the information within an object to a function? use the this Keyword
var comments={};
comments.data=["Good job","Bye","hello"];
comments.print=function print(){
  this.data.forEach(function(el){//this keyword refers to the comments object
    console.log(el);})};


comments.print();
