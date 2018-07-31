//where the jquery syntax will go

//1. get the Text
console.log($("h1").text());
//2. saves a for loop to change all li's
$("li").text("I changed it");

console.log($("ul").html());
$("li").html("<p> Hello </p>");

//3. use .attr to get the attribute value and u can update it
console.log($("img").attr("src"));
console.log($("input").attr("type"));

//4. use .first() or .last() to select first/last  of the same set of elements
//5. .val() to get the value of form elements
console.log($("input").val());
//6. addClass("class name") to add css class to element
//7. removeClass("class name")
//8. toggleClass("class name") - turns the class on and off
