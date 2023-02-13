// The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let sortedArr = ages.sort((a, b) => a - b);
let ageLen = ages.length;
let min = sortedArr[0];
let max = sortedArr[ageLen - 1];
let median =
  ageLen % 2 == 0
    ? (sortedArr[ageLen / 2] + sortedArr[ageLen / 2 + 1]) / 2
    : sortedArr[(ageLen + 1) / 2];
let avg = ages.reduce((acc, curr) => acc + curr, 0) / ageLen;
let range = max - min;
let minAbs = Math.abs(min - avg);
let maxAbs = Math.abs(max - avg);
let cmp = minAbs === maxAbs;
console.log(sortedArr);
console.log(min);
console.log(max);
console.log(median);
console.log(avg);
console.log(range);
console.log(cmp);
