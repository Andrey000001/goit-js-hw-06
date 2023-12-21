const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", add);

function add(e) {
  e.preventDefault();
  const logEl = loginForm.elements;
  if (logEl.password.value === "" || logEl.email.value === "") {
    alert("Вам необходимо заполнить все поля");
  } else {
    const case1 = [
      {
        email: logEl.email.value,
        password: logEl.password.value,
      },
    ];
    loginForm.reset();
  }
}
