let userInput = parseInt(prompt("Enter your age"));
if (userInput >= 18) {
  alert("You can drive");
} else {
  alert(`You can drive after ${18 - userInput} Years`);
}
