const refs = {
  inputEl: document.querySelector("#name-input"),
  outputEl: document.querySelector("#name-output"),
};
// const inputEl = document.querySelector("#name-input");
// const outputEl = document.querySelector("#name-output");

refs.inputEl.addEventListener("input", onImputChange);

function onImputChange(event) {
  refs.outputEl.textContent = event.currentTarget.value;
}
