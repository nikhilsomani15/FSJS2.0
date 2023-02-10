# Assignment 1

# TASK 1

## Output Image

![output 1](./task1Output.png)

## Solution

```JavaScript
let createElement = document.createElement("li");
let ul = document.querySelector("ul");
createElement.innerHTML = "<a href='#'>Hire Me</a>";
ul.appendChild(createElement);
```

# TASK 2

## Output Image

![output 2](./task2Output.png)

## Solution

```JavaScript
let placeHolder = document.querySelector(".search-field input");
placeHolder.placeholder = "Search My Project";
```

# TASK 3

## Output Image

![output 3](./task3Output.png)

## Solution

```JavaScript
let arr = document.querySelectorAll(".hero-left-section p span");
arr[1].innerText = "an Employee";
arr[2].innerText = "iNeuron Intelligence Pvt Ltd";
```

# TASK 4

## Output Image

![output 4](./task4Output.png)

## Solution

```JavaScript
let hiteshImage = document.querySelector(".hero-right-section img");
hiteshImage.src = "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg";
```

# TASK 5

## Output Image

![output 5](./task5Output.png)

## Solution

```JavaScript
let supportBtn = document.createElement("button");
supportBtn.innerText = "Support Me";
let appendBtn = document.querySelector(".hero-right-section-btns");
appendBtn.appendChild(supportBtn);
```
