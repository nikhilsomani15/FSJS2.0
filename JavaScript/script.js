const teaching = {
  availanle: true,
};
const nikhil = {
  isGood: "yes",
  __proto__: teaching,
};
const somani = {
  birthDay: 1999,
  //   __proto__: nikhil,
};
// somani.__proto__ = teaching;
Object.setPrototypeOf(somani, nikhil);
console.log(somani.isGood);
