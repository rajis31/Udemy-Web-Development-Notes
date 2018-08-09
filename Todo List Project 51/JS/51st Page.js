// //Check off specifi Todos by clicking
// $("li").on("click", function(){
//   $(this).css("color","gray");
//   $(this).css("text-decoration","line-through");
// });

//Rather then do all this below we will create a css class and then toggle it
// $("li").on("click",function(){
//   if($(this).css("color")==="rgb(128, 128, 128)"){
//     $(this).css("color","black");
//     $(this).css("text-decoration","none");
//   }
//   else{
//
//     $(this).css({
//       color: "gray",
//       textDecoration: "line-through" //textDecoration has a hyphen by js does not allow that so remove it
//     });
// }
// });

$("ul").on("click","li",function(){ //What is happen here is that when any li is clicked inside the UL, then it will trigger the function for the entire ul.
    $(this).toggleClass("completed");
});

//Click on X to delete todo
//later changed from click to on to allow for any new elements added to ul to be deleted
$("ul").on("click","span",function(event){ //Since span is inside of UL which is inslde of Div , if ul and div have event listeners for click lets say, when the span is clicked on, the ul and div events will trrigger as well which is call event bubbling
 $(this).parent().fadeOut(500, function(){ //this refers to the li and not not the span
   $(this).remove();
 }); //removes the li
  event.stopPropagation(); //This whill stop event bubbling
});

$("input[type='text']").keypress(function(event){
  if(event.which===13){
    //grabbiung todo text from input
    var todoText=$(this).val();
    //clears the input box
    $(this).val("");
    //Create new LI and add to UL
    $("ul").append("<li><span><i class='fa fa-trash'></i></span ></span> "+todoText +"</li>");

  }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
