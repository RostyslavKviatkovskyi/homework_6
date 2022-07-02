function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widgetEl = document.querySelector(".widget");
const colorEl = document.querySelector(".color");
const buttonEl = document.querySelector(".change-color");

buttonEl.addEventListener("click", onButtonPress);

// function onButtonPress(event) {
//   widgetEl.style.backgroundColor = getRandomHexColor();
//   colorEl.textContent = getRandomHexColor();
// }

function onButtonPress(event) {
  widgetEl.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = widgetEl.style.backgroundColor;
}
