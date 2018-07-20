//Lecture 102- Conditionals
// The if-else if -else statement same as in java
var age = Number(prompt("What is your age?"));
console.log(age);
if(age<0){
  console.log("Error: Age is invalid");
  }
  else if(age===21){
      console.log("Happy Birthday");
  }

  else if(age%2===1){
    console.log("Odd Age");
  }

else if(Number.isInteger(Math.sqrt(age)))
{
  console.log("Age is a perfect square");
}
