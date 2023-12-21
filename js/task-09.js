const changeColor = document.querySelector(".change-color");

changeColor.addEventListener("click", () => {
  document.body.style.background = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
