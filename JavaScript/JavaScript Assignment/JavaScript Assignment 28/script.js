// Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***

// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****
let num = parseInt(prompt("enter a number"));
for (let i = 0; i < num; i++) {
  for (let j = 0; j <= i; j++) {
    console.log("*");
  }
  console.log("");
}
for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    console.log("*");
  }
  console.log("");
}
