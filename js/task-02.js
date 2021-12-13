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

const item = ingredients.map((ingredients) => `<li class="list-item">${ingredients}</li>`)
  .join("");
  
  console.log(item);

list.innerHTML += item;