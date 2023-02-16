// Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.
let fileName = prompt("Enter a file name with extension");
let ext = fileName.split(".").pop();
console.log(ext);
