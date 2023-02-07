# Assignment 7.1

## Input Image 1

![input 1](./DOM%20P7/ass7.1-before.png)

## Output Image 1

![output 1](./DOM%20P7/ass7.1-after.png)

## Solution

```JavaScript
let lang = document.querySelectorAll(".main__languages a");
let newArr = Array.from(lang).filter((e) =>e.innerText.includes("2.0"));
newArr.forEach((e) => (e.style.display = "none"));
```

## Input Image 2

![input 2](./DOM%20P7/ass7.2-before.png)

## Output Image 2

![output 2](./DOM%20P7/ass7.2-after.png)

## Solution

```JavaScript

```