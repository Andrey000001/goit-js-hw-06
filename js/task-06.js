const textInput = document.querySelector("#validation-input");
const lengthRigth = Number(textInput.dataset.length);
textInput.addEventListener("blur", (e) => {
  const target = e.target;
  if (target.value.length === lengthRigth) {
    textInput.classList.add("valid");
    if (textInput.classList.contains("invalid")) {
      textInput.classList.remove("invalid");
    }
  } else {
    textInput.classList.add("invalid");
  }
});
