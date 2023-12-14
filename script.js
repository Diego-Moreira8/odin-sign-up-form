const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");

[passwordInput, confirmPasswordInput].forEach((input) =>
  input.addEventListener("input", () => {
    [passwordInput, confirmPasswordInput].forEach((input) =>
      input.setCustomValidity(
        passwordInput.value !== confirmPasswordInput.value
          ? "As senhas são diferentes!"
          : ""
      )
    );
  })
);
