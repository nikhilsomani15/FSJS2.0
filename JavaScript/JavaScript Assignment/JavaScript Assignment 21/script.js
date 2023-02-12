// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let countries = require("../JavaScript Assignment 19/countries");
countries.includes("Ethopia")
  ? console.log("ETHOPIA")
  : countries.push("Ethopia");
