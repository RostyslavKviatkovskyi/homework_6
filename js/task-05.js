const refs = {
  inputEl: document.querySelector("#name-input"),
  outputEl: document.querySelector("#name-output"),
};
// const inputEl = document.querySelector("#name-input");
// const outputEl = document.querySelector("#name-output");

refs.inputEl.addEventListener("input", onImputChange);

function onImputChange(event) {
  if (event.currentTarget.value === "") {
    refs.outputEl.textContent = "Anonymous";
  } else {
    refs.outputEl.textContent = event.currentTarget.value;
  }
}
