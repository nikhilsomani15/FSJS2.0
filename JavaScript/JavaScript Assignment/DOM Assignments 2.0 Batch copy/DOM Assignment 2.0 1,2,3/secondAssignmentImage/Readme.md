# Assignment 2

# TASK 1

## Output Image

![output 1](./task1Output.png)

## Solution

```JavaScript
let para = document.querySelectorAll(".accordian p");
para[2].style.display = "block";
para[3].style.display = "block";
```

# TASK 2

## Output Image

![output 2](./task2Output.png)

## Solution

```JavaScript
let addChild = document.querySelector(".accordian-wrapper");
let skills = document.createElement("div");
skills.className = "accordian";
let h3 = document.createElement("h3");
h3.innerText = "Skills";
let p = document.createElement("p");
p.innerText ="I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over Github";
skills.appendChild(h3);
skills.appendChild(p);
addChild.appendChild(skills);
p.style.display = "block";

```
