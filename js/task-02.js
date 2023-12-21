const ul = document.getElementById("ingredients");
const liArray = [];
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach((ingredient) => {
  const itemCreateLi = document.createElement("li");
  itemCreateLi.classList.add("item");
  itemCreateLi.textContent = ingredient;
  liArray.push(itemCreateLi);
  ul.append(...liArray);
});
