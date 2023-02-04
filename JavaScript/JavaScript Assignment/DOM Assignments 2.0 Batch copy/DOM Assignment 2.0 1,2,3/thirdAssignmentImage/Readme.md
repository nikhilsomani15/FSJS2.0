# Assignment 3

# TASK 1

## Output Image

![output 1](./task1Output.png)

## Solution

```JavaScript
let fsjs = document.querySelector(".enterName");
fsjs.placeholder = "FSJS 2.0";
let fsjs1 = document.querySelector(".userName");
fsjs1.placeholder = "FSJS 2.0";
let email = document.querySelector(".enterMail");
email.placeholder = "fsjs@ineuron.ai";
let email1 = document.querySelector(".userEmail");
email1.placeholder = "fsjs@ineuron.ai";
let hello = document.querySelectorAll("textarea");
hello.forEach((e) => (e.placeholder = "Hello World"));
```