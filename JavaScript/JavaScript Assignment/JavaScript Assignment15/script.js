// Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

let score = 50;
if (score >= 90 && score <= 100) {
  console.log("A");
} else if (score < 90 && score >= 70) {
  console.log("B");
} else if (score >= 60 && score < 70) {
  console.log("C");
} else if (score >= 50 && score < 60) {
  console.log("D");
} else if (score >= 0 && score < 50) {
  console.log("F");
}
