const ul = document.getElementById("ingredients");
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const markup = ingredients.map((ingredient) => {
  const createEl = document.createElement("li");
  createEl.textContent = ingredient;
  createEl.classList.add("item");
  createEl.style.listStyle = "none";
  return createEl;
});
ul.append(...markup);
