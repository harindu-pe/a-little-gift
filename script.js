const mainButton = document.getElementById("main-button");
const mainImage = document.getElementById("main-image");
const mainContainer = document.getElementById("container");
const display = document.getElementById("display");
const buttonLeft = document.getElementById("button-left");
const buttonRight = document.getElementById("button-right");

mainButton.addEventListener("click", showGame);

function showGame() {
  mainButton.classList.toggle("active");
  mainImage.classList.toggle("active");
  mainContainer.classList.toggle("active");
}

buttonRight.addEventListener("click", next);
buttonLeft.addEventListener("click", prev);

let i = 0; // current image
let j = 7; // total images

function next() {
  document.getElementById("content" + (i + 1)).classList.remove("active");
  i = (j + i + 1) % j;
  document.getElementById("content" + (i + 1)).classList.add("active");
}

function prev() {
  document.getElementById("content" + (i + 1)).classList.remove("active");
  i = (j + i - 1) % j;
  document.getElementById("content" + (i + 1)).classList.add("active");
}
