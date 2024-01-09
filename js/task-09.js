const changeColor = document.querySelector(".change-color");
const color = document.querySelector(".color");

changeColor.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  const currentBackgroundColor = window.getComputedStyle(document.body).backgroundColor
  color.textContent = currentBackgroundColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


