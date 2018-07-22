function printReverse(input) {
  for (var count = input.length - 1; count >= 0; count--) {
    console.log(input[count])
  }

}

printReverse([3, 4, 5, 6]);


function isUniform(input) {
  for (var count = 0; count < input.length; count++) {
    if (input[0] !== input[count]) { //Cant use for forEach since there is no exit
      return false;
      break;
    }
  }
  return true;
}
var result = isUniform([3, 3, 3, 3]);
console.log(result);

var result = isUniform([4, 5, 6, 7]);
console.log(result);

function sumArray(array) {
  var sum = 0;
  array.forEach(function sums(input) {
    sum += input;
  });
  return sum;
}


var result = sumArray([3, 3, 3, 3]);
console.log(result);

var result = sumArray([4, 5, 6, 7]);
console.log(result);

function max(array){
  var max=array[0];
  array.forEach(function max(input){
      if(input>max){
        max=input;
      }

  })
  return max;
}

var result = max([3, 3, 3, 3]);
console.log(result);

var result = max([4, 5, 6, 7]);
console.log(result);

//***********************Additional****************************//
console.log("Calling a function within a function");

function calling_another_function(array,func)
{
  for(var count=0; count<array.length;count++)
  {
    func();
  }

}

function sayHi(){
  console.log("Calling hi within another function");
}

calling_another_function([1,2,3,4],sayHi);
