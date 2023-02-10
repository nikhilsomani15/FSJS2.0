# Assignment 5

## Output Image

![output](./05_DOM%20Project/Output/DOM%20P2%20SS.png)

## Solution

```JavaScript
let btn = document.createElement("a");
btn.href = "index.htnl";
btn.className = "btn";
btn.textContent = "Pro Subscription";
let addBtn = document.querySelector(".nav-btn");
addBtn.appendChild(btn);
let a = document.createElement("a");
a.href = "#";
a.textContent = "Chinese (7)";
let addA = document.querySelector(".tags-container div");
addA.appendChild(a);
let blueviolet = document.querySelectorAll(".recipe-text");
blueviolet.forEach((e) => (e.style.color = "blueviolet"));
let card = document.createElement("div");
let h = document.createElement("h1");
h.innerText = "add 6th card here";
card.className = "card";
card.appendChild(h);
document.querySelector(".recipe-gallery").appendChild(card);
```
