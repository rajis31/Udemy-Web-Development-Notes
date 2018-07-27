//Lectures 161-163 example
var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var score1 = document.querySelector("#first");
var score2 = document.querySelector("#second");
var p1score = 0;
var p2score = 0;
var maxx_score=Number(document.querySelector("p span").textContent);
var maxx = document.querySelector("p span");
var input1 = document.querySelector("input");
var isGame = false;
var reset = document.querySelector("#reset");


p1.addEventListener("click", function() {
  if (!isGame) {
    p1score++;
    if (p1score === maxx_score) {
      score1.textContent = p1score;
      score1.classList.add("winner");
      isGame = true;
    }
    score1.textContent = p1score;}});

p2.addEventListener("click", function() {
  if (!isGame) {
    p2score++;
    if (p2score === maxx_score) {
      score2.textContent = p2score;
      score2.classList.add("winner");
      isGame = true;
    }
    score2.textContent = p2score;}});

input1.addEventListener("change", function() {
  maxx.textContent = input1.value;
  maxx_score=Number(maxx.textContent);
  console.log(maxx_score);
});

reset.addEventListener("click", function() {
    p1score=0;
    p2score=0;
    score1.textContent = 0;
    score2.textContent = 0;
    isGame=false;
    score1.classList.remove("winner");
    score2.classList.remove("winner");

});
