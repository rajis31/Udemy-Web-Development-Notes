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

$("li").on("click",function(){
    $(this).toggleClass("completed");
});
