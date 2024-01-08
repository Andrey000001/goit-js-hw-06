const changeColor = document.querySelector(".change-color");
const color = document.querySelector(".color");

changeColor.addEventListener("click", () => {
  const bodyCurrentColor = window.getComputedStyle(
    document.body
  ).backgroundColor;
  color.textContent = bodyCurrentColor;
  document.body.style.backgroundColor = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
