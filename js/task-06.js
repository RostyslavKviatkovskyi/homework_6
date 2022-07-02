const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

const number = +inputEl.dataset.length;

function onInputBlur(event) {
  if (event.currentTarget.value.length === number) {
    inputEl.classList.remove("invalid");
    return inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
