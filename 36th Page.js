//Lecture 132-133
//Array Iteration
// Example is blog post or comments which are stored in array and is then iterated over to creates html comments in an Array
//use for loop to loop through Array
var inputs=["blue","red","blah","single"];

for(var count=0;count<inputs.length;count++){
  console.log(inputs[count]);
}
console.log("This is the second way");
//Another way of looping using array.forEach(function) function
//This function uses an anonymous function within also known as the callback funciton
//The callback function is expected to have atleast 1 arguement but up to 3 only
// 1st arguement = each element in loop
// 2nd arguement = index of the element
// 3rd arguement = it is the array that .forEach was called on

//Example

inputs.forEach(function(inputs,i,arr){
  console.log(inputs,i,arr);
})
inputs.forEach(function(inputs){
  console.log(inputs);
})
inputs.forEach(function(inputs){
   if(inputs==="red"){
     console.log("Red is present");
   }
   else {
     console.log(inputs);
   }
})
