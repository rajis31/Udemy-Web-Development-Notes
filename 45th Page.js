var lis = document.querySelectorAll("li");

for(var i=0; i<lis.length;i++){//loop through the elements and add the following event listeners
  lis[i].addEventListener("mouseover",function(){
    this.classList.add("selected"); //use the keyword this to refer to the exact object
  });
  lis[i].addEventListener("mouseout",function(){
    this.classList.remove("selected");//removes the class specified
  });
  lis[i].addEventListener("click",function(){
    this.classList.toggle("done");//This will toggle on and off  done css class
  });



}
//Lecture 166 - Count the number of events on the mdn site
//Solution
// var etags=document.querySelectorAll("td code a");
// etags.length
