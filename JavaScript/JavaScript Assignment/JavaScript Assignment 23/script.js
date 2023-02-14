// Write a program to check that the number given by the user is a prime number or not.
let num = parseInt(
  prompt("Enter a positive number to check this is prime or not")
);
let prime = true;
if (num == 0 || num == 1) {
  console.log("not prime not composite");
} else if (num > 1) {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  if (prime) {
    console.log(`${num} is a prime number`);
  } else {
    console.log(`${num} is not prime number`);
  }
}
