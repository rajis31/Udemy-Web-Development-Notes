// <!-- lecture 186,188 - jQuery Click events -->
//jQuery click() method is a way to add an event listener
//jQuery is a wrapper of js
// $("h1").click(
//   function(){
//       alert("h1 clicked");
//   });
//   $("button").click(
//     function(){
//         alert("button clicked");
//     });
// $("button").click(
//       function(){
//           $(this).css("background","pink"); //This is jQuery way of refering to object using this
// });
//
// $("button").click(
//       function(){
//         var text = $(this).text();
//         console.log("You click "+ text);
//       });

//jQuery keypress() method is used for keyboard listener
// It will return the ending character entered.
// Most common of the keyboard functuins keyup() and keydown()
// $("input").keypress(
//       function(){
//       console.log("You pressend something");
//     });
// $("input").keypress(
//       function(event){//Pass in the event
//       console.log(event);
//     });
// $("input").keypress(
//       function(event){//Pass in the event
//       console.log(event.which);
//     });

//jQuery on() works similar to addEventListener(). It lets you to specify the type of event to listen for.
// Supports all types of Events
// why use on() ?
]// While in most clases click() and on("click") would get the job done,
// click() only adds listeners to existing elements while on() adds to all future elements as well 

// $("h1").on("click",function(){
//   $(this).css("color","purple"); //This refers to the one h1 clicked
// })

$("h1").on("click",function(){
  $("h1").css("color","purple"); //This refers to all  h1 clicked
});

$("input").on("keypress",function(){
  console.log("Key Pressed") //This refers to all  h1 clicked
});

$("button").on("mouseenter",function(){
  $(this).css("font-weight","bold");
});

$("button").on("mouseleave",function(){
  $(this).css("font-weight","normal");
});
