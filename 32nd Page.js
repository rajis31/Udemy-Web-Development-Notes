//Lecture 116-121 - Functions
//Lets you write up code into resubale chunks
//syntax
// function func_name(args){
//    statement1;
//      return;
//}

//All functions always returns undefined if a return statement is not explicitly used.
//functions always return
//Declare a function first
function doSomething() {
  console.log("Do Something");
}
doSomething();

//function with args
function square(num) {
  console.log(num * num);
}
square(5);

function capitalize(str) {
  if (typeof str === "number") {
    return ("THis is not a string");
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var result = capitalize('halo');
console.log(result);


//Lecture 121 exercises
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(434.5));
console.log(isEven(4));

function factorial(num) {
  var result = 1;
  if (num === 0) {
    return 1;
  }
  while (num > 0) {
    result = result * num;
    num--;
  }

  return result;
}

console.log(factorial(10));
console.log(factorial(5));


function kebabToSnake(string){
  var newString=string.replace(/-/g,"_");
  // for(var count=0; count<string.length;count++){
  //   if(string[count]==="-")
  //   {
  //     newString=newString+"_";
  //   }
  //   else{
  //     newString=newString+string[count];
  //   }
  // }
  // return newString;
return newString;

}

console.log(kebabToSnake("heelo-world"));
