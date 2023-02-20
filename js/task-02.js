const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const createEl = document.createElement("li");

const elements = ingredients.map((el) => `<li>${el}</li>`);

createEl.innerHTML = elements;

list.append(createEl);
