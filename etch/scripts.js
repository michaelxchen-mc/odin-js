//function for this webpage
function useBlackColor () {
  currentColor = "black";
}
function useRainbowColor () {
  currentColor = "rainbow";
}
function useCustomColor() {
  currentColor = event.target.value;
}
function useEraser () {
  currentColor = "white";
}
function changeColor() {
  if (currentColor == "rainbow") {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    rainbowColor = "rgb(" + x + "," + y + "," + z + ")";

    this.style.backgroundColor = rainbowColor;
  } else {
      this.style.backgroundColor = currentColor;
  }
}
function clearContainer() {
  //reset grid to no column
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }

  //ask for grid size and make sure it is in allowed size
  let askAgain = true;
  let size;
  while (askAgain) {
    size = prompt("please enter grid size (min: 1 and max: 100)");

    if (size != null) {
      if (size > 0 && size<=100) {
        askAgain = false;
      }
    }
  }

  //rebuild the container
  container.style.gridTemplateColumns = `repeat(${size}, auto)`;
  for (let i = 0; i < size**2 ; i++) {
      let cell = document.createElement("div");
      cell.addEventListener("mouseenter", changeColor);
      container.appendChild(cell);
  }
}

/*
set the current color pallete.
changeColor() changes color based on this variable.
This variable is modified by button(black, rainbow, custom and erase)
*/
let currentColor = "#000000";

//set the default container. A 4x4 grid
let container = document.getElementById("container");
container.style.gridTemplateColumns = "repeat(4, auto)";
for (let i = 0; i < 16 ; i++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseenter", changeColor);
    container.appendChild(cell);
}

let customButton = document.getElementById("custom");
customButton.addEventListener("input", useCustomColor);
