const form = document.querySelector("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const confirmPasswordErrorMessage = document.querySelector(
  ".confirm-password-error"
);
const firstNameErrorMessage = document.querySelector(".first-name-error");
const nameRegex = /[a-z]/i;

form.addEventListener("submit", (e) => {
  // Test first name
  for (let letter of firstName.value) {
    if (!nameRegex.test(letter)) {
      e.preventDefault();
      firstNameErrorMessage.innerText =
        "Nome inválido: somente letras são permitidas";
      document.querySelector("#first-name").classList.toggle("error");
    }
  }
  // Test confirm-password
  if (password.value !== confirmPassword.value) {
    confirmPasswordErrorMessage.innerText =
      "Senhas diferentes. Favor confirmar a senha escolhida";
  }
});
