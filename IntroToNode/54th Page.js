//This will be the solution to the Lecture 227/228 exercises

function echo(message,times)
{
  for(var i=1;i<=times;i++)
  {
    console.log(message);
  }
}

echo("Hello",10);
echo("blah",15);

var a=[110.123,34,34,12,12,123,123];

function avg(a){
  var sum=0;
  a.forEach(function(val){
    sum+=val;
  })
  return sum/a.length;
}

console.log(avg(a));
