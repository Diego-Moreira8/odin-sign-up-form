const form = document.querySelector("form");
let nameIsValid = false;
let lastNameIsValid = false;
let emailIsValid = false;
let phoneIsValid = false;
let passwordIsValid = false;
let passwordMatchIsValid = false;
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
const phoneRegex = /^[0-9]*$/g;
const emailRegex =
  /^([\+a-zA-Z\d\._-]+)@([a-zA-Z\d]+)\.([a-zA-z]{2,8})(\.[a-zA-z]{2,8})?$/;

firstNameInput.addEventListener("change", nameTest);
lastNameInput.addEventListener("change", nameTest);
emailInput.addEventListener("change", emailTest);
phoneInput.addEventListener("change", phoneTest);
// phoneInput.addEventListener("keydown", phoneFormat);
passwordInput.addEventListener("change", passwordTest);
confirmPasswordInput.addEventListener("change", passwordMatch);
form.addEventListener("submit", submit);

function nameTest(e) {
  console.log(e);
  let error = false;
  for (let letter of e.target.value) {
    if (!error) {
      if (nameRegex.test(letter)) {
        e.target.classList.remove("error");
        e.target.classList.add("passed");
        switch (e.target.id) {
          case "first-name":
            firstNameErrorMessage.innerText = "";
            nameIsValid = true;
            break;
          case "last-name":
            lastNameErrorMessage.innerText = "";
            lastNameIsValid = true;
            break;
        }
      } else {
        e.target.classList.remove("passed");
        e.target.classList.add("error");
        switch (e.target.id) {
          case "first-name":
            firstNameErrorMessage.innerText =
              "Nome inválido. Somente letras são permitidas.";
            nameIsValid = false;
            break;
          case "last-name":
            lastNameErrorMessage.innerText =
              "Nome inválido. Somente letras são permitidas.";
            lastNameIsValid = false;
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
    emailIsValid = true;
  } else {
    e.target.classList.remove("passed");
    e.target.classList.add("error");
    emailErrorMessage.innerText = "E-mail inválido.";
    emailIsValid = false;
  }
}

function phoneTest(e) {
  const phone = String(e.target.value);
  if (phoneRegex.test(phone) && phone.length >= 10 && phone.length <= 11) {
    e.target.classList.remove("error");
    e.target.classList.add("passed");
    phoneErrorMessage.innerText = "";
    phoneIsValid = true;
  } else {
    e.target.classList.remove("passed");
    e.target.classList.add("error");
    phoneErrorMessage.innerText = "Telefone inválido.";
    phoneIsValid = false;
  }
}

// function phoneFormat(e) {
//   console.log(e.target.value.length);
//   let inputLength = e.target.value.length;
//   if (inputLength === 1) e.target.value = `(${e.target.value}`;
//   if (inputLength === 3) e.target.value += `) `;
//   if (inputLength === 9) e.target.value += `-`;
//   if (inputLength === 14) {
//     e.target.value = e.target.value.replace("-", "");
//     e.target.value =
//       e.target.value.slice(0, 10) + "-" + e.target.value.slice(10, 14);
//   }
// }

function passwordTest(e) {
  const password = e.target.value;
  if (password.length >= 8) {
    e.target.classList.remove("error");
    e.target.classList.add("passed");
    passwordErrorMessage.innerText = "";
    passwordIsValid = true;
  } else {
    e.target.classList.remove("passed");
    e.target.classList.add("error");
    passwordErrorMessage.innerText = "Senha muito curta.";
    passwordIsValid = false;
  }
}

function passwordMatch(e) {
  if (passwordInput.value === confirmPasswordInput.value) {
    e.target.classList.remove("error");
    e.target.classList.add("passed");
    confirmPasswordErrorMessage.innerText = "";
    passwordMatchIsValid = true;
  } else {
    e.target.classList.remove("passed");
    e.target.classList.add("error");
    confirmPasswordErrorMessage.innerText = "Senhas não batem.";
    passwordMatchIsValid = false;
  }
}

function submit(e) {
  if (
    nameIsValid === false ||
    lastNameIsValid === false ||
    emailIsValid === false ||
    phoneIsValid === false ||
    passwordIsValid === false ||
    passwordMatchIsValid === false
  ) {
    e.preventDefault();
    console.log("Invalid");
  }
}
