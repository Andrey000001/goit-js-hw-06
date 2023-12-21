const rangeInput = document.querySelector("#font-size-control");
const onText = document.querySelector("#text");

rangeInput.addEventListener("input", (e) => {
  onText.style.fontSize = `${e.currentTarget.value}px`;
});
