const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onChangeText);

function onChangeText(event) {
  textEl.style.fontSize = `${inputEl.value}px`;
}
