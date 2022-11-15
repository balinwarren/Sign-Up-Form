const password = document.getElementById("password");
const conf = document.getElementById("confirm");
const submit = document.getElementById("submit");
const message = document.getElementById("valid");
const form = document.getElementById("signup");

form.addEventListener('submit', validate)

function validate(event) {
  password.classList.remove("invalid");
  conf.classList.remove("invalid");

  if (password.value !== conf.value) {
    password.classList.add("invalid");
    conf.classList.add("invalid");
    message.style.opacity = 100;
    event.preventDefault();
  }
}