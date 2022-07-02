function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widgetEl = document.querySelector(".widget");
const colorEl = document.querySelector(".color");
const buttonEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");

buttonEl.addEventListener("click", onButtonPress);

// function onButtonPress(event) {
//   console.log(getRandomHexColor());
//   const color = getRandomHexColor();
//   widgetEl.style = { backgroundColor: color };
//   colorEl.textContent = color;
// }

function onButtonPress(event) {
  // console.log(getRandomHexColor());
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorEl.textContent = color;
}
