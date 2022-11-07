function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector("body"),
  btn: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
};

const changeColor = (event) => {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.span.textContent = getRandomHexColor();
};
refs.btn.addEventListener("click", changeColor);
