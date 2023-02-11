// Write a program which tells the number of days in a month.
let months = {
  January: 31,
  February: 28,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31,
};
for (const key in months) {
  console.log(`${key} has total of ${months[key]} days`);
}
