const refs = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};
let size = 16;

const handleChangeFontSize = (event) => {
  refs.input = Number(event.target.value);
  refs.text.style.fontSize = `${refs.input}px`;
};

refs.input.addEventListener("input", handleChangeFontSize);
