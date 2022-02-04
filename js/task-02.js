const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('ul');

const element = document.createElement("li");
console.log(element);

const item = ingredients.map((ingredient) => `<li>${ingredient}</li>`)
  .join("");
console.log(item);
  
element.classList.add("item");
console.log(element.classList);

list.innerHTML += item;