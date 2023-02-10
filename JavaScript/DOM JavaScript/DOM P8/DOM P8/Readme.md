# Assignment 8.1

## Input Image 1

![input 1](./ass8.1-before.png)

## Output Image 1

![output 1](./ass8.1-after.png)

## Solution

```JavaScript
      let hr = document.querySelectorAll(".hr-line")[1];
      console.log(hr);
      let h2 = document.createElement("h2");
      h2.classList.add("new-head");
      h2.innerText = "This is custom heading";
      let p = document.createElement("p");
      p.classList.add("new-p");
      p.innerText = "This is my custom Paragraph";
      let list = document.querySelector("aside");
      list.style.overflow = "scroll";
      list.appendChild(hr);
      h2.appendChild(p);
      list.appendChild(h2);
      list.style.outline = "3px solid red";
      list.style.outlineOffset = "10px";
      list.style.padding = "10px";
```

## Input Image 2

![input 2](./ass8.2-before.png)

## Output Image 2

![output 2](./ass8.2-after.png)

## Solution

```JavaScript
document.querySelector("body").style.backgroundImage = "none";
```

## Input Image 3

![input 3](./ass8.3-before.png)

## Output Image 3

![output 3](./ass8.3-after.png)

## Solution

```JavaScript
document.getElementById("navbarTogglerDemo01").classList.remove("collapse");

```
