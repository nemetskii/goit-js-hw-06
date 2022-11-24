const inputBorder = document.querySelector("input#validation-input");
const inputLength = inputBorder.getAttribute("data-length");
const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onBlur);

function onBlur(event) {
  const input = event.currentTarget;
  const inputLength = Number(input.dataset.length);
  input.classList.remove("valid", "invalid");
  if (input.value.length === inputLength) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}
