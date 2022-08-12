const form = document.querySelector("form");
// Inputs
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
// Input error divs
const firstNameErrorMessage = document.querySelector(".first-name-error");
const lastNameErrorMessage = document.querySelector(".last-name-error");
const emailErrorMessage = document.querySelector(".email-error");
const phoneErrorMessage = document.querySelector(".phone-error");
const passwordErrorMessage = document.querySelector(".password-error");
const confirmPasswordErrorMessage = document.querySelector(
  ".confirm-password-error"
);

const nameRegex = /[a-z]/i;
const emailRegex =
  /^([\+a-zA-Z\d\._-]+)@([a-zA-Z\d]+)\.([a-zA-z]{2,8})(\.[a-zA-z]{2,8})?$/;

firstNameInput.addEventListener("change", nameTest);
lastNameInput.addEventListener("change", nameTest);
emailInput.addEventListener("change", emailTest);
confirmPasswordInput.addEventListener("change", passwordMatch);

function nameTest(e) {
  let error = false;
  for (let letter of e.target.value) {
    if (!error) {
      if (nameRegex.test(letter)) {
        e.target.classList.remove("error");
        e.target.classList.add("passed");
        switch (e.target.id) {
          case "first-name":
            firstNameErrorMessage.innerText = "";
            break;
          case "last-name":
            lastNameErrorMessage.innerText = "";
            break;
        }
      } else {
        e.target.classList.remove("passed");
        e.target.classList.add("error");
        switch (e.target.id) {
          case "first-name":
            firstNameErrorMessage.innerText =
              "Nome inválido. Somente letras são permitidas.";
            break;
          case "last-name":
            lastNameErrorMessage.innerText =
              "Nome inválido. Somente letras são permitidas.";
            break;
        }
        error = true;
      }
    }
  }
}

function emailTest(e) {
  if (emailRegex.test(e.target.value)) {
    e.target.classList.remove("error");
    e.target.classList.add("passed");
    emailErrorMessage.innerText = "";
  } else {
    e.target.classList.remove("passed");
    e.target.classList.add("error");
    emailErrorMessage.innerText = "E-mail inválido.";
  }
}

function passwordMatch() {
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordErrorMessage.innerText =
      "Senhas diferentes. Favor confirmar a senha escolhida";
  }
}
