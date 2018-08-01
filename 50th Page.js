// $("button").on("click",function(){
//   $("div").fadeOut(1000,function(){//Callback within the fadeOut and 1000ms = 1sec
//     console.log("Fadout");
//     //$("this").remove();
//   });
// });
//
//   $("div").fadeOut(1000,function(){//Callback within the fadeOut and 1000ms = 1sec
//     $("div").slideUp();
// });

$("button").on("click",function(){
  $("div").slideUp(1000);
});
