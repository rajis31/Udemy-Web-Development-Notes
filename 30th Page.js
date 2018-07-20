//Lecture 110 - Annoying while loop exercise

var answer = prompt("Are we there yet?");

if (answer === "yes") {
  console.log("We made it!");
} else {
  while (answer !== "yes" && answer !== "yeah") {
    answer = prompt("Are we there yet?");
    if (answer === "yes" || answer === "yeah") {
      console.log("We made it!");
    }
  }
}
