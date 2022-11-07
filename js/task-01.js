const catElement = document.querySelector("ul#categories").children.length;
console.log(`Number of categories `, catElement);

const itemsElement = document.querySelectorAll(".item");
itemsElement.forEach((item) => {
  console.log(`Category: `, item.firstElementChild.textContent);
  console.log(`Elements: `, item.lastElementChild.children.length);
});
