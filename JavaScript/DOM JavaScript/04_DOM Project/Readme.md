# Assignment 4

## Output Image

![output](./04_DOM%20Project/Output/DOM%20P1%20SS.png)

## Solution

```JavaScript
let orange = document.querySelector(".clash-card__unit-stats--barbarian");
orange.style.backgroundColor = "#EC9B3B";
let pink = document.querySelector(".clash-card__unit-stats--archer");
pink.style.backgroundColor = "#ee5487";
let darkOrange = document.querySelector(".clash-card__unit-stats--giant");
darkOrange.style.backgroundColor = "#f6901a";
let green = document.querySelector(".clash-card__unit-stats--goblin");
green.style.backgroundColor = "#82bb30";
let blue = document.querySelector(".clash-card__unit-stats--wizard");
blue.style.backgroundColor = "#4FACFF";
let textWhite = document.querySelectorAll(".clash-card__unit-stats");
textWhite.forEach((e) => (e.style.color = "#FFFFFF"));
let textWhite1 = document.querySelectorAll(".one-third");
textWhite1.forEach((e) => (e.style.color = "#FFF"));
```
