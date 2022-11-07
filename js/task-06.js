const inputBorder = document.querySelector("input#validation-input");
const inputLength = inputBorder.getAttribute("data-length");
const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onBlur);

function onBlur(event) {
  const input = event.currentTarget;
  const inputLength = Number(input.dataset.length);
  if (input.value.length === inputLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
