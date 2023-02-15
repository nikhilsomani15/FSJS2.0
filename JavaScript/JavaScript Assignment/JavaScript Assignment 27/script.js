// Write a program to print all the prime number between 0 to 100 (0 and 100 included).
for (let i = 2; i <= 100; i++) {
  let c = 0;
  for (let j = 2; j <= i / 2; j++) {
    if (i % j == 0) {
      c = 1;
    }
  }
  if (c == 0) {
    console.log(i);
  }
}
